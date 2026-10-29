import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { business, content } from '../src/data/content.ts'
import { products } from '../src/data/products.ts'
import { whatsappUrl } from '../src/lib/whatsapp.ts'
import type { Language } from '../src/data/types.ts'

const languages: Language[] = ['ar', 'en']

test('menu has unique IDs, valid prices, bilingual copy, and local images', () => {
  assert.ok(products.length >= 8 && products.length <= 10)
  assert.equal(new Set(products.map((product) => product.id)).size, products.length)
  for (const product of products) {
    assert.match(product.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    assert.ok(product.price === null || (Number.isFinite(product.price) && product.price > 0))
    assert.ok(existsSync(`public${product.image}`), product.image)
    for (const language of languages) {
      for (const key of ['name', 'description', 'unit', 'imageAlt'] as const) {
        assert.ok(product[key][language].trim(), `${product.id}.${key}.${language}`)
      }
      assert.ok(content[language].menu.filters[product.category])
    }
  }
})

test('WhatsApp messages preserve exact localized product names and encode reserved characters', () => {
  for (const language of languages) {
    const items = [
      ...products.map((product) => product.name),
      { ar: 'عسل & شوكولاتة + #١', en: 'Honey & chocolate + #1 / baker’s box' },
    ]
    for (const name of items) {
      const url = new URL(whatsappUrl(language, name))
      assert.equal(url.origin, 'https://wa.me')
      assert.equal(url.pathname, `/${business.phone}`)
      assert.equal(
        url.searchParams.get('text'),
        content[language].productMessage.replace('{product}', name[language]),
      )
      assert.equal(Array.from(url.searchParams).length, 1)
      assert.equal(url.hash, '')
    }
    assert.equal(new URL(whatsappUrl(language)).searchParams.get('text'), content[language].message)
  }
})

test('both languages contain the same populated content structure', () => {
  function shape(value: unknown, path = ''): string[] {
    if (typeof value === 'string') {
      assert.ok(value.trim(), `Empty text at ${path}`)
      return [path]
    }
    if (Array.isArray(value)) return value.flatMap((item, i) => shape(item, `${path}.${i}`))
    if (value !== null && typeof value === 'object')
      return Object.entries(value).flatMap(([key, item]) => shape(item, `${path}.${key}`))
    return []
  }
  assert.deepEqual(shape(content.ar), shape(content.en))
  assert.deepEqual(
    content.ar.navigation.map(({ id }) => id),
    content.en.navigation.map(({ id }) => id),
  )
  for (const photo of business.gallery) assert.ok(existsSync(`public${photo.src}`))
})

test('text palette meets WCAG AA contrast for normal-sized text', () => {
  function luminance(hex: string) {
    const components = hex.match(/\w\w/g)?.map((part) => {
      const channel = Number.parseInt(part, 16) / 255
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
    })
    assert.ok(components && components.length === 3)
    return (
      (components[0] ?? 0) * 0.2126 + (components[1] ?? 0) * 0.7152 + (components[2] ?? 0) * 0.0722
    )
  }
  for (const [foreground, background] of [
    ['3A2314', 'FFF8EA'],
    ['3A2314', 'F6E3B4'],
    ['3A2314', 'E8961A'],
    ['765A43', 'FFF8EA'],
    ['765A43', 'F6E3B4'],
    ['E4CBAA', '3A2314'],
    ['543B22', 'F2B84B'],
  ]) {
    assert.ok(foreground && background)
    const [lighter, darker] = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
    assert.ok(lighter !== undefined && darker !== undefined)
    assert.ok((lighter + 0.05) / (darker + 0.05) >= 4.5, `${foreground} on ${background}`)
  }
})

test(
  'production HTML contains valid bakery metadata and generated crawler files',
  { skip: !existsSync('dist/index.html') },
  () => {
    const html = readFileSync('dist/index.html', 'utf8')
    assert.ok(
      !/__SITE_|__BAKERY_SCHEMA__|__SOCIAL_IMAGE__|__FAVICON__|__TOUCH_ICON__|__ROBOTS__/.test(
        html,
      ),
    )
    const schemaText = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]
    assert.ok(schemaText)
    const schema: unknown = JSON.parse(schemaText)
    assert.ok(
      schema && typeof schema === 'object' && '@type' in schema && schema['@type'] === 'Bakery',
    )
    assert.deepEqual(readFileSync(`dist${business.logo}`), readFileSync(business.logoSource))
    assert.deepEqual(
      readFileSync(`dist${business.socialImage}`),
      readFileSync(business.socialImageSource),
    )
    assert.ok(html.includes('rel="icon" type="image/jpeg" href="/brand/logo.jpg"'))
    assert.ok(readFileSync('dist/robots.txt', 'utf8').includes(`${business.siteUrl}/sitemap.xml`))
    assert.ok(readFileSync('dist/sitemap.xml', 'utf8').includes(business.siteUrl))
  },
)
