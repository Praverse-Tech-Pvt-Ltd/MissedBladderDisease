'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About IC/BPS', href: '/#about-icbps' },
  { label: 'Conditions', href: '/conditions' },
  { label: 'Symptoms', href: '/symptoms' },
  { label: 'Diagnosis', href: '/diagnosis' },
  { label: 'Treatment', href: '/treatment' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-cream/95 backdrop-blur-sm' : 'bg-cream/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-display text-lg font-light tracking-wide text-charcoal">
              Missed Bladder Disease
            </span>
            <span className="hidden md:inline text-[0.6rem] font-body tracking-[0.12em] text-muted uppercase border-l border-sage/30 pl-3">
              by Polysaccharide Chemistry
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const baseHref = link.href.split('#')[0]
              const isActive = link.href === '/' ? pathname === '/' : Boolean(baseHref && pathname.startsWith(baseHref))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm tracking-wide transition-colors ${
                    isActive ? 'text-charcoal border-b border-charcoal pb-0.5' : 'text-muted hover:text-charcoal'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="https://elmiron.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-sage-deep hover:text-sage border-b border-sage/40 hover:border-sage pb-0.5 transition-colors tracking-wide"
            >
              Elmiron® ↗
            </a>
            <a
              href="https://polysacc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted hover:text-charcoal tracking-wide transition-colors"
            >
              polysacc.com ↗
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-charcoal transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px] bg-white' : ''}`} />
            <span className={`block w-5 h-px bg-charcoal transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-charcoal transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px] bg-white' : ''}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center lg:hidden">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-3xl font-light text-white hover:text-sage-light transition-colors tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://elmiron.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-3xl font-light text-sage-light hover:text-sage transition-colors tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              Elmiron® ↗
            </a>
            <a
              href="https://polysacc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-3xl font-light text-white/70 hover:text-sage-light transition-colors tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              polysacc.com ↗
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
