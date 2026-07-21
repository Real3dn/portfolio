export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60 dark:opacity-80" />
      
      {/* Architectural subtle ambient highlight gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-neutral-200/40 dark:from-neutral-800/20 to-transparent blur-[120px] pointer-events-none" />
    </div>
  )
}
