import React, { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../constants';

const ClientsCarousel = ({ clients, whiteLogos = false }) => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const thumbsRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive(a => (a + 1) % clients.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(t);
  }, [clients.length]);

  // Scroll only within the strip container — never touches page scroll position
  useEffect(() => {
    const strip = thumbsRef.current;
    if (!strip) return;
    const thumb = strip.children[active];
    if (!thumb) return;
    const stripCenter = strip.offsetWidth / 2;
    const thumbCenter = thumb.offsetLeft + thumb.offsetWidth / 2;
    strip.scrollTo({ left: thumbCenter - stripCenter, behavior: 'smooth' });
  }, [active]);

  const goTo = (i) => {
    if (i === active) return;
    setVisible(false);
    setTimeout(() => { setActive(i); setVisible(true); }, 400);
  };

  const logoFilter = whiteLogos ? 'brightness(0) invert(1)' : 'none';

  return (
    <div>
      <div className="flex items-center justify-center" style={{ height: '320px' }}>
        <img
          src={IMAGES[clients[active].img]}
          alt={clients[active].name}
          className="object-contain"
          style={{
            maxHeight: '260px',
            maxWidth: '640px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.93)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
            filter: logoFilter,
          }}
        />
      </div>
      <div
        ref={thumbsRef}
        className="flex justify-center gap-6 overflow-x-auto pb-2 px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {clients.map((c, i) => (
          <button
            key={c.name}
            onClick={() => goTo(i)}
            className="flex-shrink-0 flex items-center justify-center transition-all duration-300"
            style={{
              width: '120px',
              height: '64px',
              opacity: i === active ? 1 : 0.3,
              transform: i === active ? 'scale(1.15)' : 'scale(1)',
              background: 'none',
              outline: 'none',
              border: 'none',
              filter: logoFilter,
            }}
          >
            <img src={IMAGES[c.img]} alt={c.name} className="max-h-full max-w-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
