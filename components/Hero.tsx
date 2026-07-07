'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import GradientText from '@/components/ui/GradientText'

const Threads = dynamic(() => import('@/components/ui/Threads'), { ssr: false })

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export function Hero() {
  return (
    <section className="min-h-screen bg-charcoal flex items-center pt-16 relative overflow-hidden">
      {/* Threads background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Threads color={[0.54, 0.67, 0.54]} amplitude={1.2} distance={0.3} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-light mb-4"
          >
            A Women's Bladder Health Initiative
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl font-light leading-tight text-white mb-4"
          >
            The bladder disease{' '}
            <GradientText
              colors={['#b8cdb8', '#ffffff', '#8aab8a', '#b8cdb8']}
              animationSpeed={5}
              className="italic"
            >
              women keep being told isn't real
            </GradientText>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-base text-white/60 leading-relaxed mb-8 max-w-md font-light"
          >
            Interstitial Cystitis and Bladder Pain Syndrome affect women 5–10 times more often
            than men, yet the average woman waits 5–7 years and sees five physicians before
            getting the right diagnosis. This initiative exists to close that gap.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/pathophysiology"
              className="font-body text-sm px-6 py-3 bg-sage text-white hover:bg-sage-deep border border-sage hover:border-sage-deep transition-colors tracking-wide"
            >
              Explore the Science
            </Link>
            <Link
              href="#about-icbps"
              className="font-body text-sm px-6 py-3 border border-white/30 text-white hover:bg-white hover:text-charcoal transition-colors tracking-wide"
            >
              Understand IC/BPS in Women
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {[
              { num: '5–7', label: 'Years women wait for diagnosis' },
              { num: '90%', label: 'Of IC/BPS patients are women' },
              { num: '6', label: 'MISSED categories in women\'s bladder health' },
            ].map((s) => (
              <div key={s.num}>
                <div className="font-display text-2xl font-light text-sage-light">{s.num}</div>
                <div className="font-body text-[0.7rem] text-white/40 uppercase tracking-wide mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — MISSED acronym visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="border border-white/10 p-12 min-h-[480px] flex flex-col justify-center"
        >
          <p className="font-body text-[0.65rem] tracking-[0.2em] uppercase text-white/30 mb-8">
            The Diagnostic Framework for Women
          </p>
          <div className="space-y-4">
            {[
              { letter: 'M', label: 'Microbiome / Mast Cell' },
              { letter: 'I', label: 'Interstitial Cystitis / BPS' },
              { letter: 'S', label: 'Stress / Somatic Disorders' },
              { letter: 'S', label: 'Structural Abnormalities' },
              { letter: 'E', label: 'Endometriosis / Endocrine' },
              { letter: 'D', label: 'Dysbiosis / Deficiency' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 border-b border-white/10 pb-4 last:border-0">
                <span className="font-display text-4xl font-light text-sage w-10 flex-none">{item.letter}</span>
                <span className="font-body text-sm text-white/70 font-light">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
