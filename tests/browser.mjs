import assert from 'node:assert/strict'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { chromium } from 'playwright'
import { preview } from 'vite'

// Uses the production build. Run `npm run build` before this suite.
const server = await preview({ preview: { host: '127.0.0.1', port: 4173, strictPort: true } })
let browser
try {
  browser = await chromium.launch({ headless: true })
  await mkdir('artifacts', { recursive: true })
  const axeSource = await readFile('node_modules/axe-core/axe.min.js', 'utf8')
  const results = []
  for (const width of [360, 768, 1280]) {
    for (const language of ['ar', 'en']) {
      const context = await browser.newContext({
        viewport: { width, height: 900 },
        reducedMotion: 'reduce',
      })
      await context.addInitScript(
        (value) => localStorage.setItem('beebites-language', value),
        language,
      )
      const page = await context.newPage()
      const errors = []
      page.on('pageerror', (error) => errors.push(error.message))
      await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
      assert.equal(await page.locator('html').getAttribute('lang'), language)
      assert.equal(
        await page.locator('html').getAttribute('dir'),
        language === 'ar' ? 'rtl' : 'ltr',
      )
      assert.equal(await page.locator('h1').count(), 1)
      assert.equal(await page.locator('.product-card').count(), 9)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      )
      assert.equal(overflow, false, `Horizontal overflow at ${width}px ${language}`)
      await page.locator('.filter-chip').nth(3).click()
      assert.equal(await page.locator('.product-card').count(), 2)
      assert.equal(await page.locator('.filter-chip').nth(3).getAttribute('aria-pressed'), 'true')
      await page.locator('.filter-chip').first().click()
      for (const card of await page.locator('.product-card').all()) {
        const name = await card.locator('h3').innerText()
        const url = new URL(await card.locator('.product-order').getAttribute('href'))
        assert.equal(url.hostname, 'wa.me')
        assert.ok(url.searchParams.get('text').includes(name))
      }
      const summary = page.locator('.faq-list summary').first()
      await summary.focus()
      await page.keyboard.press('Enter')
      assert.equal(await page.locator('.faq-list details').first().getAttribute('open'), '')
      await page.keyboard.press('Enter')
      assert.equal(await page.locator('.faq-list details').first().getAttribute('open'), null)
      const quote = await page.locator('blockquote').innerText()
      await page.locator('.review-controls button').last().click()
      assert.notEqual(await page.locator('blockquote').innerText(), quote)
      await page.locator('.review-controls button').first().click()
      assert.equal(await page.locator('blockquote').innerText(), quote)
      if (width < 1100) {
        const toggle = page.locator('.mobile-menu-toggle')
        await toggle.click()
        assert.equal(await toggle.getAttribute('aria-expanded'), 'true')
        await page.keyboard.press('Tab')
        assert.ok(
          await page
            .locator('#mobile-navigation a')
            .first()
            .evaluate((element) => element === document.activeElement),
        )
        await page.keyboard.press('Escape')
        assert.equal(await toggle.getAttribute('aria-expanded'), 'false')
        assert.ok(await toggle.evaluate((element) => element === document.activeElement))
        await toggle.click()
        await page.locator('#mobile-navigation a[href="#menu"]').click()
        assert.equal(await toggle.getAttribute('aria-expanded'), 'false')
      }
      // Visit the whole page so lazy images and scroll reveals are included in QA.
      for (const section of await page.locator('section').all())
        await section.scrollIntoViewIfNeeded()
      await page.evaluate(async () => {
        await document.fonts.ready
        await Promise.all(
          Array.from(document.images).map((image) => image.decode().catch(() => {})),
        )
      })
      const failedImages = await page
        .locator('img')
        .evaluateAll((images) =>
          images
            .filter((image) => !image.complete || image.naturalWidth === 0)
            .map((image) => image.src),
        )
      assert.deepEqual(failedImages, [])
      assert.equal(await page.locator('.image-fallback').count(), 0)
      await page.addScriptTag({ content: axeSource })
      const accessibility = await page.evaluate(async () =>
        window.axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] },
        }),
      )
      assert.deepEqual(
        accessibility.violations.map(({ id, nodes }) => ({
          id,
          elements: nodes.map(({ target }) => target),
        })),
        [],
        `${width}px ${language} accessibility`,
      )
      await page.evaluate(() => window.scrollTo(0, 0))
      await page.screenshot({ path: `artifacts/${language}-${width}.png`, fullPage: true })
      await page.locator('.language-toggle').click()
      const other = language === 'ar' ? 'en' : 'ar'
      assert.equal(await page.locator('html').getAttribute('lang'), other)
      await page.reload({ waitUntil: 'networkidle' })
      // The initial seed runs on each navigation, so verify persistence separately below.
      assert.deepEqual(errors, [])
      results.push({
        width,
        language,
        accessibilityViolations: 0,
        overflow: false,
        consoleErrors: 0,
      })
      await context.close()
    }
  }
  const context = await browser.newContext({ reducedMotion: 'reduce' })
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
  assert.equal(await page.locator('html').getAttribute('lang'), 'ar')
  await page.locator('.language-toggle').click()
  await page.reload({ waitUntil: 'networkidle' })
  assert.equal(await page.locator('html').getAttribute('lang'), 'en')
  await context.close()
  const storageBlocked = await browser.newContext()
  await storageBlocked.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new DOMException('Storage disabled', 'SecurityError')
      },
    })
  })
  const blockedPage = await storageBlocked.newPage()
  await blockedPage.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' })
  await blockedPage.locator('.language-toggle').click()
  assert.equal(await blockedPage.locator('html').getAttribute('lang'), 'en')
  await storageBlocked.close()
  await writeFile('artifacts/browser-results.json', JSON.stringify(results, null, 2))
  console.log(
    'Passed six viewport/language combinations, accessibility, ordering, filters, keyboard navigation, reviews, and storage resilience.',
  )
} finally {
  await browser?.close()
  await new Promise((resolve) => server.httpServer.close(resolve))
}
