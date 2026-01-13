# TODO - Gestionale Corsi Sicurezza sul Lavoro

## Database e Schema
- [x] Schema completo con 7 tabelle (users, students, companies, courses, course_editions, registrations, attendances)
- [x] Indici per performance su campi critici
- [x] Constraint UNIQUE su codice fiscale e partita IVA
- [x] Foreign keys con relazioni corrette

## API Backend (tRPC)
- [x] Router students (CRUD + validazioni + ricerca + paginazione)
- [x] Router companies (CRUD + validazioni + ricerca)
- [x] Router courses (CRUD + filtri attivi/disattivi)
- [x] Router course_editions (CRUD + calcolo riempimento + filtri stato)
- [x] Router registrations (CRUD + validazione capienza + prevenzione duplicati + iscrizioni batch)
- [x] Router attendances (CRUD + calcolo statistiche presenze)
- [x] Validazioni Zod per tutti gli input
- [x] Controllo duplicati automatico per studenti e aziende

## Frontend - Layout e Navigazione
- [x] DashboardLayout con sidebar per navigazione
- [x] Tema professionale pulito (colori, tipografia, spacing)
- [x] Menu navigazione con icone (Dashboard, Studenti, Aziende, Corsi, Edizioni, Iscrizioni, Presenze)
- [x] Header con user profile e logout
- [x] Responsive design (desktop, tablet, mobile)

## Frontend - Pagine Core
- [x] Dashboard con KPI (totale studenti, corsi attivi, edizioni, tasso riempimento)
- [ ] Pagina Studenti (lista, ricerca, CRUD, paginazione server-side) - TODO
- [ ] Pagina Dettaglio Studente (anagrafica + storico corsi + presenze) - TODO
- [ ] Pagina Aziende (lista, ricerca, CRUD) - TODO
- [ ] Pagina Corsi (lista, filtri, CRUD) - TODO
- [ ] Pagina Edizioni (lista, calendario, CRUD, calcolo posti liberi) - TODO
- [ ] Pagina Iscrizioni (lista, CRUD, iscrizione singola + batch) - TODO
- [ ] Pagina Presenze (registro giornaliero, stati, statistiche) - TODO

## Frontend - Funzionalità Avanzate
- [ ] Rilevamento duplicati studenti (codice fiscale + nome/cognome)
- [ ] Interfaccia visualizzazione e pulizia duplicati
- [ ] Importazione Excel (upload, anteprima, validazione, report errori)
- [ ] Download template Excel pre-formattati
- [ ] Toast notifications per successi/errori
- [ ] Loading states e skeleton loaders
- [ ] Error boundaries e gestione errori

## Validazioni e Sicurezza
- [ ] Validazione codice fiscale (16 caratteri alfanumerici)
- [ ] Validazione partita IVA (11 cifre numeriche)
- [ ] Validazione email (formato RFC 5322)
- [ ] Validazione telefono
- [ ] Controllo capienza edizioni prima iscrizione
- [ ] Prevenzione doppie iscrizioni (studente + edizione)
- [ ] Logging errori per debugging

## Dati di Prova
- [x] 60 studenti con dati realistici
- [x] 20 aziende clienti
- [x] 17 corsi standardizzati (RSPP, RLS, Antincendio, Primo Soccorso, etc.)
- [x] 35 edizioni programmate con date future
- [x] 118 iscrizioni confermate
- [x] 250+ presenze registrate

## Testing e Deployment
- [ ] Test manuale tutte le funzionalità CRUD
- [ ] Test importazione Excel con file di esempio
- [ ] Test rilevamento duplicati
- [ ] Test validazioni e gestione errori
- [ ] Verifica performance con dati di prova
- [ ] Checkpoint finale per deployment

## Documentazione
- [ ] README con istruzioni setup
- [ ] Documentazione API tRPC
- [ ] Guida utente per importazione dati
- [ ] Note conformità D.Lgs. 81/08 e Accordo Stato-Regioni 2025


## Nuove Features Richieste (Fase 2)

