import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-light mb-3">Missed Bladder Disease</div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-4 max-w-xs">
              A physician education initiative addressing the diagnostic gap in women's
              bladder health across India and beyond.
            </p>
            <p className="font-body text-xs text-white/30 leading-relaxed">
              Led by Dr. Sanjay Pandey<br />
              Team BladderHealthWomen
            </p>
          </div>

          {/* Disease Education */}
          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Education
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About IC/BPS', href: '/#about-icbps' },
                { label: 'Conditions', href: '/conditions' },
                { label: 'Pathophysiology', href: '/pathophysiology' },
                { label: 'Symptoms', href: '/symptoms' },
                { label: 'Diagnosis', href: '/diagnosis' },
                { label: 'Treatment', href: '/treatment' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Conditions
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Interstitial Cystitis / BPS', href: '/conditions/interstitial-cystitis' },
                { label: 'Bladder Pain Syndrome', href: '/conditions/bladder-pain-syndrome' },
                { label: 'Mast Cell Cystitis', href: '/conditions/mast-cell-cystitis' },
                { label: 'Radiation Cystitis', href: '/conditions/radiation-cystitis' },
                { label: 'Hemorrhagic Cystitis', href: '/conditions/hemorrhagic-cystitis' },
                { label: 'Neurogenic Bladder', href: '/conditions/neurogenic-bladder' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-body text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product & Contact */}
          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Product & Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://elmiron.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  Elmiron® Product Site ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:elmiron@elmiron.in"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  elmiron@elmiron.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+918097253466"
                  className="font-body text-sm text-white/60 hover:text-white transition-colors"
                >
                  +91 80972 53466
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="font-body text-xs text-white/30 leading-relaxed">
                Manufacturer<br />
                <span className="text-white/50">Swati Pentose Pvt Ltd</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="font-body text-[0.7rem] text-white/30 leading-relaxed">
            For educational purposes for healthcare professionals only. Content does not constitute
            medical advice and is not a substitute for clinical judgment.
            © {new Date().getFullYear()} Missed Bladder Disease · Swati Pentose Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  )
}
