'use client'

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-[600px] h-[600px] bg-pneumo-primary rounded-full -top-20 -left-20 animate-pulse opacity-40 blur-[80px] z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-200 dark:bg-purple-900/30 rounded-full bottom-20 -right-10 opacity-40 blur-[80px] z-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-100 dark:bg-blue-900/20 rounded-full top-1/4 left-1/2 opacity-40 blur-[80px] z-0"></div>
    </div>
  )
}
