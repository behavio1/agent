import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
dotenv.config();

export default defineConfig({
  schema: './db/schema/*',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URI || process.env.DATABASE_URL || '',
  },
  tablesFilter: [`${process.env.DATABASE_TABLE_PREFIX || 'zerwane_'}*`],
  extensionsFilters: ['postgis'],
});
