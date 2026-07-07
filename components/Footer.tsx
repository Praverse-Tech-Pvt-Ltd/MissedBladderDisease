import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-light mb-3">Missed Bladder Disease in Women</div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-4 max-w-xs">
              A physician education initiative addressing the diagnostic gap in women's
              bladder health — where IC/BPS affects women 5–10 times more often than men —
              across India and beyond.
            </p>
            <p className="font-body text-xs text-white/30 leading-relaxed">
              Led by Dr. Sanjay Pandey<br />
              Team BladderHealthWomen
            </p>
            <div className="border-t border-sage/20 pt-4 mt-4">
              <p className="font-body text-[0.68rem] text-white/40 tracking-wide uppercase mb-1">
                An initiative by
              </p>
              <a
                href="https://polysacc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[0.82rem] text-sage hover:text-sage-light transition-colors tracking-wide font-medium"
              >
                Polysaccharide Chemistry Pvt Ltd ↗
              </a>
              <p className="font-body text-[0.7rem] text-white/30 mt-0.5">
                Kalbadevi, Mumbai - 400002
              </p>
            </div>
          </div>

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

          <div>
            <h4 className="font-body text-[0.72rem] tracking-[0.18em] uppercase text-white/40 mb-4">
              Network
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://elmiron.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-sage hover:text-sage-light transition-colors"
                >
                  Elmiron® Product Site ↗
                </a>
              </li>
              <li>
                <a
                  href="https://polysacc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-sage hover:text-sage-light transition-colors"
                >
                  polysacc.com ↗
                </a>
              </li>
              <li>
                <Link href="/#about-icbps" className="font-body text-sm text-white/60 hover:text-white transition-colors">
                  About IC/BPS in Women
                </Link>
              </li>
            </ul>

            <div className="border-t border-sage/20 pt-4 mt-6">
              <p className="font-body text-[0.68rem] text-white/40 tracking-wide uppercase mb-2">
                BD Head
              </p>
              <a
                href="mailto:isshane.guptaa@swatispentose.com"
                className="block font-body text-[0.78rem] text-sage hover:text-sage-light transition-colors mb-1"
              >
                Isshane Guptaa
              </a>
              <a
                href="mailto:kanchan.londhe@swatispentose.com"
                className="block font-body text-[0.78rem] text-sage hover:text-sage-light transition-colors"
              >
                Ms Kanchan Londhe
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="font-body text-[0.7rem] text-white/30 leading-relaxed max-w-2xl">
            This website is for educational purposes for healthcare professionals. Content does not
            constitute medical advice. © {new Date().getFullYear()} Polysaccharide Chemistry Pvt Ltd.
            All rights reserved.
          </p>
          <div className="font-body text-[0.7rem] text-white/30 leading-relaxed">
            <a href="mailto:isshane.guptaa@swatispentose.com" className="block hover:text-white/60 transition-colors">
              isshane.guptaa@swatispentose.com
            </a>
            <a href="mailto:kanchan.londhe@swatispentose.com" className="block hover:text-white/60 transition-colors">
              kanchan.londhe@swatispentose.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
