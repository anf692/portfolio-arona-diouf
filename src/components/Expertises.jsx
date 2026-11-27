import { useState } from 'react'
import { expertises, expertisesTitre } from '../data/expertises.js'
import Icon from './Icon.jsx'
import SectionTitle from './SectionTitle.jsx'
import './Expertises.css'

function Expertise({ expertise, ouverte, onBasculer }) {
  const idBouton = `expertise-${expertise.id}-bouton`
  const idPanneau = `expertise-${expertise.id}-panneau`

  return (
    <li className={`expertise ${ouverte ? 'expertise--ouverte glass-dark' : 'glass'}`}>
      <h3 className="expertise__heading">
        <button
          type="button"
          id={idBouton}
          className="expertise__bouton"
          aria-expanded={ouverte}
          aria-controls={idPanneau}
          onClick={onBasculer}
        >
          <span className="expertise__label">
            <span className="expertise__num">{expertise.numero}</span>
            <span className="expertise__titre">{expertise.titre}</span>
          </span>
          <Icon name="fleche" size={32} strokeWidth={2} className="expertise__fleche" />
        </button>
      </h3>

      <div id={idPanneau} className="expertise__panneau" hidden={!ouverte}>
        <p className="expertise__desc">{expertise.description}</p>
        <ul className="expertise__tags" aria-label={`Prestations ${expertise.titre.toLowerCase()}`}>
          {expertise.tags.map((tag) => (
            <li key={tag} className="chip expertise__tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default function Expertises() {
  const [ouverteId, setOuverteId] = useState(expertises[0].id)

  const basculer = (id) => setOuverteId((actuelle) => (actuelle === id ? null : id))

  return (
    <section id="expertises" className="expertises" aria-labelledby="expertises-titre">
      <SectionTitle id="expertises-titre" fond={expertisesTitre.fond} titre={expertisesTitre.titre} />
      <ul className="expertises__liste">
        {expertises.map((expertise) => (
          <Expertise
            key={expertise.id}
            expertise={expertise}
            ouverte={ouverteId === expertise.id}
            onBasculer={() => basculer(expertise.id)}
          />
        ))}
      </ul>
    </section>
  )
}
