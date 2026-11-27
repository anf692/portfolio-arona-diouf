import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <div className="page">
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <Navbar />
      <main id="contenu">
        <div className="container">
          <Hero />
        </div>
        <Marquee />
      </main>
    </div>
  )
}
