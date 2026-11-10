import "server-only";

type Row = Record<string, unknown>;
type Runner = (text: string, params?: unknown[]) => Promise<Row[]>;

const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS account (
     id INTEGER PRIMARY KEY CHECK (id = 1),
     passphrase_hash TEXT NOT NULL,
     session_version INTEGER NOT NULL DEFAULT 1,
     created_at TIMESTAMPTZ NOT NULL DEFAULT now()
   )`,
  `CREATE TABLE IF NOT EXISTS auth_attempts (
     id SERIAL PRIMARY KEY,
     at TIMESTAMPTZ NOT NULL DEFAULT now(),
     ok BOOLEAN NOT NULL
   )`,
  `CREATE TABLE IF NOT EXISTS progress (
     lesson_id TEXT PRIMARY KEY,
     status TEXT NOT NULL,
     mastery REAL NOT NULL DEFAULT 0,
     updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
   )`,
  `ALTER TABLE progress ADD COLUMN IF NOT EXISTS started_at TIMESTAMPTZ NOT NULL DEFAULT now()`,
  `CREATE TABLE IF NOT EXISTS exercise_state (
     exercise_id TEXT PRIMARY KEY,
     lesson_id TEXT NOT NULL,
     attempts INTEGER NOT NULL DEFAULT 0,
     solved BOOLEAN NOT NULL DEFAULT false,
     first_try BOOLEAN NOT NULL DEFAULT false,
     response TEXT,
     updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
   )`,
  `CREATE TABLE IF NOT EXISTS review_cards (
     exercise_id TEXT PRIMARY KEY,
     lesson_id TEXT NOT NULL,
     card JSONB NOT NULL,
     due TIMESTAMPTZ NOT NULL
   )`,
  `CREATE INDEX IF NOT EXISTS review_cards_due ON review_cards (due)`,
  `CREATE TABLE IF NOT EXISTS writings (
     id SERIAL PRIMARY KEY,
     lesson_id TEXT NOT NULL,
     kind TEXT NOT NULL,
     exercise_id TEXT,
     body TEXT NOT NULL,
     at TIMESTAMPTZ NOT NULL DEFAULT now()
   )`,
  `CREATE TABLE IF NOT EXISTS settings (
     key TEXT PRIMARY KEY,
     value JSONB NOT NULL
   )`,
];

async function createRunner(): Promise<Runner> {
  const url = process.env.DATABASE_URL;
  if (url) {
    const { neon } = await import("@neondatabase/serverless");
    const sql = neon(url);
    return async (text, params = []) => (await sql.query(text, params)) as Row[];
  }
  if (process.env.NODE_ENV === "production" && process.env.VERCEL) {
    throw new Error("DATABASE_URL is not set. Add the Neon integration in Vercel.");
  }
  const { PGlite } = await import("@electric-sql/pglite");
  const db = new PGlite(process.env.PGLITE_DIR ?? "./.pglite");
  return async (text, params = []) => (await db.query<Row>(text, params)).rows;
}

// One connection per server process. Kept on globalThis because Next.js can load
// this module more than once (one copy per route bundle), and the embedded
// development database must never be opened twice.
const shared = globalThis as typeof globalThis & { __polymathDb?: Promise<Runner> };

function runner(): Promise<Runner> {
  shared.__polymathDb ??= (async () => {
    const run = await createRunner();
    for (const statement of SCHEMA) await run(statement);
    return run;
  })().catch((error) => {
    shared.__polymathDb = undefined;
    throw error;
  });
  return shared.__polymathDb;
}

export async function query<T extends Row = Row>(text: string, params: unknown[] = []): Promise<T[]> {
  const run = await runner();
  return (await run(text, params)) as T[];
}
