import Image from 'next/image'

export function Sidebar() {
  return (
    <aside className="w-20 lg:w-24 flex flex-col items-center py-8 bg-white/50 dark:bg-pneumo-bg-dark/50 backdrop-blur-md border-r border-slate-200 dark:border-slate-800 z-10 fixed left-0 h-screen overflow-hidden">
      <div className="w-12 h-12 bg-pneumo-primary rounded-xl flex items-center justify-center mb-12 shadow-lg shadow-pneumo-primary/20">
        <span className="material-icons text-white">insights</span>
      </div>
      <nav className="flex flex-col gap-8 flex-1">
        <a className="p-3 bg-pneumo-primary/10 text-pneumo-primary rounded-xl transition-colors hover:bg-pneumo-primary/20" href="#" title="Dashboard">
          <span className="material-icons">dashboard</span>
        </a>
        <a className="p-3 text-slate-400 hover:text-pneumo-primary transition-colors" href="#" title="Users">
          <span className="material-icons">group</span>
        </a>
        <a className="p-3 text-slate-400 hover:text-pneumo-primary transition-colors" href="#" title="Files">
          <span className="material-icons">folder_open</span>
        </a>
        <a className="p-3 text-slate-400 hover:text-pneumo-primary transition-colors" href="#" title="Settings">
          <span className="material-icons">settings</span>
        </a>
      </nav>
      <div className="mt-auto">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-pneumo-primary/20">
          <img 
            alt="Doctor Profile" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhyVoNxLfqx1GuA5qFQ0QNb1ueno7vC-veibd0CQMZWhjW_CnVfJ5dzO46yTCxrbaRHz5J-ijCHhyPoTlUs2k70rsK6WIRYHx6eajoxDhywh1OYzmb7fgTaM5MJdZXuxpKZVv4ofwF9xOX8m4Mv1Dkwgb9riBzuf83HH50CmAvsZiIenfzjp5OG1XGgC-xw5eK7ySwlDcvlPZhVNzV6QMiybhLOJ3pyFnaQ283ej22_aX99W0CPg-vS39fmDVmOwOXksQcVI47vqo"
            width={40}
            height={40}
          />
        </div>
      </div>
    </aside>
  )
}
