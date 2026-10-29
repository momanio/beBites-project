import { Globe2 } from 'lucide-react'
import { content } from '../data/content'
import { useLanguage } from '../lib/language-context'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  return (
    <button
      className="language-toggle"
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      aria-label={content[language].languageToggle}
    >
      <Globe2 size={16} aria-hidden="true" />
      <span lang={language === 'ar' ? 'en' : 'ar'}>{language === 'ar' ? 'EN' : 'العربية'}</span>
    </button>
  )
}
