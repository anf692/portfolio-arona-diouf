// Chantiers présentés dans la section Réalisations.
// Pour ajouter une photo : la placer dans public/images/ et renseigner `image`.

export const realisationsTitre = { fond: 'CHANTIERS', titre: '/RÉALISATIONS' }

export const filtres = [
  { id: 'tous', label: 'Tous' },
  { id: 'automobile', label: 'Automobile' },
  { id: 'industriel', label: 'Industriel' },
]

export const lienToutesRealisations = { label: 'Voir tout', href: '#realisations' }

export const realisations = [
  {
    id: 'recharge-clim',
    categorie: 'automobile',
    titre: 'Diagnostic & recharge clim — [Véhicule]',
    description:
      'Recherche de fuite au traceur UV, remplacement du joint défectueux, tirage au vide et recharge au poids constructeur.',
    tags: ['R1234yf', 'Station de charge', 'Traceur UV'],
    image: null,
    legende: '[Photo — intervention clim véhicule]',
    couleur: 'var(--photo-2)',
    sombre: false,
  },
  {
    id: 'chambre-froide',
    categorie: 'industriel',
    titre: 'Installation chambre froide — [Client]',
    description:
      'Pose des panneaux, raccordement frigorifique cuivre, brasage, mise sous azote, tirage au vide et mise en service.',
    tags: ['Groupe de condensation', 'Brasage', 'Régulation'],
    image: null,
    legende: '[Photo — chambre froide]',
    couleur: 'var(--photo-dark)',
    sombre: true,
  },
  {
    id: 'groupe-froid',
    categorie: 'industriel',
    titre: 'Maintenance groupe froid — [Site]',
    description:
      'Contrôle des pressions et surchauffe, nettoyage des échangeurs, vérification des sécurités et contrôle d’étanchéité.',
    tags: ['Manifold', 'Préventif', 'Étanchéité'],
    image: null,
    legende: '[Photo — groupe froid]',
    couleur: 'var(--photo-3)',
    sombre: false,
  },
  {
    id: 'compresseur',
    categorie: 'automobile',
    titre: 'Remplacement compresseur — [Véhicule]',
    description:
      'Dépose et repose du compresseur, rinçage du circuit, remplacement du filtre déshydrateur et contrôle des performances.',
    tags: ['Compresseur', 'Rinçage', 'Diagnostic'],
    image: null,
    legende: '[Photo — compresseur]',
    couleur: 'var(--photo-4)',
    sombre: false,
  },
]
