import { useRef } from 'react'
import { useReducedMotion, useScroll, useTransform } from 'motion/react'
import * as m from 'motion/react-m'
import { liensReseaux, profil } from '../data/profil.js'
import Icon from './Icon.jsx'
import './Hero.css'

function HeroPhoto({ y }) {
  return (
    <m.div className="hero__photo" style={{ y }}>
      {profil.photo ? (
        <img className="hero__photo-img" src={profil.photo} alt={profil.photoAlt} fetchPriority="high" />
      ) : (
        <div className="hero__photo-placeholder">
          <Icon name="personne" size={56} strokeWidth={1.4} className="hero__photo-icon" />
          <span className="hero__photo-legende">{profil.photoLegende}</span>
          <span className="hero__photo-legende--courte">{profil.photoLegendeCourte}</span>
        </div>
      )}
      <div className="hero__zone glass">
        <span className="hero__zone-icon">
          <Icon name="thermometre" size={20} strokeWidth={2} />
        </span>
        <div>
          <p className="hero__zone-titre">Zone d’intervention</p>
          <p className="hero__zone-texte">{profil.zone}</p>
        </div>
      </div>
    </m.div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduit = useReducedMotion()
  // Parallaxe liée au scroll : le nom remonte, la photo descend légèrement.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yNom = useTransform(scrollYProgress, [0, 1], reduit ? [0, 0] : [0, -80])
  const yPhoto = useTransform(scrollYProgress, [0, 1], reduit ? [0, 0] : [0, 48])

  return (
    <section ref={ref} id="accueil" className="hero glass" aria-labelledby="hero-nom">
      <div className="hero__top">
        <p className="hero__badge glass">
          <span className="hero__dot" aria-hidden="true" />
          <span>
            {profil.disponibilite}
            <span className="hero__badge-suite">{profil.disponibiliteSuite}</span>
          </span>
        </p>
        <p className="hero__domaines">{profil.domaines}</p>
      </div>

      <m.h1 id="hero-nom" className="hero__nom" style={{ y: yNom }}>
        <span className="outline">{profil.prenom}</span> <span>{profil.nom}</span>
      </m.h1>

      <div className="hero__grid">
        <div className="hero__intro">
          <p className="eyebrow">{profil.titre}</p>
          <h2 className="hero__specialite">{profil.specialite}</h2>
          <p className="hero__desc hero__desc--long">{profil.description}</p>
          <p className="hero__desc hero__desc--court">{profil.descriptionCourte}</p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary hero__cta">
              Demander une intervention
              <Icon name="fleche" size={16} strokeWidth={2.4} />
            </a>
          </div>
        </div>

        <HeroPhoto y={yPhoto} />

        <div className="hero__aside">
          <ul className="hero__reseaux" aria-label="Réseaux et contact">
            {liensReseaux.map((reseau) => (
              <li key={reseau.id}>
                <a href={reseau.href} className="hero__reseau glass">
                  <Icon name={reseau.id} size={18} />
                  {reseau.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hero__experience glass">
            <Icon name="thermometre" size={22} strokeWidth={2} className="hero__experience-icon" />
            <div>
              <p className="hero__experience-valeur">{profil.experience.valeur}</p>
              <p className="hero__experience-texte">{profil.experience.texte}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
