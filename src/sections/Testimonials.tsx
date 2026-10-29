import { useState } from 'react'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import { business, content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { Section } from '../components/Section'

export function Testimonials() {
  const { language } = useLanguage()
  const copy = content[language].reviews
  const [index, setIndex] = useState(0)
  const item = copy.items[index] ?? copy.items[0]
  const count = copy.items.length
  const previous = () => setIndex((current) => (current - 1 + count) % count)
  const next = () => setIndex((current) => (current + 1) % count)
  const Previous = language === 'ar' ? ArrowRight : ArrowLeft
  const Next = language === 'ar' ? ArrowLeft : ArrowRight
  return (
    <Section
      id="testimonials"
      className="reviews-section"
      eyebrow={copy.eyebrow}
      title={copy.heading}
      centered
    >
      <div className="review-stars" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={17} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <div className="review-slide" aria-live="polite" aria-atomic="true">
        {item && (
          <>
            <blockquote>“{item.quote}”</blockquote>
            <p className="review-name">{item.name}</p>
            <p className="review-detail">{item.detail}</p>
          </>
        )}
      </div>
      <div className="review-controls">
        <button className="icon-button" onClick={previous} aria-label={copy.previous}>
          <Previous size={18} aria-hidden="true" />
        </button>
        <span
          className="review-dots"
          aria-label={copy.position
            .replace('{current}', String(index + 1))
            .replace('{total}', String(count))}
        >
          {copy.items.map((_, i) => (
            <span key={i} className={index === i ? 'active' : ''} />
          ))}
        </span>
        <button className="icon-button" onClick={next} aria-label={copy.next}>
          <Next size={18} aria-hidden="true" />
        </button>
      </div>
      {business.sampleContent && <p className="sample-note text-center">{copy.sample}</p>}
    </Section>
  )
}
