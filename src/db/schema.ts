import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { db } from "./drizzle.ts";

export const submissions = sqliteTable('submissions', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  email: text('email').notNull(),
  json: text('json', { mode: 'json' })
})

export type Submission = typeof submissions.$inferSelect;
export type InsertSubmission = typeof submissions.$inferInsert;

export const insertSubmission = async (submission: InsertSubmission) => {
  return db.insert(submissions).values(submission).run();
}

export const getAllSubmission = async (): Promise<Submission[]> => await db.select().from(submissions)