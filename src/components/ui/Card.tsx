type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-[var(--border-radius-md)] border border-[var(--border-color-neutral)] bg-white transition-shadow hover:border-[var(--brand-color-100)] hover:shadow-[0_4px_16px_8px_rgba(124,148,122,0.1)] focus-within:border-[var(--brand-color-100)] focus-within:shadow-[0_4px_16px_8px_rgba(124,148,122,0.1)] ${className}`}
    >
      {children}
    </article>
  );
}
