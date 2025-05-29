# Aliases Git pratiques pour le portfolio
# Ajoutez ces lignes à votre ~/.zshrc pour des raccourcis

# Navigation entre branches
alias gm='git checkout main'
alias gh='git checkout gh-pages'

# Status et informations
alias gs='git status'
alias gb='git branch'
alias gl='git log --oneline -10'

# Workflow de développement
alias gadd='git add .'
alias gcom='git commit -m'
alias gpush='git push origin main'

# Déploiement rapide
alias deploy='./deploy.sh'

# Vérification de branche
alias branch-check='echo "Branche actuelle:" && git branch --show-current'

# Pour appliquer ces aliases, exécutez :
# source ~/.zshrc
