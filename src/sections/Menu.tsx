import { useState } from 'react'
import { business, content } from '../data/content'
import { products } from '../data/products'
import type { Category } from '../data/types'
import { useLanguage } from '../lib/language-context'
import { Section } from '../components/Section'
import { ProductCard } from '../components/ProductCard'

const categories: (Category | 'all')[] = ['all', 'sweet', 'savory', 'cookies', 'custom']

export function MenuSection() {
  const { language } = useLanguage()
  const copy = content[language].menu
  const [category, setCategory] = useState<Category | 'all'>('all')
  const filtered = products.filter((product) => category === 'all' || product.category === category)
  return (
    <Section
      id="menu"
      className="menu-section"
      eyebrow={copy.eyebrow}
      title={copy.heading}
      description={copy.description}
      centered
    >
      <div className="filter-list" role="group" aria-label={copy.filterLabel}>
        {categories.map((item) => (
          <button
            key={item}
            aria-pressed={category === item}
            className={`filter-chip ${category === item ? 'is-active' : ''}`}
            onClick={() => setCategory(item)}
          >
            {copy.filters[item]}
          </button>
        ))}
      </div>
      {business.sampleContent && <p className="sample-note text-center">{copy.sample}</p>}
      <p className="sr-only" role="status">
        {copy.count.replace('{count}', String(filtered.length))}
      </p>
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <p className="menu-price-note">{copy.priceNote}</p>
    </Section>
  )
}
