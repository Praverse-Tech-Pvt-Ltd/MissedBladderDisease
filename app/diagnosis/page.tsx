import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { DiagnosisSteps } from '@/components/DiagnosisSteps'

export const metadata: Metadata = {
  title: 'Diagnosis in Women',
  description: 'A structured pathway for diagnosing IC/BPS and missed bladder conditions in women.',
}

export default function DiagnosisPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="bg-charcoal py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-light mb-4">
              Diagnostic Pathway for Women
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              How to diagnose IC/BPS in women
            </h1>
            <p className="font-body text-lg text-white/60 font-light leading-relaxed max-w-2xl">
              IC/BPS is a diagnosis of exclusion requiring systematic evaluation, and women make up
              the overwhelming majority of cases. Following a structured diagnostic pathway reduces
              a woman's time to diagnosis and prevents unnecessary antibiotic courses and invasive
              procedures.
            </p>
          </div>
        </section>

        <DiagnosisSteps />
      </main>
      <Footer />
    </>
  )
}

