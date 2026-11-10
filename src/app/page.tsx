import { requireOwner } from "@/lib/auth";
import { GRAPH } from "@/lib/curriculum";
import { nextStep, overallStats } from "@/lib/learning";
import { describeStep } from "@/lib/scheduler";
import { learnAction } from "./actions";
import { TopBar } from "@/components/TopBar";

export const dynamic = "force-dynamic";

export default async function Home() {
  await requireOwner();
  const [step, stats] = await Promise.all([nextStep(), overallStats()]);
  const total = GRAPH.order.length.toLocaleString("en-IN");
  const arc =
    stats.mastered === 0
      ? `A long arc of ${total} lessons begins here.`
      : `${stats.mastered.toLocaleString("en-IN")} of ${total} lessons mastered.`;

  return (
    <div className="shell">
      <TopBar showWordmark={false} />
      <main className="centre">
        <div className="home">
          <h1 className="wordmark">Polymath</h1>
          <p className="arc">{arc}</p>
          <form action={learnAction}>
            <button type="submit" className="btn btn-primary learn" disabled={step.kind === "rest"}>
              Learn <span className="arrow" aria-hidden="true">→</span>
            </button>
          </form>
          <p className="next">{describeStep(step)}</p>
        </div>
      </main>
    </div>
  );
}
