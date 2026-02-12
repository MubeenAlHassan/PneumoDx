'use client'

export function SignupFooter() {
  return (
    <footer className="mt-20 w-full max-w-6xl border-t border-slate-200 dark:border-slate-800 pt-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500">© 2024 PneumaDx Healthcare Technologies Inc. All rights reserved.</p>
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-pneumo-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-pneumo-primary transition-colors">
            GDPR Compliance
          </a>
          <a href="#" className="hover:text-pneumo-primary transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}
