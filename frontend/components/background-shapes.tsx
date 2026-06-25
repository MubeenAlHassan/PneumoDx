'use client'

/** Geviti-inspired premium canvas: soft mesh, ambient light, fine grain — no grid. */
export function BackgroundShapes() {
  return (
    <div className="landing-unified-bg fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Layer 1 — warm white mesh foundation */}
      <div className="landing-mesh absolute inset-0" />

      {/* Layer 2 — fine dot field (soft, fades at edges — not a harsh grid) */}
      <div className="landing-dot-field absolute inset-0 opacity-80" />

      {/* Layer 3 — slow ambient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-light-glow-drift absolute -top-[15%] -right-[8%] h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full blur-[90px]"
          style={{
            background: 'radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(239,246,255,0.15) 45%, transparent 72%)',
          }}
        />
        <div
          className="animate-light-glow-drift absolute top-[55%] -left-[12%] h-[min(480px,50vw)] w-[min(480px,50vw)] rounded-full blur-[85px] [animation-delay:5s]"
          style={{
            background: 'radial-gradient(circle, rgba(191,219,254,0.28) 0%, rgba(248,250,252,0.12) 50%, transparent 70%)',
          }}
        />
        <div
          className="animate-ambient-breathe-slow absolute top-[32%] right-[18%] h-[min(320px,35vw)] w-[min(320px,35vw)] rounded-full blur-[70px]"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(219,234,254,0.25) 55%, transparent 75%)',
          }}
        />
      </div>

      {/* Layer 4 — soft flowing light (Geviti-style premium sheen) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="animate-light-flow absolute top-[6%] -left-[45%] h-[42%] w-[90%] rounded-full blur-3xl opacity-60"
          style={{
            background:
              'linear-gradient(108deg, transparent 0%, rgba(255,255,255,0.92) 38%, rgba(191,219,254,0.22) 50%, rgba(255,255,255,0.85) 62%, transparent 100%)',
          }}
        />
        <div
          className="animate-light-flow-reverse absolute top-[48%] -left-[40%] h-[36%] w-[82%] rounded-full blur-3xl opacity-50 [animation-delay:6s]"
          style={{
            background:
              'linear-gradient(96deg, transparent 0%, rgba(239,246,255,0.85) 42%, rgba(147,197,253,0.14) 52%, transparent 100%)',
          }}
        />
      </div>

      {/* Layer 5 — subtle concentric rings (clinical / longevity aesthetic) */}
      <div className="absolute top-[14%] right-[6%] h-[280px] w-[280px] opacity-[0.14]">
        <div className="absolute inset-0 rounded-full border border-[#2563EB]/30 animate-ambient-breathe-slow" />
        <div className="absolute inset-[18%] rounded-full border border-[#2563EB]/20 animate-ambient-breathe" />
        <div className="absolute inset-[36%] rounded-full border border-[#93C5FD]/25" />
      </div>
      <div className="absolute bottom-[18%] left-[4%] h-[200px] w-[200px] opacity-[0.1]">
        <div className="absolute inset-0 rounded-full border border-[#60A5FA]/35 animate-ambient-breathe [animation-delay:3s]" />
        <div className="absolute inset-[22%] rounded-full border border-[#2563EB]/15" />
      </div>

      {/* Layer 6 — film grain for premium texture */}
      <div className="landing-grain absolute inset-0" />

      {/* Layer 7 — center vignette keeps content readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 50% 42%, transparent 0%, rgba(250,251,252,0.4) 55%, rgba(250,251,252,0.85) 100%)',
        }}
      />
    </div>
  )
}
