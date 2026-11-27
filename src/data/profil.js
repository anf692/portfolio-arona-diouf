// Informations personnelles du technicien.
// Remplacer chaque valeur entre crochets par la vraie information.

export const profil = {
  prenom: 'Prénom',
  nom: 'Nom',
  titre: 'Technicien supérieur',
  specialite: 'Froid & Climatisation automobile et industrielle',
  description:
    'J’installe, je diagnostique et je dépanne vos systèmes frigorifiques et de climatisation — du véhicule léger à la chambre froide.',
  descriptionCourte:
    'J’installe, je diagnostique et je dépanne vos systèmes de froid et de clim — du véhicule à la chambre froide.',
  disponibilite: 'Disponible pour interventions',
  disponibiliteSuite: ' & missions',
  domaines: 'Froid · Climatisation · Auto · Industrie',
  zone: '[Ville] & environs',
  telephone: '[+221 XX XXX XX XX]',
  whatsapp: '[+221 XX XXX XX XX]',
  email: '[adresse@email.com]',
  anneesExperience: '[X]',
  // Chemin d’une image placée dans public/images/, par exemple '/images/portrait.jpg'
  photo: null,
  photoAlt: '[Prénom Nom] en tenue de travail',
  photoLegende: '[Votre photo en tenue de travail]',
  photoLegendeCourte: '[Votre photo]',
  reseaux: {
    linkedin: '[URL LinkedIn]',
    facebook: '[URL Facebook]',
  },
}

// Un emplacement est une valeur encore entre crochets.
export const estEmplacement = (valeur) => !valeur || /^\[.*\]$/.test(valeur.trim())

export const nomComplet = `${profil.prenom} ${profil.nom}`

const chiffres = (numero) => numero.replace(/\D/g, '')

export function lienWhatsApp(message = '') {
  const texte = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${chiffres(profil.whatsapp)}${texte}`
}

export const lienTelephone = estEmplacement(profil.telephone)
  ? '#contact'
  : `tel:+${chiffres(profil.telephone)}`

export const lienEmail = estEmplacement(profil.email) ? '#contact' : `mailto:${profil.email}`

// Les liens renvoient vers la section Contact tant que la valeur n’est pas renseignée.
const lienOuContact = (url) => (estEmplacement(url) ? '#contact' : url)

export const liensReseaux = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: estEmplacement(profil.whatsapp) ? '#contact' : lienWhatsApp(),
  },
  { id: 'linkedin', label: 'LinkedIn', href: lienOuContact(profil.reseaux.linkedin) },
  { id: 'facebook', label: 'Facebook', href: lienOuContact(profil.reseaux.facebook) },
  { id: 'email', label: 'E-mail', href: lienEmail },
]

export const navigation = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'expertises', label: 'Expertises', href: '#expertises' },
  { id: 'realisations', label: 'Réalisations', href: '#realisations' },
  { id: 'parcours', label: 'Parcours', href: '#parcours' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const motsCles = [
  'CLIM AUTO',
  'CHAMBRES FROIDES',
  'R134a · R1234yf',
  'GROUPES FROIDS',
  'SPLIT & VRV',
  'DIAGNOSTIC',
]
