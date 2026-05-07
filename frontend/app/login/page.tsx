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
      
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        <section className='w-full flex justify-center items-center'>
        {/* Main Bento Box Login Card */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-6 mt-28">
          <LoginSidebar />
          <LoginForm />
        </div>
        </section>

      </main>
    </div>
  )
}
