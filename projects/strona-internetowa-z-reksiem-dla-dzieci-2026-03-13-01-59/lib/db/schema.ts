import { pgTable, serial, integer, timestamp, varchar } from "drizzle-orm/pg-core";

// Define a deterministic prefix for tables
const tablePrefix = process.env.DATABASE_TABLE_PREFIX || "reksio_app_";

export const interactions = pgTable(`${tablePrefix}interactions`, {
  id: serial("id").primaryKey(),
  actionType: varchar("action_type", { length: 255 }).notNull(),
  count: integer("count").notNull().default(1),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
