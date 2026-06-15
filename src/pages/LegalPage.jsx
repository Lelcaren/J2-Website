import React from 'react';
import { IMAGES, SERVICES, INDUSTRIES, STRATEGIC_PARTNERS } from '../constants';
import FadeIn from '../components/FadeIn';

const LegalPage = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.stockBuilding} alt="" className="w-full h-full object-cover" fetchpriority="high" />
        </div>
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <p className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-4">Legal Services</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-white leading-tight">The J2 Approach</h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-navy py-28">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white italic leading-tight mb-3">
                Client-Focused, Straight-Forward, Hands-On.
              </h2>
              <div className="w-12 h-0.5 bg-gold mb-8" />
              <p className="font-body text-sm font-light text-white/70 leading-loose mb-6">
                We take a holistic client approach by providing practical counsel and value throughout all stages of the company life cycle. We customize our deal team based on specific client needs, combining J2 professionals with our network of subject-matter experts in order to deliver a unified and tailored solution.
              </p>
              <p className="font-body text-sm font-light text-white/70 leading-loose">
                Going beyond the standard value proposition of traditional law firms and business advisors, J2 offers comprehensive legal and advisory services designed to provide our clients with insightful guidance and successful outcomes.
              </p>
            </div>
            <img src={IMAGES.dealClose} alt="Deal closing" loading="lazy" className="w-full h-80 object-cover opacity-80 rounded-xl" />
          </div>
        </FadeIn>
      </section>

      {/* OUR CLIENTS */}
      <section id="ourclientsj2" className="bg-royal py-28">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="font-display text-5xl font-light text-white mb-3">Our Clients</h2>
            <div className="w-16 h-0.5 bg-gold mb-14" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Private Equity | Independent Sponsors', desc: 'We offer sophisticated counsel with minimal overhead for platform acquisitions, exits, debt transactions and more.' },
                { title: 'Founders | Business Owners', desc: 'We regularly advise on various day-to-day portfolio company transactions, including employment agreements, compensation plans and commercial contract negotiations.' },
                { title: 'Family Offices | High Net Worth Individuals', desc: 'We facilitate M&A and investment opportunities for single-family / multi-family offices and high-net-worth individuals, providing guidance from structuring through deal execution.' },
                { title: 'Portfolio Companies | Venture-Backed', desc: 'We serve as external counsel for PE-backed and venture-backed firms, supporting daily operations, add-on transactions, and equity/debt financings.' },
                { title: 'Management Team', desc: 'We represent PE-backed teams and senior executives in M&A transactions, including rollover arrangements, incentive equity issuances, employment agreements and exit packages.' },
              ].map((c) => (
                <div key={c.title} className="border-l-2 border-gold pl-6 py-1">
                  <h3 className="font-body text-[11px] font-bold tracking-[1.5px] uppercase text-white mb-3">{c.title}</h3>
                  <p className="font-body text-sm font-light text-white/65 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SERVICES */}
      <section id="ourservicesj2" className="bg-navy py-28">
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn>
            <div className="text-center mb-4">
              <h2 className="font-display text-5xl font-light text-white mb-3">Our Services</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
            <p className="font-body text-sm font-light text-white/60 text-center mb-14">
              Since opening in 2018, J2 Advisors has closed over 200 transactions.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid md:grid-cols-2 gap-0 border border-white/20">
              {SERVICES.map((s, i) => (
                <div key={s.title}
                  className={`p-8 hover:bg-white/5 transition-all border-white/20
                    ${i % 2 === 0 ? 'md:border-r' : ''}
                    ${i < SERVICES.length - 2 ? 'border-b' : ''}
                  `}>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-body text-[13px] font-semibold tracking-[1.5px] uppercase text-white mb-2">{s.title}</h3>
                      <p className="font-body text-sm font-light text-white/60 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="ourindustriesj2" className="bg-royal py-28">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="font-display text-5xl font-light text-white mb-3">Our Industries</h2>
              <div className="w-16 h-0.5 bg-gold mb-12" />
              <div className="space-y-0">
                {INDUSTRIES.map((ind) => (
                  <div key={ind} className="flex items-center gap-4 border-b border-white/15 py-4">
                    <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    <span className="font-body text-sm font-light text-white/80">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-8">
              <img src={IMAGES.stockBuilding2} alt="Industries" loading="lazy" className="w-full h-[500px] object-cover opacity-70 rounded-xl" />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* STRATEGIC PARTNERS */}
      <section className="py-28" style={{ backgroundColor: '#EAE6DC' }}>
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn>
            <div className="text-center mb-4">
              <h2 className="font-display text-5xl font-light mb-3" style={{ color: '#1B2A6B' }}>Our Strategic Partners</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
            <p className="font-body text-sm font-light text-center mb-6 mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: '#1B2A6B' }}>
              We act as the single point of contact for M&A transactions and complex projects, utilizing our extensive network of legal professionals spanning diverse practice areas and geographies.
            </p>
            <p className="font-body text-sm font-light text-center mb-14 max-w-2xl mx-auto leading-relaxed" style={{ color: '#1B2A6B' }}>
              This approach forms a comprehensive, business-focused, and efficient legal service tailored to our clients' needs. Our direct engagement with specialists ensures a seamless experience, consolidated into one comprehensive invoice for our clients' convenience.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="flex justify-center mb-14">
              <img src={IMAGES.jo} alt="J&O Law" loading="lazy" className="h-40 w-auto object-contain" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center">
              {STRATEGIC_PARTNERS.map((p, i) => (
                <div key={i} className="flex items-center justify-center p-4 h-32 w-full">
                  <img src={IMAGES[p.img]} alt="Strategic Partner" loading="lazy"
                    className="max-h-24 max-w-full object-contain hover:opacity-80 transition-opacity" />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
