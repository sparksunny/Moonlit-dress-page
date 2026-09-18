import React from 'react';
import { Heart, ShoppingBag, Truck, Sliders } from 'lucide-react';
import { DelicateHeart } from './FloralDecor';
import { SiteContent } from '../types';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  contactContent?: SiteContent['contact'];
  brandTitle?: string;
  slogan?: string;
  onAdminClick?: () => void;
  isAdmin?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  contactContent,
  brandTitle = 'Moonlit Closet',
  slogan = 'Elegance and Style',
  onAdminClick,
  isAdmin = false,
}) => {
  const email = contactContent?.email || 'hello@moonlitcloset.com';
  const phone = contactContent?.phone || '+92 300 1234567';
  const address = contactContent?.address || 'Gulberg III, Lahore / Clifton, Karachi';
  const hours = contactContent?.hours || 'Mon – Sat: 11:00 AM – 8:00 PM (By Appointment)';
  const brandStatement = contactContent?.brandStatement || 'Celebrating timeless fashion, graceful details, and unforgettable moments.';
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Bridal Dresses', id: 'bridal' },
    { label: 'Party Wear', id: 'party-wear' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer
      id="contact"
      className="bg-[#2A1B12] text-[#EFE4D6] relative overflow-hidden border-t border-[#443023]"
    >
      {/* Reference-Style Upper Highlight Banner Bar */}
      <div className="bg-[#372418] border-b border-[#4A3425] py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs uppercase tracking-[0.2em] text-[#D8C7B4]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#C5A880]" />
            <span>Trending Catalog Picks</span>
          </div>
          <div className="hidden sm:block text-[#6A5140]">•</div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#C5A880]" />
            <span>Atelier Delivery Nationwide</span>
          </div>
          <div className="hidden sm:block text-[#6A5140]">•</div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#C5A880]" />
            <span>Made with Love &amp; Artistry</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand Presentation & Statement (Cols 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-[#FAF5ED] uppercase">
                {brandTitle}
              </span>
              <DelicateHeart className="w-4 h-4 text-[#C5A880]" />
            </div>

            <p className="font-cormorant italic text-base text-[#D4C1AE] tracking-widest">
              “{slogan}”
            </p>

            <p className="text-sm text-[#C4B29E] leading-relaxed max-w-md pt-1 font-light">
              {brandStatement}
            </p>
          </div>

          {/* Catalog Navigation Links (Cols 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <span className="block text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold border-b border-[#432F23] pb-2">
              Catalog Navigation
            </span>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="text-xs uppercase tracking-[0.2em] text-[#C4B29E] hover:text-[#FAF5ED] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-[#846F5F] text-[10px]">✧</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Simple Contact Information Area (Cols 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <span className="block text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold border-b border-[#432F23] pb-2">
              Bespoke Contact &amp; Atelier
            </span>
            
            <div className="space-y-3.5 text-xs text-[#C4B29E]">
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#98816E] mb-0.5">Email Catalog Inquiries</span>
                <a
                  href={`mailto:${email}`}
                  className="text-[#EFE4D6] hover:text-[#FAF5ED] transition-colors underline-offset-4 hover:underline"
                >
                  {email}
                </a>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#98816E] mb-0.5">Concierge Assistance</span>
                <span className="text-[#EFE4D6] tracking-wide select-all">
                  {phone}
                </span>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#98816E] mb-0.5">Atelier Studio</span>
                <span className="text-[#EFE4D6]">{address}</span>
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#98816E] mb-0.5">Viewing Hours</span>
                <span className="text-[#EFE4D6]">{hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Decorative Divider */}
        <div className="mt-12 pt-8 border-t border-[#3D2C20]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8876]">
            <p className="text-center sm:text-left">
              © 2026 {brandTitle}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="font-cormorant italic text-sm text-[#BBA692]">
                Single-Page Catalog &amp; Couture Showcase
              </p>
              {onAdminClick && (
                <button
                  id="footer-admin-btn"
                  type="button"
                  onClick={onAdminClick}
                  className="inline-flex items-center gap-1 text-[11px] text-[#A68F7B] hover:text-[#EAE0D4] underline-offset-2 hover:underline transition-colors"
                >
                  <Sliders className="w-3 h-3 text-[#C5A880]" />
                  <span>{isAdmin ? 'Admin Panel (Active)' : 'Admin Login'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
