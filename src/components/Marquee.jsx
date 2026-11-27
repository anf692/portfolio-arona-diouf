import { motsCles } from '../data/profil.js'
import './Marquee.css'

// Le bandeau est répété pour rester rempli pendant son déplacement horizontal.
const COPIES = 3

function Ligne({ cachee }) {
  return (
    <ul className="marquee__ligne" aria-hidden={cachee || undefined}>
      {motsCles.map((mot) => (
        <li key={mot} className="marquee__item">
          <span>{mot}</span>
          <span className="marquee__etoile" aria-hidden="true">
            ✱
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Domaines d’intervention">
      <div className="marquee__track">
        {Array.from({ length: COPIES }, (_, index) => (
          <Ligne key={index} cachee={index > 0} />
        ))}
      </div>
    </div>
  )
}
