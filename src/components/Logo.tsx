type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({ className = "h-8 w-auto", title = "Kaide" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <g fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        {/* top crossed strokes */}
        <path d="M45 10 L70 45" />
        <path d="M85 10 L60 45" />
        {/* vertical stem */}
        <path d="M60 45 L60 110" />
        {/* left cup loop */}
        <path d="M40 60 L40 95 Q40 105 50 105 L60 105" />
        {/* right handle */}
        <path d="M60 55 L85 55 Q95 55 95 65 Q95 75 85 75 L75 75" />
        {/* bottom connector */}
        <path d="M40 95 L85 95" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-2xl tracking-tight ${className}`}>
      kaide
    </span>
  );
}
