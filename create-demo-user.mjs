import { drizzle } from "drizzle-orm/mysql2";
import { users } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

async function createDemoUser() {
  console.log("Creating demo user...");

  try {
    // Insert demo user
    await db.insert(users).values({
      openId: "demo-admin-user",
      name: "Demo Admin",
      email: "demo@gestionale-sicurezza.it",
      loginMethod: "demo",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    }).onDuplicateKeyUpdate({
      set: {
        lastSignedIn: new Date(),
        updatedAt: new Date(),
      },
    });

    console.log("✅ Demo user created successfully!");
    console.log("Username: admin");
    console.log("Password: admin");
    console.log("OpenId: demo-admin-user");
    
  } catch (error) {
    console.error("❌ Error creating demo user:", error);
    throw error;
  }
}

createDemoUser()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
