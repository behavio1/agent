import { pgTableCreator } from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `${process.env.DATABASE_TABLE_PREFIX || 'zerwane_'}${name}`);
