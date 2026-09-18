import React from 'react';
import { DressDetail } from '../types';
import { DressCard } from './DressCard';
import { BotanicalBranch, OrnamentalDivider } from './FloralDecor';

interface PartyWearSectionProps {
  dresses: DressDetail[];
  onViewDetails: (dress: DressDetail) => void;
  isAdmin?: boolean;
  onEditDress?: (dress: DressDetail) => void;
  title?: string;
  subtitle?: string;
  badge?: string;
  subtitleTag?: string;
}

export const PartyWearSection: React.FC<PartyWearSectionProps> = ({
  dresses,
  onViewDetails,
  isAdmin = false,
  onEditDress,
  title = 'Party Wear',
  subtitle = 'Graceful looks designed to make every celebration memorable.',
  badge = 'Evening & Festive Formal',
  subtitleTag = 'Modern Silhouettes',
}) => {
  return (
    <section
      id="party-wear"
      className="scroll-mt-24 py-16 sm:py-24 bg-[#FAF7F0] relative overflow-hidden border-t border-[#EAE0D4]"
    >
      {/* Decorative ambient lighting elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#EBE0D4]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D4]/80 border border-[#DDD0C0]">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#654E3C] font-semibold">
              {badge}
            </span>
            <span className="text-[#C5A880]">✦</span>
            <span className="font-cormorant italic text-xs text-[#7B6451]">{subtitleTag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1D13] font-normal tracking-tight">
            {title}
          </h2>

          <p className="font-cormorant italic text-lg sm:text-xl text-[#755F4C]">
            {subtitle}
          </p>

          <div className="pt-2">
            <OrnamentalDivider />
          </div>
        </div>

        {/* Catalog Grid: Party Wear Cards */}
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

        {/* Editorial Footnote for Party Wear */}
        <div className="mt-14 pt-8 border-t border-[#E8DDCF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6655]">
          <div className="flex items-center gap-2">
            <BotanicalBranch className="w-5 h-5 text-[#C5A880]" />
            <span className="font-cormorant italic text-sm">
              Contemporary cuts paired with timeless South Asian craftsmanship
            </span>
          </div>
          <span className="uppercase tracking-[0.18em]">
            Festive Season Catalog • Sangeet, Dinners & Receptions
          </span>
        </div>
      </div>
    </section>
  );
};
