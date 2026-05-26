import dynamic from 'next/dynamic'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const Hero             = dynamic(() => import('@/components/Hero').then((m) => ({ default: m.Hero })), { ssr: false, loading: () => <div className="min-h-screen bg-charcoal" /> })
const AboutICBPS       = dynamic(() => import('@/components/AboutICBPS').then((m) => ({ default: m.AboutICBPS })), { ssr: false, loading: () => <div className="h-96 bg-charcoal" /> })
const OverviewStrip    = dynamic(() => import('@/components/OverviewStrip').then((m) => ({ default: m.OverviewStrip })), { ssr: false, loading: () => <div className="h-24 bg-sage" /> })
const MistAcronym      = dynamic(() => import('@/components/MistAcronym').then((m) => ({ default: m.MistAcronym })), { ssr: false, loading: () => <div className="h-96 bg-cream" /> })
const PathophysiologyGrid = dynamic(() => import('@/components/PathophysiologyGrid').then((m) => ({ default: m.PathophysiologyGrid })), { ssr: false, loading: () => <div className="h-96 bg-cream" /> })
const SymptomsGrid     = dynamic(() => import('@/components/SymptomsGrid').then((m) => ({ default: m.SymptomsGrid })), { ssr: false, loading: () => <div className="h-96 bg-sage-pale" /> })
const DiagnosisSteps   = dynamic(() => import('@/components/DiagnosisSteps').then((m) => ({ default: m.DiagnosisSteps })), { ssr: false, loading: () => <div className="h-96 bg-cream" /> })
const TreatmentLadder  = dynamic(() => import('@/components/TreatmentLadder').then((m) => ({ default: m.TreatmentLadder })), { ssr: false, loading: () => <div className="h-96 bg-cream" /> })
const ProductCTA       = dynamic(() => import('@/components/ProductCTA').then((m) => ({ default: m.ProductCTA })), { ssr: false, loading: () => <div className="h-64 bg-sage-pale" /> })

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutICBPS />
        <OverviewStrip />
        <MistAcronym />
        <PathophysiologyGrid />
        <SymptomsGrid />
        <DiagnosisSteps />
        <TreatmentLadder />
        <ProductCTA />
      </main>
      <Footer />
    </>
  )
}
