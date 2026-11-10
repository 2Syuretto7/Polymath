import { redirect } from "next/navigation";
import { hasAccount } from "@/lib/auth";
import { SignUpForm } from "@/components/SignUpForm";

export const dynamic = "force-dynamic";

export default async function SignUp() {
  // Sign-up exists only until the owner's account is created; then it is gone for good.
  if (await hasAccount()) redirect("/signin");
  return (
    <main className="centre" style={{ minHeight: "100dvh" }}>
      <div className="card">
        <h1>Welcome to Polymath</h1>
        <p className="lede">
          Choose the one passphrase you will use on every device. After this, sign-up closes and only you can enter.
        </p>
        <SignUpForm />
        <p className="foot">Your passphrase is stored only as a one-way Argon2id hash.</p>
      </div>
    </main>
  );
}
