import { pgTableCreator, serial, integer, timestamp, varchar } from "drizzle-orm/pg-core";

const prefix = process.env.DATABASE_TABLE_PREFIX || "reksio_";
export const createTable = pgTableCreator((name) => `${prefix}${name}`);

export const interactions = createTable("interactions", {
  id: serial("id").primaryKey(),
  actionType: varchar("action_type", { length: 255 }).notNull().unique(),
  count: integer("count").notNull().default(1),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
