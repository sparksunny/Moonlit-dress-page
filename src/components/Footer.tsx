import React from 'react';
import { Mail, MessageCircle, MapPin, Clock, Sparkles, Sliders } from 'lucide-react';
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
  brandTitle = 'MOONLIT CLOSET',
  slogan = '• Crafted for moments that become memories.',
  onAdminClick,
  isAdmin = false,
}) => {
  const email = contactContent?.email || 'moonlitgemjewels@gmail.com';
  const whatsapp = contactContent?.phone || '+1 716-313-1615';
  const location = contactContent?.address || 'Houston / Florida USA';
  const workingHours = contactContent?.hours || '10:00 AM – 8:00 PM';

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Bridal Dresses', id: 'bridal' },
    { label: 'Party Wear', id: 'party-wear' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  // WhatsApp link (wa.me) for instant chat without direct telephone dialing
  const whatsappDigits = whatsapp.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${whatsappDigits}`;

  return (
    <footer
      id="contact"
      className="bg-[#770000] text-white relative overflow-hidden border-t-2 border-[#5e0000]"
    >
      {/* Subtle ambient lighting for luxury depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand Presentation & Subheading (Cols 1-6) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] text-white uppercase font-medium">
                {brandTitle}
              </h2>
              <Sparkles className="w-5 h-5 text-white/80 shrink-0" />
            </div>

            <p className="font-cormorant italic text-base sm:text-lg text-white/90 tracking-wide font-light">
              {slogan}
            </p>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md pt-2">
              Discover timeless South Asian haute couture, heirloom bridal lehengas, and refined luxury party wear meticulously tailored for unforgettable celebrations.
            </p>

            {/* Quick Navigation Links */}
            <div className="pt-4">
              <span className="block text-[11px] uppercase tracking-[0.22em] text-white/70 font-semibold mb-3">
                Quick Navigation
              </span>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className="text-xs uppercase tracking-[0.18em] text-white/85 hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details with Proper Icons (Cols 7-12) */}
          <div className="md:col-span-6 lg:col-span-5 lg:col-start-8 space-y-5">
            <h3 className="text-xs uppercase tracking-[0.25em] text-white/90 font-semibold border-b border-white/20 pb-2.5">
              Contact &amp; Atelier Inquiries
            </h3>

            <div className="space-y-4 text-sm">
              {/* Email */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/70 font-medium">
                    Email
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-white hover:text-white/90 font-medium underline underline-offset-4 transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* WhatsApp (No direct dialing; opens WhatsApp messaging chat) */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/70 font-medium">
                    WhatsApp
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/90 font-medium tracking-wide underline underline-offset-4 transition-colors"
                    title="Open WhatsApp chat"
                  >
                    {whatsapp}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/70 font-medium">
                    Location
                  </span>
                  <span className="text-white font-medium">
                    {location}
                  </span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-white/70 font-medium">
                    Working Hours
                  </span>
                  <span className="text-white font-medium">
                    {workingHours}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Admin Portal */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
          <p className="text-center sm:text-left font-light tracking-wider">
            © {new Date().getFullYear()} {brandTitle}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-white/50">•</span>
            {onAdminClick && (
              <button
                id="footer-admin-btn"
                type="button"
                onClick={onAdminClick}
                className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white underline-offset-2 hover:underline transition-colors focus:outline-hidden"
              >
                <Sliders className="w-3.5 h-3.5 text-white/80" />
                <span>{isAdmin ? 'Admin Dashboard (Active)' : 'Admin Access'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
