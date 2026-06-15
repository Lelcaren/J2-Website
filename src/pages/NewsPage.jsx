import React from 'react';
import { NEWS } from '../constants';
import FadeIn from '../components/FadeIn';

const NewsPage = () => {
  return (
    <div>
      <section className="bg-navy pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <p className="font-body text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-4">Latest Updates</p>
          <h1 className="font-display text-6xl md:text-8xl font-light text-white leading-tight">J2 News</h1>
          <div className="w-16 h-0.5 bg-gold mt-4" />
        </div>
      </section>

      <section className="bg-navy pb-28">
        <div className="max-w-4xl mx-auto px-8">
          <div className="divide-y divide-white/10">
            {NEWS.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <article className="py-10 group">
                  <p className="font-body text-[11px] font-semibold tracking-[2px] uppercase text-gold mb-3">
                    {item.date}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl font-light text-white leading-snug mb-4 group-hover:text-white/80 transition-colors">
                    {item.title}
                  </h2>
                  <p className="font-body text-sm font-light text-white/60 leading-relaxed mb-5">
                    {item.desc}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-body text-[11px] font-semibold tracking-[2px] uppercase text-gold hover:text-white transition-colors"
                  >
                    <span className="w-8 h-px bg-gold group-hover:bg-white transition-colors inline-block" />
                    Read Press Release
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
