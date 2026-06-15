import React from 'react';
import { IMAGES } from '../constants';

const Marquee = ({ clients }) => {
  const doubled = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden w-full py-6">
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-royal to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-royal to-transparent z-10" />
      <div className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((c, i) => (
          <div key={i} className="flex-shrink-0 w-48 h-20 flex items-center justify-center px-6">
            <img
              src={IMAGES[c.img]}
              alt={c.name}
              loading="lazy"
              className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
