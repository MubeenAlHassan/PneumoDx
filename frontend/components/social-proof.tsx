'use client'

export function SocialProof() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 border-y border-slate-200/50 dark:border-slate-800/50 mb-24">
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-8">
        Clinical & Dataset Sources
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-50 contrast-125">
        <span className="font-serif italic text-2xl font-bold">NIH</span>
        <span className="font-sans font-black text-2xl">Kaggle</span>
        <span className="font-serif text-2xl">WHO</span>
        <span className="font-sans font-bold text-2xl">
          NHS <span className="font-light">peer-reviewed studies</span>
        </span>
        <span className="font-serif italic text-2xl">NHS Digital</span>
      </div>
    </section>
  )
}
