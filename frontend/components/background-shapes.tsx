'use client'

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="fluid-shape absolute top-[-10%] right-[-5%] w-96 h-96 bg-pneumo-primary/10 rounded-full" />
      <div className="fluid-shape absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-pneumo-lavender dark:bg-pneumo-primary/5 rounded-full" />
      <div className="fluid-shape absolute top-[40%] right-[15%] w-64 h-64 bg-pneumo-primary/5 rounded-full" />
    </div>
  )
}
