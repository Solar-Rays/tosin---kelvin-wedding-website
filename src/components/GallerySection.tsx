import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react';
import { useGallery } from '../hooks/useGallery';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onViewMore?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onViewMore }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { items, categories } = useGallery();

  const filteredItems =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());

  const displayedItems = filteredItems.slice(0, 6);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + displayedItems.length) % displayedItems.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % displayedItems.length);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header matching Screen 06 */}
        <span className="text-xs uppercase tracking-[0.25em] text-[#58111a] font-bold">
          Captured Memories
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#2d2a26] mt-1 font-normal italic">
          Gallery
        </h2>

        {/* Floral Ornament */}
        <div className="flex items-center justify-center gap-3 my-4 text-[#58111a]">
          <span className="h-[1px] w-12 bg-[#58111a]/30" />
          <Camera className="w-4 h-4 text-[#58111a]" />
          <span className="h-[1px] w-12 bg-[#58111a]/30" />
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-md cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#58111a] text-white shadow-xs'
                  : 'bg-white/50 text-[#2d2a26] hover:bg-white/80 border border-white/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid with exactly 6 pictures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {displayedItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-[28px] overflow-hidden cursor-pointer backdrop-blur-md bg-[#f5e6ea]/60 border border-white/60 shadow-sm hover:shadow-xl transition-all"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left text-white">
                <span className="text-[10px] tracking-widest text-[#a88d7b] uppercase font-bold">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-medium italic">{item.title}</h4>
                <p className="text-xs text-white/80 font-light truncate">{item.caption}</p>
              </div>

              <div className="absolute top-3 right-3 p-2.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md text-[#2d2a26] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* View More Link leading to full gallery page */}
        {onViewMore && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={onViewMore}
              className="inline-flex items-center gap-2 group text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#58111a] hover:text-[#3b0a10] transition-colors py-2 px-4 rounded-full hover:bg-white/60 cursor-pointer"
            >
              <span className="border-b-2 border-[#58111a] group-hover:border-[#3b0a10] pb-0.5">
                View More
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal Popup rendered via portal to ensure supreme z-index and body layering */}
      {lightboxIndex !== null && displayedItems[lightboxIndex] && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-6">
          {/* Simple X close button positioned with clear clearance below fixed header */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="fixed top-20 right-4 sm:top-24 sm:right-8 p-3 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/40 backdrop-blur-md transition-all z-[10000] shadow-2xl hover:scale-110 flex items-center justify-center"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30 backdrop-blur-md transition-all z-[10000] shadow-xl hover:scale-105"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Caption Display */}
          <div className="max-w-4xl w-full flex flex-col items-center pt-24 sm:pt-16">
            <div className="max-h-[65vh] sm:max-h-[70vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/40">
              <img
                src={displayedItems[lightboxIndex].url}
                alt={displayedItems[lightboxIndex].title}
                onError={(e) => {
                  const target = e.currentTarget;
                  const item = displayedItems[lightboxIndex];
                  if (item?.fallbackUrl && target.src !== item.fallbackUrl) {
                    target.src = item.fallbackUrl;
                  }
                }}
                className="max-h-[65vh] sm:max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif text-2xl font-medium">
                {displayedItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-white/70 font-light mt-1">
                {displayedItems[lightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/30 backdrop-blur-md transition-all z-[10000] shadow-xl hover:scale-105"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>,
        document.body
      )}
    </section>
  );
};
