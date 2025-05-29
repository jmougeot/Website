# 🔄 Guide de gestion des branches - Portfolio Jacques Mougeot

## 📋 Workflow quotidien

### 1. 💻 Développement (branche `main`)

```bash
# Toujours commencer par être sur main
git checkout main

# Vérifier les dernières mises à jour
git pull origin main

# Faire vos modifications dans src/
# Tester localement
npm start

# Quand vous êtes satisfait
git add .
git commit -m "Description de vos changements"
```

### 2. 🚀 Déploiement (vers `gh-pages`)

```bash
# Option A: Script automatique (recommandé)
./deploy.sh "Message de votre déploiement"

# Option B: Manuel
npm run build
git checkout gh-pages
cp -r build/* .
git add .
git commit -m "Deploy: nouvelle version"
git push origin gh-pages
git checkout main
```

### 3. 🔍 Vérifications importantes

```bash
# Toujours vérifier sur quelle branche vous êtes
git branch

# Voir l'état de votre travail
git status

# Voir l'historique
git log --oneline -5
```

## 📁 Structure des branches

### `main` (développement)
- ✅ Code source complet
- ✅ Dépendances (`package.json`, `node_modules/`)
- ✅ Configuration (`tsconfig.json`, etc.)
- ✅ Dossier `src/` avec vos composants
- ❌ Pas de dossier `build/`

### `gh-pages` (production)
- ✅ Fichiers compilés uniquement
- ✅ `index.html`, `static/`, `manifest.json`
- ✅ Assets optimisés
- ❌ Pas de code source
- ❌ Pas de `src/` ou `package.json`

## 🚨 Erreurs courantes à éviter

### ❌ Ne jamais faire :
- Modifier du code sur `gh-pages`
- Commiter des fichiers source sur `gh-pages`
- Oublier de build avant de déployer
- Travailler sur `gh-pages` au lieu de `main`

### ✅ Bonnes pratiques :
- Toujours développer sur `main`
- Utiliser le script `deploy.sh`
- Tester localement avant de déployer
- Commiter régulièrement sur `main`

## 🛠️ Commandes utiles

```bash
# Voir toutes les branches
git branch -a

# Changer de branche
git checkout main          # Pour développer
git checkout gh-pages      # Pour voir ce qui est déployé

# Voir les différences entre branches
git diff main gh-pages

# Voir l'URL de votre site
echo "https://jmougeot.github.io/Website"

# Nettoyer les fichiers de build locaux
rm -rf build/
```

## 🔄 Cycle de développement type

1. **Développement** : `main` → Modification du code
2. **Test local** : `npm start` → Vérification
3. **Commit** : `git add . && git commit -m "..."`
4. **Déploiement** : `./deploy.sh "message"`
5. **Vérification** : Visiter https://jmougeot.github.io/Website

## 🆘 En cas de problème

```bash
# Si vous êtes perdu
git status
git branch

# Pour annuler des modifications locales
git checkout -- .

# Pour revenir au dernier commit
git reset --hard HEAD

# Pour voir ce qui est différent
git diff
```

## 📱 URLs importantes

- **Repository** : https://github.com/jmougeot/Website
- **Site web** : https://jmougeot.github.io/Website
- **Code source** : https://github.com/jmougeot/Website/tree/main
- **Fichiers déployés** : https://github.com/jmougeot/Website/tree/gh-pages
