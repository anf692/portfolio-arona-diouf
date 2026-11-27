// Parcours : expérience, formation, compétences et atouts (source : CV).

export const parcoursTitre = '/PARCOURS'

export const experiences = [
  {
    id: 'saefem',
    periode: 'Juin 2026 — Novembre 2026 · 6 mois',
    intitule: 'Stagiaire technicien — SAEFEM, Dakar',
    description:
      'Entretien préventif et correctif de systèmes frigorifiques industriels, diagnostic et dépannage de conteneurs frigorifiques, contrôle des températures et manipulation des fluides selon les normes.',
    actuel: true,
  },
  {
    id: 'cpe',
    periode: 'Mai 2025 — Juin 2025 · 2 mois',
    intitule: 'Stagiaire technicien — CPE SARL, Ngor',
    description:
      'Pré-installation d’une climatisation centrale VRV dans un hôtel en chantier : plans techniques, choix des équipements, raccordements frigorifiques et électriques.',
    actuel: false,
  },
  {
    id: 'seee',
    periode: 'Décembre 2024 — Janvier 2025 · 2 mois',
    intitule: 'Stagiaire technicien — SEEE-Sénégal / Sococim',
    description:
      'Maintenance de climatiseurs split et d’armoires, installation complète de climatiseurs jusqu’à la mise en service.',
    actuel: false,
  },
]

export const formations = [
  {
    id: 'bts',
    diplome: 'BTS Froid & Climatisation automobile et industriel',
    details: 'ISEP Amadou Traware, Diamniadio · 2024 – 2026 · Mention assez bien',
  },
  {
    id: 'bac',
    diplome: 'Baccalauréat S2 — Sciences expérimentales',
    details: 'Lycée Moderne de Rufisque · 2021 – 2022',
  },
]

export const competences = [
  'Split, multisplit & cassette',
  'Soudure cuivre',
  'Raccordements frigorifiques',
  'Charge en fluide',
  'Contrôle d’étanchéité',
  'Schémas électriques',
  'Dimensionnement',
  'AutoCAD (bases)',
  'Manomètre & multimètre',
  'Station de récupération',
  'Détecteur de fuites',
]

export const atouts = {
  titre: 'Permis & langues',
  liste: ['Permis B', 'Français courant', 'Wolof', 'Anglais B1'],
}
