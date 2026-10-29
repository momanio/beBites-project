import { ArrowUpLeft, ArrowUpRight } from 'lucide-react'
import { Instagram } from '../components/SocialIcons'
import { business, content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { Section } from '../components/Section'
import { HexImage } from '../components/HexImage'

export function Gallery() {
  const { language } = useLanguage()
  const copy = content[language].gallery
  const Arrow = language === 'ar' ? ArrowUpLeft : ArrowUpRight
  return (
    <Section
      id="gallery"
      className="gallery-section"
      eyebrow={copy.eyebrow}
      title={copy.heading}
      description={copy.description}
      centered
    >
      <div className="gallery-grid">
        {business.gallery.map((image, index) => (
          <figure key={`${image.src}-${index}`}>
            <HexImage
              src={image.src}
              alt={image.alt[language]}
              hex={false}
              sizes="(max-width: 640px) 50vw, 25vw"
            />
          </figure>
        ))}
      </div>
      {business.sampleContent && <p className="sample-note text-center">{copy.sample}</p>}
      <a
        className="instagram-link"
        href={business.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={21} aria-hidden="true" />
        <span>
          {copy.cta}
          <strong dir="ltr">{business.instagramHandle}</strong>
        </span>
        <Arrow size={19} aria-hidden="true" />
      </a>
    </Section>
  )
}
