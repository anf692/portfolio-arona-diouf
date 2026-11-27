import { useRef, useState } from 'react'
import { cv, navigation, nomComplet } from '../data/profil.js'
import Icon from './Icon.jsx'
import MobileMenu from './MobileMenu.jsx'
import './Navbar.css'

const liensPrincipaux = navigation.filter((lien) => lien.id !== 'accueil')

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false)
  const boutonMenuRef = useRef(null)

  const fermerMenu = ({ rendreFocus = true } = {}) => {
    setMenuOuvert(false)
    if (rendreFocus) boutonMenuRef.current?.focus({ preventScroll: true })
  }

  return (
    <header className="navbar">
      <nav className="navbar__desktop glass" aria-label="Navigation principale">
        <a href="#accueil" className="navbar__logo" aria-label="Accueil">
          <Icon name="flocon" size={22} />
        </a>
        <ul className="navbar__links">
          {liensPrincipaux.map((lien) => (
            <li key={lien.id}>
              <a href={lien.href} className="navbar__link">
                {lien.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={cv.href}
              download={cv.fichier}
              className="navbar__link"
              aria-label={cv.description}
            >
              {cv.label}
            </a>
          </li>
        </ul>
        <a href="#contact" className="navbar__cta">
          Devis
          <Icon name="fleche" size={14} strokeWidth={2.4} />
        </a>
      </nav>

      <div className="navbar__mobile glass">
        <a href="#accueil" className="navbar__logo" aria-label="Accueil">
          <Icon name="flocon" size={20} />
        </a>
        <span className="navbar__name">{nomComplet}</span>
        <button
          ref={boutonMenuRef}
          type="button"
          className="navbar__logo navbar__toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOuvert}
          aria-controls="menu-mobile"
          onClick={() => setMenuOuvert(true)}
        >
          <Icon name="menu" size={20} strokeWidth={2} />
        </button>
      </div>

      {menuOuvert && <MobileMenu onFermer={fermerMenu} />}
    </header>
  )
}
