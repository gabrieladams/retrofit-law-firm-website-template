type HeadingProps = {
  as?: "h2" | "h3";
  size: "lg" | "md";
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function Heading({ as: Tag = "h2", size, children, id, className = "" }: HeadingProps) {
  return (
    <Tag
      id={id}
      className={`font-medium leading-[1.2] tracking-[-0.02em] text-[var(--text-color-black-90)] ${
        size === "lg" ? "text-[clamp(2rem,3.2vw,2.25rem)]" : "text-2xl"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
