import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { TreatmentLadder } from '@/components/TreatmentLadder'

export const metadata: Metadata = {
  title: 'Treatment for Women',
  description: 'The IC/BPS treatment ladder for women — from lifestyle modification to surgical intervention.',
}

export default function TreatmentPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="bg-sage-deep py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-white/60 mb-4">
              Management for Women
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white leading-tight mb-6">
              The IC/BPS treatment ladder for women
            </h1>
            <p className="font-body text-lg text-white/70 font-light leading-relaxed max-w-2xl">
              IC/BPS education on this site is focused on early recognition in women, PPS therapy,
              and product information through Elmiron.
            </p>
          </div>
        </section>

        <TreatmentLadder />
      </main>
      <Footer />
    </>
  )
}

