import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Camera, X, ChevronLeft, ChevronRight, Maximize2, Heart } from 'lucide-react';
import { useGallery } from '../hooks/useGallery';
import { COUPLE_INFO } from '../data/mockData';
import { GalleryItem } from '../types';

interface FullGalleryPageProps {
  onBack: () => void;
}

export const FullGalleryPage: React.FC<FullGalleryPageProps> = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { items, categories } = useGallery();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems: GalleryItem[] =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#2d2a26] font-sans antialiased relative pb-24">
      {/* Soft Ambient Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#9c7bb5] rounded-full blur-[140px] opacity-25 pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-[#2e0710] rounded-full blur-[150px] opacity-20 pointer-events-none z-0" />

      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-white/60 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-xs font-bold uppercase tracking-wider text-[#58111a] border border-[#f2d6dc] shadow-xs transition-all hover:scale-102 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Wedding Invitation</span>
          </button>

          <span
            className="font-serif italic text-xl sm:text-2xl font-bold text-[#2d2a26]"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            {COUPLE_INFO.initials}
          </span>
        </div>
      </header>

      {/* Page Hero Header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-extrabold block">
            Captured Memories
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1816] font-normal italic">
            Full Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-[#2a241f] font-normal leading-relaxed pt-2">
            Every snapshot of laughter, quiet smiles, shared adventures, and the moments leading up to our forever.
          </p>

          {/* Floral Ornament */}
          <div className="flex items-center justify-center gap-3 pt-3 text-[#58111a]">
            <span className="h-[1px] w-12 bg-[#58111a]/30" />
            <Camera className="w-4 h-4 text-[#58111a]" />
            <span className="h-[1px] w-12 bg-[#58111a]/30" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-md cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#58111a] text-white shadow-xs'
                  : 'bg-white/60 text-[#2d2a26] hover:bg-white/90 border border-[#f2d6dc]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Count Display */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-wider text-[#58111a] uppercase bg-[#f9ecef] px-3.5 py-1.5 rounded-full border border-[#f2d6dc]">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'Photograph' : 'Photographs'}
          </span>
        </div>

        {/* Image Grid with All Pictures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-[28px] overflow-hidden cursor-pointer backdrop-blur-md bg-[#f5e6ea]/60 border border-white/80 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (item.fallbackUrl && target.src !== item.fallbackUrl) {
                    target.src = item.fallbackUrl;
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left text-white">
                <span className="text-[10px] tracking-widest text-[#e8d2bd] uppercase font-bold">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-medium italic">{item.title}</h4>
                <p className="text-xs text-white/80 font-light truncate">{item.caption}</p>
              </div>

              <div className="absolute top-3 right-3 p-2 rounded-full bg-white/50 border border-white/60 backdrop-blur-md text-[#2d2a26] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Back to top/invitation prompt at bottom */}
        <div className="mt-16 text-center pt-8 border-t border-[#f2d6dc]">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#58111a] hover:bg-[#3b0a10] text-white text-xs font-bold uppercase tracking-[0.18em] shadow-sm transition-all hover:scale-102 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Wedding Page</span>
          </button>
          <div className="pt-8 mt-6">
            <p className="text-[11px] tracking-wider text-[#58111a]/40 uppercase">
              COPYRIGHT Digital Cafe {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </main>

      {/* Lightbox Modal Popup rendered via portal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/94 backdrop-blur-md p-4 sm:p-6">
          {/* Simple X close button positioned with clear clearance */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="fixed top-6 right-6 sm:top-8 sm:right-8 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/40 backdrop-blur-md transition-all z-[10000] shadow-2xl hover:scale-110 flex items-center justify-center cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30 backdrop-blur-md transition-all z-[10000] shadow-xl hover:scale-105 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Caption Display */}
          <div className="max-w-4xl w-full flex flex-col items-center pt-16 sm:pt-12">
            <div className="max-h-[70vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/40">
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].title}
                onError={(e) => {
                  const target = e.currentTarget;
                  const item = filteredItems[lightboxIndex];
                  if (item?.fallbackUrl && target.src !== item.fallbackUrl) {
                    target.src = item.fallbackUrl;
                  }
                }}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <span className="text-[10px] tracking-widest text-[#e8d2bd] uppercase font-bold block mb-1">
                {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h3 className="font-serif text-2xl font-medium">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-white/70 font-light mt-1 max-w-lg mx-auto">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30 backdrop-blur-md transition-all z-[10000] shadow-xl hover:scale-105 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>,
        document.body
      )}
    </div>
  );
};
