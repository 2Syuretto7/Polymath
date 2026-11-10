import Link from "next/link";
import { requireOwner } from "@/lib/auth";
import { COURSES } from "@/lib/graph";
import { LESSON_BY_ID } from "@/lib/curriculum";
import { masteredSet } from "@/lib/learning";
import { TopBar } from "@/components/TopBar";
import type { Track } from "@/lib/types";

export const dynamic = "force-dynamic";

const TIERS = ["Bridge from zero", "First-year university", "Core undergraduate", "Advanced undergraduate", "Graduate core", "Graduate specialisation"];

export default async function MapPage() {
  await requireOwner();
  const mastered = await masteredSet();
  const column = (track: Track, tier: number) =>
    COURSES.filter((c) => c.track === track && c.tier === tier).map((c) => {
      const ids = c.chapters.flatMap((ch) => ch.lessons.map((l) => l.id));
      const done = ids.filter((id) => mastered.has(id)).length;
      const ready = ids.filter((id) => LESSON_BY_ID.has(id) && !mastered.has(id)).length;
      return (
        <Link key={c.code} href={`/map/${c.code.toLowerCase()}`} className="course-card">
          <span className="course-code">{c.code}</span>
          <span className="course-title">{c.title}</span>
          <span className="meter" aria-hidden="true"><span style={{ width: `${(done / ids.length) * 100}%` }} /></span>
          <span className="course-stat">{done} of {ids.length} mastered{ready > 0 ? ` · ${ready} ready` : ""}</span>
        </Link>
      );
    });

  return (
    <div className="shell">
      <TopBar />
      <main className="page page-wide">
        <h1>Map</h1>
        <p className="lede">Two tracks that grow side by side, from school mathematics and first questions to graduate seminars.</p>
        <div className="map-head"><span>Mathematics</span><span>Philosophy</span></div>
        {TIERS.map((name, tier) => (
          <section key={name} className="tier">
            <h2 className="tier-name"><span>Tier {tier}</span> {name}</h2>
            <div className="tier-grid">
              <div className="course-col">{column("mathematics", tier)}</div>
              <div className="course-col">{column("philosophy", tier)}</div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
