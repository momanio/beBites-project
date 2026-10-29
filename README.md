# BeeBites · بي بايتس

A bilingual home-bakery landing page built with React 19, strict TypeScript, Vite, Tailwind CSS, and Framer Motion. Arabic/RTL is the default; the language toggle persists locally. Orders open WhatsApp with a localized, product-specific message. There is no backend, cart, or payment processing.

## Run locally

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` checks TypeScript and writes the deployable site to `dist/`.

## Edit your bakery

- **Copy and business settings:** `src/data/content.ts`. Edit the matching `ar` and `en` entries. This includes navigation, stories, ordering instructions, FAQs, customer quotes, image descriptions, and SEO text.
- **Products and prices:** `src/data/products.ts`. Each item has a unique `id`, category (`sweet`, `savory`, `cookies`, `custom`), bilingual name/description/portion, image, and a numeric JOD price. Use `null` for a custom quote. Filters update automatically.
- **WhatsApp:** replace `business.phone = 'PHONE_PLACEHOLDER'` with your international number, digits only, without `+`, spaces, or dashes. Every order button uses this setting. The placeholder link cannot receive orders.
- **Social accounts:** Instagram is set to `@BeeBites.Jo`. Replace `FACEBOOK_PAGE_PLACEHOLDER` with your actual Facebook page.
- **Images:** place optimized WebP/AVIF photos in `public/images/`, then edit product image paths, `business.heroImage`, and `business.gallery`. Update both languages’ alt text. The bundled images are AI-generated samples; some products share illustrative photos. Image provenance and prompts are in `public/images/README.md`.
- **Logo:** the supplied full-color JPEG in `src/assets/WhatsApp Image 2026-10-30 at 1.26.02 AM.jpeg` is used for the navbar, footer, favicon, social preview, and Apple touch image. It is served unchanged at `/brand/logo.jpg`. To replace it, update `business.logoSource` and `business.socialImageSource` in `src/data/content.ts`, then restart Vite or rebuild. Preserve the original artwork and colors.
- **Colors/fonts:** tokens and responsive styles live in `src/index.css`. Google Fonts loads Cairo, Reem Kufi, Fraunces, and DM Sans with `display=swap`, preconnections, and a preloaded stylesheet. System fallbacks work without network access.

Before launch, replace or approve every sample product, price, portion, customer quote/name, and bakery story. Confirm ingredients, the real-honey/no-added-preservatives claims, allergen information, lead times, delivery/pickup arrangements, and payment terms. Keep the sample notices until this is done, then set `business.sampleContent` to `false` and remove “sample” wording from image alt text and testimonial details. Only publish customer feedback with permission.

## Deploy

1. Set `business.siteUrl` to your final HTTPS domain, with no trailing slash. Until the placeholder is replaced, robots metadata deliberately prevents indexing.
2. Commit the project and import it into **Vercel** or **Netlify**. Both configuration files are included: build command `npm run build`, output directory `dist`, Node.js 24.
3. Rebuild after changing business settings or replacing the logo. Vite generates the canonical/social metadata, Bakery JSON-LD, `robots.txt`, and `sitemap.xml` from your settings. No secrets or environment variables are required.
4. Verify a real WhatsApp order link and the deployed social preview. Run Lighthouse against the deployed URL; scores depend on hosting, fonts, photos, and device/network conditions.

## Checks

```sh
npm run lint
npm run format:check
npm test
npm run build
npx playwright install chromium  # once, if Chromium is not installed
npm run test:browser
```

`npm run format` applies Prettier. Content tests cover bilingual completeness, image paths, prices, WhatsApp encoding, text contrast, and built metadata. Run the build before tests to include the metadata check.

Browser checks use the production build at 360, 768, and 1280 pixels in both languages. They check overflow, category filters, product links, mobile keyboard navigation, FAQs, reviews, saved language, disabled storage, lazy images, reduced motion, and axe accessibility. Screenshots and results go to ignored `artifacts/`. The suite requires permission to start a localhost server and Chromium. Browser checks and Lighthouse were not completed in the restricted implementation environment.

## Structure

```text
src/data/        Typed bilingual copy, owner settings, and products
src/components/ Reusable layout, images, language, ordering, and motifs
src/sections/   The landing page sections
src/lib/        Language context and WhatsApp URL builder
public/images/  Local sample imagery; replace with real bakery photos
tests/         Content/contrast tests and browser verification
```
