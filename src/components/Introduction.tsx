import React from 'react';
import { ArrowDownRight, Sparkles, Download } from 'lucide-react';
import { BotanicalBranch, DelicateHeart, OrnamentalDivider } from './FloralDecor';
import introHeroImg from '../assets/images/intro_bridal_hero_1789309137107.jpg';

interface IntroductionProps {
  onExploreClick: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-b from-[#FAF7F0] via-[#FAF5EC] to-[#FAF7F0]"
    >
      {/* Subtle ambient decorative backdrop elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#EFE6DA]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Marker */}
        <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[#E8DDD0]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#7B6654] font-medium">
            <span>Moonlit Editorial</span>
            <span className="text-[#C5A880]">✦</span>
            <span>Vol. 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-cormorant italic text-sm text-[#87715E]">
            <span>Refined South Asian Couture</span>
            <DelicateHeart className="w-3.5 h-3.5 text-[#C5A880]" />
          </div>
        </div>

        {/* Anchor point for #about */}
        <div id="about" className="scroll-mt-24 pt-8 sm:pt-12">
          {/* Main 2-Column Editorial Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Column 1: Editorial Text Presentation (Cols 1-6) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 sm:space-y-7">
              
              {/* Reference-inspired header accent */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6DA]/70 border border-[#E3D6C6]">
                <BotanicalBranch className="w-4 h-4 text-[#A88864]" />
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#5F4B3C] font-semibold">
                  Atelier Showcase
                </span>
                <span className="text-[#A88864]">♡</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <span className="block font-cormorant italic text-lg sm:text-xl text-[#826C58] tracking-wider">
                  The Art of Draping
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] text-[#2C1D14] leading-[1.18] font-normal tracking-tight">
                  Elegance for Every Occasion
                </h1>
              </div>

              {/* Decorative divider line */}
              <div className="w-24 h-[1.5px] bg-[#C5A880]" />

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#513F32] font-light leading-relaxed">
                Discover thoughtfully curated bridal and party wear designed to celebrate your most
                beautiful moments with timeless elegance, graceful details, and effortless style.
              </p>

              {/* Short Brand Statement */}
              <div className="relative pl-5 py-2 border-l-2 border-[#D3BEA7] bg-[#FAF6F0]/60 rounded-r-lg">
                <p className="text-sm sm:text-base text-[#47362B] leading-relaxed italic font-cormorant">
                  “Moonlit Closet brings together sophisticated silhouettes, delicate craftsmanship,
                  luxurious fabrics, and refined embellishments for women who appreciate timeless
                  fashion.”
                </p>
              </div>

              {/* Reference-Inspired Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E7DCCE] text-[#4F3C2F]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span className="text-xs tracking-wider uppercase font-medium">Fine Embroidery</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E7DCCE] text-[#4F3C2F]">
                  <span className="text-xs text-[#C5A880]">❦</span>
                  <span className="text-xs tracking-wider uppercase font-medium">Pure Fabrics</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF5EE] border border-[#E7DCCE] text-[#4F3C2F] col-span-2 sm:col-span-1">
                  <span className="text-xs text-[#C5A880]">♡</span>
                  <span className="text-xs tracking-wider uppercase font-medium">Bespoke Fit</span>
                </div>
              </div>

              {/* Tasteful Actions: Explore Collection & Download HTML for PC */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  id="explore-collection-btn"
                  type="button"
                  onClick={onExploreClick}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#322016] text-[#FAF6F0] text-xs uppercase tracking-[0.24em] font-medium transition-all duration-300 hover:bg-[#483324] hover:shadow-md hover:gap-4 focus:outline-hidden"
                >
                  <span>Explore Collection</span>
                  <ArrowDownRight className="w-4 h-4 text-[#DFD1BF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </button>

                <a
                  id="intro-download-html-btn"
                  href="/moonlit-closet.html"
                  download="moonlit-closet.html"
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#EFE6DA] hover:bg-[#E5D7C7] text-[#342217] text-xs uppercase tracking-[0.2em] font-semibold border border-[#DECBB8] transition-all hover:shadow-xs focus:outline-hidden"
                  title="Download standalone HTML file to run offline on your PC"
                >
                  <Download className="w-4 h-4 text-[#8C6D4F] transition-transform group-hover:translate-y-0.5" />
                  <span>Download HTML</span>
                </a>
              </div>
            </div>

            {/* Column 2: Large Fashion Image Layout (Cols 7-12) */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              {/* Outer decorative card frame with subtle shadows & warm border */}
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-3 sm:p-4 bg-[#FAF7F2] border border-[#E7DDD0] shadow-sm">
                
                {/* Reference inspired top label */}
                <div className="flex items-center justify-between px-3 py-2 text-xs text-[#7D6855] border-b border-[#EDE3D6] mb-3">
                  <span className="font-serif tracking-widest uppercase">Moonlit Atelier</span>
                  <span className="font-script text-base text-[#5D4737]">Bride to Be ♡</span>
                </div>

                {/* Primary Image Container with elegant 3:4 aspect ratio */}
                <div className="relative overflow-hidden rounded-xl bg-[#EFE9DF] aspect-[3/4] group">
                  <img
                    src={introHeroImg}
                    alt="Moonlit Closet South Asian Bridal Haute Couture Dress"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  />
                  {/* Soft subtle gradient overlay at bottom for luxury contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#271910]/40 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Reference-inspired overlay pill badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E8DEC8]">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A6655] font-semibold">
                        Signature Bridal Couture
                      </span>
                      <span className="font-serif text-sm text-[#2C1D14] font-medium">
                        Heavily Embellished Ivory Peshwas
                      </span>
                    </div>
                    <span className="text-xs text-[#C5A880]">✧</span>
                  </div>
                </div>

                {/* Reference-inspired bottom detail bar */}
                <div className="mt-3 pt-2.5 flex items-center justify-around text-[11px] text-[#796452] uppercase tracking-[0.16em]">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#C5A880]">✦</span>
                    Hand Embroidered
                  </span>
                  <span className="text-[#D3C4B3]">•</span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#C5A880]">✦</span>
                    Pure Organza & Silk
                  </span>
                </div>
              </div>

              {/* Decorative side botanical line-art */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 text-[#C9AF8B] opacity-70 pointer-events-none">
                <BotanicalBranch className="w-20 h-20 rotate-45" />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section Ornamental Divider */}
        <div className="mt-14 sm:mt-20">
          <OrnamentalDivider label="Moonlit Collections" />
        </div>
      </div>
    </section>
  );
};
