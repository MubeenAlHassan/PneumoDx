'use client'

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-pneumo-primary rounded-lg flex items-center justify-center">
              <span className="material-icons-round text-white text-xl">insights</span>
            </div>
            <span className="font-bold tracking-tight text-lg">
              Pneumo<span className="text-pneumo-primary">Dx</span>
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            CNN-based pneumonia detection for medical imaging analysis.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-sm mb-6">Product</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#api">
                API Docs
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#integrations">
                Integrations
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#changelog">
                Changelog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm mb-6">Clinical</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#papers">
                White Papers
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#datasets">
                Datasets
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#ethics">
                Ethics AI
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#compliance">
                Compliance
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-sm mb-6">Company</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#careers">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#newsroom">
                Newsroom
              </a>
            </li>
            <li>
              <a className="hover:text-pneumo-primary transition-colors" href="#support">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
        <p>© 2024 PneumoDx AI Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-pneumo-primary transition-colors" href="#privacy">
            Privacy Policy
          </a>
          <a className="hover:text-pneumo-primary transition-colors" href="#terms">
            Terms of Service
          </a>
          <a className="hover:text-pneumo-primary transition-colors" href="#cookies">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
