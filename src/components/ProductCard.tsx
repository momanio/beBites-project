import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'
import { business, content } from '../data/content'
import type { Product } from '../data/types'
import { useLanguage } from '../lib/language-context'
import { HexImage } from './HexImage'
import { whatsappUrl } from '../lib/whatsapp'

export function ProductCard({ product }: { product: Product }) {
  const { language } = useLanguage()
  const copy = content[language]
  const Arrow = language === 'ar' ? ArrowUpLeft : ArrowUpRight
  const price =
    product.price === null
      ? copy.menu.priceOnRequest
      : new Intl.NumberFormat(language === 'ar' ? 'ar-JO' : 'en-JO', {
          style: 'currency',
          currency: 'JOD',
          maximumFractionDigits: 3,
          minimumFractionDigits: 0,
        }).format(product.price)
  return (
    <article className="product-card">
      <div className="product-photo-wrap">
        <HexImage src={product.image} alt={product.imageAlt[language]} />
        {product.badge && <span className="product-badge">{product.badge[language]}</span>}
        {business.sampleContent && (
          <span className="photo-caption">{copy.menu.imagePlaceholder}</span>
        )}
      </div>
      <div className="product-body">
        <p className="product-unit">{product.unit[language]}</p>
        <h3>{product.name[language]}</h3>
        <p className="product-description">{product.description[language]}</p>
        <div className="product-bottom">
          <span className={`product-price ${product.price === null ? 'custom-price' : ''}`}>
            {price}
          </span>
          <a
            className="product-order"
            href={whatsappUrl(language, product.name)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.orderProduct.replace('{product}', product.name[language])}
          >
            {copy.orderShort}
            <Arrow size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  )
}
