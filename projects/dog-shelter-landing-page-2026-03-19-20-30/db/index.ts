import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

if (!process.env.DATABASE_URI) {
  throw new Error('DATABASE_URI environment variable is not set');
}

const sql = neon(process.env.DATABASE_URI);
export const db = drizzle(sql, { schema });
