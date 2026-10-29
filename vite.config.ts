import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { business, content } from './src/data/content.ts'

function bakeryMetadata(): Plugin {
  const origin = business.siteUrl.replace(/\/$/, '')
  const configured = !origin.includes('PLACEHOLDER')
  const brandFiles = [
    { url: business.logo, source: business.logoSource, type: 'image/jpeg' },
    { url: business.socialImage, source: business.socialImageSource, type: 'image/jpeg' },
  ].filter((asset, index, assets) => assets.findIndex((file) => file.url === asset.url) === index)
  const escape = (value: string) =>
    value
      .replaceAll('&', '&amp;')
      .replaceAll('"', '&quot;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    '@id': `${origin}/#bakery`,
    name: business.name,
    alternateName: business.arabicName,
    description: content.ar.seo.description,
    url: `${origin}/`,
    image: `${origin}${business.socialImage}`,
    logo: `${origin}${business.logo}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Amman', addressCountry: 'JO' },
    areaServed: { '@type': 'City', name: 'Amman' },
    currenciesAccepted: 'JOD',
    sameAs: [
      business.instagram,
      ...(business.facebook.includes('PLACEHOLDER') ? [] : [business.facebook]),
    ],
    ...(/^\d{8,15}$/.test(business.phone) ? { telephone: `+${business.phone}` } : {}),
  }
  return {
    name: 'beebites-metadata',
    configureServer(server) {
      server.watcher.add(brandFiles.map((asset) => resolve(asset.source)))
      server.middlewares.use((request, response, next) => {
        const asset = brandFiles.find((file) => file.url === request.url?.split('?')[0])
        if (!asset) return next()
        response.setHeader('Content-Type', asset.type)
        response.setHeader('Cache-Control', 'no-cache')
        response.end(readFileSync(resolve(asset.source)))
      })
    },
    transformIndexHtml(html) {
      const replacements: Record<string, string> = {
        __SITE_TITLE__: content.ar.seo.title,
        __SITE_DESCRIPTION__: content.ar.seo.description,
        __SITE_URL__: `${origin}/`,
        __SOCIAL_IMAGE__: `${origin}${business.socialImage}`,
        __FAVICON__: business.logo,
        __TOUCH_ICON__: business.socialImage,
        __ROBOTS__: configured ? 'index, follow' : 'noindex, nofollow',
      }
      let result = html
      for (const [key, value] of Object.entries(replacements))
        result = result.replaceAll(key, escape(value))
      return result.replace('__BAKERY_SCHEMA__', JSON.stringify(schema).replaceAll('<', '\\u003c'))
    },
    generateBundle() {
      for (const asset of brandFiles) {
        this.emitFile({
          type: 'asset',
          fileName: asset.url.slice(1),
          source: readFileSync(resolve(asset.source)),
        })
      }
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\n${configured ? 'Allow: /' : 'Disallow: /'}\nSitemap: ${origin}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(origin)}/</loc></url></urlset>\n`,
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), bakeryMetadata()],
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1' },
})
