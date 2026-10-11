import React, { useState, useEffect } from 'react';
import { COUPLE_INFO } from '../data/mockData';

export const CountdownTimer: React.FC = () => {
  const targetDate = new Date(COUPLE_INFO.isoDate);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerItems = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Title matching screen 01 italic script "The Big Day In" */}
        <h3 className="font-serif italic text-3xl sm:text-4xl text-[#58111a] mb-8 font-semibold">
          The Big Day In
        </h3>

        {/* 4 Box Grid with Frosted Glass styling */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {timerItems.map((item) => (
            <div
              key={item.label}
              className="backdrop-blur-2xl bg-white/80 border border-white/90 rounded-[28px] py-6 px-4 flex flex-col items-center justify-center shadow-md hover:border-[#58111a]/60 transition-all"
            >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1816] tracking-tight italic">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.25em] text-[#58111a] mt-2 uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
