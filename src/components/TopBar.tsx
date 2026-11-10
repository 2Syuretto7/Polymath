import Link from "next/link";
import { signOutAction } from "@/app/actions";

export function TopBar({ showWordmark = true }: { showWordmark?: boolean }) {
  return (
    <header className="topbar">
      {showWordmark ? <Link href="/" className="wordmark-small">Polymath</Link> : <span />}
      <details className="menu">
        <summary className="btn btn-ghost" aria-label="Menu">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2 4.5h12M2 8h12M2 11.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </summary>
        <nav className="menu-panel">
          <Link href="/" className="menu-item">Home</Link>
          <Link href="/settings" className="menu-item">Settings</Link>
          <div className="menu-sep" />
          <form action={signOutAction}>
            <button type="submit" className="menu-item">Sign out</button>
          </form>
        </nav>
      </details>
    </header>
  );
}
