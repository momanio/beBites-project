import { business, content } from '../data/content'
import { useLanguage } from '../lib/language-context'

export function Logo({ footer = false }: { footer?: boolean }) {
  const { language } = useLanguage()
  return (
    <a
      className={`brand ${footer ? 'brand-footer' : ''}`}
      href="#home"
      aria-label={content[language].home}
    >
      <img className="brand-logo" src={business.logo} width="72" height="72" alt="" />
      <span className="brand-copy">
        <span className="brand-name" lang="en" dir="ltr">
          Bee<span>Bites</span>
          <span className="brand-dot">.</span>
        </span>
        <span className="brand-tagline" lang="ar" dir="rtl">
          {business.tagline}
        </span>
      </span>
    </a>
  )
}
