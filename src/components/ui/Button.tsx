import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary-dark"
  | "secondary-light"
  | "tertiary-dark"
  | "tertiary-light";

type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href: string;
  className?: string;
  "aria-label"?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "rounded-full border border-[var(--brand-color-100)] bg-[var(--brand-color-100)] px-6 py-3.5 text-[var(--text-color-white-90)] hover:border-[var(--brand-color-100-hover)] hover:bg-[var(--brand-color-100-hover)]",
  "secondary-dark":
    "rounded-full border border-[var(--text-color-black-90)] px-6 py-3.5 text-[var(--text-color-black-90)] hover:bg-[var(--text-color-black-90)] hover:text-[var(--text-color-white-90)]",
  "secondary-light":
    "rounded-full border border-[var(--text-color-white-90)] px-6 py-3.5 text-[var(--text-color-white-90)] hover:bg-[var(--text-color-white-90)] hover:text-[var(--text-color-black-90)]",
  "tertiary-dark":
    "border-b border-[var(--text-color-black-90)] pb-4 pr-6 pt-2 text-[var(--text-color-black-90)] hover:border-[var(--brand-color-text)] hover:text-[var(--brand-color-text)]",
  "tertiary-light":
    "border-b border-[var(--text-color-white-90)] pb-4 pr-6 pt-2 text-[var(--text-color-white-90)] hover:border-[var(--brand-color-text)] hover:text-[var(--brand-color-text)]",
};

export function Button({
  variant = "tertiary-dark",
  children,
  href,
  className = "",
  "aria-label": ariaLabel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center text-sm font-medium leading-none transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color-text)] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
