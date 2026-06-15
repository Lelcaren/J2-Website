import React, { useState } from 'react';
import { IMAGES, FOUNDERS, TEAM } from '../constants';
import FadeIn from '../components/FadeIn';

const TeamCard = ({ member, large }) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div
      className="group relative overflow-hidden bg-navydark rounded-2xl cursor-pointer"
      style={{ aspectRatio: '3/4' }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold z-20 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      {!imgError ? (
        <img
          src={IMAGES[member.img]}
          alt={member.name}
          onError={() => setImgError(true)}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-navylight">
          <span className="font-display text-5xl text-white/40">
            {member.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/15 to-transparent group-hover:via-navy/25 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className={`font-display font-light text-white leading-tight ${large ? 'text-2xl' : 'text-base'} mb-1`}>
          {member.name}
        </h3>
        {member.role && (
          <p className="font-body text-[9px] font-semibold tracking-[2.5px] uppercase text-gold">
            {member.role}
          </p>
        )}
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.j2bw} alt="" className="w-full h-full object-cover" fetchpriority="high" />
        </div>
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">
          <p className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-4">Who We Are</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-white leading-tight">About J2</h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-navy py-24">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-5xl font-light text-white mb-3">Our Story</h2>
              <div className="w-12 h-0.5 bg-gold mb-8" />
              <p className="font-body text-sm font-light text-white/70 leading-loose mb-6">
                After many years of collaboration, partnering and friendship, Jeff and Jackie left their respective big law foundations in 2018 and created a new model for delivering legal and advisory services.
              </p>
              <p className="font-body text-sm font-light text-white/70 leading-loose">
                Over the last six years, J2 has evolved from a two-person startup into a comprehensive team of experienced and business-savvy attorneys.
              </p>
            </div>
            <img src={IMAGES.j2bw} alt="J2 team" loading="lazy" className="w-full h-80 object-cover rounded-2xl opacity-90" />
          </div>
        </FadeIn>
      </section>

      {/* OUR EXPERTISE */}
      <section className="bg-royal py-24">
        <FadeIn>
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
            <img src={IMAGES.lawScales} alt="Scales of justice" loading="lazy" className="w-full h-80 object-cover rounded-2xl opacity-90" />
            <div>
              <h2 className="font-display text-5xl font-light text-white mb-3">Our Expertise</h2>
              <div className="w-12 h-0.5 bg-gold mb-8" />
              <p className="font-body text-sm font-light text-white/70 leading-loose mb-6">
                We have deep transactional knowledge and years of deal experience which includes structuring, negotiating and executing large corporate transactions. We have fostered growth across all stages of the client lifecycle by guiding, advising, and investing in numerous entrepreneurs, founders, independent sponsors, family offices, and funds.
              </p>
              <p className="font-body text-sm font-light text-white/70 leading-loose">
                In addition to our transactional proficiency, we have extensive subject matter expertise in the healthcare services, IT services, consumer and transportation sectors.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* OUR ADVISORS */}
      <section id="ouradvisors" className="bg-navy py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div className="pt-4">
                <h2 className="font-display text-5xl font-light text-white mb-3">Our Advisors</h2>
                <div className="w-12 h-0.5 bg-gold mb-8" />
                <p className="font-body text-sm font-light text-white/70 leading-relaxed mb-4">
                  Each of our advisors has deep transactional knowledge and years of deal experience allowing J2advisors to seamlessly provide clients with high quality, specialized legal services and strategic advice, including comprehensive investment structuring guidance and access to a broad range of capital sources, operational partners and deal resources.
                </p>
                <p className="font-body text-sm font-light text-white/70 leading-relaxed">
                  Our advisors are committed to providing insight and guidance at every step of our clients' evolution.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {FOUNDERS.map(member => (
                  <TeamCard key={member.name} member={member} large={true} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section id="ourteam" className="bg-royal py-24">
        <div className="max-w-6xl mx-auto px-8">
          <FadeIn>
            <h2 className="font-display text-5xl font-light text-white mb-3">Our Team</h2>
            <div className="w-12 h-0.5 bg-gold mb-6" />
            <p className="font-body text-sm font-light text-white/65 leading-relaxed max-w-2xl mb-14">
              Our team is comprised of seasoned professionals, including former big law partners, attorneys, and general counsels, showcasing a wealth of expertise.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {TEAM.map(member => (
                <TeamCard key={member.name} member={member} large={false} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
