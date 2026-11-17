import Link from "next/link";
import { requireOwner } from "@/lib/auth";
import { TopBar } from "@/components/TopBar";
import { ReviewSection } from "@/components/lesson/ReviewSection";
import { ArrowLeft } from "@/components/ui/Icons";

export const dynamic = "force-dynamic";
export const metadata = { title: "Review" };

export default async function Review() {
  await requireOwner();
  return (
    <div className="shell">
      <TopBar />
      <main id="main" className="page">
        <Link href="/" className="back"><ArrowLeft size={14} /> Home</Link>
        <p className="eyebrow">Spaced review</p>
        <h1>Review</h1>
        <ReviewSection />
      </main>
    </div>
  );
}
