// Services proposés, affichés dans l’accordéon de la section Expertises.
// Les textes des services 02 à 05 reprennent le vocabulaire de la maquette : à relire et ajuster.

export const expertisesTitre = { fond: 'SERVICES', titre: '/EXPERTISES' }

export const expertises = [
  {
    id: 'clim-auto',
    numero: '01',
    titre: 'CLIMATISATION AUTOMOBILE',
    description:
      'Diagnostic, recherche de fuites, vidange et recharge de circuits de clim sur véhicules légers, utilitaires et poids lourds.',
    tags: [
      'Recharge R134a / R1234yf',
      'Détection de fuites',
      'Compresseur & détendeur',
      'Électricité du circuit',
    ],
  },
  {
    id: 'froid-industriel',
    numero: '02',
    titre: 'FROID INDUSTRIEL',
    description:
      'Installation, maintenance et dépannage de chambres froides et de groupes froids.',
    tags: ['Chambres froides', 'Groupes de condensation', 'Contrôle d’étanchéité', 'Régulation'],
  },
  {
    id: 'installation',
    numero: '03',
    titre: 'INSTALLATION & MISE EN SERVICE',
    description:
      'Raccordement frigorifique cuivre, brasage, mise sous azote, tirage au vide et mise en service.',
    tags: ['Brasage cuivre', 'Mise sous azote', 'Tirage au vide', 'Split & VRV'],
  },
  {
    id: 'maintenance',
    numero: '04',
    titre: 'MAINTENANCE & DÉPANNAGE',
    description:
      'Contrôle des pressions et surchauffe, nettoyage des échangeurs, vérification des sécurités et diagnostic de panne.',
    tags: ['Préventif', 'Diagnostic frigorifique', 'Manifold', 'Récupération des fluides'],
  },
  {
    id: 'regulation',
    numero: '05',
    titre: 'RÉGULATION & ÉLECTRICITÉ',
    description:
      'Lecture de schémas électriques, réglage de la régulation et contrôle des sécurités des installations.',
    tags: ['Schémas électriques', 'Régulation', 'Électricité du circuit', 'Sécurités'],
  },
]
