import { atouts, competences, experiences, formations, parcoursTitre } from '../data/parcours.js'
import Icon from './Icon.jsx'
import Reveal, { Cascade, CascadeItem } from './Reveal.jsx'
import SectionTitle from './SectionTitle.jsx'
import './Parcours.css'

export default function Parcours() {
  return (
    <section id="parcours" className="parcours" aria-labelledby="parcours-titre">
      <SectionTitle id="parcours-titre" titre={parcoursTitre} />

      <div className="parcours__grille">
        <Reveal className="parcours__carte glass">
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
        </Reveal>

        <div className="parcours__colonne">
          <Reveal className="parcours__carte glass">
            <h3 className="eyebrow">Formation</h3>
            <ul className="parcours__formations">
              {formations.map((formation) => (
                <li key={formation.id}>
                  <p className="parcours__diplome">{formation.diplome}</p>
                  <p className="parcours__details">{formation.details}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="parcours__carte glass">
            <h3 className="eyebrow">Compétences</h3>
            <Cascade className="parcours__competences">
              {competences.map((competence) => (
                <CascadeItem key={competence} className="chip glass">
                  {competence}
                </CascadeItem>
              ))}
            </Cascade>
          </Reveal>

          <Reveal className="parcours__habilitations glass-dark">
            <Icon name="medaille" size={36} className="parcours__habilitations-icon" />
            <div>
              <h3 className="parcours__habilitations-titre">{atouts.titre}</h3>
              <p className="parcours__habilitations-liste">{atouts.liste.join(' · ')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
