import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CONDITIONS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Conditions in Women',
  description: 'Bladder conditions in women within the MISSED framework — from IC/BPS to neurogenic bladder and beyond.',
}

const categoryColor: Record<string, string> = {
  I: 'bg-sage-deep',
  M: 'bg-sage',
  S: 'bg-muted',
  E: 'bg-sage-light',
  D: 'bg-charcoal',
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
              The MISSED Framework for Women
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              Bladder conditions we<br />
              <em className="italic text-sage-light">keep missing in women</em>
            </h1>
            <p className="font-body text-base text-white/60 leading-relaxed max-w-2xl font-light">
              Seven overlapping conditions that are routinely misdiagnosed, undertreated, or dismissed
              in women's healthcare — where IC/BPS alone affects women 5–10 times more often than men.
              Each falls within one or more categories of the MISSED diagnostic framework.
            </p>
          </div>
        </section>

        {/* Conditions grid */}
        <section className="bg-cream py-20 section-divider">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sage/15">
              {CONDITIONS.map((condition) => {
                const letter = condition.category.charAt(0)
                const accent = categoryColor[letter] ?? 'bg-sage'
                return (
                  <Link
                    key={condition.slug}
                    href={`/conditions/${condition.slug}`}
                    className="group bg-cream hover:bg-charcoal p-8 transition-all duration-300 flex flex-col relative"
                  >
                    {/* Top accent line */}
                    <span className={`absolute top-0 left-0 right-0 h-[2px] ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Large background letter */}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-3 -right-1 font-display text-[7rem] font-light leading-none select-none text-sage/[0.07] group-hover:text-white/[0.04] transition-colors duration-300"
                    >
                      {letter}
                    </span>

                    {/* Badge */}
                    <span className="inline-block text-[0.58rem] font-body tracking-[0.12em] uppercase text-sage-deep group-hover:text-white/50 bg-sage-pale group-hover:bg-white/5 px-2.5 py-1 border border-sage/25 group-hover:border-white/10 mb-5 relative self-start transition-all duration-300">
                      {condition.category}
                    </span>

                    {/* Title */}
                    <h2 className="font-display text-xl font-light text-charcoal group-hover:text-white leading-snug mb-3 relative transition-colors duration-300">
                      {condition.name}
                    </h2>

                    {/* Description */}
                    <p className="font-body text-sm text-muted group-hover:text-white/60 leading-relaxed font-light mb-8 relative flex-1 transition-colors duration-300">
                      {condition.description}
                    </p>

                    {/* CTA */}
                    <span className="font-body text-xs text-sage-deep group-hover:text-white/70 tracking-wide flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300 relative">
                      Read clinical overview
                      <span className="text-sage group-hover:text-white/50 transition-colors duration-300">→</span>
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
              Treatment begins with the right diagnosis for women
            </h2>
            <p className="font-body text-base text-muted font-light mb-8 max-w-xl mx-auto">
              Many of these conditions respond to GAG layer restoration therapy. Explore the treatment
              pathway and the role of Elmiron® in managing IC/BPS in women.
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
