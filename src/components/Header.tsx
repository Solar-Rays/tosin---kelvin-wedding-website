import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { COUPLE_INFO } from '../data/mockData';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'story', label: 'OUR STORY' },
    { id: 'events', label: 'EVENTS' },
    { id: 'details', label: 'DETAILS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'registry', label: 'REGISTRY' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/50 backdrop-blur-xl shadow-sm py-3 border-b border-white/60 text-[#2d2a26]'
          : 'bg-white/30 backdrop-blur-md py-4 text-[#2d2a26] border-b border-white/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
        {/* Logo with initials matching Tosin & Kelvin */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 text-left focus:outline-none shrink-0"
        >
          <span
            className="font-serif italic text-xl md:text-2xl lg:text-3xl tracking-widest font-bold transition-colors text-[#2d2a26] hover:text-[#58111a]"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            {COUPLE_INFO.initials}
          </span>
        </button>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden md:flex items-center space-x-3 md:space-x-4 lg:space-x-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-[10.5px] lg:text-xs tracking-[0.12em] lg:tracking-[0.2em] font-medium transition-colors hover:text-[#58111a] focus:outline-none whitespace-nowrap ${
                activeSection === item.id
                  ? 'text-[#58111a] font-bold border-b-2 border-[#58111a] pb-0.5'
                  : 'text-[#2d2a26]/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center shrink-0">
          {/* Primary RSVP Pill */}
          <button
            onClick={() => handleNavClick('rsvp')}
            className="px-4 py-1.5 md:px-4 md:py-1.5 lg:px-6 lg:py-2 rounded-full text-[10.5px] lg:text-xs font-bold tracking-wider lg:tracking-widest transition-all shadow-sm bg-[#58111a] text-white hover:bg-[#3b0a10]"
          >
            RSVP
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#2d2a26] bg-white/40 border border-white/60 backdrop-blur-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-2xl border-b border-white/60 px-4 pt-4 pb-6 shadow-xl text-[#2d2a26]">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm tracking-widest font-medium py-2 border-b border-black/5 ${
                  activeSection === item.id ? 'text-[#58111a] font-bold' : 'text-[#2d2a26]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('rsvp')}
                className="w-full py-3 rounded-full bg-[#58111a] text-white text-xs font-bold tracking-widest text-center hover:bg-[#3b0a10] transition-colors"
              >
                RSVP NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
