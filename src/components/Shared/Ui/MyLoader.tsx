export function MyLoader() {
  return (
    <div className="relative flex items-center justify-center h-24 w-24">
      {/* Outer subtle ring */}
      <div className="absolute inset-0 rounded-full border-2 border-border/60" />

      {/* Rotating arc segment */}
      <div
        className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin-slow"
        style={{
          borderWidth: "2px",
          boxShadow: "0 0 10px rgba(25, 160, 83, 0.2)",
        }}
      />

      {/* Inner Letter "A" */}
      <span className="text-3xl font-light text-primary drop-shadow-[0_0_8px_rgba(25,160,83,0.4)]">
        L
      </span>
    </div>
  );
}
