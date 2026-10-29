import type { ReactNode } from 'react'
import { content } from '../data/content'
import type { Localized } from '../data/types'
import { useLanguage } from '../lib/language-context'
import { whatsappUrl } from '../lib/whatsapp'

export function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.8A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.3 7.5c-.5.1-1 1-1 1.6 0 2.5 4.1 6.5 6.7 6.5.7 0 1.8-.7 1.8-1.3l-2.3-1.5-.9.9c-1.3-.6-2.3-1.6-2.9-2.8l.8-1-1.2-2.4Z" />
    </svg>
  )
}

interface Props {
  product?: Localized
  children?: ReactNode
  variant?: 'primary' | 'outline' | 'dark' | 'floating' | 'small'
  className?: string
}

export function WhatsAppButton({ product, children, variant = 'primary', className = '' }: Props) {
  const { language } = useLanguage()
  const copy = content[language]
  const label = product ? copy.orderProduct.replace('{product}', product[language]) : copy.order
  return (
    <a
      href={whatsappUrl(language, product)}
      target="_blank"
      rel="noopener noreferrer"
      className={`button button-${variant} ${className}`}
      aria-label={label}
    >
      <WhatsAppIcon size={variant === 'floating' ? 27 : 20} />
      {variant !== 'floating' && <span>{children ?? copy.order}</span>}
    </a>
  )
}
