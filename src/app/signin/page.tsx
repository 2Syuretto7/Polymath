import { redirect } from "next/navigation";
import { hasAccount, isSignedIn } from "@/lib/auth";
import { SignInForm } from "@/components/SignInForm";

export const dynamic = "force-dynamic";

export default async function SignIn() {
  if (!(await hasAccount())) redirect("/signup");
  if (await isSignedIn()) redirect("/");
  return (
    <main className="centre" style={{ minHeight: "100dvh" }}>
      <div className="card">
        <h1>Sign in to Polymath</h1>
        <p className="lede">Type or paste your passphrase. This device stays signed in for 90 days.</p>
        <SignInForm />
      </div>
    </main>
  );
}
