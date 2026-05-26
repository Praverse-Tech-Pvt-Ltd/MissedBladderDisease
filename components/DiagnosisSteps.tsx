'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ESSIC_CRITERIA, RED_FLAGS } from '@/lib/data'

const steps = [
  {
    n: '01',
    title: 'Symptom Assessment',
    body: "Apply validated tools: ICSI/ICPI (IC Symptom/Problem Index), PUF score, and O'Leary-Sant questionnaire. Minimum 6 weeks of symptoms required for diagnosis.",
    tools: ['ICSI/ICPI', 'PUF Score', "O'Leary-Sant"],
  },
  {
    n: '02',
    title: 'Urinalysis & Culture',
    body: 'Exclude bacterial UTI via midstream urine culture. IC/BPS diagnosis requires absence of infection. Microscopic hematuria warrants upper tract imaging and cystoscopy.',
    tools: ['MSU Culture', 'Urinalysis', 'Urine Cytology'],
  },
  {
    n: '03',
    title: 'Cystoscopy ± Hydrodistension',
    body: 'Identify Hunner lesions (present in ~10% of IC/BPS) or glomerulations post-hydrodistension. Biopsy if lesions seen. Rules out carcinoma in situ.',
    tools: ['Cystoscopy', 'Hydrodistension', 'Biopsy if indicated'],
  },
  {
    n: '04',
    title: 'Potassium Sensitivity Test',
    body: 'Intravesical KCl test demonstrates urothelial permeability. A positive result supports IC/BPS diagnosis and predicts response to GAG-layer therapies.',
    tools: ['Intravesical KCl', 'Pain/Urgency Score'],
  },
  {
    n: '05',
    title: 'Differential Exclusion',
    body: 'Exclude endometriosis, pelvic floor dysfunction, pudendal neuralgia, bladder malignancy, radiation cystitis. Multidisciplinary assessment recommended.',
    tools: ['Pelvic USS', 'Urodynamics', 'Laparoscopy if needed'],
  },
  {
    n: '06',
    title: 'Diagnosis & Classification',
    body: 'Apply GIBBS guideline criteria for IC/BPS diagnosis. Classify as Hunner-type vs. non-Hunner-type. Begin treatment ladder with PPS therapy accordingly.',
    tools: ['GIBBS Guideline', 'Hunner Classification', 'MISSED Framework'],
  },
]

export function DiagnosisSteps() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Diagnostic Pathway
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            A structured approach to diagnosis
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* Steps */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.n}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
                className="flex flex-col md:flex-row gap-6 bg-white p-8 border border-sage/20 hover:border-sage/40 transition-colors group"
              >
                <div className="flex-none">
                  <span className="font-display text-3xl font-light text-sage/40 group-hover:text-sage/60 transition-colors">
                    {step.n}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-light text-charcoal mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-muted leading-relaxed font-light mb-3">{step.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((t) => (
                      <span key={t} className="inline-block px-2.5 py-1 text-[0.62rem] font-body tracking-[0.1em] uppercase bg-sage-pale text-sage-deep border border-sage/25">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right sidebar */}
          <div className="space-y-4">
            {/* ESSIC Criteria */}
            <div className="bg-charcoal p-8">
              <h3 className="font-display text-lg font-light text-white mb-5">
                ESSIC Diagnostic Criteria
              </h3>
              <ul className="space-y-3">
                {ESSIC_CRITERIA.map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-display text-sage-light text-sm flex-none mt-0.5">{i + 1}.</span>
                    <span className="font-body text-xs text-white/70 leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red Flags */}
            <div className="bg-sage-deep p-8">
              <h3 className="font-display text-lg font-light text-white mb-5">
                Red Flags — Refer Urgently
              </h3>
              <ul className="space-y-3">
                {RED_FLAGS.map((f, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-1.5 h-1.5 bg-sage-light rounded-full flex-none mt-1.5" />
                    <span className="font-body text-xs text-white/80 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
