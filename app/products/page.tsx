import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ProductSection } from '@/components/ProductSection'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Product information and direct link to the official Elmiron product website.',
}

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <section className="bg-cream py-24">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-4">
              Product
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light text-charcoal leading-tight mb-6">
              Elmiron<sup className="text-[0.4em] text-muted ml-1">®</sup>
            </h1>
            <p className="font-body text-lg text-muted font-light leading-relaxed max-w-2xl">
              This educational site keeps disease awareness and product information separate.
              Product-specific details are available through the official Elmiron website.
            </p>
          </div>
        </section>

        <ProductSection />
      </main>
      <Footer />
    </>
  )
}
