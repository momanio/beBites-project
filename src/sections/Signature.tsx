import { Check } from 'lucide-react'
import { content, business } from '../data/content'
import { products } from '../data/products'
import { useLanguage } from '../lib/language-context'
import { Section } from '../components/Section'
import { HexImage } from '../components/HexImage'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { WheatStalk } from '../components/Motifs'

export function Signature() {
  const { language } = useLanguage()
  const copy = content[language]
  return (
    <Section id="signature" className="signature-section">
      <div className="signature-grid">
        <div className="signature-visual">
          <div className="signature-image-border">
            <HexImage
              src={business.heroImage}
              alt={copy.hero.imageAlt}
              hex={false}
              sizes="(max-width: 700px) 90vw, 40vw"
            />
          </div>
          <span className="signature-stamp">
            {copy.signature.caption}
            <span aria-hidden="true">✳</span>
          </span>
          <WheatStalk className="signature-wheat" />
        </div>
        <div className="signature-copy">
          <p className="eyebrow">{copy.signature.eyebrow}</p>
          <h2>{copy.signature.heading}</h2>
          <p className="body-copy">{copy.signature.description}</p>
          <ul className="signature-details">
            {copy.signature.details.map((detail) => (
              <li key={detail}>
                <Check size={16} aria-hidden="true" />
                {detail}
              </li>
            ))}
          </ul>
          <WhatsAppButton variant="outline" product={products[0]?.name}>
            {copy.orderThis}
          </WhatsAppButton>
        </div>
      </div>
    </Section>
  )
}
