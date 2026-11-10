import { requireOwner } from "@/lib/auth";
import { describeStep, TOTAL_LESSONS } from "@/lib/curriculum";
import { loadProgress } from "@/lib/progress";
import { chooseNextStep } from "@/lib/curriculum";
import { learnAction } from "./actions";
import { TopBar } from "@/components/TopBar";

export const dynamic = "force-dynamic";

export default async function Home() {
  await requireOwner();
  const progress = await loadProgress();
  const step = chooseNextStep(progress);
  const mastered = progress.filter((p) => p.status === "mastered").length;
  const arc =
    mastered === 0
      ? `A long arc of about ${TOTAL_LESSONS.toLocaleString("en-IN")} lessons begins here.`
      : `${mastered.toLocaleString("en-IN")} of about ${TOTAL_LESSONS.toLocaleString("en-IN")} lessons mastered.`;

  return (
    <div className="shell">
      <TopBar showWordmark={false} />
      <main className="centre">
        <div className="home">
          <h1 className="wordmark">Polymath</h1>
          <p className="arc">{arc}</p>
          <form action={learnAction}>
            <button type="submit" className="btn btn-primary learn" disabled={step.kind === "caught-up"}>
              Learn <span className="arrow" aria-hidden="true">→</span>
            </button>
          </form>
          <p className="next">{describeStep(step)}</p>
        </div>
      </main>
    </div>
  );
}
