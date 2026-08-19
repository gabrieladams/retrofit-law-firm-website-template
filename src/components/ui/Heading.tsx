type HeadingProps = {
  size: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  id?: string;
  className?: string;
};

type HeadingTag = "h1" | "h2" | "h3" | "h4";

const sizeStyles: Record<HeadingProps["size"], string> = {
  sm: "text-[var(--heading-font-size-sm)]",
  md: "text-[var(--heading-font-size-md)]",
  lg: "text-[var(--heading-font-size-lg)]",
  xl: "text-[var(--heading-font-size-xl)]",
};

export function Heading({ size, children, id, className = "" }: HeadingProps) {
  const Tag = ({ xl: "h1", lg: "h2", md: "h3", sm: "h4" } satisfies Record<HeadingProps["size"], HeadingTag>)[size];

  return (
    <Tag
      id={id}
      className={`font-medium capitalize leading-[1.2] text-[var(--text-color-black-90)] ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
