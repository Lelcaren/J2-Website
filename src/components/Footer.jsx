import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-navydark pt-14 pb-0">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start gap-10 pb-10 border-b border-white/10">
          <div>
            <img src={IMAGES.logoWhite} alt="J2 Advisory Group" className="h-10 w-auto mb-3" />
            <p className="font-body text-[10px] tracking-[3px] uppercase text-white/40">Advisory Group</p>
          </div>
          <nav className="flex flex-wrap gap-8">
            {[
              { label: 'Home', to: '/' },
              { label: 'Legal', to: '/legal' },
              { label: 'Advisory', to: '/advisory' },
              { label: 'About', to: '/about' },
              { label: 'News', to: '/news' },
              { label: 'Contact', to: '/contact' },
            ].map(l => (
              <Link key={l.label} to={l.to}
                className="font-body text-[10px] font-medium tracking-[2px] uppercase text-white/50 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between items-center py-5 gap-3">
          <p className="font-body text-[10px] text-white/25 tracking-wider">© 2026 J2 Legal Group, PLLC</p>
          <Link to="/disclaimer" className="font-body text-[10px] text-white/25 hover:text-gold transition-colors tracking-wider">Disclosure</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
