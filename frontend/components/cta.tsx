'use client'

export function CTA() {
  return (
    <section className="max-w-5xl mx-auto px-6 my-32">
      <div className="bg-pneumo-primary rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-8">
            Ready to evolve your clinical <span className="text-white/80">standards?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
            Join 200+ hospitals worldwide reducing diagnostic turnaround time by over 40%.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-pneumo-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl">
              Explore
            </button>
            <button className="bg-pneumo-primary border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
