# Arona Diouf — Technicien Froid & Climatisation

Site vitrine one-page d'Arona Diouf, technicien supérieur en froid et climatisation à Dakar.

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
- `parcours.js` : expérience, formations, compétences, permis & langues
- `contact.js` : texte de contact, types de demande, pied de page

Les valeurs entre crochets `[...]` sont des emplacements à remplacer : les liens LinkedIn et Facebook
restent masqués tant qu'ils ne sont pas renseignés, et les photos de chantier s'affichent dès que
le champ `image` d'une réalisation est rempli.
Les photos vont dans `public/images/` puis se référencent par leur chemin (ex. `/images/chantier-vrv.jpg`).
