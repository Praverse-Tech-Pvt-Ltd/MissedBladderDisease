'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PATHOPHYSIOLOGY_STEPS } from '@/lib/data'

export function PathophysiologyGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Pathophysiology in Women
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight max-w-xl">
            The IC/BPS disease cascade in the female bladder
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PATHOPHYSIOLOGY_STEPS.map((step) => (
            <motion.div
              key={step.n}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-white p-8 border border-sage/20 relative group hover:border-sage/40 transition-colors"
            >
              <span className="absolute top-4 right-6 font-display text-6xl font-light text-sage/10 group-hover:text-sage/15 transition-colors select-none">
                {step.n}
              </span>
              <span className="inline-block text-[0.62rem] font-body tracking-[0.15em] uppercase text-sage-deep/60 mb-3">
                {step.step}
              </span>
              <h3 className="font-display text-lg font-light text-charcoal mb-3 leading-snug relative">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed font-light relative">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
