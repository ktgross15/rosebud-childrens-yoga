export function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`dot-grid grid ${className}`} aria-hidden="true">
      {Array.from({ length: 15 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}
