import { useEffect, useState, type ReactNode } from 'react'
import { content } from '../data/content'
import type { Language } from '../data/types'
import { LanguageContext } from '../lib/language-context'

function initialLanguage(): Language {
  try {
    return localStorage.getItem('beebites-language') === 'en' ? 'en' : 'ar'
  } catch {
    return 'ar'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    const copy = content[language].seo
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.title = copy.title
    const descriptions = [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]',
    ]
    descriptions.forEach((selector) =>
      document.querySelector(selector)?.setAttribute('content', copy.description),
    )
    const titles = ['meta[property="og:title"]', 'meta[name="twitter:title"]']
    titles.forEach((selector) =>
      document.querySelector(selector)?.setAttribute('content', copy.title),
    )
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', language === 'ar' ? 'ar_JO' : 'en_US')
    document
      .querySelector('meta[property="og:locale:alternate"]')
      ?.setAttribute('content', language === 'ar' ? 'en_US' : 'ar_JO')
    try {
      localStorage.setItem('beebites-language', language)
    } catch {
      // Private browsing can disable storage; switching still works for this visit.
    }
  }, [language])

  return <LanguageContext value={{ language, setLanguage }}>{children}</LanguageContext>
}