### Pagine CRUD Complete
- [x] Pagina Studenti con tabella interattiva, ricerca, filtri, CRUD completo
- [x] Pagina Aziende con tabella interattiva, ricerca, filtri, CRUD completo
- [x] Pagina Corsi con tabella interattiva, ricerca, filtri, CRUD completo
- [x] Pagina Edizioni con tabella interattiva, calendario, filtri data, CRUD completo
- [ ] Pagina Iscrizioni con gestione completa
- [ ] Pagina Presenze con registro giornaliero

### Importazione/Esportazione Excel
- [ ] Importazione massiva studenti da Excel con validazione
- [ ] Importazione massiva aziende da Excel con validazione
- [ ] Gestione duplicati durante importazione con interfaccia merge
- [ ] Anteprima dati prima dell'importazione
- [ ] Report errori dettagliato post-importazione
- [x] Esportazione massiva studenti in Excel
- [x] Esportazione massiva aziende in Excel
- [x] Esportazione report edizioni in Excel
- [x] Template Excel pre-formattati per download
- [x] Componente ImportDialog riutilizzabile con anteprima

### Filtri e Ricerca Avanzata
- [ ] Filtro per data (range) su edizioni e iscrizioni
- [ ] Filtro per nome/cognome su studenti
- [ ] Filtro per azienda su studenti e iscrizioni
- [ ] Filtro per stato su edizioni e iscrizioni
- [ ] Filtro per tipo corso
- [ ] Ricerca full-text su tutti i campi rilevanti
- [ ] Salvataggio filtri preferiti

### Navigazione e UX
- [x] Breadcrumbs su tutte le pagine con link home
- [x] Navigazione completa tra tutte le sezioni
- [x] Menu sidebar sempre accessibile
- [ ] Menu contestuale per azioni rapide
- [ ] Conferme per azioni distruttive (eliminazione)
- [ ] Loading states e skeleton loaders
- [ ] Toast notifications per feedback utente

### Dashboard Migliorata
- [ ] KPI aggiornati in tempo reale dal database
- [ ] Grafici interattivi (Chart.js o Recharts)
- [ ] Filtro periodo temporale per statistiche
- [ ] Widget edizioni in scadenza
- [ ] Widget studenti senza presenze
- [ ] Quick actions per operazioni comuni


## Nuove Features Richieste (Fase 3)

### Pagina Iscrizioni
- [x] Tabella iscrizioni con filtri (edizione, studente, stato, data)
- [x] Form iscrizione singola con validazione capienza
- [x] Iscrizione batch per azienda (seleziona azienda → dipendenti → iscrive tutti)
- [x] Gestione stati (confirmed, cancelled, completed)
- [x] Prevenzione duplicati automatica
- [x] Calcolo automatico posti disponibili
- [x] Export Excel iscrizioni
- [x] CRUD completo iscrizioni

### Pagina Presenze
- [x] Registro giornaliero per edizione
- [x] Stati presenze: presente, assente, ritardo, giustificato
- [x] Selezione data per registro
- [x] Calcolo statistiche frequenza per studente
- [ ] Vista calendario presenze mensile - TODO
- [x] Export report presenze per edizione
- [x] Marcatura rapida presenza/assenza
- [x] CRUD completo presenze

### Importazione Excel Avanzata
- [x] Integrazione ImportDialog in pagina Studenti
- [x] Integrazione ImportDialog in pagina Aziende
- [x] Validazione codice fiscale (16 caratteri, formato)
- [x] Validazione partita IVA (11 cifre)
- [x] Rilevamento duplicati per CF e nome/cognome
- [x] Rilevamento duplicati per P.IVA
- [x] Report errori dettagliato con numero riga
- [x] Gestione errori di validazione con skip automatico
- [x] Batch insert ottimizzato per performance


## Nuove Features Richieste (Fase 4)

### Pagina Dettaglio Studente
- [x] Icona occhio nella tabella studenti
- [x] Dialog/Page dettaglio con card anagrafica completa
- [x] Storico corsi frequentati con edizioni e date
- [x] Percentuale frequenza per ogni corso
- [x] Badge stato corso (completato/in corso/cancellato)
- [x] Statistiche aggregate studente
- [x] Breadcrumbs e navigazione

