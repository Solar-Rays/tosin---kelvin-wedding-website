import React, { useState } from 'react';
import { Heart, Send, Plus, Minus, CheckCircle, Info, Calendar, MapPin } from 'lucide-react';
import { COUPLE_INFO } from '../data/mockData';
import { RsvpSubmission } from '../types';

interface RsvpSectionProps {
  onRsvpSuccess: (rsvp: RsvpSubmission) => void;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({
  onRsvpSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState(1);
  const [guestNames, setGuestNames] = useState('');
  const [dietaryRequirements, setDietaryRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          attending,
          guestCount,
          guestNames,
          dietaryRequirements,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit RSVP.');
      }

      // Success
      setIsSubmitting(false);
      onRsvpSuccess(data.rsvp);
    } catch (err: any) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMessage(err.message || 'An error occurred while submitting your RSVP.');
    }
  };

  return (
    <section id="rsvp" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card with Frosted Glass split layout */}
        <div className="backdrop-blur-2xl bg-white/80 border border-white/90 rounded-[36px] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Left Dark Glass Floral Image Panel */}
          <div className="lg:col-span-5 relative p-8 sm:p-12 flex flex-col justify-between text-white overflow-hidden bg-[#1a1816]">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000"
                alt="Floral Background"
                className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
            </div>

            {/* Top Content */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-[#e8d2bd] border border-white/30 text-[10px] uppercase tracking-[0.2em] font-extrabold shadow-xs">
                <Heart className="w-3 h-3 fill-current text-[#e8d2bd]" />
                <span>Wedding Invitation</span>
              </div>
              <h2 className="font-serif italic text-4xl sm:text-5xl font-light text-white leading-tight">
                Kindly <br />
                RSVP
              </h2>
            </div>

            {/* Middle/Bottom Text */}
            <div className="relative z-10 space-y-4 pt-12 lg:pt-0">
              <p className="text-sm font-medium text-white/90 leading-relaxed">
                Your response means the world to us as we prepare for our special celebration.
              </p>

              <div className="space-y-3 pt-4 border-t border-white/20">
                <div>
                  <span className="text-[10px] tracking-widest text-[#e8d2bd] uppercase font-bold block mb-1">
                    RSVP Deadline
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold text-white">
                    Kindly respond by {COUPLE_INFO.rsvpDeadline}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#e8d2bd] uppercase font-bold block mb-1">
                    Celebration Date
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white/90">
                    {COUPLE_INFO.date} • {COUPLE_INFO.time}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[#e8d2bd] uppercase font-bold block mb-1">
                    Venue
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white/90">
                    {COUPLE_INFO.venueCeremony}, {COUPLE_INFO.city}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1816] font-semibold mb-1 italic">
                Your Details
              </h3>
              <p className="text-xs text-[#2a241f] font-medium mb-6">
                Please fill in the information below to confirm your attendance.
              </p>

              {errorMessage && (
                <div className="mb-6 p-3.5 rounded-2xl bg-red-50 backdrop-blur-md border border-red-300 text-red-900 text-xs font-medium flex items-center gap-2">
                  <Info className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-extrabold text-[#1a1816] mb-1.5 uppercase tracking-wider">
                    Full Name(s) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Kunle & Folake Adebayo"
                    className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8cec0] text-sm text-[#1a1816] font-medium placeholder:text-[#82786e] focus:outline-none focus:ring-2 focus:ring-[#6e4e39] shadow-xs transition-all"
                  />
                </div>

                {/* Email Address & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#1a1816] mb-1.5 uppercase tracking-wider">
                      Email Address <span className="text-xs font-normal normal-case text-stone-500">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8cec0] text-sm text-[#1a1816] font-medium placeholder:text-[#82786e] focus:outline-none focus:ring-2 focus:ring-[#6e4e39] shadow-xs transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-[#1a1816] mb-1.5 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8cec0] text-sm text-[#1a1816] font-medium placeholder:text-[#82786e] focus:outline-none focus:ring-2 focus:ring-[#6e4e39] shadow-xs transition-all"
                    />
                  </div>
                </div>

                {/* Will you be attending? */}
                <div>
                  <label className="block text-xs font-extrabold text-[#1a1816] mb-1.5 uppercase tracking-wider">
                    Will you be attending? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`py-3 px-4 rounded-2xl border text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                        attending === 'yes'
                          ? 'bg-[#1a1816] text-white border-[#1a1816] shadow-sm'
                          : 'bg-white text-[#1a1816] border-[#d8cec0] hover:bg-gray-50'
                      }`}
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${attending === 'yes' ? 'text-[#e8d2bd]' : 'text-gray-400'}`} />
                      <span>Yes, I'll be there!</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending('no')}
                      className={`py-3 px-4 rounded-2xl border text-xs font-bold tracking-wider uppercase transition-all ${
                        attending === 'no'
                          ? 'bg-[#1a1816] text-white border-[#1a1816] shadow-sm'
                          : 'bg-white text-[#1a1816] border-[#d8cec0] hover:bg-gray-50'
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {/* Additional Guest Details if Attending */}
                {attending === 'yes' && (
                  <>
                    {/* Number of Guests Counter */}
                    <div>
                      <label className="block text-xs font-extrabold text-[#1a1816] mb-1.5 uppercase tracking-wider">
                        Number of Guests
                      </label>
                      <div className="flex items-center justify-between p-2 rounded-2xl bg-white border border-[#d8cec0] shadow-xs max-w-xs">
                        <button
                          type="button"
                          onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                          className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1a1816] flex items-center justify-center font-bold text-lg border border-[#d8cec0]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-serif text-2xl font-bold text-[#1a1816] italic">
                          {guestCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setGuestCount(Math.min(5, guestCount + 1))}
                          className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1a1816] flex items-center justify-center font-bold text-lg border border-[#d8cec0]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {guestCount > 1 && (
                      <div>
                        <label className="block text-xs font-extrabold text-[#1a1816] mb-1.5 uppercase tracking-wider">
                          Full Name(s) of Accompanying Guests
                        </label>
                        <input
                          type="text"
                          value={guestNames}
                          onChange={(e) => setGuestNames(e.target.value)}
                          placeholder="e.g. Folake Adebayo, Junior Adebayo"
                          className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8cec0] text-sm text-[#1a1816] font-medium placeholder:text-[#82786e] focus:outline-none focus:ring-2 focus:ring-[#6e4e39] shadow-xs transition-all"
                        />
                      </div>
                    )}

                    {/* Dietary Requirements */}
                    <div>
                      <label className="block text-xs font-extrabold text-[#1a1816] mb-1.5 uppercase tracking-wider">
                        Dietary Requirements (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={dietaryRequirements}
                        onChange={(e) => setDietaryRequirements(e.target.value)}
                        placeholder="Let us know any food allergies, vegetarian/halal preferences..."
                        className="w-full px-5 py-3 rounded-2xl bg-white border border-[#d8cec0] text-sm text-[#1a1816] font-medium placeholder:text-[#82786e] focus:outline-none focus:ring-2 focus:ring-[#6e4e39] shadow-xs transition-all resize-none"
                      />
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#58111a] hover:bg-[#3b0a10] text-white text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-md disabled:opacity-50 flex items-center justify-center gap-2 mt-4"
                >
                  {isSubmitting ? (
                    <span>SUBMITTING RSVP...</span>
                  ) : (
                    <>
                      <span>SUBMIT RSVP</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
