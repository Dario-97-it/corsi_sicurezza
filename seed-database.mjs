import { drizzle } from "drizzle-orm/mysql2";
import { 
  companies, 
  students, 
  courses, 
  courseEditions, 
  registrations, 
  attendances 
} from "./drizzle/schema.js";

const db = drizzle(process.env.DATABASE_URL);

// Helper per generare codice fiscale fittizio
function generateFiscalCode(firstName, lastName, birthDate) {
  const consonants = (str) => str.toUpperCase().replace(/[AEIOU]/gi, '').substring(0, 3).padEnd(3, 'X');
  const vowels = (str) => str.toUpperCase().replace(/[^AEIOU]/gi, '').substring(0, 3).padEnd(3, 'X');
  
  const lastNamePart = consonants(lastName) + vowels(lastName);
  const firstNamePart = consonants(firstName) + vowels(firstName);
  
  const year = birthDate.getFullYear().toString().slice(-2);
  const month = 'ABCDEHLMPRST'[birthDate.getMonth()];
  const day = birthDate.getDate().toString().padStart(2, '0');
  
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  
  return (lastNamePart + firstNamePart + year + month + day + random).substring(0, 16);
}

// Helper per generare P.IVA fittizia
function generateVAT() {
  return Math.floor(10000000000 + Math.random() * 90000000000).toString();
}

