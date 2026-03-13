import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const dbUrl = process.env.DATABASE_URI || process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URI is not set");
}

const sql = neon(dbUrl);
export const db = drizzle(sql);
