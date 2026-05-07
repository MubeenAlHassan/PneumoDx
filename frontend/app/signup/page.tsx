import type { Metadata } from 'next'
import { RightBackgroundShapes } from '@/components/auth/right-background-shapes'
import { LeftBackgroundShapes } from '@/components/auth/left-background-shapes'
import { Sidebar } from '@/components/auth/sidebar'
import { SignupForm } from '@/components/auth/signup-form'

export const metadata: Metadata = {
  title: 'Sign Up | PneumaDx',
  description: 'Create your professional account to access advanced pneumonia detection AI tools.',
}

export default function SignupPage() {
  return (
    <div className="relative">
      <LeftBackgroundShapes />
      <RightBackgroundShapes />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        <section className="w-full max-w-6xl mt-28">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <Sidebar />
            <SignupForm />
          </div>
        </section>
      </main>
    </div>
  )
}
