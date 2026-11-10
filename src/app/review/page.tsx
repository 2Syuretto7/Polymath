import Link from "next/link";
import { requireOwner } from "@/lib/auth";
import { GRAPH } from "@/lib/curriculum";
import { dueReviews } from "@/lib/learning";
import { toView } from "@/lib/views";
import { TopBar } from "@/components/TopBar";
import { ExerciseCard } from "@/components/lesson/ExerciseCard";

export const dynamic = "force-dynamic";

export default async function Review() {
  await requireOwner();
  const due = await dueReviews();
  return (
    <div className="shell">
      <TopBar />
      <main className="page">
        <Link href="/" className="back">← Home</Link>
        <h1>Review</h1>
        {due.length === 0 ? (
          <p className="lede">Nothing is due. Each idea will come back just before you would forget it.</p>
        ) : (
          <>
            <p className="lede">
              {due.length} question{due.length > 1 ? "s" : ""} from earlier lessons, mixed together. Your first answer to
              each decides when it returns.
            </p>
            {due.map((r, i) => {
              const n = GRAPH.nodes.get(r.lessonId)!;
              return (
                <div key={r.id}>
                  <p className="eyebrow review-source">From {n.title} · {n.course}</p>
                  <ExerciseCard view={toView(r)} context="review" index={i + 1}>{r.exercise.prompt}</ExerciseCard>
                </div>
              );
            })}
            <div className="review-done">
              <Link href="/" className="btn">Done for now</Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
