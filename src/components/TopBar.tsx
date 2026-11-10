import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";
import { NavLinks } from "@/components/NavLinks";
import { UserMenu } from "@/components/UserMenu";

export function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand" aria-label="Polymath home">
          <LogoMark />
          <span className="brand-name">Polymath</span>
        </Link>
        <nav className="topnav" aria-label="Primary">
          <NavLinks />
        </nav>
        <div className="topbar-end">
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
