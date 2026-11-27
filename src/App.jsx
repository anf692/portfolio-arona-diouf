import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import Contact from './components/Contact.jsx'
import Expertises from './components/Expertises.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Navbar from './components/Navbar.jsx'
import Parcours from './components/Parcours.jsx'
import Realisations from './components/Realisations.jsx'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="page">
          <a href="#contenu" className="skip-link">
            Aller au contenu
          </a>
          <Navbar />
          <main id="contenu" tabIndex={-1}>
            <div className="container">
              <Hero />
            </div>
            <Marquee />
            <div className="container">
              <Expertises />
              <Realisations />
              <Parcours />
              <Contact />
            </div>
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
