import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, ADVISORY_CLIENTS } from '../constants';
import ClientsCarousel from '../components/ClientsCarousel';
import FadeIn from '../components/FadeIn';

const SectionTitle = ({ children, center }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="font-display text-5xl font-light text-white mb-3">{children}</h2>
    <div className={`w-16 h-0.5 bg-gold ${center ? 'mx-auto' : ''}`} />
  </div>
);

const AdvisoryPage = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.meeting} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <p className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-4">Corporate Advisory</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-white leading-tight">Advisory</h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-navy py-28">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-start">
            <div>
              <SectionTitle>Our Advisory Practice</SectionTitle>
              <p className="font-body text-sm font-light text-white/70 leading-loose mb-6">
                We provide buy-side and sell-side corporate advisory, capital raising and M&A guidance to equity funds, family offices, startups, founders, business owners and high-net worth individuals. With years of experience in dealmaking and a vast network of financial partners, we possess a distinctive platform for structuring, leading, and executing deals with efficiency and effectiveness.
              </p>
              <p className="font-body text-sm font-light text-white/70 leading-loose">
                We have participated in 20+ transactions, taking on roles such as lead capital raising, structural/deal advisory and investment vehicle management.
              </p>
            </div>
            <div className="bg-navydark border border-white/10 p-10">
              <p className="font-display text-8xl font-light text-white leading-none">20<span className="text-gold text-5xl">+</span></p>
              <div className="w-12 h-0.5 bg-gold my-4" />
              <p className="font-body text-[11px] font-medium tracking-[2px] uppercase text-white/50">Transactions Participated</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* SERVICES */}
      <section className="bg-royal py-28">
        <div className="max-w-4xl mx-auto px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-display text-5xl font-light text-white mb-3">Advisory Services</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid md:grid-cols-3 gap-px bg-white/15">
              {[
                { title: 'Buy-Side Advisory', desc: 'We guide buyers through every stage of M&A transactions — from target identification and due diligence through negotiation and closing.' },
                { title: 'Sell-Side Advisory', desc: 'We help founders and business owners prepare for and execute successful exits, maximizing value through strategic positioning and deal management.' },
                { title: 'Capital Raising', desc: 'We connect companies with equity funds, family offices, and high-net-worth individuals to structure and execute capital raises tailored to growth objectives.' },
              ].map((item) => (
                <div key={item.title} className="bg-royal p-10 border-t-2 border-gold hover:bg-royaldark transition-colors">
                  <h3 className="font-body text-[11px] font-bold tracking-[2px] uppercase text-white mb-5">{item.title}</h3>
                  <p className="font-body text-sm font-light text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE + TEXT */}
      <section className="bg-navy py-28">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
            <img src={IMAGES.dealClose} alt="Deal advisory" className="w-full h-96 object-cover opacity-80 rounded-xl" />
            <div>
              <SectionTitle>Our Approach</SectionTitle>
              <p className="font-body text-sm font-light text-white/70 leading-loose mb-8">
                In concert with our strategic partners, we provide comprehensive M&A guidance that goes beyond traditional advisory services. Our direct engagement model means our clients work directly with experienced deal professionals from start to finish.
              </p>
              <Link to="/contact" className="inline-block font-body text-[11px] font-semibold tracking-[2px] uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-white transition-all">
                Work With Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CLIENTS */}
      <section className="py-20" style={{ backgroundColor: '#EAE6DC' }}>
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-display text-5xl font-light mb-3" style={{ color: '#1B2A6B' }}>Our Clients</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <ClientsCarousel clients={ADVISORY_CLIENTS} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-36 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.cityNight} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-navy/90" />
        <FadeIn className="relative z-10">
          <div className="max-w-xl mx-auto px-8">
            <h2 className="font-display text-5xl md:text-6xl font-light text-white mb-3">Ready to explore your next deal?</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-10" />
            <Link to="/contact" className="inline-block font-body text-[11px] font-semibold tracking-[2px] uppercase bg-gold text-white px-10 py-4 hover:bg-yellow-600 transition-colors">
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default AdvisoryPage;
