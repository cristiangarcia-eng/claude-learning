export function Logo({ size = "default" }: { size?: "sm" | "default" | "lg" }) {
  const sizes = {
    sm: "text-base",
    default: "text-lg",
    lg: "text-4xl md:text-5xl",
  };

  return (
    <span
      className={`${sizes[size]} font-bold tracking-tight font-mono`}
    >
      <span className="text-foreground">Claude</span>
      <span className="text-brand-green">10x</span>
    </span>
  );
}
