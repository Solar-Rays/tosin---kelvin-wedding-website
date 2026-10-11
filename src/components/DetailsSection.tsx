import React from 'react';
import { Navigation, Phone, MapPin } from 'lucide-react';
import { COUPLE_INFO } from '../data/mockData';

export const DetailsSection: React.FC = () => {
  return (
    <section id="details" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-extrabold">
          Guest Information
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1816] mt-1 font-normal italic">
          Details
        </h2>

        {/* Floral Ornament */}
        <div className="flex items-center justify-center gap-3 my-4 text-[#58111a]">
          <span className="h-[1px] w-12 bg-[#58111a]/40" />
          <Navigation className="w-4 h-4 text-[#58111a]" />
          <span className="h-[1px] w-12 bg-[#58111a]/40" />
        </div>

        {/* Main Grid: Left Cards + Right Map */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left items-stretch">
          {/* Left Column: Getting There + Need Help (only on bigger screens) */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Getting There Card */}
            <div className="backdrop-blur-2xl bg-white/85 border border-white/90 rounded-[28px] p-6 sm:p-7 flex gap-5 items-start shadow-md hover:border-[#58111a]/60 transition-all">
              <div className="p-3.5 rounded-2xl bg-[#f9ecef] border border-[#f2d6dc] text-[#58111a] shrink-0 shadow-xs">
                <Navigation className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#1a1816] font-semibold mb-1.5 italic">
                  Getting There
                </h3>
                <p className="text-xs sm:text-sm text-[#2a241f] font-normal leading-relaxed">
                  Benin Airport (BNI) is approximately 10-15 minutes from Ehizua Event Centre along Airport Road. Ride-hailing and pre-arranged chauffeur services are recommended for airport transfers.
                </p>
              </div>
            </div>

            {/* Need Help? Card — replaces Accommodation section ONLY on bigger screens */}
            <div className="hidden lg:block backdrop-blur-2xl bg-white/85 border border-white/90 rounded-[28px] p-6 sm:p-7 shadow-md hover:border-[#58111a]/60 transition-all text-left">
              <div className="flex gap-5 items-start">
                <div className="p-3.5 rounded-2xl bg-[#f9ecef] border border-[#f2d6dc] text-[#58111a] shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-grow">
                  <h3 className="font-serif text-xl text-[#1a1816] font-semibold italic">
                    Need Help?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2a241f] font-normal leading-relaxed">
                    If you have any questions regarding travel, location, or dietary needs, feel free to reach out to our wedding planner.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-[#1a1816]">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#58111a]" />
                      <span className="font-bold">{COUPLE_INFO.plannerContact}</span>
                    </p>
                    <a
                      href={`mailto:${COUPLE_INFO.contactEmail}`}
                      className="px-5 py-2 rounded-full bg-[#1a1816] text-white text-[11px] font-bold tracking-wider uppercase hover:bg-[#58111a] transition-colors shadow-xs"
                    >
                      CONTACT US
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Venue Map & Mobile-only Need Help */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Visual Map Frame */}
            <div className="backdrop-blur-2xl bg-white/85 border border-white/90 rounded-[28px] p-4 shadow-md flex-grow flex flex-col">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-extrabold text-[#1a1816] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#58111a]" />
                  <span>Venue Location (Benin City)</span>
                </span>
                <span className="text-[10px] text-[#58111a] font-extrabold">Airport Rd</span>
              </div>
              <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:flex-grow min-h-[200px] rounded-2xl overflow-hidden border border-white/80 relative">
                <iframe
                  title="Benin City Wedding Venue"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5673512706826!2d5.6088733!3d6.3204186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d352f0a9c311%3A0x52d0de384a941e5d!2sEhizua%20Event%20Centre%20And%20Ehizua%20Hub!5e0!3m2!1sen!2sng!4v1791680083355!5m2!1sen!2sng"
                  className="w-full h-full border-0 filter saturate-[0.85]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Need Help? Contact Card — visible on smaller screens only */}
            <div className="block lg:hidden backdrop-blur-2xl bg-white/85 border border-white/90 rounded-[28px] p-6 shadow-md text-left">
              <h3 className="font-serif text-xl text-[#1a1816] font-semibold mb-1 italic">
                Need Help?
              </h3>
              <p className="text-xs text-[#2a241f] font-normal leading-relaxed mb-4">
                If you have any questions regarding travel, location, or dietary needs, feel free to reach out to our wedding planner.
              </p>
              <div className="space-y-2 text-xs text-[#1a1816] mb-4">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#58111a]" />
                  <span className="font-bold">{COUPLE_INFO.plannerContact}</span>
                </p>
              </div>
              <a
                href={`mailto:${COUPLE_INFO.contactEmail}`}
                className="inline-block px-6 py-2.5 rounded-full bg-[#1a1816] text-white text-[11px] font-bold tracking-wider uppercase hover:bg-[#58111a] transition-colors shadow-xs"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
