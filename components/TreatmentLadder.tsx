'use client'

import { useState } from 'react'

const lines = [
  {
    id: 'first',
    label: '1st Line',
    title: 'Education, Lifestyle & Diet Modification',
    body: 'Patient education, trigger review, bladder diaries, and IC/BPS pattern recognition help identify patients who may need bladder-directed therapy with PPS.',
    treatments: [
      'Symptom and voiding diary',
      'Trigger identification',
      'IC/BPS counselling',
      'Assess suitability for PPS therapy',
    ],
    product: null,
  },
  {
    id: 'second',
    label: '2nd Line',
    title: 'PPS Oral Therapy',
    body: 'Pentosan polysulfate sodium (Elmiron®) is the only FDA-approved oral drug specifically for IC/BPS and supports restoration of the bladder GAG layer.',
    treatments: [
      'Pentosan Polysulfate Sodium (Elmiron® 100mg TDS)',
      'Counsel on expected treatment duration',
      'Monitor symptom response over time',
      'Direct product information to elmiron.in',
    ],
    product: { name: 'Elmiron®', href: 'https://elmiron.in' },
  },
  {
    id: 'third',
    label: '3rd Line',
    title: 'PPS Intravesical Option',
    body: 'For patients who need a bladder-directed approach, PPS-based intravesical therapy may be considered through the Elmiron product pathway.',
    treatments: [
      'PPS Intravesical (Elmiron® 50mg/mL)',
      'Bladder-directed PPS delivery',
      'Protocol-led administration',
      'Direct product information to elmiron.in/formulations',
    ],
    product: { name: 'Elmiron® Intravesical', href: 'https://elmiron.in/formulations' },
  },
  {
    id: 'fourth',
    label: 'Follow-up',
    title: 'Response Review',
    body: 'Review IC/BPS symptom response, adherence, tolerability, and whether the patient needs continued PPS-based bladder care.',
    treatments: [
      'Track pain, urgency, and frequency',
      'Review bladder diary trends',
      'Reinforce PPS treatment expectations',
      'Refer to Elmiron product information',
    ],
    product: null,
  },
  {
    id: 'fifth',
    label: 'Support',
    title: 'Ongoing IC/BPS Education',
    body: 'Keep the discussion focused on missed bladder disease recognition, IC/BPS diagnosis, and PPS therapy through Elmiron.',
    treatments: [
      'Patient education on chronicity',
      'Symptom flare documentation',
      'PPS-focused product counselling',
      'Elmiron product site referral',
    ],
    product: null,
  },
]

export function TreatmentLadder() {
  const [active, setActive] = useState('first')
  const current = lines.find((l) => l.id === active)!

  return (
    <section className="bg-cream py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <span className="inline-block text-[0.72rem] font-body font-medium tracking-[0.18em] uppercase text-sage-deep mb-3">
            Treatment Pathway
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal leading-tight">
            The IC/BPS treatment ladder
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left nav */}
          <div className="space-y-1">
            {lines.map((line) => (
              <button
                key={line.id}
                onClick={() => setActive(line.id)}
                className={`w-full text-left px-4 py-4 border-l-2 transition-all font-body text-sm tracking-wide ${
                  active === line.id
                    ? 'border-l-sage text-charcoal bg-white'
                    : 'border-l-transparent text-muted hover:text-charcoal hover:border-l-sage/30'
                }`}
              >
                <span className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-sage-deep block mb-0.5">
                  {line.label}
                </span>
                {line.title}
              </button>
            ))}
          </div>

          {/* Right content */}
          <div className="md:col-span-2 bg-white p-10 border border-sage/20">
            <span className="inline-block text-[0.65rem] font-body tracking-[0.15em] uppercase text-sage-deep mb-3">
              {current.label}
            </span>
            <h3 className="font-display text-2xl font-light text-charcoal mb-4">{current.title}</h3>
            <p className="font-body text-sm text-muted leading-relaxed font-light mb-6">{current.body}</p>

            <ul className="space-y-2.5 mb-8">
              {current.treatments.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-sage rounded-full flex-none mt-1.5" />
                  <span className="font-body text-sm text-charcoal">{t}</span>
                </li>
              ))}
            </ul>

            {current.product && (
              <div className="border border-sage/30 p-6 bg-sage-pale/50">
                <span className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-sage-deep block mb-2">
                  Product Information
                </span>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-xl font-light text-charcoal">
                    {current.product.name}
                  </span>
                  <a
                    href={current.product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm px-5 py-2.5 bg-sage text-white hover:bg-sage-deep transition-colors tracking-wide"
                  >
                    Visit Product Site ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

