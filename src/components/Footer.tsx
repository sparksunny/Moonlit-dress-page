import React, { useState } from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock, Heart, ShoppingBag, Truck, Sliders, Key } from 'lucide-react';
import { BotanicalBranch, DelicateHeart, OrnamentalDivider } from './FloralDecor';
import { SiteContent } from '../types';

// Pinterest custom icon using clean SVG matching Lucide stroke style
const PinterestIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.365-.053.225-.172.271-.401.165-1.495-.695-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.391 2.967 7.391 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.541.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
  </svg>
);

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

            {/* Social Media Icons (Instagram, Facebook, Pinterest, WhatsApp) */}
            <div className="pt-3">
              <span className="block text-[11px] uppercase tracking-[0.2em] text-[#9D8775] mb-3 font-medium">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-[#3B291D] hover:bg-[#523A2B] border border-[#523B2C] text-[#EFE4D6] hover:text-[#FFFFFF] flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-[#3B291D] hover:bg-[#523A2B] border border-[#523B2C] text-[#EFE4D6] hover:text-[#FFFFFF] flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="w-10 h-10 rounded-full bg-[#3B291D] hover:bg-[#523A2B] border border-[#523B2C] text-[#EFE4D6] hover:text-[#FFFFFF] flex items-center justify-center transition-colors"
                >
                  <PinterestIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#3B291D] hover:bg-[#523A2B] border border-[#523B2C] text-[#EFE4D6] hover:text-[#FFFFFF] flex items-center justify-center transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
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
            
            <div className="space-y-3 text-xs text-[#C4B29E]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#98816E]">Email Catalog Inquiries</span>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-[#FAF5ED] transition-colors underline-offset-4 hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#98816E]">WhatsApp Concierge</span>
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#FAF5ED] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#98816E]">Atelier Studio</span>
                  <span>{address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#98816E]">Viewing Hours</span>
                  <span>{hours}</span>
                </div>
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
