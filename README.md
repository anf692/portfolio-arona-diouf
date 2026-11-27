# Portfolio — Technicien Froid & Climatisation

Site vitrine one-page d'un technicien supérieur en froid et climatisation (automobile et industrielle).

## Stack

- Vite + React 19 (JavaScript)
- Animations au scroll avec [Motion](https://motion.dev)
- CSS natif avec variables, police Manrope

## Démarrer

```bash
npm install
npm run dev
```

## Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | serveur de développement |
| `npm run build` | build de production dans `dist/` |
| `npm run preview` | prévisualise le build |
| `npm run lint` | vérifie le code avec ESLint |

## Modifier le contenu

Tout le texte est dans `src/data/` :

- `profil.js` : nom, titre, téléphone, WhatsApp, e-mail, réseaux, années d'expérience, photo
- `expertises.js` : services de l'accordéon
- `realisations.js` : chantiers et filtres
- `parcours.js` : expérience, formation, compétences, habilitations
- `contact.js` : texte de contact, types d'intervention, pied de page

Les valeurs entre crochets `[...]` sont des emplacements à remplacer.
Les photos vont dans `public/images/` puis se référencent par leur chemin (ex. `/images/portrait.jpg`).
