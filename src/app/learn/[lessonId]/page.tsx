import Link from "next/link";
import { notFound } from "next/navigation";
import { requireOwner } from "@/lib/auth";
import { OPENING_LESSONS } from "@/lib/curriculum";
import { TopBar } from "@/components/TopBar";

export const dynamic = "force-dynamic";

export default async function Lesson({ params }: { params: Promise<{ lessonId: string }> }) {
  await requireOwner();
  const { lessonId } = await params;
  const lesson = OPENING_LESSONS.find((l) => l.id === lessonId);
  if (!lesson) notFound();

  return (
    <div className="shell">
      <TopBar />
      <main className="page">
        <Link href="/" className="back">← Home</Link>
        <p className="eyebrow">{lesson.course} · {lesson.chapter}</p>
        <h1 className="lesson-title">{lesson.title}</h1>
        <div className="prose">
          <p>
            This lesson is being written. It arrives with the learning engine, together with its puzzle,
            visualisation, theory, practice and Parton.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Your place is saved, so the Learn button will bring you straight back here on any device.
          </p>
        </div>
      </main>
    </div>
  );
}
