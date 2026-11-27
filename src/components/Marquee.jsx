import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
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
  const ref = useRef(null)
  const reduit = useReducedMotion()
  // Le texte se déplace uniquement en fonction du scroll, sans défilement automatique.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], reduit ? ['0%', '0%'] : ['0%', '-25%'])

  return (
    <div ref={ref} className="marquee" role="region" aria-label="Domaines d’intervention">
      <motion.div className="marquee__track" style={{ x }}>
        {Array.from({ length: COPIES }, (_, index) => (
          <Ligne key={index} cachee={index > 0} />
        ))}
      </motion.div>
    </div>
  )
}
