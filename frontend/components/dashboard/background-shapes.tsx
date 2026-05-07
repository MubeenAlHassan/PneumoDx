export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-pneumo-primary rounded-full blur-[80px] opacity-15"></div>
      <div className="absolute top-1/2 -right-24 w-[400px] h-[400px] bg-purple-400 rounded-full blur-[80px] opacity-15"></div>
      <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-pneumo-primary rounded-full blur-[80px] opacity-10"></div>
    </div>
  )
}
