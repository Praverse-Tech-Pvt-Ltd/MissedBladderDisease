import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { MistAcronym } from '@/components/MistAcronym'
import { SymptomsGrid } from '@/components/SymptomsGrid'
import { AboutICBPS } from '@/components/AboutICBPS'
import { ProductSection } from '@/components/ProductSection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MistAcronym />
        <SymptomsGrid />
        <AboutICBPS />
        <ProductSection />
      </main>
      <Footer />
    </>
  )
}

