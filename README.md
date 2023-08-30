# Website

Ce site est construit avec [Docusaurus 2](https://docusaurus.io/), un générateur de site statique basé sur ReactJS.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

Cette commande démarre un serveur de développement et ouvre le site dans une fenêtre dans du navigateur. La majorité des changements se répercutent directement sur la fenêtre sans avoir à redémarrer le serveur.

### Build

```
$ yarn build
```

Cette commande génère le contenu statique dans le dossier de `build` qui peut être directement déployé sur un service d'hébergement de contenu statique.

### Deployment

Avec SSH:

```
$ USE_SSH=true yarn deploy
```

Sans SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

En cas d'utilisation de GitHub Pages pour l'hébergement, cette commande pousse directement le contenu sur la branche `gh-pages`.
