'use client'

export function RightBackgroundShapes() {
  return (
    <div className="fixed inset-0 -z-10 bg-signup-light dark:bg-signup-dark overflow-hidden">
      <div
        className="absolute w-96 h-96 rounded-full filter blur-3xl opacity-40 bg-signup-primary"
        style={{ top: '-200px', right: '-100px' }}
      />
      <div
        className="absolute w-80 h-80 rounded-full filter blur-3xl opacity-40 bg-blue-400"
        style={{ bottom: '-100px', left: '-100px' }}
      />
      <div
        className="absolute w-72 h-72 rounded-full filter blur-3xl opacity-40 bg-blue-200"
        style={{ top: '30%', left: '10%' }}
      />
    </div>
  )
}
