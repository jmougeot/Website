# 🚀 Guide de déploiement - Portfolio Jacques Mougeot

## Déploiement sur GitHub Pages

### 1. Créer le repository sur GitHub

1. Allez sur [GitHub](https://github.com) et connectez-vous
2. Cliquez sur "New repository"
3. Nommez le repository `Website` ou `portfolio`
4. Rendez-le public (obligatoire pour GitHub Pages gratuit)
5. Ne cochez PAS "Initialize with README" (car on a déjà un projet local)
6. Cliquez sur "Create repository"

### 2. Connecter le projet local au repository GitHub

```bash
# Dans le terminal, depuis le dossier du projet
cd /Users/jacquesmougeot/Desktop/Projets/Website/Website

# Ajouter l'origine remote (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/Website.git

# Pousser le code vers GitHub
git branch -M main
git push -u origin main
```

### 3. Déployer sur GitHub Pages

```bash
# Installer gh-pages si pas déjà fait
npm install --save-dev gh-pages

# Déployer (cela va créer et pousser vers la branche gh-pages)
npm run deploy
```

### 4. Configurer GitHub Pages

1. Allez dans les Settings de votre repository GitHub
2. Scrollez jusqu'à la section "Pages"
3. Dans "Source", sélectionnez "Deploy from a branch"
4. Sélectionnez la branche `gh-pages` et le dossier `/ (root)`
5. Cliquez sur "Save"

### 5. Configurer le domaine personnalisé (jacquesmougeot.fr)

#### Sur GitHub :
1. Dans les Settings > Pages
2. Dans "Custom domain", entrez : `jacquesmougeot.fr`
3. Cochez "Enforce HTTPS"
4. Cliquez sur "Save"

#### Chez votre fournisseur de domaine :
Configurez les enregistrements DNS suivants :

```
Type: A
Nom: @
Valeur: 185.199.108.153

Type: A
Nom: @
Valeur: 185.199.109.153

Type: A
Nom: @
Valeur: 185.199.110.153

Type: A
Nom: @
Valeur: 185.199.111.153

Type: CNAME
Nom: www
Valeur: USERNAME.github.io (remplacez USERNAME)
```

### 6. Vérification du déploiement

Après quelques minutes, votre site sera accessible sur :
- `https://jacquesmougeot.fr` (domaine personnalisé)
- `https://USERNAME.github.io/Website` (URL GitHub Pages)

### 7. Workflow de mise à jour

Pour mettre à jour le site :

```bash
# Faire vos modifications dans le code
# Puis :
git add -A
git commit -m "Description des modifications"
git push origin main

# Redéployer
npm run deploy
```

## 🔧 Scripts npm disponibles

- `npm start` - Serveur de développement (http://localhost:3000)
- `npm run build` - Build de production
- `npm run deploy` - Déploiement sur GitHub Pages
- `npm test` - Tests unitaires

## 📋 Checklist de déploiement

- [ ] Repository GitHub créé
- [ ] Code poussé sur la branche main
- [ ] Déployé avec `npm run deploy`
- [ ] GitHub Pages configuré
- [ ] Domaine personnalisé configuré
- [ ] DNS configuré chez le fournisseur
- [ ] HTTPS activé
- [ ] Site accessible et fonctionnel

## 🎯 Optimisations post-déploiement

### Performance
- [ ] Vérifier les Core Web Vitals avec Lighthouse
- [ ] Optimiser les images si nécessaire
- [ ] Minifier le CSS/JS (fait automatiquement par CRA)

### SEO
- [ ] Ajouter meta descriptions dans public/index.html
- [ ] Configurer robots.txt si nécessaire
- [ ] Ajouter Google Analytics si souhaité
- [ ] Soumettre à Google Search Console

### Monitoring
- [ ] Configurer Google Analytics
- [ ] Surveiller les erreurs 404
- [ ] Vérifier la compatibilité navigateurs

## 🐛 Résolution de problèmes

### Le site ne se charge pas
1. Vérifiez que le déploiement s'est bien passé
2. Attendez quelques minutes (propagation DNS)
3. Vérifiez la configuration dans Settings > Pages

### Erreur 404 sur les sous-pages
- C'est normal pour une SPA, le site utilise le hash routing

### Le domaine personnalisé ne fonctionne pas
1. Vérifiez la configuration DNS
2. Attendez la propagation (jusqu'à 48h)
3. Vérifiez que le fichier CNAME est présent

### Build en erreur
1. Vérifiez que toutes les dépendances sont installées
2. Corrigez les erreurs TypeScript/ESLint
3. Relancez `npm run build`

---

**Bon déploiement ! 🚀**
