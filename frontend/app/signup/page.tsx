import { SignupBackgroundShapes } from '@/components/signup/background-shapes'
import { SignupHeader } from '@/components/signup/header'
import { SignupSidebar } from '@/components/signup/sidebar'
import { SignupForm } from '@/components/signup/form'
import { SignupFooter } from '@/components/signup/footer'

export const metadata = {
  title: 'Sign Up | PneumaAI Medical Platform',
  description: 'Create your professional account to access advanced pneumonia detection AI tools.',
}

export default function SignupPage() {
  return (
    <div className="relative">
      <SignupBackgroundShapes />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
        {/* <SignupHeader /> */}
        <section className="w-full max-w-6xl mt-28">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <SignupSidebar />
            <SignupForm />
          </div>
        </section>
        <SignupFooter />
      </main>
    </div>
  )
}
