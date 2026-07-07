'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SYMPTOMS } from '@/lib/data'

export function SymptomsGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-sage-pale py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Clinical Presentation in Women
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            Recognizing IC/BPS symptoms in women
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SYMPTOMS.map((s) => (
            <motion.div
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="bg-white p-6 border border-sage/20 hover:border-sage/40 transition-colors group"
            >
              {/* Proportional severity bar */}
              <div className="w-full bg-sage/10 h-1 mb-4">
                <div
                  className={`h-1 ${s.severityColor} transition-all`}
                  style={{ width: `${s.severityPercent}%` }}
                />
              </div>

              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-lg font-light text-charcoal leading-snug">{s.name}</h3>
                <span className={`flex-none ml-2 mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 text-[0.58rem] font-body tracking-[0.1em] uppercase border ${s.severityBadge}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${s.severityColor} flex-none`} />
                  {s.severity}
                </span>
              </div>
              <p className="font-body text-xs text-muted leading-relaxed font-light">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { label: 'High Frequency', color: 'bg-sage-deep' },
            { label: 'Moderate Frequency', color: 'bg-sage' },
            { label: 'Variable', color: 'bg-sage-light' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <div className={`w-6 h-1 ${l.color}`} />
              <span className="font-body text-[0.68rem] text-muted uppercase tracking-wide">{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
