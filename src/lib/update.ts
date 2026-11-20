/** Pure decisions for automatic updates (see `src/components/AutoUpdate.tsx`). */

export type UpdateAction = "none" | "reload" | "wait";

/**
 * What to do after asking the server which build is live.
 * - Same build, or no answer: nothing.
 * - A new build we already reloaded towards once this tab: wait, so a half-rolled-out deploy cannot loop.
 * - Unsaved typing on the page: wait, and reload once it is safe.
 * - Otherwise: reload now.
 */
export function decideUpdate(input: { current: string; live: string | null; triedFor: string | null; dirty: boolean }): UpdateAction {
  const { current, live, triedFor, dirty } = input;
  if (!live || !current || live === current) return "none";
  if (triedFor === live) return "wait";
  return dirty ? "wait" : "reload";
}
