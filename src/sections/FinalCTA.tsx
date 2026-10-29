import { content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { Section } from '../components/Section'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { WheatStalk } from '../components/Motifs'

export function FinalCTA() {
  const { language } = useLanguage()
  const copy = content[language].final
  return (
    <Section
      id="order"
      className="final-section honeycomb-texture"
      eyebrow={copy.eyebrow}
      title={copy.heading}
      description={copy.description}
      centered
    >
      <WheatStalk className="final-wheat" />
      <WhatsAppButton variant="dark" />
      <p className="final-note">{copy.note}</p>
    </Section>
  )
}
