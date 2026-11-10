import "server-only";
import { query } from "./db";
import { chooseNextStep, type ProgressRow } from "./curriculum";

export async function loadProgress() {
  return query<ProgressRow>("SELECT lesson_id, status FROM progress");
}

export async function nextStep() {
  return chooseNextStep(await loadProgress());
}
