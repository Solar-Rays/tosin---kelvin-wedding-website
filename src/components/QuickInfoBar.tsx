import React from 'react';
import { Church, GlassWater, Shirt, MapPin } from 'lucide-react';
import { COUPLE_INFO } from '../data/mockData';

export const QuickInfoBar: React.FC = () => {
  const items = [
    {
      icon: Church,
      title: 'Time',
      detail: '1:00 PM',
    },
    {
      icon: MapPin,
      title: 'Venue',
      detail: 'Ehizua Event Centre',
    },
    {
      icon: Shirt,
      title: 'Color of Day',
      detail: 'Lavender & Cream',
    },
    {
      icon: GlassWater,
      title: 'Location',
      detail: 'Airport Rd, Benin City',
    },
  ];

  return (
    <section className="py-10 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="backdrop-blur-2xl bg-white/80 border border-white/90 text-[#1a1816] rounded-[32px] p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center justify-center p-2 ${
                    idx > 0 ? 'pt-4 md:pt-2' : ''
                  }`}
                >
                  <div className="mb-3 p-3 rounded-full bg-[#f9ecef] border border-[#f2d6dc] text-[#58111a] shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-[#1a1816] font-bold mb-0.5 italic">
                    {item.title}
                  </h4>
                  <p className="text-xs tracking-wider text-[#58111a] font-extrabold">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
