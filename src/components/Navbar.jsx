import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGES } from '../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Legal', to: '/legal' },
    { label: 'Advisory', to: '/advisory' },
    { label: 'About', to: '/about' },
    { label: 'News', to: '/news' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navydark shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <Link to="/">
          <img src={IMAGES.logo} alt="J2 Advisory Group" className="h-11 w-auto brightness-0 invert" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-9">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="font-body text-[11px] font-semibold tracking-[2.5px] uppercase text-white hover:text-gold transition-colors duration-200">
              {l.label}
            </Link>
          ))}
          <Link to="/contact"
            className="font-body text-[11px] font-semibold tracking-[2px] uppercase border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-navy transition-all duration-200">
            Contact
          </Link>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-navydark border-t border-white/10 px-8 py-6 flex flex-col gap-5">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="font-body text-[11px] font-semibold tracking-[2.5px] uppercase text-white hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact"
            className="font-body text-[11px] font-semibold tracking-[2px] uppercase border border-white text-white px-6 py-2 rounded-full w-fit hover:bg-white hover:text-navy transition-all"
            onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
