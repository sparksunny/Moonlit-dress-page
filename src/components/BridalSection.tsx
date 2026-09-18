import React from 'react';
import { DressDetail } from '../types';
import { DressCard } from './DressCard';
import { BotanicalBranch, OrnamentalDivider } from './FloralDecor';

interface BridalSectionProps {
  dresses: DressDetail[];
  onViewDetails: (dress: DressDetail) => void;
  isAdmin?: boolean;
  onEditDress?: (dress: DressDetail) => void;
  title?: string;
  subtitle?: string;
  badge?: string;
  subtitleTag?: string;
}

export const BridalSection: React.FC<BridalSectionProps> = ({
  dresses,
  onViewDetails,
  isAdmin = false,
  onEditDress,
  title = 'Bridal Dresses',
  subtitle = 'Timeless beauty for your most unforgettable moments.',
  badge = 'The Bridal Edit',
  subtitleTag = 'Haute Couture',
}) => {
  return (
    <section
      id="bridal"
      className="scroll-mt-24 py-16 sm:py-24 bg-[#FAF7F0] relative overflow-hidden"
    >
      {/* Background delicate floral accents */}
      <div className="absolute top-12 -left-10 text-[#CDB9A4] opacity-30 pointer-events-none">
        <BotanicalBranch className="w-40 h-40 rotate-12" />
      </div>
      <div className="absolute bottom-12 -right-10 text-[#CDB9A4] opacity-30 pointer-events-none">
        <BotanicalBranch className="w-40 h-40 -rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFE6DA]/80 border border-[#E3D6C5]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#695342] font-semibold">
              {badge}
            </span>
            <span className="text-[#C5A880]">✦</span>
            <span className="font-cormorant italic text-xs text-[#7B6451]">{subtitleTag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2F1E14] font-normal tracking-tight">
            {title}
          </h2>

          <p className="font-cormorant italic text-lg sm:text-xl text-[#78614E]">
            {subtitle}
          </p>

          <div className="pt-2">
            <OrnamentalDivider />
          </div>
        </div>

        {/* Catalog Grid: Bridal Dress Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {dresses.map((dress) => (
            <DressCard
              key={dress.id}
              dress={dress}
              onViewDetails={onViewDetails}
              isAdmin={isAdmin}
              onEdit={onEditDress}
            />
          ))}
        </div>

        {/* Editorial Footnote for Bridal */}
        <div className="mt-14 pt-8 border-t border-[#EAE0D4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B6756]">
          <span className="font-cormorant italic text-sm">
            Handcrafted with over 200+ artisanal hours per bridal piece
          </span>
          <span className="uppercase tracking-[0.18em]">
            Catalog Edition 2026 • Bespoke Silhouettes
          </span>
        </div>
      </div>
    </section>
  );
};
