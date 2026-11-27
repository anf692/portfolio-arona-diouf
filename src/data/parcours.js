// Parcours : expérience, formation, compétences et habilitations.

export const parcoursTitre = '/PARCOURS'

export const experiences = [
  {
    id: 'poste-actuel',
    periode: '[Année] — Aujourd’hui',
    intitule: '[Poste] — [Entreprise]',
    description: '[Missions principales : installation, maintenance, dépannage…]',
    actuel: true,
  },
  {
    id: 'poste-precedent',
    periode: '[Année] — [Année]',
    intitule: '[Poste] — [Entreprise]',
    description: '[Missions principales]',
    actuel: false,
  },
  {
    id: 'stage',
    periode: '[Année]',
    intitule: 'Stage — [Entreprise]',
    description: '[Missions du stage]',
    actuel: false,
  },
]

export const formation = {
  diplome: '[Diplôme] Froid & Climatisation',
  details: '[Établissement] · [Années]',
}

export const competences = [
  'Diagnostic frigorifique',
  'Brasage cuivre',
  'Récupération des fluides',
  'Schémas électriques',
  'Régulation',
  'Split & VRV',
  'Pompes à chaleur',
]

export const habilitations = {
  titre: 'Habilitations & attestations',
  liste: ['[Attestation fluides frigorigènes]', '[Habilitation électrique]'],
}