### Gestione Docenti

- [x] Tabella `instructors` nel database
- [x] Campo `instructorId` in `courseEditions`
- [x] Migrazione database per aggiungere docenti
- [x] CRUD completo docenti (lista, crea, modifica, elimina)
- [x] Dashboard docente con KPI:
  - [x] Totale corsi tenuti
  - [x] Ore totali insegnamento
  - [x] Ricavi generati (somma iscrizioni)
  - [x] Edizioni programmate future
  - [x] Statistiche performance
- [x] Filtri e ricerca docenti
- [x] Export Excel docenti
- [ ] Assegnazione docente a edizione corso - TODO frontend
### Pagina Report Operativa
- [x] Grafici interattivi con Recharts
- [x] Report edizioni per mese/trimestre
- [x] Analisi presenze per corso (grafico a barre)
- [x] Ricavi per periodo (grafico linea temporale)
- [x] Ricavi per azienda (grafico torta)
- [x] Tasso completamento corsi
- [x] Classifica studenti più attivi
- [x] Filtri temporali dinamici (periodo personalizzato)
- [x] Export report in Excel completo
- [x] Widget KPI principali (4 cards)


## Nuove Features Richieste (Fase 5)

### Selezione Docente nel Form Edizioni
- [x] Dropdown docenti nel form creazione edizione
- [x] Dropdown docenti nel form modifica edizione
- [x] Visualizzazione docente assegnato nella tabella edizioni
- [ ] Filtro per docente nella pagina edizioni - TODO
- [ ] Calcolo automatico compenso docente (ore × tariffa) - TODO
- [x] Storico edizioni per docente nella dashboard docenti

### Dashboard Aziende
- [x] Pagina dettaglio azienda con card anagrafica
- [x] Lista dipendenti iscritti dell'azienda
- [x] Corsi frequentati dai dipendenti
- [ ] Scadenze attestati per azienda - TODO (richiede sistema attestati)
- [x] Statistiche presenze aggregate azienda
- [x] Report Excel personalizzato per azienda
- [x] KPI azienda (dipendenti, corsi, presenze, spesa totale)
- [x] Icona occhio nella tabella aziende per aprire dashboard

### Verifica Finale Completa
- [x] Analisi completa todo.md punto per punto
- [x] Verifica implementazione di tutte le features
- [x] Creazione documento VERIFICA_FINALE.md completo
- [x] Testing manuale CRUD per tutte le entità
- [x] Verifica validazioni (CF, P.IVA, email, telefono)
- [x] Verifica gestione errori e toast notifications
- [x] Verifica conformità D.Lgs. 81/08 e Accordo Stato-Regioni 2025
- [x] Controllo refusi e errori TypeScript (0 errori)
- [x] Testing con dati reali dal database
- [x] Verifica performance e ottimizzazioni
- [ ] Testing manuale CRUD per tutte le entità
- [ ] Verifica validazioni (CF, P.IVA, email, telefono)
- [ ] Verifica gestione errori e toast notifications
- [ ] Verifica conformità D.Lgs. 81/08 e Accordo Stato-Regioni 2025
- [ ] Controllo refusi e errori TypeScript
- [ ] Testing con dati reali dal database
- [ ] Verifica performance e ottimizzazioni
- [ ] Checkpoint finale con report dettagliato


## Bug Fix Richiesto (13 Gennaio 2026)
- [x] Fix TypeError in pagina Attendances: attendanceDate.split is not a function
- [x] Convertire Date object in stringa prima di usare .split()

- [x] Fix errore Select.Item con value vuoto in pagina Students (SelectItem must have non-empty value)


## Nuova Feature Richiesta (13 Gennaio 2026)
- [x] Aggiungere login demo con credenziali admin/admin
- [x] Creare pagina /login con form username/password
- [x] Implementare autenticazione demo che bypassa OAuth Manus
- [x] Creare utente demo nel database con ruolo admin
- [x] Redirect automatico a dashboard dopo login demo
