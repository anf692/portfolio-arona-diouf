import { useState } from 'react'
import {
  filtres,
  lienToutesRealisations,
  realisations,
  realisationsTitre,
} from '../data/realisations.js'
import ProjectCard from './ProjectCard.jsx'
import SectionTitle from './SectionTitle.jsx'
import './Realisations.css'

const libelleCategorie = (id) => filtres.find((filtre) => filtre.id === id)?.label ?? id

export default function Realisations() {
  const [filtreActif, setFiltreActif] = useState('tous')

  const visibles =
    filtreActif === 'tous'
      ? realisations
      : realisations.filter((projet) => projet.categorie === filtreActif)

  return (
    <section id="realisations" className="realisations glass" aria-labelledby="realisations-titre">
      <SectionTitle
        id="realisations-titre"
        fond={realisationsTitre.fond}
        titre={realisationsTitre.titre}
        variante="lg"
      />

      <div className="realisations__barre">
        <div className="realisations__filtres glass" role="group" aria-label="Filtrer les réalisations">
          {filtres.map((filtre) => (
            <button
              key={filtre.id}
              type="button"
              className="realisations__filtre"
              aria-pressed={filtreActif === filtre.id}
              onClick={() => setFiltreActif(filtre.id)}
            >
              {filtre.label}
            </button>
          ))}
        </div>
        <a
          href={lienToutesRealisations.href}
          className="realisations__tout glass"
          onClick={() => setFiltreActif('tous')}
        >
          {lienToutesRealisations.label} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <p className="visually-hidden" aria-live="polite">
        {visibles.length} réalisation{visibles.length > 1 ? 's' : ''} affichée
        {visibles.length > 1 ? 's' : ''}
      </p>

      <ul className="realisations__grille">
        {visibles.map((projet) => (
          <li key={projet.id}>
            <ProjectCard projet={projet} categorie={libelleCategorie(projet.categorie)} />
          </li>
        ))}
      </ul>
    </section>
  )
}
