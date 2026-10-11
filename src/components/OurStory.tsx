import React, { useState } from 'react';
import { Heart, Sparkles, Quote, ChevronDown } from 'lucide-react';
import { STORY_MILESTONES, COUPLE_INFO, COUPLE_STORIES } from '../data/mockData';

interface OurStoryProps {
  onReadFullStory?: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onReadFullStory }) => {
  const [isTosinExpanded, setIsTosinExpanded] = useState(false);
  const [isKelvinExpanded, setIsKelvinExpanded] = useState(false);

  const initialTosinParagraphs = COUPLE_STORIES.tosin.paragraphs.slice(0, 2);
  const remainingTosinParagraphs = COUPLE_STORIES.tosin.paragraphs.slice(2);

  const initialKelvinParagraphs = COUPLE_STORIES.kelvin.paragraphs.slice(0, 2);
  const remainingKelvinParagraphs = COUPLE_STORIES.kelvin.paragraphs.slice(2);
  return (
    <section id="story" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* SECTION 1: Screen 01 Homepage Story Teaser Card */}
        <div className="backdrop-blur-2xl bg-white/80 border border-white/90 rounded-[36px] p-8 sm:p-12 shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-5 text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-extrabold block">
              Our Love Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1816] font-medium italic">
              A Promise of Forever
            </h2>
            <p className="text-[#1a1816] text-base leading-relaxed font-normal">
              We met by chance, became best friends by choice, and fell in love along the way. Every step of our journey has brought us closer to this beautiful day.
            </p>
            <p className="text-[#2a241f] text-sm leading-relaxed hidden sm:block font-medium">
              From our first conversations in Benin City to sunset walks and shared dreams for the future, we cannot wait to share the next chapter of our lives surrounded by everyone we hold dear.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  const element = document.getElementById('perspectives-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  if (onReadFullStory) onReadFullStory();
                }}
                aria-label="Read Our Story"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#58111a] hover:bg-[#3b0a10] text-white text-xs font-bold tracking-[0.18em] uppercase transition-all shadow-sm"
              >
                <span>READ OUR STORIES</span>
              </button>
            </div>
          </div>
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/3] rounded-[28px] overflow-hidden shadow-sm border-4 border-white/80">
              <img
                src="https://res.cloudinary.com/solarrays/image/upload/v1791674144/Tosin%20and%20Kelvin/edo/q2mopvzgsqgm6seeqwrk_pbuikv.avif?auto=format&fit=crop&q=80&w=1000"
                alt="Tosin and Kelvin Together"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Small floral label badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#f2d6dc] px-4 py-2 rounded-full shadow-md flex items-center gap-2 text-xs font-serif text-[#58111a] font-bold">
              <Heart className="w-3.5 h-3.5 fill-[#58111a] text-[#58111a]" />
              <span>Forever & Always</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: Dedicated Perspectives: From Tosin & From Kelvin */}
        <div id="perspectives-section" className="space-y-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-extrabold">In Their Own Words</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1816] mt-1 font-normal italic">
              His & Her Perspectives
            </h2>
            <div className="flex items-center justify-center gap-3 my-4 text-[#58111a]">
              <span className="h-[1px] w-12 bg-[#58111a]/40" />
              <Heart className="w-4 h-4 fill-current text-[#58111a]" />
              <span className="h-[1px] w-12 bg-[#58111a]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story From Tosin */}
            <div className="backdrop-blur-2xl bg-white/85 border border-white/90 rounded-[36px] p-8 sm:p-10 shadow-md flex flex-col justify-between relative overflow-hidden text-left hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9c7bb5] to-[#f2d6dc]" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#9c7bb5] shadow-xs">
                      <img
                        src={COUPLE_STORIES.tosin.image}
                        alt="Tosin Dowole"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#58111a] block">
                        THE BRIDE
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#1a1816] italic">
                        From Tosin
                      </h3>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#f5eef8] text-[#9c7bb5] border border-[#e8d5f0]">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Quote highlight */}
                <blockquote className="font-serif italic text-base sm:text-lg text-[#58111a] bg-[#fcf8f5] p-5 rounded-2xl border-l-4 border-[#58111a] mb-6 leading-relaxed">
                  "{COUPLE_STORIES.tosin.quote}"
                </blockquote>

                {/* Initial visible paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-[#2d2a26] font-normal leading-relaxed">
                  {initialTosinParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Expandable remaining paragraphs with smooth height & opacity transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isTosinExpanded
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden min-h-0 text-sm sm:text-base text-[#2d2a26] font-normal leading-relaxed">
                    <div className="pt-4 space-y-4">
                      {remainingTosinParagraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Read More / Read Less Toggle */}
                {remainingTosinParagraphs.length > 0 && (
                  <div className="mt-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsTosinExpanded(!isTosinExpanded)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#58111a] hover:text-[#3b0a10] focus:outline-none transition-colors group cursor-pointer"
                      aria-expanded={isTosinExpanded}
                    >
                      <span className="border-b border-[#58111a] group-hover:border-[#3b0a10] pb-0.5 transition-colors">
                        {isTosinExpanded ? 'Read Less' : 'Read Full Story'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-500 ease-in-out ${
                          isTosinExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#58111a] font-serif italic">
                <span>With all my love,</span>
                <span className="font-bold text-sm tracking-wider not-italic">— Tosin Dowole</span>
              </div>
            </div>

            {/* Story From Kelvin */}
            <div className="backdrop-blur-2xl bg-white/85 border border-white/90 rounded-[36px] p-8 sm:p-10 shadow-md flex flex-col justify-between relative overflow-hidden text-left hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#58111a] to-[#8c1c2e]" />
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#58111a] shadow-xs">
                      <img
                        src={COUPLE_STORIES.kelvin.image}
                        alt="Kelvin Ikponmwosa"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#58111a] block">
                        THE GROOM
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#1a1816] italic">
                        From Kelvin
                      </h3>
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#f9ecef] text-[#58111a] border border-[#f2d6dc]">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Quote highlight */}
                <blockquote className="font-serif italic text-base sm:text-lg text-[#58111a] bg-[#fcf8f5] p-5 rounded-2xl border-l-4 border-[#58111a] mb-6 leading-relaxed">
                  "{COUPLE_STORIES.kelvin.quote}"
                </blockquote>

                {/* Initial visible paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-[#2d2a26] font-normal leading-relaxed">
                  {initialKelvinParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Expandable remaining paragraphs with smooth height & opacity transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isKelvinExpanded
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden min-h-0 text-sm sm:text-base text-[#2d2a26] font-normal leading-relaxed">
                    <div className="pt-4 space-y-4">
                      {remainingKelvinParagraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Read More / Read Less Toggle */}
                {remainingKelvinParagraphs.length > 0 && (
                  <div className="mt-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsKelvinExpanded(!isKelvinExpanded)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#58111a] hover:text-[#3b0a10] focus:outline-none transition-colors group cursor-pointer"
                      aria-expanded={isKelvinExpanded}
                    >
                      <span className="border-b border-[#58111a] group-hover:border-[#3b0a10] pb-0.5 transition-colors">
                        {isKelvinExpanded ? 'Read Less' : 'Read Full Story'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-500 ease-in-out ${
                          isKelvinExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#58111a] font-serif italic">
                <span>Forever yours,</span>
                <span className="font-bold text-sm tracking-wider not-italic">— Kelvin Ikponmwosa</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3: Timeline Milestones */}
        <div id="full-story-timeline" className="text-center pt-8">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-extrabold">Milestones</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#1a1816] mt-1 font-normal italic">
              Our Journey Together
            </h2>
            {/* Floral ornament separator */}
            <div className="flex items-center justify-center gap-3 my-4 text-[#58111a]">
              <span className="h-[1px] w-12 bg-[#58111a]/40" />
              <Heart className="w-4 h-4 fill-current text-[#58111a]" />
              <span className="h-[1px] w-12 bg-[#58111a]/40" />
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-[130px] left-[15%] right-[15%] h-[1px] bg-[#f2d6dc] z-0" />

            {STORY_MILESTONES.map((item) => (
              <div
                key={item.id}
                className="relative z-10 flex flex-col items-center text-center group backdrop-blur-2xl bg-white/80 border border-white/90 p-6 rounded-[32px] shadow-sm hover:bg-white transition-all"
              >
                {/* Step badge icon */}
                <div className="w-10 h-10 rounded-full bg-[#f9ecef] border border-[#f2d6dc] flex items-center justify-center text-[#58111a] mb-4 shadow-xs group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4 text-[#58111a]" />
                </div>

                {/* Circular Image Frame */}
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-sm mb-4 relative group-hover:shadow-md transition-all">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text Details */}
                <span className="text-xs tracking-[0.2em] font-extrabold text-[#58111a] uppercase mb-1">
                  {item.date}
                </span>
                <h3 className="font-serif text-2xl text-[#1a1816] font-medium mb-2 italic">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2a241f] font-normal leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
