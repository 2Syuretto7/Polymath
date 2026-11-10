import { requireOwner } from "@/lib/auth";
import { signOutEverywhereAction } from "../actions";
import { TopBar } from "@/components/TopBar";
import { ChangePassphraseForm } from "@/components/ChangePassphraseForm";

export const dynamic = "force-dynamic";

export default async function Settings() {
  await requireOwner();
  return (
    <div className="shell">
      <TopBar />
      <main className="page">
        <h1>Settings</h1>
        <p className="lede">Your passphrase and the devices signed in to Polymath.</p>

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
