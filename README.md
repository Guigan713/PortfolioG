# PortfolioG

PortfolioG est un site web personnel développé avec React et styled-components, déployé sur GitHub Pages. Il présente mes projets, compétences, expériences et permet de me contacter facilement.

## Fonctionnalités
- Présentation moderne et responsive
- Section "À propos" avec parcours et compétences
- Liste de projets avec images et liens
- Formulaire de contact fonctionnel
- Carte interactive
- Design personnalisé (palette beige/forest green)
- Navigation fluide et animations

## Technologies
- React
- styled-components
- CSS
- React Icons
- GitHub Actions

## Déploiement
Le site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main` grâce à un workflow GitHub Actions.

### Déploiement manuel
1. Builder le projet :
   ```bash
   npm run build
   ```
2. Publier le dossier `build` sur la branche `gh-pages` (avec le package `gh-pages` ou manuellement).

### Déploiement automatique
1. Un workflow GitHub Actions (`.github/workflows/deploy.yml`) build et publie le site sur la branche `gh-pages`.
2. La branche `gh-pages` est configurée comme source dans Settings > Pages.

## Accès
Le site est accessible à l’adresse :
```
https://guigan713.github.io/PortfolioG/
```

## Contact
Pour toute question ou suggestion, utilisez le formulaire de contact du site ou ouvrez une issue sur GitHub.

---

© 2025 Guillaume G. – PortfolioG
