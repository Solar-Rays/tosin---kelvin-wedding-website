import React from 'react';
import { COUPLE_INFO } from '../data/mockData';

interface HeroProps {
  onRsvpClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRsvpClick, onExploreClick }) => {
  return (
    <section id="home" className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/solarrays/image/upload/v1791674082/Tosin%20and%20Kelvin/english/dr30a65hseqcfpa64xvk_ke8qud.avif"
          alt="Tosin and Kelvin Wedding Hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay to preserve clean image view */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content Overlay with Frosted Glass Container Card */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center pt-16">
        <div className="backdrop-blur bg-white/35 border border-white/40 p-8 sm:p-12 rounded-[40px] shadow-lg flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.35em] mb-3 text-[#58111a] font-extrabold">
            {COUPLE_INFO.date}
          </p>

          {/* Main Serif Display Names */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight leading-tight mb-4 text-[#2e0710] italic" style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}>
            {COUPLE_INFO.names}
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-[#2a241f] mb-8 max-w-md font-medium">
            We invite you to join us in celebrating our union at {COUPLE_INFO.venueCeremony}, {COUPLE_INFO.city}. Your presence is the greatest gift of all.
          </p>

          {/* Hero CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRsvpClick}
              className="px-8 py-4 bg-[#58111a] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#3b0a10] transition-all shadow-md"
            >
              RSVP Online
            </button>
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-white hover:bg-white/90 border border-[#d8cec0] rounded-full text-xs font-bold uppercase tracking-widest text-[#1a1816] transition-all shadow-xs"
            >
              Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator Icon */}
      <button
        onClick={onExploreClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/80 hover:text-white transition-all animate-bounce focus:outline-none"
        aria-label="Scroll Down"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5 backdrop-blur-xs">
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </div>
      </button>
    </section>
  );
};
