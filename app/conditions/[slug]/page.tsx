import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { CONDITIONS } from '@/lib/data'

export function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const condition = CONDITIONS.find((c) => c.slug === params.slug)
  if (!condition) return {}
  return {
    title: condition.name,
    description: `Clinical information on ${condition.name} — part of the Missed Bladder Disease educational initiative.`,
  }
}

export default function ConditionPage({ params }: { params: { slug: string } }) {
  const condition = CONDITIONS.find((c) => c.slug === params.slug)
  if (!condition) notFound()

  return (
    <>
      <Nav />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-sage-pale py-24">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 font-body text-[0.72rem] tracking-[0.12em] uppercase text-muted hover:text-charcoal transition-colors mb-6"
            >
              ← All Conditions
            </Link>
            <span className="block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
              {condition.category}
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-4">
              {condition.name}
            </h1>
            <p className="font-body text-base text-muted font-light leading-relaxed max-w-2xl">
              {condition.description}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-cream py-16 section-divider">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl font-light text-charcoal mb-4">Overview</h2>
            <p className="font-body text-base text-muted leading-relaxed font-light">{condition.overview}</p>
          </div>
        </section>

        {/* Symptoms */}
        {condition.symptoms.length > 0 && (
          <section className="bg-sage-pale py-16 section-divider">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="font-display text-2xl font-light text-charcoal mb-6">Key Symptoms</h2>
              <ul className="space-y-2.5">
                {condition.symptoms.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-sage rounded-full flex-none mt-2" />
                    <span className="font-body text-sm text-charcoal">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Pathophysiology */}
        {condition.pathophysiology && (
          <section className="bg-cream py-16 section-divider">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="font-display text-2xl font-light text-charcoal mb-4">Pathophysiology</h2>
              <p className="font-body text-base text-muted leading-relaxed font-light">{condition.pathophysiology}</p>
            </div>
          </section>
        )}

        {/* Treatment */}
        {condition.treatment && (
          <section className="bg-cream py-16 section-divider">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="font-display text-2xl font-light text-charcoal mb-4">Treatment Approach</h2>
              <p className="font-body text-base text-muted leading-relaxed font-light mb-8">{condition.treatment}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/treatment"
                  className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide"
                >
                  Full Treatment Ladder
                </Link>
                <Link
                  href="/conditions"
                  className="font-body text-sm px-6 py-3 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-colors tracking-wide"
                >
                  All Conditions
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
