import Link from "next/link";
import { notFound } from "next/navigation";
import { requireOwner } from "@/lib/auth";
import { COURSE_BY_CODE, isUnlocked } from "@/lib/graph";
import { GRAPH, LESSON_BY_ID } from "@/lib/curriculum";
import { loadProgress } from "@/lib/learning";
import { TopBar } from "@/components/TopBar";

export const dynamic = "force-dynamic";

export default async function CoursePage({ params }: { params: Promise<{ course: string }> }) {
  await requireOwner();
  const { course: code } = await params;
  const course = COURSE_BY_CODE.get(code.toUpperCase());
  if (!course) notFound();
  const progress = await loadProgress();
  const status = new Map(progress.map((p) => [p.lesson_id, p.status]));
  const mastered = new Set(progress.filter((p) => p.status === "mastered").map((p) => p.lesson_id));
  const courseLink = (c: string) => {
    const other = COURSE_BY_CODE.get(c)!;
    return <Link key={c} href={`/map/${c.toLowerCase()}`} className="chip">{c} {other.title}</Link>;
  };

  return (
    <div className="shell">
      <TopBar />
      <main className="page">
        <Link href="/map" className="back">← Map</Link>
        <p className="eyebrow">{course.code} · Tier {course.tier} · {course.track === "mathematics" ? "Mathematics" : "Philosophy"}</p>
        <h1>{course.title}</h1>
        <p className="lede">{course.source}</p>
        {(course.requires.length > 0 || course.parallels.length > 0) && (
          <div className="course-links">
            {course.requires.length > 0 && <div><span className="muted">Requires</span> {course.requires.map(courseLink)}</div>}
            {course.parallels.length > 0 && <div><span className="muted">Runs parallel to</span> {course.parallels.map(courseLink)}</div>}
          </div>
        )}
        {course.chapters.map((ch) => (
          <section key={ch.n} className="chapter">
            <h2><span className="muted">{ch.n}</span> {ch.title}</h2>
            <ol className="lesson-list">
              {ch.lessons.map((l) => {
                const s = status.get(l.id);
                const authored = LESSON_BY_ID.has(l.id);
                const open = authored && (s !== undefined || isUnlocked(GRAPH, l.id, mastered));
                const state = s === "mastered" ? "mastered" : s === "in_progress" ? "started" : !authored ? "unwritten" : open ? "open" : "locked";
                const label = { mastered: "Mastered", started: "In progress", open: "Ready", locked: "Locked", unwritten: "Being written" }[state];
                return (
                  <li key={l.id} className={`lesson-row is-${state}`}>
                    <span className="dot" aria-hidden="true" />
                    {open ? <Link href={`/learn/${l.id}`}>{l.title}</Link> : <span>{l.title}</span>}
                    <span className="lesson-state">{label}</span>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </main>
    </div>
  );
}
