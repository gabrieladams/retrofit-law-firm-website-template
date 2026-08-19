type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
  size: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const sizeStyles: Record<HeadingProps["size"], string> = {
  sm: "text-[var(--heading-font-size-sm)]",
  md: "text-[var(--heading-font-size-md)]",
  lg: "text-[var(--heading-font-size-lg)]",
  xl: "text-[var(--heading-font-size-xl)]",
};

export function Heading({ as: Tag = "h2", size, children, id, className = "" }: HeadingProps) {
  return (
    <Tag
      id={id}
      className={`font-medium capitalize leading-[1.2] text-[var(--text-color-black-90)] ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Tag>
  );
}
