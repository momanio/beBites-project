import { m, useReducedMotion } from 'framer-motion'

export function HoneyDrip() {
  const reduced = useReducedMotion()
  return (
    <div className="honey-drip" aria-hidden="true">
      <m.svg
        viewBox="0 0 1440 55"
        preserveAspectRatio="none"
        initial={reduced ? false : { scaleY: 0.55 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'top' }}
      >
        <path
          d="M0 0h1440v10c-70 0-70 5-140 5-35 0-33 25-43 25s-6-24-37-24c-120 0-150-6-255-2-31 0-23 35-35 35s-7-33-36-33c-100 0-127-6-236-2-28 0-21 18-30 18s-5-18-32-18c-120-4-180 4-280-1-32 0-24 30-36 30s-6-31-36-31C170 12 85 22 0 12Z"
          fill="currentColor"
        />
      </m.svg>
    </div>
  )
}
