'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function ProductSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="bg-sage-pale py-20 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center"
        >
          <div>
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
              Products
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight mb-4">
              Elmiron<sup className="text-[0.4em] text-muted ml-1">®</sup>
            </h2>
            <p className="font-body text-base text-muted leading-relaxed font-light max-w-xl">
              For product-specific information, formulations, and prescribing resources, visit the
              official Elmiron product website directly.
            </p>
          </div>

          <div className="bg-white border border-sage/20 p-8">
            <dl className="space-y-3 mb-7">
              {[
                { label: 'Generic Name', value: 'Pentosan Polysulfate Sodium' },
                { label: 'Therapy Area', value: 'Interstitial Cystitis / Bladder Pain Syndrome' },
                { label: 'Product Site', value: 'elmiron.in' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between gap-6 border-b border-sage/15 pb-3">
                  <dt className="font-body text-[0.7rem] text-muted uppercase tracking-wide">
                    {item.label}
                  </dt>
                  <dd className="font-body text-[0.8rem] text-charcoal font-medium text-right">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="https://elmiron.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide inline-block"
            >
              Visit Elmiron.in ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
