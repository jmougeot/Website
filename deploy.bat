@echo off
chcp 65001 >nul 2>&1
setlocal enabledelayedexpansion

echo.
echo ========================================
echo   Deploiement du portfolio
echo ========================================
echo.

:: Verification des prerequis
echo [INFO] Verification des prerequis...

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERREUR] Node.js n'est pas installe.
    exit /b 1
)

where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERREUR] npm n'est pas installe.
    exit /b 1
)

where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERREUR] Git n'est pas installe.
    exit /b 1
)

echo [OK] Tous les prerequis sont satisfaits.
echo.

:: Installation des dependances
echo [INFO] Installation des dependances...
call npm install
if %errorlevel% neq 0 (
    echo [ERREUR] Echec de l'installation des dependances.
    exit /b 1
)
echo [OK] Dependances installees.
echo.

:: Build de production
echo [INFO] Construction du build de production...
call npx craco build
if %errorlevel% neq 0 (
    echo [ERREUR] Echec du build.
    exit /b 1
)
echo [OK] Build cree avec succes.
echo.

:: Verification des fichiers essentiels
echo [INFO] Verification des fichiers essentiels...
for %%F in (build\index.html build\CNAME build\sitemap.xml build\robots.txt) do (
    if exist "%%F" (
        echo   [OK] %%F
    ) else (
        echo   [?] %%F manquant
    )
)
if exist "build\static\css" echo   [OK] build\static\css
if exist "build\static\js" echo   [OK] build\static\js
echo.

:: Deploiement
git remote get-url origin >nul 2>&1
if %errorlevel% equ 0 (
    echo [INFO] Remote 'origin' detecte.
    set /p "REPLY=Deployer sur GitHub Pages ? (O/N): "
    if /i "!REPLY!"=="O" (
        echo [INFO] Deploiement sur GitHub Pages...
        call npm run deploy
        if !errorlevel! neq 0 (
            echo [ERREUR] Echec du deploiement.
            exit /b 1
        )
        echo.
        echo [OK] Deploiement reussi !
        echo [INFO] Le site sera disponible dans quelques minutes sur https://jacquesmougeot.fr
    ) else (
        echo [INFO] Deploiement annule.
    )
) else (
    echo [INFO] Pas de remote 'origin'. Ajoutez-en un puis relancez.
)

echo.
echo ========================================
echo   Termine !
echo ========================================
pause
