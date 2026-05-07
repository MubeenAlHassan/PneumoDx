import type { Metadata } from 'next'
import { BackgroundShapes } from '@/components/login/background-shapes'
import { LoginSidebar } from '@/components/login/sidebar'
import { LoginForm } from '@/components/login/form'

export const metadata: Metadata = {
  title: 'PneumoDx - Doctor Login',
  description: 'Secure login for medical professionals to access PneumoAI diagnostic dashboard.',
}

export default function LoginPage() {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 min-h-screen">
      <BackgroundShapes />
      
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 flex flex-col items-center min-h-screen">
        
        {/* Main Bento Box Login Card */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 mt-28">
          <LoginSidebar />
          <LoginForm />
        </div>

      </main>
    </div>
  )
}
