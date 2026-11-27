import { useEffect, useRef } from 'react'
import { cv, liensReseaux, navigation } from '../data/profil.js'
import Icon from './Icon.jsx'
import './MobileMenu.css'

const SELECTEUR_FOCUS = 'a[href], button:not([disabled])'

export default function MobileMenu({ onFermer }) {
  const panneauRef = useRef(null)
  const boutonFermerRef = useRef(null)
  const onFermerRef = useRef(onFermer)

  useEffect(() => {
    onFermerRef.current = onFermer
  })

  useEffect(() => {
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    boutonFermerRef.current?.focus()

    const surTouche = (event) => {
      if (event.key === 'Escape') {
        onFermerRef.current()
        return
      }
      if (event.key !== 'Tab' || !panneauRef.current) return
      // Garde le focus à l’intérieur du menu
      const elements = panneauRef.current.querySelectorAll(SELECTEUR_FOCUS)
      const premier = elements[0]
      const dernier = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === premier) {
        event.preventDefault()
        dernier.focus()
      } else if (!event.shiftKey && document.activeElement === dernier) {
        event.preventDefault()
        premier.focus()
      }
    }

    const desktop = window.matchMedia('(min-width: 768px)')
    const surRedimension = (event) => {
      if (event.matches) onFermerRef.current({ rendreFocus: false })
    }

    document.addEventListener('keydown', surTouche)
    desktop.addEventListener('change', surRedimension)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', surTouche)
      desktop.removeEventListener('change', surRedimension)
    }
  }, [])

  const fermerSurLien = () => onFermer({ rendreFocus: false })

  return (
    <div className="mobile-menu" id="menu-mobile" role="dialog" aria-modal="true" aria-label="Menu">
      <nav ref={panneauRef} className="mobile-menu__panel glass" aria-label="Menu mobile">
        <div className="mobile-menu__header">
          <span className="eyebrow">Menu</span>
          <button
            ref={boutonFermerRef}
            type="button"
            className="mobile-menu__close"
            aria-label="Fermer le menu"
            onClick={() => onFermer()}
          >
            <Icon name="fermer" size={18} strokeWidth={2.2} />
          </button>
        </div>

        <ul className="mobile-menu__links">
          {navigation.map((lien, index) => (
            <li key={lien.id}>
              <a href={lien.href} className="mobile-menu__link" onClick={fermerSurLien}>
                {lien.label}
                <span className="mobile-menu__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={cv.href}
              download={cv.fichier}
              className="mobile-menu__link"
              aria-label={cv.description}
              onClick={fermerSurLien}
            >
              {cv.label}
              <span className="mobile-menu__num">PDF</span>
            </a>
          </li>
        </ul>

        <div className="mobile-menu__footer">
          <ul className="mobile-menu__reseaux">
            {liensReseaux.map((reseau) => (
              <li key={reseau.id}>
                <a
                  href={reseau.href}
                  className="mobile-menu__reseau glass"
                  aria-label={reseau.label}
                  onClick={fermerSurLien}
                >
                  <Icon name={reseau.id} size={20} />
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary mobile-menu__cta" onClick={fermerSurLien}>
            Demander un devis ↗
          </a>
        </div>
      </nav>
    </div>
  )
}
