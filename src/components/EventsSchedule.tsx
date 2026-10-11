import React, { useState } from 'react';
import { Church, GlassWater, MapPin, Clock, Calendar, ExternalLink, Shirt, Gift, Hash, X } from 'lucide-react';
import { EVENTS_SCHEDULE, COUPLE_INFO } from '../data/mockData';
import { EventDetail } from '../types';

interface EventsScheduleProps {
  onGoToRegistry: () => void;
}

export const EventsSchedule: React.FC<EventsScheduleProps> = ({ onGoToRegistry }) => {
  const [selectedMapEvent, setSelectedMapEvent] = useState<EventDetail | null>(null);

  return (
    <section id="events" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header matching screen 03 */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-extrabold">
          Schedule of Celebrations
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1816] mt-1 font-normal italic">
          Events & Schedule
        </h2>

        {/* Floral Ornament */}
        <div className="flex items-center justify-center gap-3 my-4 text-[#58111a]">
          <span className="h-[1px] w-12 bg-[#58111a]/40" />
          <Church className="w-4 h-4 text-[#58111a]" />
          <span className="h-[1px] w-12 bg-[#58111a]/40" />
        </div>

        {/* Event Schedule Card Grid */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          {EVENTS_SCHEDULE.map((evt) => {
            const isCeremony = evt.id === 'ceremony';
            return (
              <div
                key={evt.id}
                className="backdrop-blur-2xl bg-white/85 border border-white/90 rounded-[32px] p-8 sm:p-10 flex flex-col items-center text-center shadow-md hover:border-[#58111a]/60 hover:bg-white transition-all relative group"
              >
                {/* Event Icon badge */}
                <div className="w-12 h-12 rounded-full bg-[#f9ecef] border border-[#f2d6dc] flex items-center justify-center text-[#58111a] mb-6 shadow-xs">
                  {isCeremony ? <Church className="w-6 h-6" /> : <GlassWater className="w-6 h-6" />}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1816] font-semibold mb-3 italic">
                  {evt.title}
                </h3>

                <div className="space-y-1.5 text-xs sm:text-sm text-[#1a1816] mb-6 font-normal">
                  <div className="flex items-center justify-center gap-2 font-bold text-[#1a1816]">
                    <Clock className="w-3.5 h-3.5 text-[#58111a]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[#58111a] font-extrabold">
                    <Calendar className="w-3.5 h-3.5 text-[#58111a]" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="pt-2 text-[#1a1816]">
                    <p className="font-bold">{evt.location}</p>
                    <p className="text-xs text-[#2a241f] font-medium">{evt.address}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2a241f] font-normal leading-relaxed mb-8 max-w-xs">
                  {evt.description}
                </p>

                {/* View Location CTA */}
                <button
                  onClick={() => setSelectedMapEvent(evt)}
                  className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#58111a] hover:bg-[#3b0a10] text-white text-xs font-bold tracking-[0.18em] uppercase transition-all shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#f2d6dc]" />
                  <span>VIEW LOCATION</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Cards Strip */}
        <div className="mt-12 backdrop-blur-2xl bg-white/85 rounded-[28px] p-6 sm:p-8 border border-white/90 shadow-md grid grid-cols-1 sm:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {/* Dress Code */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="p-3 rounded-xl bg-[#f9ecef] border border-[#f2d6dc] text-[#58111a] shadow-xs">
              <Shirt className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#58111a] block">
                Dress Code
              </span>
              <span className="text-sm font-serif font-bold text-[#1a1816]">
                {COUPLE_INFO.dressCode}
              </span>
            </div>
          </div>

          {/* Gifts / Registry */}
          <div className="flex items-center justify-center sm:justify-start gap-4 border-t sm:border-t-0 sm:border-l border-black/10 pt-4 sm:pt-0 sm:pl-6">
            <div className="p-3 rounded-xl bg-[#f9ecef] border border-[#f2d6dc] text-[#58111a] shadow-xs">
              <Gift className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#58111a] block">
                Gifts
              </span>
              <button
                onClick={onGoToRegistry}
                className="text-sm font-serif font-bold text-[#1a1816] hover:text-[#58111a] underline underline-offset-4 decoration-[#58111a]"
              >
                See our registry
              </button>
            </div>
          </div>

          {/* Wedding Hashtag */}
          <div className="flex items-center justify-center sm:justify-start gap-4 border-t sm:border-t-0 sm:border-l border-black/10 pt-4 sm:pt-0 sm:pl-6">
            <div className="p-3 rounded-xl bg-[#f9ecef] border border-[#f2d6dc] text-[#58111a] shadow-xs">
              <Hash className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#58111a] block">
                Hashtag
              </span>
              <span className="text-sm font-serif font-bold text-[#1a1816]">
                {COUPLE_INFO.hashtag}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Location Modal Popup */}
      {selectedMapEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
          <div className="backdrop-blur-2xl bg-[#FAF8F5]/90 rounded-[32px] max-w-lg w-full p-6 relative shadow-2xl border border-white/80 text-left">
            <button
              onClick={() => setSelectedMapEvent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/60 text-[#2d2a26] hover:bg-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl text-[#2d2a26] font-medium mb-1 italic">
              {selectedMapEvent.title} Location
            </h3>
            <p className="text-xs text-[#2d2a26]/70 mb-4">{selectedMapEvent.address}</p>

            <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/80 mb-5 bg-white/50 flex items-center justify-center">
              <iframe
                title={selectedMapEvent.title}
                src={selectedMapEvent.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedMapEvent(null)}
                className="px-4 py-2 rounded-full text-xs font-semibold text-[#2d2a26]/70 hover:text-[#2d2a26]"
              >
                Close
              </button>
              <a
                href={selectedMapEvent.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2d2a26] text-white text-xs font-bold tracking-wider uppercase hover:bg-[#a88d7b] transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
