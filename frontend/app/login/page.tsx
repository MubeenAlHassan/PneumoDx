import type { Metadata } from 'next'
import { LeftBackgroundShapes } from '@/components/auth/left-background-shapes'
import { RightBackgroundShapes } from '@/components/auth/right-background-shapes'
import { Sidebar } from '@/components/auth/sidebar'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'PneumoDx - Doctor Login',
  description: 'Secure login for medical professionals to access PneumoAI diagnostic dashboard.',
}

export default function LoginPage() {
  return (
    <div className="relative">
      <LeftBackgroundShapes />
      <RightBackgroundShapes />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        <section className='w-full max-w-6xl mt-28'>
        {/* Main Bento Box Login Card */}
        <div className="grid lg:grid-flow-col grid-cols-5 gap-8 items-start">
          <Sidebar />
          <LoginForm />
        </div>
        </section>

      </main>
    </div>
  )
}
