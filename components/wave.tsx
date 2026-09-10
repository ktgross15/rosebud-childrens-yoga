export function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="-6 -6 232 72"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 30 C 20 0, 40 60, 60 30 S 100 0, 120 30 S 160 60, 180 30 S 210 0, 220 30"
        stroke="currentColor"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
