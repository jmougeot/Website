#!/bin/bash

# 🚀 Script de déploiement automatisé pour le portfolio de Jacques Mougeot

echo "🏗️  Début du processus de déploiement..."

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages colorés
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérification des prérequis
print_status "Vérification des prérequis..."

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    print_error "Node.js n'est pas installé. Installez-le depuis https://nodejs.org"
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    print_error "npm n'est pas installé."
    exit 1
fi

# Vérifier si git est installé
if ! command -v git &> /dev/null; then
    print_error "Git n'est pas installé."
    exit 1
fi

print_success "Tous les prérequis sont satisfaits."

# Installation des dépendances
print_status "Installation des dépendances..."
npm install
if [ $? -eq 0 ]; then
    print_success "Dépendances installées avec succès."
else
    print_error "Échec de l'installation des dépendances."
    exit 1
fi

# Tests de linting
print_status "Vérification du code (linting)..."
npm run build &> /dev/null
if [ $? -eq 0 ]; then
    print_success "Code validé sans erreurs."
else
    print_warning "Des warnings ont été détectés, mais le build continue."
fi

# Build de production
print_status "Construction du build de production..."
npm run build
if [ $? -eq 0 ]; then
    print_success "Build créé avec succès dans le dossier 'build/'."
else
    print_error "Échec de la création du build."
    exit 1
fi

# Affichage des statistiques du build
print_status "Statistiques du build:"
du -sh build/
echo ""

# Vérification de la présence des fichiers essentiels
print_status "Vérification des fichiers essentiels..."

essential_files=(
    "build/index.html"
    "build/static/css"
    "build/static/js"
    "build/CNAME"
    "build/sitemap.xml"
    "build/robots.txt"
)

for file in "${essential_files[@]}"; do
    if [ -e "$file" ]; then
        print_success "✓ $file"
    else
        print_warning "⚠ $file manquant"
    fi
done

echo ""

# Préparation pour GitHub Pages
print_status "Le projet est prêt pour le déploiement GitHub Pages!"
echo ""
print_status "Prochaines étapes:"
echo "1. Créez un repository sur GitHub (ex: https://github.com/votre-username/Website)"
echo "2. Ajoutez le remote: git remote add origin https://github.com/votre-username/Website.git"
echo "3. Poussez le code: git push -u origin main"
echo "4. Déployez: npm run deploy"
echo ""

# Option pour déployer automatiquement si remote existe
if git remote get-url origin &> /dev/null; then
    print_status "Remote 'origin' détecté."
    read -p "Voulez-vous déployer maintenant sur GitHub Pages? (y/N): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Déploiement sur GitHub Pages..."
        npm run deploy
        if [ $? -eq 0 ]; then
            print_success "🎉 Déploiement réussi!"
            print_status "Votre site sera disponible dans quelques minutes sur:"
            print_status "• https://votre-username.github.io/Website"
            print_status "• https://jacquesmougeot.fr (si le DNS est configuré)"
        else
            print_error "Échec du déploiement."
            exit 1
        fi
    fi
else
    print_warning "Aucun remote 'origin' configuré."
    print_status "Configurez d'abord votre repository GitHub, puis relancez ce script."
fi

echo ""
print_success "🚀 Processus de déploiement terminé!"
print_status "Documentation complète disponible dans DEPLOYMENT.md"
