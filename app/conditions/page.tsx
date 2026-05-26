import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CONDITIONS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Conditions',
  description: 'Bladder conditions within the MISSED framework — from IC/BPS to neurogenic bladder and beyond.',
}

export default function ConditionsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-charcoal py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-light mb-4">
              The MISSED Framework
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              Bladder conditions we<br />
              <em className="italic text-sage-light">keep missing</em>
            </h1>
            <p className="font-body text-base text-white/60 leading-relaxed max-w-2xl font-light">
              Seven overlapping conditions that are routinely misdiagnosed, undertreated, or dismissed
              in women's healthcare. Each falls within one or more categories of the MISSED diagnostic framework.
            </p>
          </div>
        </section>

        {/* Conditions grid */}
        <section className="bg-cream py-20 section-divider">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONDITIONS.map((condition) => {
                const letter = condition.category.charAt(0)
                return (
                  <Link
                    key={condition.slug}
                    href={`/conditions/${condition.slug}`}
                    className="group bg-white border border-sage/20 hover:border-sage/50 p-8 transition-colors block relative overflow-hidden"
                  >
                    {/* Faded background letter */}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-4 -right-2 font-display text-[8rem] font-light text-sage/8 group-hover:text-sage/12 transition-colors select-none leading-none"
                    >
                      {letter}
                    </span>

                    <span className="inline-block text-[0.62rem] font-body tracking-[0.1em] uppercase text-sage-deep bg-sage-pale px-2.5 py-1 border border-sage/25 mb-4 relative">
                      {condition.category}
                    </span>
                    <h2 className="font-display text-xl font-light text-charcoal leading-snug mb-3 group-hover:text-sage-deep transition-colors relative">
                      {condition.name}
                    </h2>
                    <p className="font-body text-sm text-muted leading-relaxed font-light mb-6 relative">
                      {condition.description}
                    </p>
                    <span className="font-body text-xs text-sage-deep tracking-wide flex items-center gap-1.5 group-hover:gap-3 transition-all relative">
                      Read clinical overview
                      <span className="text-sage">→</span>
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-sage-pale py-16 section-divider">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl font-light text-charcoal mb-4">
              Treatment begins with the right diagnosis
            </h2>
            <p className="font-body text-base text-muted font-light mb-8 max-w-xl mx-auto">
              Many of these conditions respond to GAG layer restoration therapy. Explore the treatment
              pathway and the role of Elmiron® in IC/BPS management.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/treatment"
                className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide"
              >
                Treatment Ladder
              </Link>
              <Link
                href="/diagnosis"
                className="font-body text-sm px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide"
              >
                Diagnostic Pathway
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
