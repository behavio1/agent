import { pgTable, text, timestamp, uuid, boolean, integer } from 'drizzle-orm/pg-core';

export const dogs = pgTable('dog_shelter_dogs', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  breed: text('breed'),
  age: integer('age'),
  description: text('description'),
  imageUrl: text('image_url'),
  isAdopted: boolean('is_adopted').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const inquiries = pgTable('dog_shelter_inquiries', {
  id: uuid('id').defaultRandom().primaryKey(),
  dogId: uuid('dog_id').references(() => dogs.id),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  message: text('message').notNull(),
  status: text('status').default('pending').notNull(), // pending, reviewed, contacted
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
