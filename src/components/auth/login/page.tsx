// src/app/(auth)/signup/page.tsx
import Link from 'next/link'
import { LoginForm } from '@/components/auth/login-form'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md space-y-6 p-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to get started
          </p>
        </div>
        
        <LoginForm />
        
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link 
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}