import React from 'react';
import { Heart } from 'lucide-react';

export const GratitudeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 relative text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-2 text-[#58111a] mb-2">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1816] font-medium italic">
          Thank You!
        </h3>
        <p className="text-sm text-[#2a241f] font-normal mt-2 max-w-lg mx-auto leading-relaxed">
          We are so deeply grateful for your love, support, prayers, and generosity.
        </p>
      </div>
    </section>
  );
};
