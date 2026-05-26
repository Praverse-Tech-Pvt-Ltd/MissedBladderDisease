'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { OVERVIEW_STATS } from '@/lib/data'

export function OverviewStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="bg-sage py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {OVERVIEW_STATS.map((stat) => (
            <motion.div
              key={stat.number}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-center"
            >
              <div className="font-display text-4xl font-light text-white mb-1">{stat.number}</div>
              <div className="font-body text-[0.72rem] text-white/70 uppercase tracking-[0.12em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
