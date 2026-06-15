import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, LEGAL_CLIENTS, SERVICES, RECOGNITION_LOGOS } from '../constants';
import ClientsCarousel from '../components/ClientsCarousel';
import FadeIn from '../components/FadeIn';


const HomePage = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="" className="w-full h-full object-cover" fetchpriority="high" />
        </div>
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <p className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-6">
            Full-Service M&A Legal & Advisory
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-[88px] font-light text-white leading-[1.05] mb-8 max-w-3xl">
            We pride ourselves on being trusted advisors.
          </h1>
          <p className="font-body text-sm font-light text-white/70 leading-relaxed max-w-md mb-10">
            J2advisors is a full service legal and advisory firm specializing in M&A and corporate transactions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="font-body text-[11px] font-semibold tracking-[2px] uppercase bg-gold text-white px-8 py-4 hover:bg-yellow-600 transition-colors">
              Learn More
            </Link>
            <Link to="/contact" className="font-body text-[11px] font-semibold tracking-[2px] uppercase border border-white text-white px-8 py-4 hover:bg-white/10 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-gold/60 mx-auto animate-pulse" />
        </div>
      </section>

      {/* THE J2 OFFERING */}
      <section className="bg-navy py-28">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-start">
            <div>
              <img src={IMAGES.offering} alt="The J2 Offering" className="w-36 mb-8 brightness-200" loading="lazy" />
              <h2 className="font-display text-5xl font-light text-white leading-tight mb-3">The J2 Offering</h2>
              <div className="w-12 h-0.5 bg-gold mb-10" />
              <img src={IMAGES.lawContract} alt="Contract signing" className="w-full h-52 object-cover opacity-80 rounded-xl" loading="lazy" />
            </div>
            <div className="pt-24 space-y-0">
              <div className="border border-white/20 p-8">
                <Link to="/legal" className="font-body text-[11px] font-bold tracking-[2px] uppercase text-gold hover:text-white transition-colors block mb-3">Legal →</Link>
                <p className="font-body text-sm font-light text-white/65 leading-relaxed">
                  With decades of big-law corporate experience, we deliver innovative and highly-customized M&A guidance and legal services to a broad range of sophisticated clients.
                </p>
              </div>
              <div className="border border-white/20 border-t-0 p-8">
                <Link to="/advisory" className="font-body text-[11px] font-bold tracking-[2px] uppercase text-gold hover:text-white transition-colors block mb-3">Advisory →</Link>
                <p className="font-body text-sm font-light text-white/65 leading-relaxed">
                  We specialize in M&A and corporate advisory services, leveraging our extensive professional network to connect equity funds, family offices, founders and high-net worth individuals with curated, strategic opportunities.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* STAT BAND */}
      <section className="bg-navydark py-14 border-y border-white/10">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8 flex flex-wrap gap-10 items-center justify-between">
            <p className="font-display text-3xl md:text-4xl font-light text-white">
              Since opening in 2018, J2 Advisors has closed over{' '}
              <span className="text-gold italic">200 transactions.</span>
            </p>
            <div className="flex gap-4">
              <Link to="/legal" className="font-body text-[11px] font-semibold tracking-[2px] uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-white transition-all">Legal</Link>
              <Link to="/advisory" className="font-body text-[11px] font-semibold tracking-[2px] uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-white transition-all">Advisory</Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-royal py-28">
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn>
            <div className="text-center mb-4">
              <h2 className="font-display text-5xl font-light text-white mb-3">Our Services</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
            <p className="font-body text-sm font-light text-white/65 text-center mb-14">
              Since opening in 2018, J2 Advisors has closed over 200 transactions.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid md:grid-cols-2 gap-0 border border-white/20">
              {SERVICES.map((s, i) => (
                <Link key={s.title} to={s.href}
                  className={`group p-8 hover:bg-white/10 transition-all duration-200 border-white/20
                    ${i % 2 === 0 ? 'md:border-r' : ''}
                    ${i < SERVICES.length - 2 ? 'border-b' : ''}
                  `}>
                  <div className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-body text-[13px] font-semibold tracking-[1.5px] uppercase text-white group-hover:text-gold transition-colors mb-2">
                        {s.title}
                      </h3>
                      <p className="font-body text-sm font-light text-white/60 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OUR CLIENTS */}
      <section className="bg-navy py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-display text-5xl font-light text-white mb-3">Our Clients</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <ClientsCarousel clients={LEGAL_CLIENTS} whiteLogos={true} />
          </FadeIn>
        </div>
      </section>

      {/* OUR RECOGNITIONS */}
      <section className="py-28" style={{ backgroundColor: '#EAE6DC' }}>
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl font-light mb-3" style={{ color: '#1B2A6B' }}>Our Recognitions</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-20">
              {RECOGNITION_LOGOS.map((r) => (
                <div key={r.name} className="flex items-center justify-center">
                  <img
                    src={IMAGES[r.img]}
                    alt={r.name}
                    loading="lazy"
                    className="h-40 w-auto object-contain"
                    style={{ filter: 'none' }}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 overflow-hidden text-center">
        <div className="absolute inset-0">
          <img src={IMAGES.cityNight} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-navy/88" />
        <FadeIn className="relative z-10">
          <div className="max-w-2xl mx-auto px-8">
            <h2 className="font-display text-5xl md:text-7xl font-light text-white mb-3">Get in touch with us today</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-10" />
            <Link to="/contact" className="inline-block font-body text-[11px] font-semibold tracking-[2px] uppercase bg-gold text-white px-10 py-4 hover:bg-yellow-600 transition-colors">
              Send A Message
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default HomePage;
