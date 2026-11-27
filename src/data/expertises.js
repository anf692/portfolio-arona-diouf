// Services proposés, affichés dans l’accordéon de la section Expertises (source : CV).

export const expertisesTitre = { fond: 'SERVICES', titre: '/EXPERTISES' }

export const expertises = [
  {
    id: 'installation',
    numero: '01',
    titre: 'INSTALLATION & MISE EN SERVICE',
    description:
      'Installation et démontage de climatiseurs split, multisplit et cassette : soudure des tubes cuivre, raccordements frigorifiques et électriques, contrôle d’étanchéité et charge en fluide frigorigène.',
    tags: [
      'Split · Multisplit · Cassette',
      'Soudure cuivre',
      'Raccordements frigorifiques & électriques',
      'Charge en fluide',
    ],
  },
  {
    id: 'maintenance',
    numero: '02',
    titre: 'MAINTENANCE & DÉPANNAGE',
    description:
      'Maintenance préventive et corrective de climatiseurs, réfrigérateurs, congélateurs et conteneurs frigorifiques, diagnostic et réparation des pannes.',
    tags: ['Préventif & correctif', 'Diagnostic de pannes', 'Conteneurs frigorifiques', 'Schémas électriques'],
  },
  {
    id: 'froid-industriel',
    numero: '03',
    titre: 'FROID INDUSTRIEL',
    description:
      'Entretien de systèmes frigorifiques industriels, contrôle des températures, optimisation des performances et manipulation des fluides frigorigènes selon les normes.',
    tags: ['Systèmes industriels', 'Contrôle des températures', 'Fluides frigorigènes'],
  },
  {
    id: 'climatisation-centrale',
    numero: '04',
    titre: 'CLIMATISATION CENTRALE VRV',
    description:
      'Pré-installation de climatisation centrale de type VRV : lecture des plans techniques, choix des équipements et raccordements frigorifiques et électriques.',
    tags: ['VRV', 'Plans techniques', 'Choix des équipements'],
  },
  {
    id: 'etude',
    numero: '05',
    titre: 'ÉTUDE & DIMENSIONNEMENT',
    description:
      'Dimensionnement de chambres froides et d’installations de climatisation centrale, lecture et interprétation de plans, dessin sur AutoCAD.',
    tags: ['Chambres froides', 'Climatisation centrale', 'Plans techniques', 'AutoCAD (bases)'],
  },
]
