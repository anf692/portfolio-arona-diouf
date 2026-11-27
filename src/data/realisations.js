// Interventions réalisées en entreprise (source : stages du CV).
// Pour ajouter une photo : la placer dans public/images/ et renseigner `image`.

export const realisationsTitre = { fond: 'CHANTIERS', titre: '/RÉALISATIONS' }

export const filtres = [
  { id: 'tous', label: 'Tous' },
  { id: 'froid', label: 'Froid' },
  { id: 'climatisation', label: 'Climatisation' },
]

export const lienToutesRealisations = { label: 'Voir tout', href: '#realisations' }

export const realisations = [
  {
    id: 'conteneurs',
    categorie: 'froid',
    titre: 'Conteneurs frigorifiques — SAEFEM, Dakar',
    description:
      'Diagnostic et dépannage de conteneurs frigorifiques, tests de leur état, contrôle des températures et lecture des schémas électriques.',
    tags: ['Conteneurs frigorifiques', 'Fluides frigorigènes', 'Schémas électriques'],
    image: null,
    legende: '[Photo — conteneur frigorifique]',
    couleur: 'var(--photo-dark)',
    sombre: true,
  },
  {
    id: 'vrv-hotel',
    categorie: 'climatisation',
    titre: 'Pré-installation VRV — Hôtel en chantier, Ngor',
    description:
      'Pré-installation d’une climatisation centrale de type VRV : lecture des plans, choix des équipements, raccordements frigorifiques et électriques.',
    tags: ['VRV', 'Plans techniques', 'Chalumeau'],
    image: null,
    legende: '[Photo — chantier VRV]',
    couleur: 'var(--photo-2)',
    sombre: false,
  },
  {
    id: 'installation-split',
    categorie: 'climatisation',
    titre: 'Installation de climatiseurs split — Sococim',
    description:
      'Pose des unités intérieure et extérieure, raccordements frigorifique et électrique, mise en service, contrôle d’étanchéité et charge en fluide.',
    tags: ['Split', 'Mise en service', 'Contrôle d’étanchéité'],
    image: null,
    legende: '[Photo — climatiseur split]',
    couleur: 'var(--photo-3)',
    sombre: false,
  },
  {
    id: 'maintenance-split',
    categorie: 'climatisation',
    titre: 'Maintenance split & armoires — Sococim',
    description:
      'Maintenance préventive et corrective de climatiseurs split et d’armoires de climatisation en environnement industriel.',
    tags: ['Préventif', 'Correctif', 'Diagnostic'],
    image: null,
    legende: '[Photo — armoire de climatisation]',
    couleur: 'var(--photo-4)',
    sombre: false,
  },
]
