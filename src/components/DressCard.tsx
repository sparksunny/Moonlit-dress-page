import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DressDetail } from '../types';
import { DelicateSparkle } from './FloralDecor';

interface DressCardProps {
  dress: DressDetail;
  onViewDetails: (dress: DressDetail) => void;
}

export const DressCard: React.FC<DressCardProps> = ({ dress, onViewDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback high-res bridal/evening image if needed
  const displayImage = imageError
    ? 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=80'
    : dress.image;

  return (
    <div
      id={`dress-card-${dress.id}`}
      className="group flex flex-col rounded-2xl bg-[#FDFBF7] border border-[#EBE1D4] hover:border-[#DAC7B0] transition-all duration-500 hover:shadow-md overflow-hidden"
    >
      {/* Image Frame with 3:4 aspect ratio */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#EFE9DF]">
        {/* Skeleton placeholder while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#EAE2D5] animate-pulse" />
        )}

        <img
          src={displayImage}
          alt={`${dress.name} - ${dress.category}`}
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImageError(true);
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Subtle gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#26170E]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category Label Pill in top-left */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#E2D5C4] shadow-2xs">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5C4839]">
            {dress.category}
          </span>
        </div>

        {/* Small sparkle in top-right */}
        <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-[#FAF7F2]/80 backdrop-blur-xs border border-[#E2D5C4] flex items-center justify-center text-[#BFA075] opacity-80">
          <DelicateSparkle className="w-3.5 h-3.5" />
        </div>

        {/* Quick View overlay on hover (desktop) */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
          <button
            type="button"
            onClick={() => onViewDetails(dress)}
            className="w-full py-2.5 px-4 rounded-lg bg-[#FAF7F2]/95 backdrop-blur-md text-[#362417] text-xs uppercase tracking-[0.2em] font-medium border border-[#DAC8B4] shadow-xs flex items-center justify-center gap-2 hover:bg-[#F2EAE0] transition-colors"
          >
            <span>Inspect Craftsmanship</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A68969]" />
          </button>
        </div>
      </div>

      {/* Card Content Information */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-[#FDFBF7]">
        <div className="space-y-2">
          {/* Dress Name */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-xl sm:text-2xl text-[#2F1F15] font-normal tracking-tight group-hover:text-[#674A35] transition-colors">
              {dress.name}
            </h3>
            <span className="text-xs text-[#C5A880] font-cormorant italic">Couture</span>
          </div>

          {/* Thin subtle gold line */}
          <div className="w-8 h-[1px] bg-[#DFCFC0]" />

          {/* Short elegant description */}
          <p className="text-xs sm:text-sm text-[#5B483B] leading-relaxed line-clamp-2">
            {dress.description}
          </p>

          {/* Reference-style subtle palette preview */}
          <div className="pt-2 flex items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-wider text-[#8A7463] mr-1">Shades:</span>
            {dress.colorPalette.map((color, idx) => (
              <span
                key={idx}
                title={color.name}
                className="w-3 h-3 rounded-full border border-[#D5C6B5] shadow-2xs"
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>

        {/* Subtle Text Link: "View Details" */}
        <div className="pt-5 mt-4 border-t border-[#EFE5DB] flex items-center justify-between">
          <button
            id={`view-details-btn-${dress.id}`}
            type="button"
            onClick={() => onViewDetails(dress)}
            className="group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#4D392C] hover:text-[#1F140D] transition-colors focus:outline-hidden"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#BFA075] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </button>

          <span className="text-[11px] font-cormorant italic text-[#8B7462]">
            Atelier Spec
          </span>
        </div>
      </div>
    </div>
  );
};
