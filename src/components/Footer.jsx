import { footer } from '../data/contact.js'
import { nomComplet } from '../data/profil.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer container">
      <p>
        © {footer.annee} {nomComplet} — {footer.metier}
      </p>
      <p>{footer.domaines}</p>
    </footer>
  )
}
