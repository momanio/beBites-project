import { ArrowLeft, ArrowRight, Heart, MapPin, Sparkles, Wheat } from 'lucide-react'
import { business, content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { HexImage } from '../components/HexImage'
import { Bee, WheatStalk } from '../components/Motifs'
import { HoneyDrip } from '../components/HoneyDrip'

export function Hero() {
  const { language } = useLanguage()
  const copy = content[language]
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight
  const icons = [Sparkles, Heart, Wheat, Heart]
  return (
    <>
      <section className="hero-section honeycomb-texture" aria-labelledby="hero-heading">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-flower" aria-hidden="true">
                ✳
              </span>
              {copy.hero.eyebrow}
            </p>
            <h1 id="hero-heading">
              {copy.hero.headline}
              <br />
              <em>{copy.hero.accent}</em>
            </h1>
            <p className="hero-description">{copy.hero.description}</p>
            <div className="hero-actions">
              <WhatsAppButton />
              <a href="#menu" className="text-link">
                {copy.hero.menu}
                <Arrow size={19} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-note">
              <MapPin size={16} aria-hidden="true" />
              {copy.hero.note}
            </p>
          </div>
          <div className="hero-visual">
            <div className="hero-hex-outline" aria-hidden="true" />
            <HexImage
              src={business.heroImage}
              alt={copy.hero.imageAlt}
              className="hero-image"
              eager
              sizes="(max-width: 700px) 90vw, 50vw"
            />
            <div className="bake-seal">
              <Heart size={21} strokeWidth={1.3} aria-hidden="true" />
              <span>{copy.hero.seal}</span>
              <small>{copy.hero.sealDetail}</small>
            </div>
            <Bee className="hero-bee" />
            <WheatStalk className="hero-wheat" />
            <p className="hero-image-caption">
              {copy.hero.imageCaption}
              <span aria-hidden="true">↗</span>
            </p>
          </div>
        </div>
      </section>
      <div className="promise-strip">
        <div className="container">
          {copy.promises.map((promise, index) => {
            const Icon = icons[index] ?? Heart
            return (
              <span key={promise}>
                <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                {promise}
              </span>
            )
          })}
        </div>
      </div>
      <HoneyDrip />
    </>
  )
}
