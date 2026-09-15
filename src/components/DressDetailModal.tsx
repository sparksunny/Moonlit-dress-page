import React, { useEffect } from 'react';
import { X, Sparkles, Heart, Crown, Gem, Flower2, Feather } from 'lucide-react';
import { DressDetail } from '../types';
import { BotanicalBranch, DelicateHeart } from './FloralDecor';

interface DressDetailModalProps {
  dress: DressDetail | null;
  onClose: () => void;
}

export const DressDetailModal: React.FC<DressDetailModalProps> = ({ dress, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (dress) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dress, onClose]);

  if (!dress) return null;

  return (
    <div
      id="dress-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#261810]/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="dress-detail-modal-content"
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#FAF7F0] border border-[#E5D7C7] shadow-2xl p-5 sm:p-8 text-[#38261A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#EFE4D6]/80 hover:bg-[#E5D6C4] text-[#4A3527] transition-colors focus:outline-hidden"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Inspired Directly by the Reference Image */}
        <div className="border-b border-[#EBDDCF] pb-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#866D59] font-medium">
                Moonlit Closet Collection
              </span>
              <DelicateHeart className="w-3.5 h-3.5 text-[#C5A880]" />
            </div>
            <span className="text-xs font-cormorant italic text-[#967C67] pr-8 sm:pr-0">
              Editorial Catalog Spec
            </span>
          </div>

          <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h2 className="font-serif text-2xl sm:text-4xl text-[#2E1E14] font-medium">
              {dress.name}
            </h2>
            <span className="font-script text-lg sm:text-xl text-[#7E6551]">
              Elegance &amp; Grace ♡
            </span>
          </div>

          <p className="font-cormorant italic text-sm sm:text-base text-[#7E6652] mt-0.5">
            {dress.subtitle}
          </p>
        </div>

        {/* Modal Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Realistic Dress Display & Reference-Style Detail Callouts */}
          <div className="md:col-span-5 space-y-4">
            {/* Primary Image */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#ECE3D6] border border-[#E3D4C3]">
              <img
                src={dress.image}
                alt={dress.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-[#FAF7F2]/90 backdrop-blur-xs border border-[#E1D1BF] text-center">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#695443] font-semibold">
                  {dress.category}
                </span>
              </div>
            </div>

            {/* Reference-Inspired Detail Badges Box */}
            <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#E6D8C8] space-y-2">
              <span className="block text-[10px] uppercase tracking-[0.22em] text-[#7F6753] font-semibold">
                Craftsmanship Details
              </span>
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-[#4E392B]">
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#E7DACD]">
                  <span className="block font-medium">Delicate Neckline</span>
                  <span className="text-[9px] text-[#937C68]">Hand Pearl Jaal</span>
                </div>
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#E7DACD]">
                  <span className="block font-medium">Sleeve Finish</span>
                  <span className="text-[9px] text-[#937C68]">Zari Scallops</span>
                </div>
                <div className="p-2 rounded-md bg-[#FAF7F2] border border-[#E7DACD]">
                  <span className="block font-medium">Hem Flare</span>
                  <span className="text-[9px] text-[#937C68]">Multi-Kalidaar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Descriptions & Specifications */}
          <div className="md:col-span-7 space-y-5">
            
            {/* Romantic Quote & Brand Statement */}
            <div className="p-4 rounded-xl bg-[#F6F0E7] border border-[#E7DACB]">
              <div className="flex items-center gap-2 mb-1 text-[11px] uppercase tracking-[0.2em] text-[#846C57] font-medium">
                <BotanicalBranch className="w-4 h-4 text-[#B89B77]" />
                <span>Beginning of a Beautiful Forever ♡</span>
              </div>
              <p className="font-cormorant italic text-sm sm:text-base text-[#4C382C] leading-relaxed">
                “A dreamy look for your most special moments. Elegant, graceful &amp; unforgettable, just like you.”
              </p>
            </div>

            {/* Reference-style Feature Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E8DDCF]">
                <Flower2 className="w-4 h-4 text-[#A88863] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[#4E3A2D] font-medium">
                  Elegant Embroidery
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E8DDCF]">
                <Feather className="w-4 h-4 text-[#A88863] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[#4E3A2D] font-medium">
                  Premium Fabric
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E8DDCF]">
                <Heart className="w-4 h-4 text-[#A88863] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[#4E3A2D] font-medium">
                  Comfortable Fit
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E8DDCF]">
                <Sparkles className="w-4 h-4 text-[#A88863] shrink-0" />
                <span className="text-xs uppercase tracking-wider text-[#4E3A2D] font-medium">
                  Special Occasions
                </span>
              </div>
            </div>

            {/* Long Editorial Story */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6E5745]">
                Atelier Narrative
              </h4>
              <p className="text-xs sm:text-sm text-[#544133] leading-relaxed font-light">
                {dress.longDescription}
              </p>
            </div>

            {/* Fabric & Craftsmanship specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EDE1D3]">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#866F5B] font-semibold">
                  Fabrics &amp; Weave
                </span>
                <span className="text-xs text-[#3E2B1F] font-medium mt-0.5 block">
                  {dress.fabrics}
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.18em] text-[#866F5B] font-semibold">
                  Embroidery Medium
                </span>
                <span className="text-xs text-[#3E2B1F] font-medium mt-0.5 block">
                  {dress.craftsmanship}
                </span>
              </div>
            </div>

            {/* Reference-Inspired: "PERFECT FOR" Occasions with Icons */}
            <div className="pt-2 border-t border-[#EDE1D3]">
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[#7A6451] font-semibold mb-2.5">
                Perfect For
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                {dress.perfectFor.map((occasion, i) => {
                  const icons = [Flower2, Crown, Gem, Heart];
                  const IconComp = icons[i % icons.length];
                  return (
                    <div
                      key={occasion}
                      className="p-2 rounded-lg bg-[#F4EDE2] border border-[#E4D5C4] flex flex-col items-center gap-1"
                    >
                      <IconComp className="w-3.5 h-3.5 text-[#A28362]" />
                      <span className="text-[10px] uppercase tracking-wider text-[#4B372A] font-medium">
                        {occasion}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reference-Inspired: "COLOR PALETTE" Swatches */}
            <div className="pt-2 border-t border-[#EDE1D3]">
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[#7A6451] font-semibold mb-2">
                Color Palette
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {dress.colorPalette.map((col, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-1.5 pr-3 rounded-full bg-[#FAF5EE] border border-[#E5D8CA]">
                    <span
                      className="w-4 h-4 rounded-full border border-[#CDBDAE] shadow-2xs"
                      style={{ backgroundColor: col.hex }}
                    />
                    <span className="text-[11px] text-[#554032] font-medium">
                      {col.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Commercial Inquiry Guidance (Strictly no cart or prices) */}
            <div className="pt-3 border-t border-[#EDE1D3] flex items-center justify-between text-xs text-[#7B6654]">
              <span className="font-cormorant italic text-sm">
                Bespoke fittings available by appointment through our boutique atelier
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#38251A] text-[#FAF6F0] text-[11px] uppercase tracking-[0.2em] hover:bg-[#523A2B] transition-colors"
              >
                Back to Catalog
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
