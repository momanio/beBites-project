import { Plus } from 'lucide-react'
import { content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { Section } from '../components/Section'
import { WhatsAppButton } from '../components/WhatsAppButton'

export function FAQ() {
  const { language } = useLanguage()
  const copy = content[language]
  return (
    <Section id="faq" className="faq-section">
      <div className="faq-grid">
        <div>
          <p className="eyebrow">{copy.faq.eyebrow}</p>
          <h2>{copy.faq.heading}</h2>
          <p className="body-copy">{copy.faq.description}</p>
          <WhatsAppButton variant="outline" />
        </div>
        <div className="faq-list">
          {copy.faq.items.map((item) => (
            <details key={item.question} name="beebites-faq">
              <summary>
                {item.question}
                <Plus size={21} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  )
}
