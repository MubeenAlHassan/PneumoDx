interface AuthAsideProps {
  heading: string
  accent: string
  description: string
  points: { icon: string; title: string; copy: string }[]
}

export function AuthAside({ heading, accent, description, points }: AuthAsideProps) {
  return (
    <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1D4ED8]">
      {/* Soft white radial glow, upper corner */}
      <div
        className="pointer-events-none absolute -top-40 -left-24 h-96 w-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 70%)' }}
        aria-hidden="true"
      />
      {/* Faint chest X-ray backdrop */}
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWaTkPUEXErwkYIqoLxGjghCfLNU0PhfjCOybqCXaKZCNysChzeu_Bervd_GHxRzob-3gUQBkLC_wY1Qpim2JUQ2h0E1LspPKvn35Z64HR9HkDiEz_wjK95r7xNcIhY3bV_Gqx9ImvlREVvsptQ66hYtdK8qvrgx5FU26RQ-GaX2LF2IoETI_XjHB3mnHEskPEn3NtVfMmBbTp6eOpbIvX8W7SYwVTDDdbD40W6PGIjsYgOrOh0yZg9Fy7EQgXqD7b4apdC_Ss4-I"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-luminosity"
      />

      <div className="relative z-10 flex items-center gap-2">
        <span className="material-icons-round text-white" aria-hidden="true">
          coronavirus
        </span>
        <span className="font-serif text-[22px] font-semibold text-white">PneumoScan</span>
      </div>

      <div className="relative z-10 max-w-md">
        <h1 className="font-serif text-[36px] leading-tight text-white">
          {heading} <span className="italic text-white/90">{accent}</span>
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-white/80">{description}</p>

        <div className="mt-10 space-y-5">
          {points.map((p) => (
            <div key={p.title} className="flex items-start gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-white/15 border border-white/20 text-white backdrop-blur-sm">
                <span className="material-icons-round text-[20px]" aria-hidden="true">
                  {p.icon}
                </span>
              </span>
              <div>
                <h4 className="text-[14px] font-semibold text-white">{p.title}</h4>
                <p className="text-[13px] text-white/75">{p.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="relative z-10 mono-data text-white/70">AI-Powered Pneumonia Detection Platform</p>
    </div>
  )
}
