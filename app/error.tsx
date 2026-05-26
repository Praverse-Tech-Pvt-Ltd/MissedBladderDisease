'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
          Something went wrong
        </span>
        <h1 className="font-display text-5xl font-light text-charcoal mb-4">
          Unexpected error
        </h1>
        <p className="font-body text-base text-muted font-light leading-relaxed mb-8">
          We encountered an error loading this page. Please try again or return to the homepage.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage transition-colors tracking-wide"
          >
            Try again
          </button>
          <Link
            href="/"
            className="font-body text-sm px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  )
}
