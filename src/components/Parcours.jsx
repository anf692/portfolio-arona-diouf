import {
  competences,
  experiences,
  formation,
  habilitations,
  parcoursTitre,
} from '../data/parcours.js'
import Icon from './Icon.jsx'
import SectionTitle from './SectionTitle.jsx'
import './Parcours.css'

export default function Parcours() {
  return (
    <section id="parcours" className="parcours" aria-labelledby="parcours-titre">
      <SectionTitle id="parcours-titre" titre={parcoursTitre} />

      <div className="parcours__grille">
        <div className="parcours__carte glass">
          <h3 className="eyebrow">Expérience</h3>
          <ol className="parcours__frise">
            {experiences.map((experience) => (
              <li key={experience.id} className="parcours__etape">
                <span
                  className={`parcours__point${experience.actuel ? ' parcours__point--actuel' : ''}`}
                  aria-hidden="true"
                />
                <div>
                  <p className="parcours__periode">{experience.periode}</p>
                  <h4 className="parcours__intitule">{experience.intitule}</h4>
                  <p className="parcours__desc">{experience.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="parcours__colonne">
          <div className="parcours__carte glass">
            <h3 className="eyebrow">Formation</h3>
            <p className="parcours__diplome">{formation.diplome}</p>
            <p className="parcours__details">{formation.details}</p>
          </div>

          <div className="parcours__carte glass">
            <h3 className="eyebrow">Compétences</h3>
            <ul className="parcours__competences">
              {competences.map((competence) => (
                <li key={competence} className="chip glass">
                  {competence}
                </li>
              ))}
            </ul>
          </div>

          <div className="parcours__habilitations glass-dark">
            <Icon name="medaille" size={36} className="parcours__habilitations-icon" />
            <div>
              <h3 className="parcours__habilitations-titre">{habilitations.titre}</h3>
              <p className="parcours__habilitations-liste">{habilitations.liste.join(' · ')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