async function seedDatabase() {
  console.log("🌱 Inizio popolamento database...");

  try {
    // 0. Pulizia database esistente
    console.log("🧹 Pulizia database esistente...");
    await db.delete(attendances);
    await db.delete(registrations);
    await db.delete(courseEditions);
    await db.delete(courses);
    await db.delete(students);
    await db.delete(companies);
    console.log("✅ Database pulito");

    // 1. Aziende
    console.log("📦 Inserimento aziende...");
    const companiesData = [
      { name: "Costruzioni Edili Rossi SRL", vatNumber: generateVAT(), email: "info@edilrossi.it", phone: "0291234567", address: "Via Roma 123, Milano", contactPerson: "Mario Rossi" },
      { name: "Industrie Meccaniche Bianchi SPA", vatNumber: generateVAT(), email: "contatti@bianchi.it", phone: "0221234567", address: "Corso Italia 45, Torino", contactPerson: "Laura Bianchi" },
      { name: "Logistica Veloce SRL", vatNumber: generateVAT(), email: "info@logisticaveloce.it", phone: "0651234567", address: "Via Nazionale 78, Roma", contactPerson: "Giuseppe Verdi" },
      { name: "Alimentari Freschi SRL", vatNumber: generateVAT(), email: "info@alimentarifreschi.it", phone: "0551234567", address: "Piazza Duomo 12, Firenze", contactPerson: "Anna Ferrari" },
      { name: "Servizi Pulizie Professionali", vatNumber: generateVAT(), email: "info@puliziepro.it", phone: "0401234567", address: "Via Mazzini 34, Trieste", contactPerson: "Paolo Conti" },
      { name: "Elettronica Avanzata SPA", vatNumber: generateVAT(), email: "info@elettronicaavanzata.it", phone: "0811234567", address: "Via Toledo 56, Napoli", contactPerson: "Francesca Marino" },
      { name: "Trasporti Nazionali SRL", vatNumber: generateVAT(), email: "info@trasportinazionali.it", phone: "0101234567", address: "Via Garibaldi 89, Genova", contactPerson: "Roberto Colombo" },
      { name: "Manifatture Tessili SRL", vatNumber: generateVAT(), email: "info@manifatturetessili.it", phone: "0351234567", address: "Corso Vittorio 23, Bergamo", contactPerson: "Silvia Galli" },
      { name: "Impianti Industriali SPA", vatNumber: generateVAT(), email: "info@impiantiindustriali.it", phone: "0511234567", address: "Via Indipendenza 67, Bologna", contactPerson: "Marco Ricci" },
      { name: "Servizi Sanitari Privati", vatNumber: generateVAT(), email: "info@sanitariprivati.it", phone: "0961234567", address: "Viale Europa 45, Catanzaro", contactPerson: "Elena Greco" },
      { name: "Agricoltura Biologica SRL", vatNumber: generateVAT(), email: "info@agribio.it", phone: "0721234567", address: "Via Campagna 12, Pesaro", contactPerson: "Luca Moretti" },
      { name: "Tecnologie Informatiche SPA", vatNumber: generateVAT(), email: "info@techinformatiche.it", phone: "0131234567", address: "Via Dante 78, Alessandria", contactPerson: "Chiara Fontana" },
      { name: "Ristoranti e Catering SRL", vatNumber: generateVAT(), email: "info@ristorantecatering.it", phone: "0471234567", address: "Piazza Walther 5, Bolzano", contactPerson: "Andrea Bruno" },
      { name: "Energia Rinnovabile SPA", vatNumber: generateVAT(), email: "info@energiarinnovabile.it", phone: "0701234567", address: "Via Sardegna 34, Cagliari", contactPerson: "Martina Serra" },
      { name: "Servizi Finanziari SRL", vatNumber: generateVAT(), email: "info@servizifinanziari.it", phone: "0321234567", address: "Corso Cavour 56, Novara", contactPerson: "Davide Lombardi" },
      { name: "Produzione Chimica SPA", vatNumber: generateVAT(), email: "info@produzionechimica.it", phone: "0521234567", address: "Via Emilia 89, Parma", contactPerson: "Valentina Romano" },
      { name: "Servizi Turistici SRL", vatNumber: generateVAT(), email: "info@servizituristici.it", phone: "0411234567", address: "Piazza San Marco 12, Venezia", contactPerson: "Simone Barbieri" },
      { name: "Metalmeccanica Precision SPA", vatNumber: generateVAT(), email: "info@metalmeccanica.it", phone: "0301234567", address: "Via Brescia 45, Brescia", contactPerson: "Giulia Mariani" },
      { name: "Edilizia Sostenibile SRL", vatNumber: generateVAT(), email: "info@edilsostenibile.it", phone: "0871234567", address: "Via Pescara 23, Pescara", contactPerson: "Matteo Gentile" },
      { name: "Farmaceutica Innovativa SPA", vatNumber: generateVAT(), email: "info@farmainnovativa.it", phone: "0971234567", address: "Via Potenza 67, Potenza", contactPerson: "Sara Caruso" },
    ];

    for (const company of companiesData) {
      await db.insert(companies).values(company);
    }
    const insertedCompanies = (await db.select({ id: companies.id }).from(companies)).map(c => c.id);
    console.log(`✅ Inserite ${insertedCompanies.length} aziende`);

    // 2. Studenti
    console.log("👥 Inserimento studenti...");
    const firstNames = ["Marco", "Luca", "Giovanni", "Andrea", "Paolo", "Francesco", "Alessandro", "Matteo", "Davide", "Simone", "Roberto", "Giuseppe", "Antonio", "Stefano", "Federico", "Giulia", "Francesca", "Sara", "Chiara", "Elena", "Laura", "Anna", "Valentina", "Martina", "Silvia", "Alessandra", "Maria", "Paola", "Claudia", "Monica"];
    const lastNames = ["Rossi", "Bianchi", "Verdi", "Ferrari", "Conti", "Marino", "Colombo", "Galli", "Ricci", "Greco", "Moretti", "Fontana", "Bruno", "Serra", "Lombardi", "Romano", "Barbieri", "Mariani", "Gentile", "Caruso", "De Luca", "Santoro", "Esposito", "Mancini", "Pellegrini", "Ferrara", "Vitale", "Giordano", "Messina", "Orlando"];
    const cities = ["Milano", "Roma", "Torino", "Firenze", "Bologna", "Napoli", "Genova", "Venezia", "Palermo", "Bari"];

    const studentsData = [];
    for (let i = 0; i < 60; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const birthDate = new Date(1970 + Math.floor(Math.random() * 40), Math.floor(Math.random() * 12), 1 + Math.floor(Math.random() * 28));
      const city = cities[Math.floor(Math.random() * cities.length)];
      const companyId = insertedCompanies.length > 0 ? insertedCompanies[Math.floor(Math.random() * insertedCompanies.length)] : null;

      studentsData.push({
        firstName,
        lastName,
        fiscalCode: generateFiscalCode(firstName, lastName, birthDate),
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
        phone: `3${Math.floor(10000000 + Math.random() * 90000000)}`,
        birthDate,
        birthPlace: city,
        address: `Via ${lastName} ${Math.floor(Math.random() * 100)}, ${city}`,
        companyId: companyId || undefined,
      });
    }

    for (const student of studentsData) {
      await db.insert(students).values(student);
    }
    const insertedStudents = (await db.select({ id: students.id }).from(students)).map(s => s.id);
    console.log(`✅ Inseriti ${insertedStudents.length} studenti`);

    // 3. Corsi
    console.log("📚 Inserimento corsi...");
    const coursesData = [
      { title: "RSPP Datore di Lavoro - Rischio Basso", code: "RSPP-DL-BASSO", type: "RSPP", durationHours: 16, defaultPrice: 25000, description: "Corso per Datore di Lavoro che svolge direttamente i compiti di RSPP in aziende a rischio basso", isActive: 1 },
      { title: "RSPP Datore di Lavoro - Rischio Medio", code: "RSPP-DL-MEDIO", type: "RSPP", durationHours: 32, defaultPrice: 35000, description: "Corso per Datore di Lavoro che svolge direttamente i compiti di RSPP in aziende a rischio medio", isActive: 1 },
      { title: "RSPP Datore di Lavoro - Rischio Alto", code: "RSPP-DL-ALTO", type: "RSPP", durationHours: 48, defaultPrice: 45000, description: "Corso per Datore di Lavoro che svolge direttamente i compiti di RSPP in aziende a rischio alto", isActive: 1 },
      { title: "RLS - Rappresentante dei Lavoratori per la Sicurezza", code: "RLS-BASE", type: "RLS", durationHours: 32, defaultPrice: 30000, description: "Corso di formazione per Rappresentante dei Lavoratori per la Sicurezza", isActive: 1 },
      { title: "Aggiornamento RLS", code: "RLS-AGG", type: "RLS", durationHours: 8, defaultPrice: 15000, description: "Corso di aggiornamento annuale per RLS", isActive: 1 },
      { title: "Antincendio Rischio Basso", code: "ANTINC-BASSO", type: "Antincendio", durationHours: 4, defaultPrice: 12000, description: "Corso antincendio per attività a rischio basso", isActive: 1 },
      { title: "Antincendio Rischio Medio", code: "ANTINC-MEDIO", type: "Antincendio", durationHours: 8, defaultPrice: 18000, description: "Corso antincendio per attività a rischio medio", isActive: 1 },
      { title: "Antincendio Rischio Alto", code: "ANTINC-ALTO", type: "Antincendio", durationHours: 16, defaultPrice: 28000, description: "Corso antincendio per attività a rischio alto", isActive: 1 },
      { title: "Primo Soccorso Gruppo A", code: "PS-GRUPPO-A", type: "Primo Soccorso", durationHours: 16, defaultPrice: 22000, description: "Corso primo soccorso per aziende Gruppo A", isActive: 1 },
      { title: "Primo Soccorso Gruppo B/C", code: "PS-GRUPPO-BC", type: "Primo Soccorso", durationHours: 12, defaultPrice: 18000, description: "Corso primo soccorso per aziende Gruppo B e C", isActive: 1 },
      { title: "Aggiornamento Primo Soccorso", code: "PS-AGG", type: "Primo Soccorso", durationHours: 6, defaultPrice: 12000, description: "Corso di aggiornamento triennale primo soccorso", isActive: 1 },
      { title: "Preposti alla Sicurezza", code: "PREP-BASE", type: "Preposti", durationHours: 12, defaultPrice: 20000, description: "Corso di formazione per Preposti alla sicurezza (Accordo Stato-Regioni 2025)", isActive: 1 },
      { title: "Dirigenti per la Sicurezza", code: "DIR-BASE", type: "Dirigenti", durationHours: 12, defaultPrice: 25000, description: "Corso di formazione per Dirigenti per la sicurezza (Accordo Stato-Regioni 2025)", isActive: 1 },
      { title: "Formazione Generale Lavoratori", code: "LAV-GEN", type: "Lavoratori", durationHours: 4, defaultPrice: 8000, description: "Formazione generale per tutti i lavoratori", isActive: 1 },
      { title: "Formazione Specifica Lavoratori - Rischio Basso", code: "LAV-SPEC-BASSO", type: "Lavoratori", durationHours: 4, defaultPrice: 10000, description: "Formazione specifica per lavoratori in aziende a rischio basso", isActive: 1 },
      { title: "Formazione Specifica Lavoratori - Rischio Medio", code: "LAV-SPEC-MEDIO", type: "Lavoratori", durationHours: 8, defaultPrice: 15000, description: "Formazione specifica per lavoratori in aziende a rischio medio", isActive: 1 },
      { title: "Formazione Specifica Lavoratori - Rischio Alto", code: "LAV-SPEC-ALTO", type: "Lavoratori", durationHours: 12, defaultPrice: 20000, description: "Formazione specifica per lavoratori in aziende a rischio alto", isActive: 1 },
    ];

    for (const course of coursesData) {
      await db.insert(courses).values(course);
    }
    const insertedCourses = (await db.select({ id: courses.id }).from(courses)).map(c => c.id);
    console.log(`✅ Inseriti ${insertedCourses.length} corsi`);

    // 4. Edizioni Corsi
    console.log("📅 Inserimento edizioni corsi...");
    const locations = ["Milano - Sede Centrale", "Roma - Aula Formazione", "Torino - Centro Congressi", "Bologna - Sala Conferenze", "Firenze - Polo Didattico"];
    const instructors = ["Ing. Mario Rossi", "Dott.ssa Laura Bianchi", "Geom. Giuseppe Verdi", "Dott. Paolo Conti", "Ing. Francesca Marino"];
    
    const editionsData = [];
    for (let i = 0; i < 35; i++) {
      if (insertedCourses.length === 0) {
        console.error("❌ Nessun corso inserito, impossibile creare edizioni");
        break;
      }
      const courseId = insertedCourses[Math.floor(Math.random() * insertedCourses.length)];
      const startDate = new Date(2026, 0, 15 + i * 7); // Edizioni ogni 7 giorni dal 15 gennaio 2026
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 3) + 1); // 1-3 giorni di durata

      editionsData.push({
        courseId,
        startDate,
        endDate,
        location: locations[Math.floor(Math.random() * locations.length)],
        maxParticipants: 15 + Math.floor(Math.random() * 15), // 15-30 partecipanti
        price: 10000 + Math.floor(Math.random() * 40000), // 100-500 euro
        instructor: instructors[Math.floor(Math.random() * instructors.length)],
        status: i < 25 ? "scheduled" : (i < 30 ? "ongoing" : "completed"),
      });
    }

    for (const edition of editionsData) {
      await db.insert(courseEditions).values(edition);
    }
    const insertedEditions = (await db.select({ id: courseEditions.id }).from(courseEditions)).map(e => e.id);
    console.log(`✅ Inserite ${insertedEditions.length} edizioni`);

    // 5. Iscrizioni
    console.log("📝 Inserimento iscrizioni...");
    const registrationsData = [];
    for (let i = 0; i < 120; i++) {
      if (insertedStudents.length === 0 || insertedEditions.length === 0) break;
      const studentId = insertedStudents[Math.floor(Math.random() * insertedStudents.length)];
      const editionId = insertedEditions[Math.floor(Math.random() * insertedEditions.length)];
      
      // Evita duplicati (stessa combinazione studente-edizione)
      const isDuplicate = registrationsData.some(r => r.studentId === studentId && r.courseEditionId === editionId);
      if (isDuplicate) continue;

      registrationsData.push({
        studentId,
        courseEditionId: editionId,
        companyId: insertedCompanies.length > 0 ? insertedCompanies[Math.floor(Math.random() * insertedCompanies.length)] : undefined,
        registrationDate: new Date(2025, 11, 1 + Math.floor(Math.random() * 30)),
        status: Math.random() > 0.1 ? "confirmed" : "pending",
        priceApplied: 10000 + Math.floor(Math.random() * 40000),
        notes: Math.random() > 0.7 ? "Iscrizione aziendale" : null,
      });
    }

    for (const registration of registrationsData) {
      try {
        await db.insert(registrations).values(registration);
      } catch (error) {
        // Ignora errori di duplicati
        console.log(`⚠️ Duplicato ignorato: studente ${registration.studentId}, edizione ${registration.courseEditionId}`);
      }
    }
    const insertedRegistrations = (await db.select({ id: registrations.id }).from(registrations)).map(r => r.id);
    console.log(`✅ Inserite ${insertedRegistrations.length} iscrizioni`);

    // 6. Presenze
    console.log("✅ Inserimento presenze...");
    const attendancesData = [];
    for (let i = 0; i < 250; i++) {
      const registrationId = insertedRegistrations[Math.floor(Math.random() * insertedRegistrations.length)];
      
      // Recupera dati iscrizione per ottenere studentId e courseEditionId
      const regData = registrationsData[Math.floor(Math.random() * registrationsData.length)];
      
      const attendanceDate = new Date(2026, 0, 15 + Math.floor(Math.random() * 60));
      
      attendancesData.push({
        registrationId,
        studentId: regData.studentId,
        courseEditionId: regData.courseEditionId,
        attendanceDate,
        status: Math.random() > 0.15 ? "present" : (Math.random() > 0.5 ? "absent" : "late"),
        notes: Math.random() > 0.8 ? "Ritardo giustificato" : null,
      });
    }

    for (const attendance of attendancesData) {
      try {
        await db.insert(attendances).values(attendance);
      } catch (error) {
        // Ignora errori di duplicati
      }
    }
    console.log(`✅ Inserite presenze`);

    console.log("\n🎉 Database popolato con successo!");
    console.log(`📊 Riepilogo:`);
    console.log(`   - ${insertedCompanies.length} aziende`);
    console.log(`   - ${insertedStudents.length} studenti`);
    console.log(`   - ${insertedCourses.length} corsi`);
    console.log(`   - ${insertedEditions.length} edizioni`);
    console.log(`   - ${insertedRegistrations.length} iscrizioni`);
    console.log(`   - ~250 presenze`);

  } catch (error) {
    console.error("❌ Errore durante il popolamento:", error);
    process.exit(1);
  }

  process.exit(0);
}

seedDatabase();
