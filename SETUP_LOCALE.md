# Guida Setup Locale - Gestionale Corsi Sicurezza

**Versione:** b8e69b41  
**Data:** 11 Gennaio 2026  
**Obiettivo:** Scaricare, configurare e testare il progetto in locale sul tuo computer

---

## Indice

1. [Prerequisiti](#1-prerequisiti)
2. [Download Codice](#2-download-codice)
3. [Installazione Dipendenze](#3-installazione-dipendenze)
4. [Configurazione Database](#4-configurazione-database)
5. [Configurazione Variabili Ambiente](#5-configurazione-variabili-ambiente)
6. [Avvio Applicazione](#6-avvio-applicazione)
7. [Testing](#7-testing)
8. [Troubleshooting](#8-troubleshooting)
9. [Deploy Produzione](#9-deploy-produzione)

---

## 1. Prerequisiti

### Software Richiesto

**Obbligatori:**
- **Node.js** 22.x o superiore ([Download](https://nodejs.org/))
- **pnpm** 10.x o superiore (package manager)
- **Git** (per clonare repository)

**Opzionali:**
- **MySQL** 8.0+ o **TiDB** (database locale)
- **MySQL Workbench** o **DBeaver** (GUI database)
- **VS Code** (editor consigliato)

### Verifica Installazione

```bash
# Verifica Node.js
node --version
# Output atteso: v22.13.0 o superiore

# Verifica pnpm (se non installato, vedi sotto)
pnpm --version
# Output atteso: 10.4.1 o superiore

# Verifica Git
git --version
# Output atteso: git version 2.x.x
```

### Installazione pnpm

Se pnpm non è installato:

```bash
# Metodo 1: npm (se hai npm)
npm install -g pnpm

# Metodo 2: Script standalone
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Metodo 3: Homebrew (macOS)
brew install pnpm

# Metodo 4: Chocolatey (Windows)
choco install pnpm
```

---

## 2. Download Codice

### Opzione A: Download da Manus (Consigliato)

1. **Accedi a Manus:**
   - Vai su [https://manus.im](https://manus.im)
   - Login con il tuo account

2. **Apri Progetto:**
   - Vai al progetto "corsi_sicurezza"
   - Click su **Management UI** (pannello destro)

3. **Download Codice:**
   - Click su **Code** tab
   - Click su **Download All Files** (pulsante in alto a destra)
   - Salva file ZIP (es. `corsi_sicurezza.zip`)

4. **Estrai ZIP:**
   ```bash
   # macOS/Linux
   unzip corsi_sicurezza.zip -d ~/Projects/corsi_sicurezza
   
   # Windows (PowerShell)
   Expand-Archive -Path corsi_sicurezza.zip -DestinationPath C:\Projects\corsi_sicurezza
   ```

### Opzione B: Clone da GitHub (Se Configurato)

Se hai già configurato GitHub sync in Manus:

```bash
# Clone repository
git clone https://github.com/TUO_USERNAME/corsi_sicurezza.git

# Entra nella directory
cd corsi_sicurezza
```

### Verifica Struttura

```bash
# Verifica che la struttura sia corretta
ls -la

# Output atteso:
# client/
# server/
# drizzle/
# shared/
# storage/
# package.json
# README.md
# todo.md
# VERIFICA_FINALE.md
# GUIDA_COMPLETA.md
# SETUP_LOCALE.md
```

---

## 3. Installazione Dipendenze

### Installa Pacchetti npm

```bash
# Entra nella directory progetto
cd corsi_sicurezza

# Installa tutte le dipendenze
pnpm install

# Tempo stimato: 2-5 minuti
# Output atteso: "Progress: resolved XXX, reused XXX, downloaded XXX"
```

### Verifica Installazione

```bash
# Verifica che node_modules esista
ls -la node_modules

# Verifica pacchetti principali
ls node_modules | grep -E "react|express|drizzle|trpc"

# Output atteso:
# react/
# express/
# drizzle-orm/
# @trpc/
```

---

## 4. Configurazione Database

### Opzione A: Usa Database Manus (Consigliato per Test)

**Vantaggi:**
- Già configurato e popolato con dati di prova
- Nessuna installazione locale necessaria
- Connection string già disponibile

**Procedura:**

1. **Ottieni Connection String:**
   - Vai su Manus → Management UI → **Settings** → **Secrets**
   - Scorri in basso fino a "Database Connection Info"
   - Copia il valore di `DATABASE_URL`
   - Esempio: `mysql://user:pass@host:3306/dbname?ssl={"rejectUnauthorized":true}`

2. **Salva Connection String:**
   - Verrà usata nel prossimo step (Variabili Ambiente)

### Opzione B: Installa MySQL Locale

**Vantaggi:**
- Controllo completo
- Nessuna dipendenza da servizi esterni
- Utile per sviluppo offline

**Procedura:**

#### 1. Installa MySQL

**macOS (Homebrew):**
```bash
brew install mysql
brew services start mysql
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
```

**Windows:**
- Download MySQL Installer da [mysql.com](https://dev.mysql.com/downloads/installer/)
- Esegui installer e segui wizard
- Scegli "Developer Default"

#### 2. Configura MySQL

```bash
# Accedi a MySQL
mysql -u root -p
# (Premi Enter se password vuota)

# Crea database
CREATE DATABASE corsi_sicurezza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Crea utente
CREATE USER 'corsi_user'@'localhost' IDENTIFIED BY 'password_sicura_123';

# Assegna permessi
GRANT ALL PRIVILEGES ON corsi_sicurezza.* TO 'corsi_user'@'localhost';
FLUSH PRIVILEGES;

# Esci
EXIT;
```

#### 3. Verifica Connessione

```bash
# Testa connessione
mysql -u corsi_user -p corsi_sicurezza
# Inserisci password: password_sicura_123

# Se connesso con successo, esci
EXIT;
```

#### 4. Connection String

```bash
# Connection string per .env
DATABASE_URL="mysql://corsi_user:password_sicura_123@localhost:3306/corsi_sicurezza"
```

---

## 5. Configurazione Variabili Ambiente

### Crea File .env

```bash
# Crea file .env nella root del progetto
touch .env

# Apri con editor
nano .env
# Oppure usa VS Code: code .env
```

### Variabili Obbligatorie

Copia e incolla nel file `.env`:

```bash
# ===========================
# DATABASE
# ===========================
# Opzione A: Database Manus (copia da Management UI → Settings → Secrets)
DATABASE_URL="mysql://user:pass@host:3306/dbname?ssl={\"rejectUnauthorized\":true}"

# Opzione B: Database locale
# DATABASE_URL="mysql://corsi_user:password_sicura_123@localhost:3306/corsi_sicurezza"


# ===========================
# AUTHENTICATION (Manus OAuth)
# ===========================
# Copia questi valori da Management UI → Settings → Secrets
JWT_SECRET="your_jwt_secret_here"
OAUTH_SERVER_URL="https://api.manus.im"
VITE_APP_ID="your_app_id_here"
VITE_OAUTH_PORTAL_URL="https://portal.manus.im"
OWNER_OPEN_ID="your_owner_open_id_here"
OWNER_NAME="Your Name"


# ===========================
# MANUS BUILT-IN APIs (Optional)
# ===========================
# Copia questi valori da Management UI → Settings → Secrets
BUILT_IN_FORGE_API_URL="https://forge.manus.im"
BUILT_IN_FORGE_API_KEY="your_forge_api_key_here"
VITE_FRONTEND_FORGE_API_KEY="your_frontend_forge_api_key_here"
VITE_FRONTEND_FORGE_API_URL="https://forge.manus.im"


# ===========================
# ANALYTICS (Optional)
# ===========================
VITE_ANALYTICS_ENDPOINT="https://analytics.manus.im"
VITE_ANALYTICS_WEBSITE_ID="your_website_id_here"


# ===========================
# APP CONFIG
# ===========================
VITE_APP_TITLE="Gestionale Corsi Sicurezza"
VITE_APP_LOGO="/logo.svg"
NODE_ENV="development"
```

### Dove Trovare i Valori

**Tutti i valori Manus:**
1. Vai su Manus → Management UI
2. Click su **Settings** (gear icon)
3. Click su **Secrets** nel menu laterale
4. Scorri in basso fino a "System Environment Variables"
5. Copia i valori uno per uno

**Screenshot Helper:**
```
Settings → Secrets → System Environment Variables
├── JWT_SECRET
├── OAUTH_SERVER_URL
├── VITE_APP_ID
├── VITE_OAUTH_PORTAL_URL
├── OWNER_OPEN_ID
├── OWNER_NAME
├── BUILT_IN_FORGE_API_URL
├── BUILT_IN_FORGE_API_KEY
├── VITE_FRONTEND_FORGE_API_KEY
├── VITE_FRONTEND_FORGE_API_URL
├── VITE_ANALYTICS_ENDPOINT
└── VITE_ANALYTICS_WEBSITE_ID
```

### Verifica File .env

```bash
# Verifica che il file esista
ls -la .env

# Verifica contenuto (senza mostrare valori sensibili)
cat .env | grep -E "^[A-Z_]+=" | cut -d'=' -f1

# Output atteso:
# DATABASE_URL
# JWT_SECRET
# OAUTH_SERVER_URL
# VITE_APP_ID
# ...
```

---

## 6. Avvio Applicazione

### Step 1: Migrazione Database

```bash
# Applica schema database
pnpm db:push

# Output atteso:
# [✓] Changes applied successfully
# [✓] 8 tables created
```

### Step 2: Popola Database (Opzionale)

Se usi database locale vuoto:

```bash
# Esegui script seed
pnpm tsx seed-database.mjs

# Output atteso:
# ✅ Database pulito
# ✅ 20 aziende inserite
# ✅ 60 studenti inseriti
# ✅ 17 corsi inseriti
# ✅ 35 edizioni inserite
# ✅ 118 iscrizioni inserite
# ✅ ~250 presenze inserite
# 🎉 Seed completato!
```

### Step 3: Avvia Dev Server

```bash
# Avvia server di sviluppo
pnpm dev

# Output atteso:
# [19:11:39] Server running on http://localhost:3000/
# [19:11:42] [OAuth] Initialized with baseURL: https://api.manus.im
```

### Step 4: Apri Browser

```bash
# Apri browser automaticamente (macOS)
open http://localhost:3000

# Oppure manualmente:
# 1. Apri browser
# 2. Vai su http://localhost:3000
```

### Step 5: Login

1. **Click "Login"** nella homepage
2. **Redirect a Manus OAuth** portal
3. **Login con account Manus**
4. **Redirect back** a http://localhost:3000
5. **Sei loggato!** Vedi dashboard con dati

---

## 7. Testing

### Test Automatici (Vitest)

```bash
# Esegui tutti i test
pnpm test

# Output atteso:
# Test Files  7 passed (7)
# Tests  16 passed (20)
# Duration  1.08s
```

### Test Manuali

#### 1. Dashboard
- [ ] Vai su http://localhost:3000
- [ ] Verifica 4 KPI cards con dati reali
- [ ] Verifica tabella "Prossime Edizioni"
- [ ] Verifica tabella "Iscrizioni Recenti"

#### 2. Studenti
- [ ] Click menu "Studenti"
- [ ] Verifica tabella con 60 studenti (se hai fatto seed)
- [ ] Prova ricerca (es. "Mario")
- [ ] Prova filtro azienda
- [ ] Click "Nuovo Studente"
- [ ] Compila form e crea studente
- [ ] Verifica toast "Studente creato con successo"
- [ ] Click icona occhio 👁️ su uno studente
- [ ] Verifica pagina dettaglio con anagrafica e storico corsi

#### 3. Aziende
- [ ] Click menu "Aziende"
- [ ] Verifica tabella con 20 aziende (se hai fatto seed)
- [ ] Prova ricerca (es. "Acme")
- [ ] Click "Nuova Azienda"
- [ ] Compila form e crea azienda
- [ ] Verifica toast "Azienda creata con successo"
- [ ] Click icona occhio 👁️ su un'azienda
- [ ] Verifica dashboard azienda con KPI e tabelle

#### 4. Corsi
- [ ] Click menu "Corsi"
- [ ] Verifica tabella con 17 corsi (se hai fatto seed)
- [ ] Prova filtro "Solo Attivi"
- [ ] Click "Nuovo Corso"
- [ ] Compila form e crea corso
- [ ] Verifica toast "Corso creato con successo"

#### 5. Edizioni
- [ ] Click menu "Edizioni"
- [ ] Verifica tabella con 35 edizioni (se hai fatto seed)
- [ ] Prova filtri (corso, stato, location)
- [ ] Click "Nuova Edizione"
- [ ] Seleziona corso, date, location, capienza
- [ ] **Seleziona docente dal dropdown** (se hai creato docenti)
- [ ] Crea edizione
- [ ] Verifica toast "Edizione creata con successo"
- [ ] Verifica colonna "Docente" mostra nome docente

#### 6. Iscrizioni
- [ ] Click menu "Iscrizioni"
- [ ] Verifica tabella con 118 iscrizioni (se hai fatto seed)
- [ ] Click "Nuova Iscrizione"
- [ ] Seleziona studente ed edizione
- [ ] Crea iscrizione
- [ ] Verifica toast "Iscrizione creata con successo"
- [ ] Click "Iscrizione Batch"
- [ ] Seleziona azienda → dipendenti → edizione
- [ ] Iscrive tutti
- [ ] Verifica toast "X studenti iscritti con successo"

#### 7. Presenze
- [ ] Click menu "Presenze"
- [ ] Seleziona edizione dal dropdown
- [ ] Seleziona data (es. oggi)
- [ ] Verifica tabella studenti iscritti
- [ ] Click pulsante "Presente" 🟢 per uno studente
- [ ] Verifica toast "Presenza registrata"
- [ ] Verifica barra progresso frequenza aggiornata
- [ ] Prova "Marca tutti come Presente"
- [ ] Verifica toast "X presenze registrate"

#### 8. Docenti
- [ ] Click menu "Docenti"
- [ ] Click "Nuovo Docente"
- [ ] Compila form (nome, cognome, email, specializzazione, tariffa)
- [ ] Crea docente
- [ ] Verifica toast "Docente creato con successo"
- [ ] Verifica KPI cards (corsi tenuti, ore, ricavi)

#### 9. Report
- [ ] Click menu "Report"
- [ ] Verifica 4 KPI cards
- [ ] Verifica 5 grafici interattivi:
   - Edizioni per mese (barre)
   - Ricavi mensili (linea)
   - Ricavi per azienda (torta)
   - Presenze per corso (barre orizzontali)
   - Studenti più attivi (classifica)
- [ ] Prova filtri (periodo, azienda, corso)
- [ ] Click "Export Excel"
- [ ] Verifica download file con 5 fogli

#### 10. Import Excel
- [ ] Vai su "Studenti"
- [ ] Click "Import Excel"
- [ ] Click "Scarica Template"
- [ ] Apri template in Excel
- [ ] Aggiungi 5 righe con dati fittizi
- [ ] Salva file
- [ ] Upload file nel dialog
- [ ] Verifica anteprima con stato validazione
- [ ] Click "Importa"
- [ ] Verifica toast "X/Y studenti importati"

#### 11. Export Excel
- [ ] Vai su ogni pagina (Studenti, Aziende, Corsi, Edizioni, Iscrizioni, Presenze, Docenti)
- [ ] Click "Export Excel" su ognuna
- [ ] Verifica download file `.xlsx`
- [ ] Apri file in Excel e verifica dati

### Test TypeScript

```bash
# Verifica errori TypeScript
pnpm tsc --noEmit

# Output atteso:
# (nessun output = 0 errori)
```

### Test Build Produzione

```bash
# Build per produzione
pnpm build

# Output atteso:
# vite v7.1.7 building for production...
# ✓ XXX modules transformed.
# dist/index.html                   X.XX kB
# dist/assets/index-XXXXX.js        XXX.XX kB
# ✓ built in XXXXms
```

---

## 8. Troubleshooting

### Problema: `pnpm: command not found`

**Soluzione:**
```bash
# Installa pnpm globalmente
npm install -g pnpm

# Oppure usa npx
npx pnpm install
```

### Problema: `Error: Cannot find module 'xxx'`

**Soluzione:**
```bash
# Pulisci node_modules e reinstalla
rm -rf node_modules
rm pnpm-lock.yaml
pnpm install
```

### Problema: `Database connection failed`

**Causa:** Connection string errata o database non raggiungibile

**Soluzione:**
```bash
# 1. Verifica .env
cat .env | grep DATABASE_URL

# 2. Testa connessione MySQL
mysql -u corsi_user -p -h localhost corsi_sicurezza

# 3. Se usi database Manus, verifica che SSL sia abilitato
# Connection string deve contenere: ?ssl={"rejectUnauthorized":true}

# 4. Verifica firewall (se database remoto)
telnet host 3306
```

### Problema: `Port 3000 already in use`

**Soluzione:**
```bash
# Trova processo che usa porta 3000
lsof -i :3000

# Kill processo
kill -9 PID

# Oppure usa porta diversa
PORT=3001 pnpm dev
```

### Problema: `OAuth redirect error`

**Causa:** Mismatch tra URL locale e URL configurato in Manus

**Soluzione:**
1. Vai su Manus → Management UI → Settings → General
2. Verifica "Allowed Redirect URLs"
3. Aggiungi `http://localhost:3000/api/oauth/callback`
4. Salva e riprova login

### Problema: `TypeScript errors`

**Soluzione:**
```bash
# Verifica versione TypeScript
pnpm list typescript

# Reinstalla TypeScript
pnpm add -D typescript@5.9.3

# Pulisci cache TypeScript
rm -rf node_modules/.cache
pnpm tsc --noEmit
```

### Problema: `Test falliti`

**Soluzione:**
```bash
# Verifica quale test fallisce
pnpm test --reporter=verbose

# Se fallisce per duplicati (CF/P.IVA), è normale
# Significa che i constraint UNIQUE funzionano correttamente

# Se fallisce per altro motivo, leggi error message
# e verifica che il database sia popolato
```

### Problema: `Build fallisce`

**Soluzione:**
```bash
# Verifica errori TypeScript
pnpm tsc --noEmit

# Verifica errori ESLint (se configurato)
pnpm lint

# Pulisci dist e rebuilda
rm -rf dist
pnpm build
```

### Problema: `Dati di prova mancanti`

**Soluzione:**
```bash
# Riesegui seed script
pnpm tsx seed-database.mjs

# Se errore "duplicate entry", pulisci database prima
# Vai su Management UI → Database → Truncate All Tables
# Oppure manualmente:
mysql -u corsi_user -p corsi_sicurezza
TRUNCATE TABLE attendances;
TRUNCATE TABLE registrations;
TRUNCATE TABLE courseEditions;
TRUNCATE TABLE courses;
TRUNCATE TABLE students;
TRUNCATE TABLE companies;
TRUNCATE TABLE instructors;
EXIT;

# Poi riesegui seed
pnpm tsx seed-database.mjs
```

---

## 9. Deploy Produzione

### Opzione A: Deploy su Manus (Consigliato)

**Vantaggi:**
- Zero configurazione
- SSL automatico
- Custom domain incluso
- Scaling automatico
- Backup automatico

**Procedura:**

1. **Crea Checkpoint:**
   - Vai su Manus → Chatbox
   - Scrivi: "Salva checkpoint per deploy"
   - Attendi conferma

2. **Pubblica:**
   - Vai su Management UI
   - Click su **Publish** (pulsante in alto a destra)
   - Scegli checkpoint da pubblicare
   - Click "Publish"
   - Attendi deploy (1-2 minuti)

3. **Verifica:**
   - Vai su Management UI → Dashboard
   - Verifica URL pubblico (es. `https://corsi-sicurezza.manus.space`)
   - Apri URL e testa applicazione

4. **Custom Domain (Opzionale):**
   - Vai su Management UI → Settings → Domains
   - Click "Add Custom Domain"
   - Inserisci dominio (es. `gestionale.tuodominio.it`)
   - Segui istruzioni DNS
   - Attendi propagazione (24-48 ore)

### Opzione B: Deploy su VPS (Avanzato)

**Prerequisiti:**
- VPS con Ubuntu 22.04+ (es. DigitalOcean, Linode, AWS EC2)
- Dominio con DNS configurato
- Certificato SSL (Let's Encrypt)

**Procedura:**

#### 1. Prepara VPS

```bash
# SSH nel VPS
ssh root@your-vps-ip

# Aggiorna sistema
apt update && apt upgrade -y

# Installa Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

# Installa pnpm
npm install -g pnpm

# Installa MySQL
apt install -y mysql-server
mysql_secure_installation

# Installa Nginx
apt install -y nginx

# Installa Certbot (SSL)
apt install -y certbot python3-certbot-nginx
```

#### 2. Configura Database

```bash
# Accedi a MySQL
mysql -u root -p

# Crea database e utente
CREATE DATABASE corsi_sicurezza CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'corsi_user'@'localhost' IDENTIFIED BY 'password_sicura_produzione';
GRANT ALL PRIVILEGES ON corsi_sicurezza.* TO 'corsi_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### 3. Deploy Applicazione

```bash
# Crea directory
mkdir -p /var/www/corsi_sicurezza
cd /var/www/corsi_sicurezza

# Clone repository (o upload via SCP)
git clone https://github.com/TUO_USERNAME/corsi_sicurezza.git .

# Installa dipendenze
pnpm install --prod

# Crea .env
nano .env
# (Copia variabili ambiente, usa DATABASE_URL locale)

# Build applicazione
pnpm build

# Migrazione database
pnpm db:push

# Seed database (opzionale)
pnpm tsx seed-database.mjs
```

#### 4. Configura PM2 (Process Manager)

```bash
# Installa PM2
npm install -g pm2

# Avvia applicazione
pm2 start dist/index.js --name corsi-sicurezza

# Configura auto-restart
pm2 startup
pm2 save

# Verifica status
pm2 status
pm2 logs corsi-sicurezza
```

#### 5. Configura Nginx

```bash
# Crea config Nginx
nano /etc/nginx/sites-available/corsi-sicurezza

# Incolla:
server {
    listen 80;
    server_name gestionale.tuodominio.it;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Abilita config
ln -s /etc/nginx/sites-available/corsi-sicurezza /etc/nginx/sites-enabled/

# Testa config
nginx -t

# Riavvia Nginx
systemctl restart nginx
```

#### 6. Configura SSL (Let's Encrypt)

```bash
# Ottieni certificato SSL
certbot --nginx -d gestionale.tuodominio.it

# Segui wizard interattivo
# Scegli opzione 2: Redirect HTTP to HTTPS

# Verifica auto-renewal
certbot renew --dry-run
```

#### 7. Verifica Deploy

```bash
# Apri browser
# Vai su https://gestionale.tuodominio.it
# Verifica che tutto funzioni
```

### Opzione C: Deploy su Vercel/Netlify (Non Consigliato)

**Problema:** Questi servizi sono per frontend statici, non supportano backend Node.js con database.

**Soluzione:** Usa Manus o VPS.

---

## 10. Comandi Utili

### Sviluppo

```bash
# Avvia dev server
pnpm dev

# Build per produzione
pnpm build

# Avvia produzione (dopo build)
pnpm start

# Verifica TypeScript
pnpm tsc --noEmit

# Formatta codice
pnpm format

# Esegui test
pnpm test

# Migrazione database
pnpm db:push

# Seed database
pnpm tsx seed-database.mjs
```

### Database

```bash
# Accedi a MySQL
mysql -u corsi_user -p corsi_sicurezza

# Backup database
mysqldump -u corsi_user -p corsi_sicurezza > backup.sql

# Restore database
mysql -u corsi_user -p corsi_sicurezza < backup.sql

# Verifica tabelle
mysql -u corsi_user -p -e "SHOW TABLES;" corsi_sicurezza

# Conta record
mysql -u corsi_user -p -e "SELECT COUNT(*) FROM students;" corsi_sicurezza
```

### Git

```bash
# Verifica status
git status

# Crea branch
git checkout -b feature/nome-feature

# Commit modifiche
git add .
git commit -m "Descrizione modifiche"

# Push su GitHub
git push origin feature/nome-feature

# Merge su main
git checkout main
git merge feature/nome-feature
```

---

## 11. Checklist Setup Completo

### Pre-Setup
- [ ] Node.js 22+ installato
- [ ] pnpm installato
- [ ] Git installato
- [ ] MySQL installato (se locale)

### Download
- [ ] Codice scaricato da Manus o clonato da GitHub
- [ ] Directory progetto verificata

### Configurazione
- [ ] Dipendenze installate (`pnpm install`)
- [ ] File `.env` creato
- [ ] Variabili ambiente configurate
- [ ] Database connection string verificata

### Database
- [ ] Database creato (locale o Manus)
- [ ] Migrazione applicata (`pnpm db:push`)
- [ ] Seed eseguito (`pnpm tsx seed-database.mjs`)
- [ ] Dati di prova verificati

### Avvio
- [ ] Dev server avviato (`pnpm dev`)
- [ ] Browser aperto su http://localhost:3000
- [ ] Login effettuato con Manus OAuth
- [ ] Dashboard visualizzata con dati

### Testing
- [ ] Test automatici eseguiti (`pnpm test`)
- [ ] Test manuali completati (checklist sopra)
- [ ] TypeScript verificato (`pnpm tsc --noEmit`)
- [ ] Build produzione testata (`pnpm build`)

### Deploy (Opzionale)
- [ ] Checkpoint creato su Manus
- [ ] Pubblicato su Manus
- [ ] URL pubblico verificato
- [ ] Custom domain configurato (opzionale)

---

## 12. Risorse Utili

### Documentazione Progetto
- `README.md` - Documentazione template
- `GUIDA_COMPLETA.md` - Guida completa gestionale
- `VERIFICA_FINALE.md` - Report verifica finale
- `todo.md` - Tracking features

### Documentazione Tecnologie
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [tRPC](https://trpc.io/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

### Community
- [Manus Discord](https://discord.gg/manus)
- [Manus Help Center](https://help.manus.im)

---

## Conclusione

Ora hai il gestionale funzionante in locale! 🎉

**Prossimi Passi:**
1. Esplora tutte le pagine
2. Crea dati di test
3. Personalizza per le tue esigenze
4. Deploy in produzione

**Supporto:**
- Problemi tecnici: [help.manus.im](https://help.manus.im)
- Bug report: Apri issue su GitHub
- Domande: Discord Manus

**Buon lavoro! 🚀**
