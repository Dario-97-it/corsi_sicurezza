# Gestionale Corsi Sicurezza sul Lavoro

Piattaforma web completa per la gestione di un ente di formazione professionale specializzato in corsi di sicurezza sul lavoro (D.Lgs. 81/08).

## 🎯 Caratteristiche Principali

### Gestione Anagrafica
- **Studenti**: Anagrafica completa con codice fiscale, email, telefono, data di nascita, luogo di nascita, indirizzo
- **Aziende**: Gestione clienti con partita IVA, referenti, dipendenti associati
- **Validazioni**: Controllo automatico duplicati per codice fiscale e partita IVA

### Catalogo Corsi
- 17 corsi standardizzati conformi al D.Lgs. 81/08 e Accordo Stato-Regioni 2025:
  - RSPP Datore di Lavoro (Rischio Basso/Medio/Alto)
  - RLS - Rappresentante dei Lavoratori per la Sicurezza
  - Antincendio (Rischio Basso/Medio/Alto)
  - Primo Soccorso (Gruppo A e B/C)
  - Preposti alla Sicurezza (12 ore)
  - Dirigenti per la Sicurezza (12 ore)
  - Formazione Lavoratori (Generale e Specifica)

### Programmazione Edizioni
- Creazione edizioni/aule con date, location, capienza, docenti
- Stati: scheduled, ongoing, completed, cancelled
- Calcolo automatico posti disponibili e tasso riempimento

### Sistema Iscrizioni
- Iscrizione singola o batch per aziende
- Validazione capienza automatica
- Prevenzione duplicati (studente + edizione)
- Tracciamento prezzi applicati e note

### Registro Presenze
- Presenze giornaliere con stati: present, absent, late, justified
- Calcolo statistiche frequenza
- Storico completo per studente

### Dashboard KPI
- Totale studenti registrati
- Corsi attivi disponibili
- Edizioni programmate in calendario
- Tasso riempimento posti
- Prossime edizioni e iscrizioni recenti

## 🛠️ Stack Tecnologico

### Frontend
- **React 19** con TypeScript
- **Tailwind CSS 4** per styling
- **shadcn/ui** per componenti UI
- **tRPC** per type-safe API calls
- **Wouter** per routing
- **Sonner** per toast notifications

### Backend
- **Node.js 22** con Express
- **tRPC 11** per API type-safe
- **Drizzle ORM** per database
- **Zod** per validazioni
- **Superjson** per serializzazione

### Database
- **MySQL/TiDB** con schema ottimizzato
- 7 tabelle principali con relazioni
- Constraint UNIQUE su campi critici
- Indici per performance

### Autenticazione
- **Manus OAuth** integrato
- Gestione ruoli (admin/user)
- Session cookie sicuri

## 📦 Installazione e Setup

### Prerequisiti
- Node.js 22+
- pnpm
- Database MySQL/TiDB

### Installazione Dipendenze
```bash
pnpm install
```

### Configurazione Database
Le variabili d'ambiente sono già configurate automaticamente da Manus:
- `DATABASE_URL`: Connection string MySQL/TiDB
- `JWT_SECRET`: Secret per session cookies
- `VITE_APP_ID`: Manus OAuth app ID

### Migrazione Database
```bash
pnpm db:push
```

### Popolamento Dati di Prova
```bash
pnpm tsx seed-database.mjs
```

Questo script inserisce:
- 20 aziende clienti
- 60 studenti con dati realistici
- 17 corsi standardizzati
- 35 edizioni programmate
- 118 iscrizioni confermate
- 250+ presenze registrate

### Avvio Sviluppo
```bash
pnpm dev
```

Il server sarà disponibile su `http://localhost:3000`

### Build Produzione
```bash
pnpm build
pnpm start
```

## 📚 Struttura Progetto

```
corsi_sicurezza/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componenti UI riutilizzabili
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   └── DashboardLayout.tsx
│   │   ├── pages/        # Pagine applicazione
│   │   │   ├── Dashboard.tsx
│   │   │   └── NotFound.tsx
│   │   ├── lib/          # Utilities
│   │   │   └── trpc.ts   # tRPC client
│   │   ├── App.tsx       # Routing principale
│   │   └── index.css     # Stili globali
│   └── public/           # Asset statici
├── server/               # Backend Node.js
│   ├── _core/           # Framework core (OAuth, context, etc.)
│   ├── db.ts            # Query helpers Drizzle
│   ├── routers.ts       # tRPC routers e procedures
│   └── *.test.ts        # Test Vitest
├── drizzle/             # Database schema e migrations
│   └── schema.ts        # Definizione tabelle
├── shared/              # Codice condiviso client/server
├── seed-database.mjs    # Script popolamento dati
├── todo.md              # Tracking features
└── README.md            # Questa documentazione
```

## 🔌 API tRPC

### Router Disponibili

#### `auth`
- `me`: Ottieni utente corrente
- `logout`: Effettua logout

#### `companies`
- `list`: Lista aziende con ricerca
- `create`: Crea nuova azienda
- `update`: Aggiorna azienda
- `delete`: Elimina azienda

#### `students`
- `list`: Lista studenti con paginazione e ricerca
- `getById`: Dettaglio studente
- `create`: Crea nuovo studente
- `update`: Aggiorna studente
- `delete`: Elimina studente

#### `courses`
- `list`: Lista corsi con filtro attivi
- `create`: Crea nuovo corso
- `update`: Aggiorna corso
- `delete`: Elimina corso

#### `courseEditions`
- `list`: Lista edizioni con filtri
- `create`: Crea nuova edizione
- `update`: Aggiorna edizione
- `delete`: Elimina edizione

