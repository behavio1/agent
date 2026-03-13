import { text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { createTable } from '../utils';

export const gigs = createTable('gigs', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  venue: varchar('venue', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  date: timestamp('date').notNull(),
  ticketLink: text('ticket_link'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
