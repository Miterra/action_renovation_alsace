# Action Rénovation Alsace — Site vitrine

Single Page Application (SPA) en React pour Action Rénovation Alsace, entreprise de chantier et rénovation globale basée à Hœnheim (Strasbourg).

## Stack technique

- **React 18** — composants fonctionnels & Hooks
- **Vite** — build tool
- **Tailwind CSS** — design system & responsive
- **Framer Motion** — animations au scroll
- **Lucide React** — icônes

## Installation & lancement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (http://localhost:5173)
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
src/
├── App.jsx                  # Composant racine
├── main.jsx                 # Entry point React
├── index.css                # Styles globaux + Tailwind
└── components/
    ├── Button.jsx           # Composant Button réutilisable
    ├── Navbar.jsx           # Navigation sticky responsive
    ├── Hero.jsx             # Section hero
    ├── ServiceCard.jsx      # Carte de service
    ├── Services.jsx         # Section services
    ├── WhyUs.jsx            # Section "Pourquoi nous choisir"
    ├── Contact.jsx          # Formulaire + coordonnées
    └── Footer.jsx           # Pied de page
```

## Identité visuelle

- **Couleur principale** : Bleu marine (`navy-900` : #0f2742)
- **Couleur d'accent** : Orange chantier (`accent-500` : #f97316)
- **Typographie** : Inter (Google Fonts)

## Informations entreprise

- **Nom** : Action Rénovation Alsace
- **SIREN** : 880 980 800
- **Adresse** : 19 Avenue du Ried, 67800 Hœnheim
- **Zone d'intervention** : Strasbourg et environs

## Notes de développement

- Le formulaire de contact simule un envoi via `console.log` + `alert` (pas de backend).
- Les coordonnées téléphone/email dans le footer et la section contact sont des placeholders à remplacer par les vraies coordonnées.
