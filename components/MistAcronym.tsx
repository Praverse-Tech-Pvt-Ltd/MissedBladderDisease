'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MISSED_CATEGORIES } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export function MistAcronym() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            The MISSED Framework
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            Six categories, one framework
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-0"
        >
          {MISSED_CATEGORIES.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-8 py-8 border-b border-sage/20 group hover:bg-sage-pale/30 px-4 -mx-4 transition-colors"
            >
              {/* Letter */}
              <div className="flex-none w-16">
                <span className="font-display text-5xl font-light text-sage group-hover:text-sage-deep transition-colors">
                  {item.letter}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-xl font-light text-charcoal mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed font-light mb-4">
                  {item.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.conditions.map((c) => (
                    <span
                      key={c}
                      className="inline-block px-2.5 py-1 text-[0.65rem] font-body tracking-[0.1em] uppercase bg-sage-pale text-sage-deep border border-sage/25"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
