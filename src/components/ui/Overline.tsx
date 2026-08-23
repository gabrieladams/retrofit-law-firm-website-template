type OverlineProps = {
  children: React.ReactNode;
  className?: string;
};

export function Overline({ children, className = "" }: OverlineProps) {
  return (
    <p className={`pb-4 text-base font-medium leading-[1.6] text-[var(--brand-color-text)] ${className}`}>
      {children}
    </p>
  );
}
