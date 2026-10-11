import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, X } from 'lucide-react';
import { RsvpSubmission } from '../types';
import { COUPLE_INFO } from '../data/mockData';

interface ThankYouModalProps {
  rsvp: RsvpSubmission;
  onClose: () => void;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({
  rsvp,
  onClose,
}) => {
  useEffect(() => {
    // Trigger festive celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#58111a', '#9c7bb5', '#FAF8F5', '#8A7255'],
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Container layout */}
      <div className="relative max-w-lg w-full rounded-3xl overflow-hidden bg-[#1E1C1A] text-white p-8 sm:p-12 text-center border border-white/20 shadow-2xl">
        {/* Background dark romantic photo overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
            alt="Wedding Celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 flex flex-col items-center">
          {/* Heart Emblem */}
          <div className="w-12 h-12 rounded-full bg-white/10 border border-[#C5A880] flex items-center justify-center text-[#C5A880] mb-6">
            <Heart className="w-6 h-6 fill-current" />
          </div>

          <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-white mb-2">
            Thank You!
          </h2>

          <p className="text-xs tracking-[0.25em] font-semibold text-[#D4C3B1] uppercase mb-4">
            YOUR RSVP HAS BEEN RECEIVED.
          </p>

          {/* Floral Heart Ornament */}
          <div className="flex items-center justify-center gap-3 my-2 text-[#C5A880]">
            <span className="h-[1px] w-8 bg-white/20" />
            <Heart className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="h-[1px] w-8 bg-white/20" />
          </div>

          <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed max-w-sm mb-6">
            {rsvp.attending === 'yes'
              ? `We are delighted to celebrate our special day with you, ${rsvp.fullName}!`
              : `Thank you for letting us know, ${rsvp.fullName}. You will be warmly remembered in our hearts.`}
          </p>

          {/* RSVP SUMMARY CARD */}
          <div className="w-full bg-white/10 border border-white/15 rounded-2xl p-5 mb-8 backdrop-blur-xs text-left space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Guest Name:</span>
              <span className="text-xs font-bold text-white">{rsvp.fullName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">Attendance:</span>
              <span className={`text-xs font-bold ${rsvp.attending === 'yes' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {rsvp.attending === 'yes' ? 'Attending' : 'Declined'}
              </span>
            </div>
            {rsvp.attending === 'yes' && (
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">Party Size:</span>
                <span className="text-xs font-bold text-white">{rsvp.guestCount} {rsvp.guestCount === 1 ? 'Guest' : 'Guests'}</span>
              </div>
            )}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-xs text-white/70">Event Date:</span>
              <span className="text-xs font-medium text-[#D4C3B1]">{COUPLE_INFO.date}</span>
            </div>
          </div>

          {/* Back To Home Button */}
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full bg-[#58111a] hover:bg-[#3b0a10] text-white text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-md"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};
