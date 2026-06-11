'use client'

export function FeaturedAnalysis() {
  return (
    <div className="lg:col-span-6 lg:row-span-2 bento-card p-8 rounded-3xl relative overflow-hidden group glass-panel border border-slate-200/60 dark:border-slate-800/60">
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <span className="bg-pneumo-primary/10 text-pneumo-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">AI Heatmap Focus</span>
          <button className="text-slate-400 hover:text-pneumo-primary transition-colors">
            <span className="material-icons-round">fullscreen</span>
          </button>
        </div>
        <div className="flex-1 flex gap-6">
          <div className="w-1/2 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-slate-800">
            <img 
              alt="Chest X-ray" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWaTkPUEXErwkYIqoLxGjghCfLNU0PhfjCOybqCXaKZCNysChzeu_Bervd_GHxRzob-3gUQBkLC_wY1Qpim2JUQ2h0E1LspPKvn35Z64HR9HkDiEz_wjK95r7xNcIhY3bV_Gqx9ImvlREVvsptQ66hYtdK8qvrgx5FU26RQ-GaX2LF2IoETI_XjHB3mnHEskPEn3NtVfMmBbTp6eOpbIvX8W7SYwVTDDdbD40W6PGIjsYgOrOh0yZg9Fy7EQgXqD7b4apdC_Ss4-I"
            />
            <div className="absolute inset-0 bg-pneumo-primary/20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-white uppercase">Critical Anomaly</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Patient ID: #XR-8821</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">AI has detected consolidation in the lower right lobe with 92% confidence level. Immediate radiologist review required.</p>
            <button className="w-full bg-pneumo-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-pneumo-primary/25 hover:bg-pneumo-primary/90 transition-all text-sm">
              Full Diagnosis
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-pneumo-primary/5 rounded-full blur-3xl group-hover:bg-pneumo-primary/10 transition-colors"></div>
    </div>
  )
}
