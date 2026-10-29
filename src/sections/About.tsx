import { Heart, Leaf, Wheat } from 'lucide-react'
import { content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { Section } from '../components/Section'
import { Bee, RollingPin, WheatStalk } from '../components/Motifs'

const icons = [Heart, Wheat, Leaf]

export function About() {
  const { language } = useLanguage()
  const copy = content[language].story
  return (
    <Section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.heading}</h2>
          {copy.paragraphs.map((paragraph) => (
            <p className="body-copy" key={paragraph}>
              {paragraph}
            </p>
          ))}
          <p className="story-signature">
            {copy.signature}
            <Heart size={18} aria-hidden="true" />
          </p>
        </div>
        <div className="about-art honeycomb-texture">
          <WheatStalk className="about-wheat" />
          <RollingPin />
          <Bee className="about-bee" />
          <span className="about-art-word">{copy.artCaption}</span>
        </div>
      </div>
      <ul className="values-row">
        {copy.values.map((value, index) => {
          const Icon = icons[index] ?? Heart
          return (
            <li key={value}>
              <Icon size={24} strokeWidth={1.3} aria-hidden="true" />
              {value}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
