// Informations personnelles du technicien (source : CV d’Arona Diouf).

export const profil = {
  prenom: 'Arona',
  nom: 'Diouf',
  titre: 'Technicien supérieur',
  specialite: 'Froid & Climatisation automobile et industrielle',
  description:
    'Diplômé d’un BTS Froid et Climatisation, j’installe, je mets en service, j’entretiens et je dépanne vos systèmes frigorifiques et de climatisation — du climatiseur split au conteneur frigorifique.',
  descriptionCourte:
    'J’installe, j’entretiens et je dépanne vos systèmes de froid et de clim — du split au conteneur frigorifique.',
  disponibilite: 'Disponible pour interventions',
  disponibiliteSuite: ' & missions',
  domaines: 'Froid · Climatisation · Auto · Industrie',
  zone: 'Dakar & environs',
  telephone: '+221 78 390 15 03',
  // Numéro utilisé pour WhatsApp et pour le formulaire de contact
  whatsapp: '+221 78 390 15 03',
  email: 'dioufarona913@gmail.com',
  experience: { valeur: '2 ans', texte: 'd’expérience terrain en entreprise' },
  // Image placée dans public/images/
  photo: '/images/arona-diouf.jpg',
  photoAlt: 'Portrait d’Arona Diouf',
  photoLegende: '[Votre photo en tenue de travail]',
  photoLegendeCourte: '[Votre photo]',
  // Laisser entre crochets tant que le profil n’existe pas : le lien est alors masqué.
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

// Seuls les réseaux renseignés sont affichés.
export const liensReseaux = [
  { id: 'whatsapp', label: 'WhatsApp', valeur: profil.whatsapp, href: lienWhatsApp() },
  { id: 'linkedin', label: 'LinkedIn', valeur: profil.reseaux.linkedin },
  { id: 'facebook', label: 'Facebook', valeur: profil.reseaux.facebook },
  { id: 'email', label: 'E-mail', valeur: profil.email, href: lienEmail },
]
  .filter((reseau) => !estEmplacement(reseau.valeur))
  .map(({ id, label, valeur, href }) => ({ id, label, href: href ?? valeur }))

export const navigation = [
  { id: 'accueil', label: 'Accueil', href: '#accueil' },
  { id: 'expertises', label: 'Expertises', href: '#expertises' },
  { id: 'realisations', label: 'Réalisations', href: '#realisations' },
  { id: 'parcours', label: 'Parcours', href: '#parcours' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const motsCles = [
  'SPLIT & CASSETTE',
  'CLIMATISATION VRV',
  'CONTENEURS FRIGORIFIQUES',
  'CHAMBRES FROIDES',
  'DIAGNOSTIC',
  'FLUIDES FRIGORIGÈNES',
]