#### `registrations`
- `list`: Lista iscrizioni con filtri
- `create`: Crea nuova iscrizione
- `update`: Aggiorna iscrizione
- `delete`: Elimina iscrizione

#### `attendances`
- `list`: Lista presenze con filtri
- `create`: Registra presenza
- `update`: Aggiorna presenza
- `delete`: Elimina presenza

#### `dashboard`
- `stats`: Statistiche KPI complete

### Esempio Utilizzo API

```typescript
// Nel componente React
import { trpc } from "@/lib/trpc";

function StudentsPage() {
  const { data, isLoading } = trpc.students.list.useQuery({
    page: 1,
    limit: 50,
    search: "Mario"
  });

  const createMutation = trpc.students.create.useMutation({
    onSuccess: () => {
      // Invalida cache per refresh
      trpc.useUtils().students.list.invalidate();
    }
  });

  return (
    // UI components
  );
}
```

## 🎨 Design e UI

### Tema Professionale
- Font: **Inter** (Google Fonts)
- Colori: Palette blu professionale con accenti verdi
- Layout: Dashboard con sidebar persistente
- Responsive: Mobile-first design

### Componenti Principali
- **DashboardLayout**: Layout principale con sidebar navigazione
- **KPI Cards**: Cards statistiche dashboard
- **Data Tables**: Tabelle con paginazione e ricerca
- **Forms**: Form validati con React Hook Form + Zod
- **Modals**: Dialog per CRUD operations
- **Toast**: Notifiche successo/errore

## 📊 Database Schema

### Tabelle

#### `users`
Utenti autenticati con Manus OAuth
- `id`, `openId`, `name`, `email`, `role`, `createdAt`, `updatedAt`, `lastSignedIn`

#### `companies`
Aziende clienti
- `id`, `name`, `vatNumber` (UNIQUE), `email`, `phone`, `address`, `contactPerson`

#### `students`
Studenti iscritti ai corsi
- `id`, `firstName`, `lastName`, `fiscalCode` (UNIQUE), `email`, `phone`, `birthDate`, `birthPlace`, `address`, `companyId`

#### `courses`
Catalogo corsi template
- `id`, `title`, `code` (UNIQUE), `type`, `durationHours`, `defaultPrice`, `description`, `isActive`

#### `courseEditions`
Edizioni/Aule programmate
- `id`, `courseId`, `startDate`, `endDate`, `location`, `maxParticipants`, `price`, `instructor`, `status`

#### `registrations`
Iscrizioni studenti alle edizioni
- `id`, `studentId`, `courseEditionId`, `companyId`, `registrationDate`, `status`, `priceApplied`, `notes`
- UNIQUE constraint su (`studentId`, `courseEditionId`)

#### `attendances`
Presenze giornaliere
- `id`, `registrationId`, `studentId`, `courseEditionId`, `attendanceDate`, `status`, `notes`
- UNIQUE constraint su (`registrationId`, `attendanceDate`)

## 🧪 Testing

### Esegui Test
```bash
pnpm test
```

### Esempio Test
Vedi `server/auth.logout.test.ts` per riferimento su come scrivere test Vitest per tRPC procedures.

## 🚀 Deployment

### Checkpoint e Publish
1. Salva checkpoint dal codice o UI
2. Clicca "Publish" nell'header Management UI
3. La piattaforma Manus gestisce automaticamente hosting e dominio

### Hosting Integrato
- Hosting built-in con supporto custom domain
- SSL automatico
- CDN globale
- Database managed

## 📝 Conformità Normativa

### D.Lgs. 81/08 (Testo Unico Sicurezza)
- Catalogo corsi conforme agli obblighi formativi
- Durate corsi secondo normativa vigente
- Tracciamento presenze per validità attestati

### Accordo Stato-Regioni 2025
- Preposti: 12 ore (aggiornato da 8 ore)
- Dirigenti: 12 ore (ridotto da 16 ore)
- Moduli RSPP/ASPP: 5 moduli distinti
- Modalità e-learning specificate per ogni figura

### Badge Digitale di Cantiere (DL 159/2025)
- Sistema predisposto per integrazione futura
- Tracciamento formazioni per studente
- Storico completo corsi e presenze

## 🔮 Roadmap Funzionalità Future

### Fase 2 - CRUD Completo
- [ ] Pagine complete per Studenti, Aziende, Corsi
- [ ] Interfacce CRUD per Edizioni, Iscrizioni, Presenze
- [ ] Ricerca avanzata e filtri multipli
- [ ] Export dati in Excel/PDF

### Fase 3 - Funzionalità Avanzate
- [ ] Importazione massiva da Excel
- [ ] Rilevamento e pulizia duplicati
- [ ] Generazione automatica attestati PDF
- [ ] Invio email notifiche
- [ ] Calendario interattivo edizioni
- [ ] Report e analytics avanzati

### Fase 4 - Automazione
- [ ] Integrazione Badge Digitale di Cantiere
- [ ] Fascicolo Elettronico del Lavoratore
- [ ] Scadenzario automatico rinnovi
- [ ] Workflow approvazione iscrizioni
- [ ] Dashboard analytics predittive

## 🤝 Supporto

Per supporto tecnico o domande:
- Consulta la documentazione Manus: https://docs.manus.im
- Apri un ticket: https://help.manus.im

## 📄 Licenza

MIT License - Vedi LICENSE file per dettagli

---

**Versione**: 1.0.0  
**Ultimo Aggiornamento**: Gennaio 2026  
**Conformità**: D.Lgs. 81/08 + Accordo Stato-Regioni 2025 + DL 159/2025
