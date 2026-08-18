type BodyTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function BodyText({ children, className = "" }: BodyTextProps) {
  return (
    <p className={`text-base leading-[1.6] text-[var(--text-color-gray-60)] ${className}`}>
      {children}
    </p>
  );
}
