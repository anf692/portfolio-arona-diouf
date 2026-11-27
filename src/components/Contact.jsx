import { contactIntro, contactTitre, typesIntervention } from '../data/contact.js'
import {
  estEmplacement,
  lienEmail,
  lienTelephone,
  lienWhatsApp,
  profil,
} from '../data/profil.js'
import SectionTitle from './SectionTitle.jsx'
import './Contact.css'

const infos = [
  { id: 'telephone', label: 'Téléphone', valeur: profil.telephone, href: lienTelephone },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    valeur: profil.whatsapp,
    href: lienWhatsApp(),
    externe: true,
  },
  { id: 'email', label: 'E-mail', valeur: profil.email, href: lienEmail },
  { id: 'zone', label: 'Zone', valeur: profil.zone },
]

function composerMessage(donnees) {
  const lignes = [
    'Bonjour, je souhaite une intervention.',
    `Nom : ${donnees.get('nom')}`,
    donnees.get('telephone') && `Téléphone : ${donnees.get('telephone')}`,
    `Type d’intervention : ${donnees.get('type')}`,
    `Message : ${donnees.get('message')}`,
  ]
  return lignes.filter(Boolean).join('\n')
}

function envoyer(event) {
  event.preventDefault()
  const url = lienWhatsApp(composerMessage(new FormData(event.currentTarget)))
  const fenetre = window.open(url, '_blank', 'noopener,noreferrer')
  if (!fenetre) window.location.href = url
}

function Info({ info }) {
  const lien = info.href && !estEmplacement(info.valeur)
  return (
    <li className="contact__info glass">
      <p className="contact__info-label">{info.label}</p>
      {lien ? (
        <a
          className="contact__info-valeur"
          href={info.href}
          {...(info.externe && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {info.valeur}
        </a>
      ) : (
        <p className="contact__info-valeur">{info.valeur}</p>
      )}
    </li>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="contact glass" aria-labelledby="contact-titre">
      <div className="contact__intro">
        <SectionTitle id="contact-titre" titre={contactTitre} className="contact__titre" />
        <p className="contact__texte">{contactIntro}</p>
        <ul className="contact__infos">
          {infos.map((info) => (
            <Info key={info.id} info={info} />
          ))}
        </ul>
      </div>

      <form className="contact__form glass" onSubmit={envoyer}>
        <label className="contact__champ">
          Nom complet
          <input type="text" name="nom" placeholder="Votre nom" autoComplete="name" required />
        </label>
        <label className="contact__champ">
          Téléphone
          <input type="tel" name="telephone" placeholder="+221 …" autoComplete="tel" />
        </label>
        <label className="contact__champ">
          Type d’intervention
          <select name="type" defaultValue={typesIntervention[0]}>
            {typesIntervention.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="contact__champ">
          Message
          <textarea
            name="message"
            rows={4}
            placeholder="Décrivez la panne ou le projet…"
            required
          />
        </label>
        <button type="submit" className="btn btn-primary contact__envoyer" aria-describedby="contact-aide">
          Envoyer la demande <span aria-hidden="true">↗</span>
        </button>
        <p id="contact-aide" className="visually-hidden">
          Ouvre WhatsApp avec votre message pré-rempli.
        </p>
      </form>
    </section>
  )
}
