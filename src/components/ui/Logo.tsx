/** The Polymath mark: a square with a P drawn as one stroke. Inherits colour from the surrounding text. */
export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="logo-mark">
      <rect width="32" height="32" rx="3" fill="currentColor" />
      <path d="M11 24V8h6a5 5 0 0 1 0 10h-6" fill="none" stroke="var(--bg)" strokeWidth="2.75" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
