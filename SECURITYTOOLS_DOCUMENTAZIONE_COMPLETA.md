# SecurityTools - Gestionale Corsi Sicurezza sul Lavoro

**Sviluppato da B.net srl**  
**Versione:** 1.0.0  
**Data:** 13 Gennaio 2026  
**Conforme a:** D.Lgs. 81/08 e Accordo Stato-Regioni 2025

---

## 📋 Indice

1. [Panoramica Generale](#panoramica-generale)
2. [Obiettivi del Progetto](#obiettivi-del-progetto)
3. [Funzionalità Implementate](#funzionalità-implementate)
4. [Architettura Tecnica](#architettura-tecnica)
5. [Database Schema](#database-schema)
6. [API Backend](#api-backend)
7. [Frontend Pagine](#frontend-pagine)
8. [Conformità Normativa](#conformità-normativa)
9. [TODO List Prioritaria](#todo-list-prioritaria)
10. [Guida per Nuovi Agenti AI](#guida-per-nuovi-agenti-ai)
11. [Best Practices](#best-practices)
12. [Contatti](#contatti)

---

## 🎯 Panoramica Generale

**SecurityTools** è una piattaforma web completa per la gestione di un ente di formazione professionale specializzato in corsi di sicurezza sul lavoro conformi al D.Lgs. 81/08 (Testo Unico sulla Sicurezza).

Il gestionale permette di:
- Gestire anagrafiche studenti e aziende clienti
- Catalogare corsi standardizzati (RSPP, RLS, Antincendio, Primo Soccorso, etc.)
- Programmare edizioni corsi con docenti, location e capienza
- Gestire iscrizioni singole e batch per aziende
- Registrare presenze giornaliere con calcolo statistiche
- Generare report operativi e dashboard KPI
- Importare/esportare dati massivamente da Excel

---

## 🎯 Obiettivi del Progetto

### Obiettivi Primari
1. **Digitalizzazione completa** del processo formativo
2. **Conformità normativa** al D.Lgs. 81/08 e Accordo Stato-Regioni 2025
3. **Efficienza operativa** con automazioni e validazioni
4. **Tracciabilità completa** di studenti, corsi e presenze
5. **Reportistica avanzata** per supporto decisionale

### Obiettivi Secondari
1. Riduzione errori manuali con validazioni automatiche
2. Prevenzione duplicati studenti/aziende
3. Gestione semplificata iscrizioni aziendali
4. Dashboard KPI real-time per monitoraggio
5. Export dati per rendicontazione clienti

---

## ✅ Funzionalità Implementate

### 1. Gestione Studenti
- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Validazione codice fiscale (16 caratteri)
- ✅ Validazione email e telefono
- ✅ Ricerca full-text (nome, cognome, email, CF)
- ✅ Filtro per azienda di appartenenza
- ✅ Paginazione server-side (20 record/pagina)
- ✅ Export massivo Excel
- ✅ Import massivo Excel con validazione e gestione duplicati
- ✅ Pagina dettaglio studente con:
  - Card anagrafica completa
  - Storico corsi frequentati
  - Statistiche presenze per corso
  - Badge stato corso (completato/in corso/cancellato)
  - KPI: corsi totali, completati, tasso frequenza

### 2. Gestione Aziende
- ✅ CRUD completo
- ✅ Validazione partita IVA (11 cifre)
- ✅ Ricerca per nome, P.IVA, email
- ✅ Export massivo Excel
- ✅ Import massivo Excel con validazione duplicati
- ✅ Dashboard azienda con:
  - Card anagrafica completa
  - Lista dipendenti iscritti
  - Corsi frequentati dai dipendenti
  - KPI: dipendenti, corsi, spesa totale, presenze
  - Export report Excel personalizzato per azienda

### 3. Catalogo Corsi
- ✅ CRUD completo
- ✅ 17 corsi standardizzati pre-caricati (RSPP, RLS, Antincendio, Primo Soccorso, etc.)
- ✅ Gestione durata ore e prezzi
- ✅ Filtro attivi/inattivi
- ✅ Ricerca per titolo, codice, tipologia
- ✅ Export Excel

### 4. Edizioni Corsi (Aule)
- ✅ CRUD completo
- ✅ Programmazione con date inizio/fine
- ✅ Gestione location e capienza massima
- ✅ Assegnazione docente con dropdown
- ✅ Stati: Programmato, In Corso, Completato, Annullato
- ✅ Filtri multipli (corso, stato, location)
- ✅ Calcolo automatico posti disponibili
- ✅ Export Excel

### 5. Iscrizioni
- ✅ CRUD completo
- ✅ Iscrizione singola studente
- ✅ **Iscrizione batch per azienda** (seleziona azienda → dipendenti → iscrive tutti)
- ✅ Validazione capienza automatica
- ✅ Prevenzione duplicati (studente già iscritto)
- ✅ Gestione stati (confirmed, cancelled, completed)
- ✅ Filtri per edizione e stato
- ✅ Export Excel

### 6. Presenze
- ✅ Registro giornaliero per edizione
- ✅ Selezione data per registro
- ✅ Stati: Presente, Assente, Ritardo, Giustificato
- ✅ **Marcatura rapida** individuale con pulsanti colorati
- ✅ **Marcatura batch** per tutta la classe
- ✅ Calcolo automatico statistiche frequenza per studente
- ✅ KPI: studenti iscritti, presenze totali, frequenza media
- ✅ Export report Excel

### 7. Gestione Docenti
- ✅ CRUD completo
- ✅ Anagrafica (nome, cognome, email, telefono)
- ✅ Specializzazione e tariffa oraria
- ✅ Dashboard docente con KPI:
  - Totale corsi tenuti
  - Ore totali insegnamento
  - Ricavi generati (somma iscrizioni)
  - Edizioni programmate future
- ✅ Ricerca per nome, cognome, email, specializzazione
- ✅ Export Excel
- ✅ Assegnazione docente a edizione corso

### 8. Report Operativi
- ✅ Dashboard con 4 KPI cards
- ✅ 5 grafici interattivi (Recharts):
  - Edizioni per mese (grafico a barre)
  - Ricavi mensili (grafico linea)
  - Ricavi per azienda Top 6 (grafico torta)
  - Tasso presenze per corso (grafico a barre orizzontale)
  - Studenti più attivi (classifica)
- ✅ Filtri dinamici (periodo, azienda, corso)
- ✅ Export Excel completo con 5 fogli

### 9. Dashboard Principale
- ✅ 4 KPI cards real-time:
  - Studenti Totali
  - Corsi Attivi
  - Edizioni Programmate
  - Tasso Riempimento
- ✅ Prossime Edizioni in arrivo
- ✅ Iscrizioni Recenti
- ✅ Dati aggiornati in tempo reale dal database

### 10. Sistema di Navigazione
- ✅ Sidebar menu con 9 voci
- ✅ Breadcrumbs su tutte le pagine
- ✅ Link rapidi tra sezioni correlate
- ✅ Icona "occhio" per dettagli studenti/aziende
- ✅ Responsive design (desktop, tablet, mobile)

### 11. Importazione/Esportazione Dati
- ✅ Template Excel pre-formattati scaricabili
- ✅ Import massivo con validazione:
  - Codice fiscale (16 caratteri)
  - Partita IVA (11 cifre)
  - Email (formato valido)
  - Rilevamento duplicati automatico
- ✅ Anteprima dati prima dell'importazione
- ✅ Report errori dettagliato con numero riga
- ✅ Export Excel per tutte le entità

---

## 🏗️ Architettura Tecnica

### Stack Tecnologico

**Frontend:**
- React 19 + TypeScript
- Tailwind CSS 4 (design system professionale)
- Wouter (routing)
- TanStack Query (state management)
- shadcn/ui (componenti UI)
- Recharts (grafici)
- XLSX (import/export Excel)

**Backend:**
- Node.js 22
- Express 4
- tRPC 11 (type-safe API)
- Zod (validazione)
- Superjson (serializzazione Date)

**Database:**
- MySQL/TiDB
- Drizzle ORM
- 8 tabelle relazionali

**Autenticazione:**
- Manus OAuth
- Ruoli: admin, user

**Hosting:**
- Manus Platform (built-in)
- Custom domain support

### Struttura File

```
corsi_sicurezza/
├── client/
│   ├── src/
│   │   ├── pages/              # 11 pagine
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Students.tsx
│   │   │   ├── StudentDetail.tsx
│   │   │   ├── Companies.tsx
│   │   │   ├── CompanyDetail.tsx
│   │   │   ├── Courses.tsx
│   │   │   ├── Editions.tsx
│   │   │   ├── Registrations.tsx
│   │   │   ├── Attendances.tsx
│   │   │   ├── Instructors.tsx
│   │   │   └── Reports.tsx
│   │   ├── components/
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   ├── ImportDialog.tsx
│   │   │   └── ui/             # shadcn/ui components
│   │   ├── lib/trpc.ts
│   │   └── index.css
├── server/
│   ├── routers.ts              # 8 router tRPC
│   ├── db.ts                   # Query helpers
│   ├── db-instructors.ts
│   └── _core/                  # Framework core
├── drizzle/
│   └── schema.ts               # Database schema
├── shared/
│   └── const.ts
└── package.json
```

---

## 🗄️ Database Schema

### Tabelle (8)

#### 1. users
Utenti sistema con autenticazione OAuth.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | INT | PK auto-increment |
| openId | VARCHAR(64) | OAuth ID (UNIQUE) |
| name | TEXT | Nome completo |
| email | VARCHAR(320) | Email |
| loginMethod | VARCHAR(64) | Metodo login (google, manus) |
| role | ENUM | admin / user |
| createdAt | TIMESTAMP | Data creazione |
| updatedAt | TIMESTAMP | Ultimo aggiornamento |
| lastSignedIn | TIMESTAMP | Ultimo accesso |

#### 2. companies
Aziende clienti.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | INT | PK auto-increment |
| name | TEXT | Ragione sociale |
| vatNumber | VARCHAR(11) | Partita IVA (UNIQUE) |
| email | VARCHAR(320) | Email |
| phone | VARCHAR(20) | Telefono |
| address | TEXT | Indirizzo completo |
| contactPerson | TEXT | Referente aziendale |
| createdAt | TIMESTAMP | Data creazione |
| updatedAt | TIMESTAMP | Ultimo aggiornamento |

#### 3. students
Studenti con anagrafica completa.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | INT | PK auto-increment |
| firstName | TEXT | Nome |
| lastName | TEXT | Cognome |
| fiscalCode | VARCHAR(16) | Codice fiscale (UNIQUE) |
| email | VARCHAR(320) | Email |
| phone | VARCHAR(20) | Telefono |
| birthDate | DATE | Data di nascita |
| birthPlace | TEXT | Luogo di nascita |
| address | TEXT | Indirizzo completo |
| companyId | INT | FK → companies.id |
| createdAt | TIMESTAMP | Data creazione |
| updatedAt | TIMESTAMP | Ultimo aggiornamento |

#### 4. courses
Catalogo corsi standardizzati.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | INT | PK auto-increment |
| title | TEXT | Titolo corso |
| code | VARCHAR(50) | Codice univoco |
| type | VARCHAR(100) | Tipologia (RSPP, RLS, etc.) |
| durationHours | INT | Durata in ore |
| defaultPrice | INT | Prezzo default (centesimi) |
| description | TEXT | Descrizione |
| isActive | TINYINT | 1=attivo, 0=inattivo |
| createdAt | TIMESTAMP | Data creazione |
| updatedAt | TIMESTAMP | Ultimo aggiornamento |

#### 5. courseEditions
Edizioni/Aule programmate.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | INT | PK auto-increment |
| courseId | INT | FK → courses.id |
| startDate | DATE | Data inizio |
| endDate | DATE | Data fine |
| location | TEXT | Luogo (città - sede) |
| maxParticipants | INT | Capienza massima |
| price | INT | Prezzo edizione (centesimi) |
| instructorId | INT | FK → instructors.id |
| status | ENUM | scheduled/ongoing/completed/cancelled |
| createdAt | TIMESTAMP | Data creazione |
| updatedAt | TIMESTAMP | Ultimo aggiornamento |

#### 6. registrations
Iscrizioni studenti a edizioni.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | INT | PK auto-increment |
| studentId | INT | FK → students.id |
| courseEditionId | INT | FK → courseEditions.id |
| registrationDate | DATE | Data iscrizione |
| priceApplied | INT | Prezzo applicato (centesimi) |
| status | ENUM | confirmed/cancelled/completed |
| createdAt | TIMESTAMP | Data creazione |
| updatedAt | TIMESTAMP | Ultimo aggiornamento |

**Constraint:** UNIQUE(studentId, courseEditionId) per prevenire duplicati.

#### 7. attendances
Presenze giornaliere.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | INT | PK auto-increment |
| registrationId | INT | FK → registrations.id |
| studentId | INT | FK → students.id |
| courseEditionId | INT | FK → courseEditions.id |
| attendanceDate | DATE | Data presenza |
| status | ENUM | present/absent/late/justified |
| notes | TEXT | Note |
| createdAt | TIMESTAMP | Data creazione |
| updatedAt | TIMESTAMP | Ultimo aggiornamento |

#### 8. instructors
Docenti.

| Campo | Tipo | Descrizione |
|-------|------|-------------|
| id | INT | PK auto-increment |
| firstName | TEXT | Nome |
| lastName | TEXT | Cognome |
| email | VARCHAR(320) | Email |
| phone | VARCHAR(20) | Telefono |
| specialization | TEXT | Specializzazione |
| hourlyRate | INT | Tariffa oraria (centesimi) |
| notes | TEXT | Note |
| isActive | TINYINT | 1=attivo, 0=inattivo |
| createdAt | TIMESTAMP | Data creazione |
| updatedAt | TIMESTAMP | Ultimo aggiornamento |

### Relazioni

```
companies (1) ──< (N) students
courses (1) ──< (N) courseEditions
instructors (1) ──< (N) courseEditions
students (1) ──< (N) registrations
courseEditions (1) ──< (N) registrations
registrations (1) ──< (N) attendances
```

---

## 🔌 API Backend

### Router tRPC (8)

#### 1. auth
- `me` - Ottieni utente corrente
- `logout` - Logout
- `demoLogin` - Login demo (testing)

#### 2. companies
- `list` - Lista aziende con ricerca
- `getById` - Dettaglio azienda
- `create` - Crea azienda
- `update` - Aggiorna azienda
- `delete` - Elimina azienda

#### 3. students
- `list` - Lista studenti con paginazione e ricerca
- `getById` - Dettaglio studente con storico corsi
- `create` - Crea studente
- `update` - Aggiorna studente
- `delete` - Elimina studente

#### 4. courses
- `list` - Lista corsi con filtri
- `create` - Crea corso
- `update` - Aggiorna corso
- `delete` - Elimina corso

#### 5. courseEditions
- `list` - Lista edizioni con filtri
- `getById` - Dettaglio edizione
- `create` - Crea edizione
- `update` - Aggiorna edizione
- `delete` - Elimina edizione
- `getStats` - Statistiche edizione (iscritti, posti liberi)

#### 6. registrations
- `list` - Lista iscrizioni con filtri
- `create` - Crea iscrizione singola
- `batchCreate` - Crea iscrizioni batch per azienda
- `update` - Aggiorna iscrizione
- `delete` - Elimina iscrizione

#### 7. attendances
- `list` - Lista presenze con filtri
- `create` - Registra presenza
- `batchMark` - Marcatura batch classe
- `update` - Aggiorna presenza
- `delete` - Elimina presenza

#### 8. instructors
- `list` - Lista docenti con ricerca
- `getById` - Dettaglio docente
- `create` - Crea docente
- `update` - Aggiorna docente
- `delete` - Elimina docente
- `stats` - Statistiche docente (corsi, ore, ricavi)

#### 9. dashboard
- `getStats` - KPI dashboard principale

---

## 🖥️ Frontend Pagine

### 1. Dashboard (/)
Panoramica generale con KPI real-time.

**Componenti:**
- 4 KPI cards (studenti, corsi, edizioni, riempimento)
- Prossime edizioni in arrivo
- Iscrizioni recenti

### 2. Studenti (/students)
Gestione completa studenti.

**Funzionalità:**
- Tabella con paginazione (20/pagina)
- Ricerca full-text
- Filtro per azienda
- CRUD completo
- Import/Export Excel
- Icona occhio → Dettaglio studente

### 3. Dettaglio Studente (/students/:id)
Vista completa studente.

**Componenti:**
- Card anagrafica
- 4 KPI (corsi, completati, presenze, frequenza)
- Tabella storico corsi con presenze

### 4. Aziende (/companies)
Gestione aziende clienti.

**Funzionalità:**
- Tabella con ricerca
- CRUD completo
- Import/Export Excel
- Icona occhio → Dashboard azienda

### 5. Dashboard Azienda (/companies/:id)
Vista completa azienda.

**Componenti:**
- Card anagrafica
- 4 KPI (dipendenti, corsi, spesa, presenze)
- Tabella dipendenti iscritti
- Tabella corsi frequentati
- Export report Excel personalizzato

### 6. Corsi (/courses)
Catalogo corsi.

**Funzionalità:**
- Tabella con filtro attivi/inattivi
- Ricerca per titolo, codice, tipo
- CRUD completo
- Export Excel

### 7. Edizioni (/editions)
Programmazione edizioni/aule.

**Funzionalità:**
- Tabella con filtri (corso, stato, location)
- Selezione docente con dropdown
- Badge stati colorati
- CRUD completo
- Export Excel

### 8. Iscrizioni (/registrations)
Gestione iscrizioni.

**Funzionalità:**
- Tabella con filtri (edizione, stato)
- Iscrizione singola
- **Iscrizione batch per azienda**
- Validazione capienza
- CRUD completo
- Export Excel

### 9. Presenze (/attendances)
Registro presenze.

**Funzionalità:**
- Selezione data
- Marcatura rapida individuale
- **Marcatura batch classe**
- Stati colorati (presente/assente/ritardo/giustificato)
- Statistiche frequenza per studente
- Export report Excel

### 10. Docenti (/instructors)
Gestione docenti.

**Funzionalità:**
- Tabella con ricerca
- Dashboard KPI per docente
- CRUD completo
- Export Excel

### 11. Report (/reports)
Report operativi avanzati.

**Componenti:**
- 4 KPI cards
- 5 grafici interattivi (Recharts)
- Filtri dinamici
- Export Excel completo

---

## ⚖️ Conformità Normativa

### D.Lgs. 81/08 (Testo Unico Sicurezza)

**Articoli Rilevanti:**
- Art. 36-37: Formazione obbligatoria lavoratori
- Art. 32: Formazione RSPP/ASPP
- Art. 43: Formazione addetti emergenze
- Art. 45: Formazione primo soccorso

**Conformità SecurityTools:**
- ✅ Catalogo corsi standardizzati per tutte le figure
- ✅ Tracciabilità completa presenze
- ✅ Calcolo automatico ore formazione
- ✅ Storico corsi per studente
- ✅ Report per rendicontazione

### Accordo Stato-Regioni 2025

**Novità 2025:**
- Durate corsi aggiornate (Preposti: 12 ore, Dirigenti: 12 ore)
- Moduli RSPP/ASPP: 5 moduli distinti
- Modalità e-learning specificate

**Conformità SecurityTools:**
- ✅ Durate corsi configurabili
- ✅ Tipologie corso aggiornate
- ✅ Sistema flessibile per future modifiche

### Decreto Legge 159/2025

**Novità:**
- Sanzioni raddoppiate (€6.000 → €12.000)
- Badge Digitale di Cantiere obbligatorio
- Fascicolo Elettronico del Lavoratore

**Preparazione SecurityTools:**
- ✅ Anagrafica studenti completa
- ✅ Storico formazione tracciato
- ⏳ TODO: Export per Badge Digitale
- ⏳ TODO: Integrazione Fascicolo Elettronico

---

## 📝 TODO List Prioritaria

### Priorità ALTA (Funzionalità Core Mancanti)

#### 1. Sistema Generazione Attestati PDF
**Obiettivo:** Generare automaticamente attestati conformi D.Lgs. 81/08.

**Requisiti:**
- Template PDF personalizzabile
- Dati studente, corso, edizione, presenze
- QR code per verifica autenticità
- Firma digitale docente
- Logo aziendale personalizzabile
- Invio automatico via email al completamento corso
- Archiviazione PDF nel database o S3

**Implementazione:**
- Libreria: `pdfkit` o `puppeteer`
- Template: HTML + CSS → PDF
- QR code: `qrcode` npm package
- Email: Manus Notification API o SMTP
- Storage: S3 (già configurato)

**Stima:** 8-12 ore

---

#### 2. Scadenzario Attestati e Notifiche Email
**Obiettivo:** Notificare automaticamente scadenze corsi.

**Requisiti:**
- Calcolo scadenza attestato (data corso + validità)
- Notifiche email automatiche:
  - Promemoria edizioni in partenza (7 giorni prima)
  - Conferme iscrizione
  - Solleciti presenze mancanti
  - Scadenze attestati (30/60/90 giorni prima)
- Template email personalizzabili
- Dashboard scadenze in home

**Implementazione:**
- Cron job o scheduled task
- Manus Notification API
- Template email con variabili dinamiche
- Tabella `notifications` per tracking

**Stima:** 6-8 ore

---

#### 3. Export per Badge Digitale di Cantiere
**Obiettivo:** Conformità Decreto Legge 159/2025.

**Requisiti:**
- Export dati studente in formato richiesto
- Integrazione con sistema Badge Digitale (API da definire)
- Verifica requisiti formativi per abilitazione badge

**Implementazione:**
- Endpoint API per export dati
- Formato XML/JSON secondo specifiche
- Validazione requisiti formativi

**Stima:** 4-6 ore (dipende da specifiche API)

---

### Priorità MEDIA (Miglioramenti UX)

#### 4. Filtro Docente in Pagina Edizioni
**Obiettivo:** Filtrare edizioni per docente assegnato.

**Requisiti:**
- Dropdown docenti nel filtro
- Query backend con filtro `instructorId`

**Stima:** 1-2 ore

---

#### 5. Calcolo Compenso Docente
**Obiettivo:** Calcolare automaticamente compenso docente.

**Requisiti:**
- Formula: `ore corso × tariffa oraria`
- Visualizzazione in dashboard docente
- Export Excel con compensi

**Stima:** 2-3 ore

---

#### 6. Vista Calendario Presenze Mensile
**Obiettivo:** Visualizzare presenze studente in formato calendario.

**Requisiti:**
- Heatmap mensile con colori per stato
- Filtro per studente e mese
- Libreria: `react-calendar` o custom

**Stima:** 4-6 ore

---

#### 7. Validazione Lato Client con Feedback Visivo
**Obiettivo:** Migliorare UX con validazione immediata.

**Requisiti:**
- Bordi rossi su campi invalidi
- Messaggi errore sotto i campi
- Validazione real-time (onChange)
- Validazioni: CF, P.IVA, email, telefono

**Stima:** 3-4 ore

---

#### 8. Toast Conferma con Undo Button
**Obiettivo:** Prevenire eliminazioni accidentali.

**Requisiti:**
- Toast dopo ogni operazione CRUD
- Undo button per eliminazioni (5 secondi)
- Rollback automatico se undo

**Stima:** 2-3 ore

---

### Priorità BASSA (Ottimizzazioni)

#### 9. Verifica Altri Select con Value Vuoto
**Obiettivo:** Prevenire errori React.

**Requisiti:**
- Audit di tutti i `<SelectItem>` nella codebase
- Sostituire `value=""` con `value="none"`
- Aggiornare logica submit

**Stima:** 1-2 ore

---

#### 10. Integrazione Fascicolo Elettronico Lavoratore
**Obiettivo:** Conformità Decreto Legge 159/2025.

**Requisiti:**
- Integrazione con sistema INAIL (API da definire)
- Export dati formazione per fascicolo
- Sincronizzazione automatica

**Stima:** 6-10 ore (dipende da specifiche API)

---

#### 11. Sistema Ruoli Avanzato
**Obiettivo:** Gestire permessi granulari.

**Requisiti:**
- Ruoli: admin, manager, operator, viewer
- Permessi per entità (students, companies, etc.)
- Middleware autorizzazione backend
- UI condizionale frontend

**Stima:** 8-12 ore

---

#### 12. Dashboard Personalizzabile
**Obiettivo:** Permettere personalizzazione dashboard.

**Requisiti:**
- Widget drag-and-drop
- Salvataggio preferenze utente
- Widget disponibili: KPI, grafici, tabelle

**Stima:** 12-16 ore

---

## 🤖 Guida per Nuovi Agenti AI

### Cosa Serve per Questo Gestionale

**SecurityTools** è un gestionale completo per enti di formazione sulla sicurezza sul lavoro. Serve per:

1. **Gestire anagrafiche** di studenti e aziende clienti
2. **Programmare corsi** con edizioni, docenti e location
3. **Gestire iscrizioni** singole e batch per aziende
4. **Registrare presenze** giornaliere con statistiche
5. **Generare report** operativi per supporto decisionale
6. **Conformità normativa** al D.Lgs. 81/08

### Cosa Deve Creare un Nuovo Agente AI

Quando un nuovo agente AI deve continuare lo sviluppo di SecurityTools, deve:

#### 1. Leggere Documentazione Esistente
- `SECURITYTOOLS_DOCUMENTAZIONE_COMPLETA.md` (questo file)
- `GUIDA_COMPLETA.md` (guida tecnica dettagliata)
- `SETUP_LOCALE.md` (setup ambiente sviluppo)
- `VERIFICA_FINALE.md` (checklist qualità)
- `todo.md` (stato avanzamento)

#### 2. Comprendere Architettura
- Stack: React 19 + Node.js 22 + MySQL + tRPC
- Database: 8 tabelle relazionali
- Frontend: 11 pagine con routing
- Backend: 8 router tRPC

#### 3. Seguire Best Practices

**Database:**
- Usare Drizzle ORM per query
- Aggiungere helper in `server/db.ts`
- Migrazioni con `pnpm db:push`

**Backend:**
- Creare router in `server/routers.ts`
- Validazione con Zod
- Procedure: `publicProcedure` o `protectedProcedure`

**Frontend:**
- Pagine in `client/src/pages/`
- Componenti riutilizzabili in `client/src/components/`
- Usare `trpc.*.useQuery/useMutation` per API
- Shadcn/ui per componenti UI
- Tailwind CSS per styling

**Testing:**
- Scrivere test vitest in `server/*.test.ts`
- Eseguire `pnpm test` prima di checkpoint
- Obiettivo: 100% copertura router

#### 4. Workflow Sviluppo

1. **Leggere TODO List** in questo documento
2. **Aggiornare `todo.md`** con nuove task
3. **Implementare feature** seguendo architettura esistente
4. **Scrivere test vitest** per nuove API
5. **Testare manualmente** nel browser
6. **Aggiornare documentazione** se necessario
7. **Creare checkpoint** con `webdev_save_checkpoint`

#### 5. Priorità Implementazione

Seguire l'ordine della TODO List Prioritaria:

1. **ALTA:** Attestati PDF, Scadenzario, Badge Digitale
2. **MEDIA:** Filtri, Compensi, Calendario, Validazioni
3. **BASSA:** Ottimizzazioni, Integrazioni avanzate

#### 6. Comunicazione con Utente

- Spiegare cosa si sta implementando
- Mostrare progress con `info` messages
- Chiedere conferma per scelte architetturali importanti
- Fornire checkpoint frequenti per review

---

## 🎯 Best Practices

### Sviluppo

1. **Minimale e Solido:** Implementare solo il necessario, no over-engineering
2. **Type-Safe:** Usare TypeScript e Zod per validazioni
3. **DRY:** Evitare duplicazione codice, creare helper riutilizzabili
4. **Logging:** Aggiungere console.log per debugging
5. **Error Handling:** Gestire errori con try-catch e toast notifications

### Database

1. **Migrazioni:** Sempre usare `pnpm db:push` per modifiche schema
2. **Indici:** Aggiungere indici su campi ricerca frequente
3. **Constraint:** Usare UNIQUE per prevenire duplicati
4. **Foreign Keys:** Mantenere integrità referenziale

### Frontend

1. **Componenti Riutilizzabili:** Estrarre logica comune in componenti
2. **Loading States:** Mostrare skeleton/spinner durante caricamento
3. **Error States:** Gestire errori con messaggi utente-friendly
4. **Responsive:** Testare su mobile, tablet, desktop
5. **Accessibilità:** Usare label, aria-label, keyboard navigation

### Backend

1. **Validazione Input:** Sempre validare con Zod
2. **Autorizzazione:** Usare `protectedProcedure` per API protette
3. **Paginazione:** Implementare per liste lunghe
4. **Caching:** Usare TanStack Query per cache client-side

### Testing

1. **Unit Test:** Testare ogni router tRPC
2. **Integration Test:** Testare flussi completi
3. **Manual Test:** Testare UI nel browser
4. **Edge Cases:** Testare casi limite (duplicati, validazioni, etc.)

---

## 📞 Contatti

**Sviluppato da:**  
**B.net srl**

**Sito Web:** [https://www.bnet.it](https://www.bnet.it)  
**Email:** info@bnet.it  
**Telefono:** +39 XXX XXX XXXX

**Supporto Tecnico:**  
**Email:** support@bnet.it

---

## 📄 Licenza

© 2026 B.net srl. Tutti i diritti riservati.

Questo software è proprietario e confidenziale. Non è permesso copiare, modificare, distribuire o utilizzare questo software senza autorizzazione scritta di B.net srl.

---

## 🔄 Changelog

### Versione 1.0.0 (13 Gennaio 2026)
- ✅ Rilascio iniziale
- ✅ 11 pagine complete
- ✅ 8 router tRPC
- ✅ 8 tabelle database
- ✅ Import/Export Excel
- ✅ Dashboard KPI
- ✅ Report operativi
- ✅ Gestione docenti
- ✅ Iscrizioni batch
- ✅ Presenze con marcatura rapida
- ✅ 20 test vitest
- ✅ 0 errori TypeScript
- ✅ Conformità D.Lgs. 81/08

---

**Fine Documentazione**

Per domande o supporto, contattare B.net srl.
