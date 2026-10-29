import { business, content } from '../data/content.ts'
import type { Language, Localized } from '../data/types'

export function whatsappUrl(language: Language, product?: Localized): string {
  const copy = content[language]
  const message = product
    ? copy.productMessage.replace('{product}', product[language])
    : copy.message
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`
}
