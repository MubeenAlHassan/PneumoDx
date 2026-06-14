'use client'

function ShapeRing({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-full border border-[#2563EB]/25 ${className ?? ''}`}
      aria-hidden="true"
    />
  )
}

function ShapePill({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE]/80 border border-[#2563EB]/20 ${className ?? ''}`}
      aria-hidden="true"
    />
  )
}

function ShapeRoundedRect({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-[#2563EB]/20 bg-white/70 ${className ?? ''}`}
      aria-hidden="true"
    />
  )
}

function ShapePlus({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** Single fixed canvas: white base + decorative shapes — one unified landing background. */
export function BackgroundShapes() {
  return (
    <div className="landing-unified-bg fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Layer 1 — white foundation */}
      <div className="absolute inset-0 bg-white" />

      {/* Layer 2 — soft depth wash (stays on white spectrum) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F8FAFC] to-white" />
      <div
        className="absolute -top-[20%] -right-[10%] h-[55%] w-[45%] rounded-full opacity-90"
        style={{ background: 'radial-gradient(circle, rgba(239,246,255,0.9) 0%, transparent 68%)' }}
      />
      <div
        className="absolute top-[35%] -left-[12%] h-[50%] w-[40%] rounded-full opacity-80"
        style={{ background: 'radial-gradient(circle, rgba(241,245,249,0.85) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-8%] right-[20%] h-[45%] w-[50%] rounded-full opacity-75"
        style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.35) 0%, transparent 72%)' }}
      />

      {/* Layer 2.5 — flowing light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-light-flow absolute top-[8%] -left-[40%] h-[38%] w-[85%] rounded-full blur-3xl"
          style={{
            background:
              'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.85) 35%, rgba(147,197,253,0.45) 50%, rgba(255,255,255,0.75) 65%, transparent 100%)',
          }}
        />
        <div
          className="animate-light-flow-reverse absolute top-[42%] -left-[35%] h-[32%] w-[75%] rounded-full blur-3xl [animation-delay:4s]"
          style={{
            background:
              'linear-gradient(95deg, transparent 0%, rgba(239,246,255,0.9) 40%, rgba(96,165,250,0.28) 52%, rgba(255,255,255,0.8) 62%, transparent 100%)',
          }}
        />
        <div
          className="animate-light-flow-slow absolute top-[68%] -left-[45%] h-[28%] w-[80%] rounded-full blur-3xl [animation-delay:8s]"
          style={{
            background:
              'linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.7) 38%, rgba(191,219,254,0.35) 50%, transparent 100%)',
          }}
        />
        <div
          className="animate-light-glow-drift absolute top-[22%] right-[5%] h-[340px] w-[340px] rounded-full blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(147,197,253,0.25) 42%, transparent 70%)',
          }}
        />
        <div
          className="animate-light-glow-drift absolute bottom-[15%] left-[10%] h-[280px] w-[280px] rounded-full blur-[70px] [animation-delay:6s]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(219,234,254,0.35) 45%, transparent 72%)',
          }}
        />
      </div>

      {/* Layer 3 — grid & dot texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Subtle sweeping shimmer over the canvas */}
      <div
        className="absolute inset-0 animate-light-shimmer opacity-[0.35]"
        style={{
          background:
            'linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.55) 48%, rgba(191,219,254,0.2) 52%, transparent 68%)',
          backgroundSize: '220% 220%',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: 'radial-gradient(circle, #2563EB 1.25px, transparent 1.25px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Layer 4 — floating orbs */}
      <div className="fluid-shape animate-ambient-breathe absolute top-[-12%] right-[-6%] h-[420px] w-[420px] rounded-full bg-[#2563EB]/12" />
      <div className="fluid-shape animate-ambient-breathe-slow absolute bottom-[8%] left-[-8%] h-[520px] w-[520px] rounded-full bg-[#60A5FA]/14" />
      <div
        className="fluid-shape animate-ambient-breathe absolute top-[42%] right-[12%] h-[280px] w-[280px] rounded-full bg-[#BFDBFE]/45"
        style={{ animationDuration: '16s' }}
      />
      <div className="fluid-shape animate-ambient-breathe-slow absolute top-[68%] left-[38%] h-[200px] w-[200px] rounded-full bg-[#EFF6FF]/90" />

      {/* Layer 5 — geometric shapes */}
      <ShapeRing className="animate-shape-drift absolute top-[18%] left-[6%] h-32 w-32 opacity-80" />
      <ShapeRing className="animate-shape-drift-reverse absolute top-[62%] right-[8%] h-44 w-44 opacity-70 [animation-delay:2s]" />
      <ShapeRing className="animate-shape-drift absolute bottom-[22%] left-[18%] h-20 w-20 border-[#60A5FA]/35 opacity-65" />
      <ShapeRing className="animate-shape-drift-slow absolute top-[38%] left-[42%] h-16 w-16 border-[#2563EB]/15 opacity-50" />

      <ShapePill className="animate-shape-drift-slow absolute top-[28%] right-[22%] h-14 w-36 rotate-12 opacity-85" />
      <ShapePill className="animate-shape-drift-reverse absolute bottom-[38%] left-[8%] h-10 w-28 -rotate-6 opacity-70" />
      <ShapePill className="animate-shape-drift absolute top-[78%] right-[35%] h-8 w-24 rotate-6 opacity-55" />

      <ShapeRoundedRect className="animate-shape-drift absolute top-[12%] right-[32%] h-24 w-24 rotate-45 opacity-60" />
      <ShapeRoundedRect className="animate-shape-drift-slow absolute bottom-[12%] right-[28%] h-16 w-20 -rotate-12 opacity-55" />
      <ShapeRoundedRect className="animate-shape-drift-reverse absolute top-[52%] left-[28%] h-14 w-18 -rotate-6 opacity-45" />

      <ShapePlus className="animate-shape-drift-slow absolute top-[48%] left-[4%] h-8 w-8 text-[#2563EB]/30" />
      <ShapePlus className="animate-shape-drift-reverse absolute top-[72%] right-[18%] h-6 w-6 text-[#2563EB]/25" />
      <ShapePlus className="animate-shape-drift absolute top-[8%] left-[42%] h-5 w-5 text-[#60A5FA]/35" />
      <ShapePlus className="animate-shape-drift-slow absolute bottom-[18%] left-[52%] h-5 w-5 text-[#2563EB]/20" />

      <div className="absolute top-[20%] left-[55%] h-px w-40 rotate-[35deg] bg-gradient-to-r from-transparent via-[#2563EB]/28 to-transparent animate-shape-drift-slow" />
      <div className="absolute bottom-[30%] left-[12%] h-px w-56 -rotate-[25deg] bg-gradient-to-r from-transparent via-[#60A5FA]/32 to-transparent animate-shape-drift-reverse" />
      <div className="absolute top-[58%] right-[42%] h-px w-32 rotate-[12deg] bg-gradient-to-r from-transparent via-[#2563EB]/18 to-transparent animate-shape-drift" />
    </div>
  )
}
