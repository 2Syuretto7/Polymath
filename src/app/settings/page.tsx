import { requireOwner } from "@/lib/auth";
import { setPaceAction, signOutEverywhereAction } from "../actions";
import { getPace } from "@/lib/learning";
import { TopBar } from "@/components/TopBar";
import { ChangePassphraseForm } from "@/components/ChangePassphraseForm";

export const dynamic = "force-dynamic";

export default async function Settings() {
  await requireOwner();
  const pace = await getPace();
  return (
    <div className="shell">
      <TopBar />
      <main className="page">
        <h1>Settings</h1>
        <p className="lede">Your pace, your passphrase and the devices signed in to Polymath.</p>

        <section className="section">
          <h2>Daily pace</h2>
          <p className="desc">The most new lessons the Learn button will start in one day. Reviews are never limited.</p>
          <form action={setPaceAction} className="pace">
            {[1, 2, 3].map((n) => (
              <button key={n} type="submit" name="pace" value={n} className={n === pace ? "seg is-on" : "seg"} aria-pressed={n === pace}>
                {n} a day
              </button>
            ))}
          </form>
        </section>

        <section className="section">
          <h2>Passphrase</h2>
          <p className="desc">Changing it signs out every other device.</p>
          <ChangePassphraseForm />
        </section>

        <section className="section">
          <h2>Devices</h2>
          <p className="desc">Sign out of Polymath on every device, including this one.</p>
          <form action={signOutEverywhereAction}>
            <button type="submit" className="btn btn-danger">Sign out everywhere</button>
          </form>
        </section>
      </main>
    </div>
  );
}
