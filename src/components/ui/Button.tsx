import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  "aria-label"?: string;
};

export function Button({ children, href, className = "", "aria-label": ariaLabel }: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex border-b border-[var(--text-color-black-90)] pb-4 pr-6 pt-2 text-sm font-medium leading-none text-[var(--text-color-black-90)] transition-colors hover:border-[var(--brand-color-100)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color-text)] ${className}`}
    >
      {children}
    </Link>
  );
}
