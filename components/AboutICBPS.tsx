'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const examples = [
  {
    symptom: 'Burning after urine tests are clear',
    meaning:
      'Think beyond infection when cultures stay negative but burning, pressure, and urgency keep returning.',
  },
  {
    symptom: 'Pain that rises as the bladder fills',
    meaning:
      'A patient may void frequently because emptying gives relief, not because the bladder is overactive.',
  },
  {
    symptom: 'Pelvic pain labelled as stress',
    meaning:
      'Central sensitisation and pelvic floor guarding can amplify real bladder pain even when scans look normal.',
  },
]

const focusAreas = [
  'Early bladder pain triggers and intervention',
  'Persistent burning and bladder discomfort',
  'Step-wise management approaches',
  'Prevention of chronic bladder issues',
  'Global working principles in bladder health',
]

export function AboutICBPS() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about-icbps" ref={ref} className="bg-charcoal py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start"
        >
          <div>
            <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-light mb-4">
              About IC/BPS
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              The bladder disease hiding behind familiar complaints
            </h2>
            <div className="space-y-5 font-body text-sm md:text-base text-white/70 leading-relaxed font-light">
              <p>
                In a busy gynaecological practice, burning sensation, dysuria, bladder discomfort,
                suprapubic pain, and persistent urinary sensitivity are easy to file under recurrent
                UTI. IC/BPS asks a more careful question: what if the pain is coming from a sensitive
                bladder wall rather than an active infection?
              </p>
              <p>
                Interstitial Cystitis / Bladder Pain Syndrome is a chronic bladder pain condition
                marked by pressure, pain, urgency, frequency, and negative cultures. The protective
                urothelial lining can become vulnerable, allowing urine irritants to trigger
                inflammation, nerve sensitivity, pelvic floor guarding, and a cycle of repeated
                symptoms.
              </p>
              <p>
                Early recognition matters because untreated bladder sensitivity can gradually move
                from intermittent discomfort to chronic pelvic pain. Simple pattern-spotting helps:
                symptoms that flare with bladder filling, improve after voiding, recur despite
                antibiotics, or overlap with endometriosis and pelvic pain deserve an IC/BPS lens.
              </p>
            </div>

            <blockquote className="border-l-2 border-sage pl-6 mt-9">
              <p className="font-display text-xl md:text-2xl font-light italic text-white/90 leading-relaxed">
                "The average IC patient sees five physicians over seven years before receiving
                a correct diagnosis. We can do better — and we must."
              </p>
              <cite className="block font-body text-xs text-white/40 not-italic mt-4 tracking-[0.14em] uppercase">
                Dr. Sanjay Pandey
              </cite>
            </blockquote>
          </div>

          <div className="space-y-6">
            <div className="border border-white/10 bg-white/[0.04] p-8">
              <h3 className="font-display text-2xl font-light text-white mb-5">
                Easy clinical examples
              </h3>
              <div className="space-y-5">
                {examples.map((item) => (
                  <div key={item.symptom} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <p className="font-body text-sm font-medium text-sage-light mb-1">
                      {item.symptom}
                    </p>
                    <p className="font-body text-sm text-white/60 leading-relaxed font-light">
                      {item.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-sage/30 bg-sage/10 p-8">
              <h3 className="font-display text-2xl font-light text-white mb-5">
                Key focus areas include
              </h3>
              <ul className="space-y-3">
                {focusAreas.map((area) => (
                  <li key={area} className="flex gap-3 font-body text-sm text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sage-light" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
