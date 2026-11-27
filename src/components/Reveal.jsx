import { motion } from 'motion/react'

// Apparitions au scroll : uniquement opacity et transform.
const EASE = [0.22, 1, 0.36, 1]

const apparition = {
  cache: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const cascade = {
  cache: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const balises = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  p: motion.p,
}

export default function Reveal({ as = 'div', children, ...props }) {
  const Balise = balises[as]
  return (
    <Balise
      initial="cache"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={apparition}
      {...props}
    >
      {children}
    </Balise>
  )
}

// Conteneur d’une liste dont les éléments apparaissent l’un après l’autre.
export function Cascade({ as = 'ul', children, ...props }) {
  const Balise = balises[as]
  return (
    <Balise
      initial="cache"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={cascade}
      {...props}
    >
      {children}
    </Balise>
  )
}

export function CascadeItem({ as = 'li', children, ...props }) {
  const Balise = balises[as]
  return (
    <Balise variants={apparition} {...props}>
      {children}
    </Balise>
  )
}
