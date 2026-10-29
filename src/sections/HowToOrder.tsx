import { Cookie, MessageCircle, CookingPot, Bike, Clock3 } from 'lucide-react'
import { content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { Section } from '../components/Section'

const icons = [Cookie, MessageCircle, CookingPot, Bike]

export function HowToOrder() {
  const { language } = useLanguage()
  const copy = content[language].how
  return (
    <Section
      id="how-to-order"
      className="how-section"
      eyebrow={copy.eyebrow}
      title={copy.heading}
      description={copy.description}
      centered
    >
      <ol className="steps-grid">
        {copy.steps.map((step, index) => {
          const Icon = icons[index] ?? Cookie
          return (
            <li key={step.title}>
              <div className="step-icon">
                <Icon size={31} strokeWidth={1.35} aria-hidden="true" />
                <span className="step-number">
                  {new Intl.NumberFormat(language).format(index + 1)}
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          )
        })}
      </ol>
      <p className="order-note">
        <Clock3 size={20} aria-hidden="true" />
        <span>{copy.note}</span>
      </p>
    </Section>
  )
}
