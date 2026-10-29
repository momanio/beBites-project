import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'
import { content } from './data/content'
import { useLanguage } from './lib/language-context'
import { LanguageProvider } from './components/LanguageProvider'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Signature } from './sections/Signature'
import { MenuSection } from './sections/Menu'
import { HowToOrder } from './sections/HowToOrder'
import { About } from './sections/About'
import { Gallery } from './sections/Gallery'
import { Testimonials } from './sections/Testimonials'
import { FAQ } from './sections/FAQ'
import { FinalCTA } from './sections/FinalCTA'
import { Footer } from './sections/Footer'

function Page() {
  const { language } = useLanguage()
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div id="home">
          <a className="skip-link" href="#main">
            {content[language].skip}
          </a>
          <Navbar />
          <main id="main" tabIndex={-1}>
            <Hero />
            <Signature />
            <MenuSection />
            <HowToOrder />
            <About />
            <Gallery />
            <Testimonials />
            <FAQ />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  )
}
