// src/app/page.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Users, BarChart, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Mail className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">EmailAssist</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Email Marketing Made Simple
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Create, send, and track email campaigns that engage your audience and drive results.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup">
                  <Button>Get Started</Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Mail className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold">Campaign Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create and manage email campaigns with our intuitive interface.
                </p>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold">Subscriber Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Organize and segment your subscribers efficiently.
                </p>
              </div>
              <div className="space-y-2">
                <BarChart className="h-8 w-8 text-purple-500" />
                <h3 className="text-xl font-bold">Analytics & Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Track opens, clicks, and engagement with detailed analytics.
                </p>
              </div>
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-yellow-500" />
                <h3 className="text-xl font-bold">Automation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Set up automated email sequences and workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to get started?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of marketers who are already using our platform to grow their business.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 EmailAssist. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}