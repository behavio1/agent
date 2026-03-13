"use server";

import { sql } from "drizzle-orm";
import { db } from "../lib/db";
import { interactions } from "../lib/db/schema";
import { revalidatePath } from "next/cache";

/**
 * Increment the interaction count for a specific action type.
 * e.g., 'bone_found', 'reksio_pet'
 */
export async function incrementInteraction(actionType: string) {
  try {
    await db
      .insert(interactions)
      .values({
        actionType,
        count: 1,
      })
      .onConflictDoUpdate({
        target: interactions.actionType,
        set: {
          count: sql`${interactions.count} + 1`,
          updatedAt: new Date(),
        },
      });

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to increment interaction:", error);
    return { success: false, error: "Failed to increment interaction" };
  }
}

/**
 * Get all interaction statistics.
 */
export async function getInteractionStats() {
  try {
    const allStats = await db.select().from(interactions);
    return { success: true, data: allStats };
  } catch (error) {
    console.error("Failed to fetch interaction stats:", error);
    return { success: false, error: "Failed to fetch interaction stats" };
  }
}
