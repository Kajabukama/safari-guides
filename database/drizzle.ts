import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { schema } from "@/database/schema";

config({ path: ".env" });

// Ensure DATABASE_URL is available during build
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Create the neon client
const sql = neon(databaseUrl);

// Initialize drizzle with the neon client
export const db = drizzle(sql, { schema });
