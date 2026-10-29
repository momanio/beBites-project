import { ArrowUp, MapPin } from 'lucide-react'
import { Facebook, Instagram } from '../components/SocialIcons'
import { business, content } from '../data/content'
import { useLanguage } from '../lib/language-context'
import { WhatsAppButton, WhatsAppIcon } from '../components/WhatsAppButton'
import { Logo } from '../components/Logo'
import { whatsappUrl } from '../lib/whatsapp'

export function Footer() {
  const { language } = useLanguage()
  const copy = content[language]
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Logo footer />
              <p className="footer-description">{copy.footer.description}</p>
            </div>
            <div>
              <h2>{copy.footer.explore}</h2>
              <nav aria-label={copy.footer.explore}>
                {copy.navigation.slice(0, 4).map((item) => (
                  <a key={item.id} href={`#${item.id}`}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h2>{copy.footer.social}</h2>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer">
                <Instagram size={17} aria-hidden="true" />
                <span dir="ltr">{business.instagramHandle}</span>
              </a>
              <a href={business.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook size={17} aria-hidden="true" />
                {copy.footer.facebook}
              </a>
              <a href={whatsappUrl(language)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={17} />
                {copy.order}
              </a>
            </div>
            <div className="footer-delivery">
              <MapPin size={24} strokeWidth={1.4} aria-hidden="true" />
              <h2>{copy.footer.delivery}</h2>
              <p>{copy.footer.deliveryDetail}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              <span dir="ltr">© {new Date().getFullYear()} BeeBites.</span> {copy.footer.copyright}
            </p>
            <p>{copy.footer.made}</p>
            <a className="back-top" href="#home" aria-label={copy.footer.backTop}>
              <ArrowUp size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
      <WhatsAppButton variant="floating" />
    </>
  )
}
