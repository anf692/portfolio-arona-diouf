import { useRef } from 'react'
import { useReducedMotion, useScroll, useTransform } from 'motion/react'
import * as m from 'motion/react-m'
import Reveal from './Reveal.jsx'
import './SectionTitle.css'

// Grand mot pâle qui glisse horizontalement au fil du scroll.
function MotFond({ children }) {
  const ref = useRef(null)
  const reduit = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], reduit ? [0, 0] : [80, -80])

  return (
    <m.div ref={ref} className="section-title__fond" aria-hidden="true" style={{ x }}>
      {children}
    </m.div>
  )
}

// Titre de section « /TITRE », avec un grand mot pâle optionnel en arrière-plan.
export default function SectionTitle({ id, titre, fond, variante = 'xl', className = '' }) {
  if (!fond) {
    return (
      <Reveal>
        <h2 id={id} className={`section-title__h2 section-title__h2--seul ${className}`}>
          {titre}
        </h2>
      </Reveal>
    )
  }

  return (
    <div className={`section-title section-title--${variante} ${className}`}>
      <MotFond>{fond}</MotFond>
      <Reveal className="section-title__h2-wrap">
        <h2 id={id} className="section-title__h2">
          {titre}
        </h2>
      </Reveal>
    </div>
  )
}
