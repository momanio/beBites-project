import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { Logo } from './Logo'
import { LanguageToggle } from './LanguageToggle'
import { WhatsAppButton } from './WhatsAppButton'

export function Navbar() {
  const { language } = useLanguage()
  const copy = content[language]
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const header = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false)
    }
    const media = window.matchMedia('(min-width: 1100px)')
    const onResize = () => {
      if (media.matches) setOpen(false)
    }
    document.addEventListener('pointerdown', onClick)
    media.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('pointerdown', onClick)
      media.removeEventListener('change', onResize)
    }
  }, [open])

  return (
    <>
      <div className="announcement">
        <span className="announcement-flower" aria-hidden="true">
          ✳
        </span>
        {copy.announcement}
        <span className="announcement-flower" aria-hidden="true">
          ✳
        </span>
      </div>
      <header
        ref={header}
        className="site-header"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(false)
            toggle.current?.focus()
          }
        }}
      >
        <div className="container nav-inner">
          <Logo />
          <nav className="desktop-navigation" aria-label={copy.navLabel}>
            {copy.navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <LanguageToggle />
            <WhatsAppButton className="nav-order" />
            <button
              ref={toggle}
              className="icon-button mobile-menu-toggle"
              aria-label={open ? copy.menuClose : copy.menuOpen}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          hidden={!open}
          aria-label={copy.navLabel}
        >
          <div className="container">
            {copy.navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <WhatsAppButton />
          </div>
        </nav>
      </header>
    </>
  )
}
