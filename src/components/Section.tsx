import { m, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  id: string
  children: ReactNode
  className?: string
  eyebrow?: string
  title?: string
  description?: string
  centered?: boolean
}

export function Section({
  id,
  children,
  className = '',
  eyebrow,
  title,
  description,
  centered = false,
}: Props) {
  const reduceMotion = useReducedMotion()
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <m.div
        className="container"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.06 }}
        transition={{ duration: 0.45 }}
      >
        {title && (
          <header className={`section-header ${centered ? 'text-center mx-auto' : ''}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 id={`${id}-heading`}>{title}</h2>
            {description && <p className="section-description">{description}</p>}
          </header>
        )}
        {children}
      </m.div>
    </section>
  )
}
