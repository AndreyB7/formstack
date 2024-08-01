import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { InferInsertModel } from "drizzle-orm/table";
import { submissions } from "./schema.ts";

export type InsertSubmission = InferInsertModel<typeof submissions>

const sqlite = new Database('./src/db/db.db');

export const db = drizzle(sqlite);