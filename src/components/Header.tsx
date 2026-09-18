import React, { useState, useEffect } from 'react';
import { Menu, X, Key, Sliders } from 'lucide-react';
import { BotanicalBranch, DelicateHeart } from './FloralDecor';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onAdminClick: () => void;
  isAdmin: boolean;
  brandTitle?: string;
  slogan?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  activeSection,
  onAdminClick,
  isAdmin,
  brandTitle = 'Moonlit Closet',
  slogan = 'Elegance and Style',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Bridal Dresses', id: 'bridal' },
    { label: 'Party Wear', id: 'party-wear' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md shadow-xs border-[#E8DDD1]'
          : 'bg-[#FAF7F0] border-[#EFE6DC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand Logo & Slogan */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            id="header-brand-link"
            className="group flex flex-col items-start text-left focus:outline-hidden"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] text-[#342217] uppercase font-medium">
                {brandTitle}
              </span>
              <DelicateHeart className="w-3.5 h-3.5 text-[#C5A880] transition-transform duration-300 group-hover:scale-125" />
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-[1px] w-4 bg-[#D8C7B4]" />
              <span className="font-cormorant italic text-xs sm:text-sm tracking-[0.25em] text-[#7C6654]">
                {slogan}
              </span>
            </div>
          </a>

          {/* Desktop Navigation (Home, About, Bridal Dresses, Party Wear, Contact) */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-7 lg:space-x-9"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#2D1D14] font-semibold'
                      : 'text-[#675446] hover:text-[#2D1D14]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A880] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Side: Admin Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Admin Control Panel Button */}
            <button
              id="header-admin-btn"
              type="button"
              onClick={onAdminClick}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.16em] font-semibold shadow-2xs transition-all hover:scale-102 ${
                isAdmin
                  ? 'bg-[#322016] text-[#D5B895] border border-[#D5B895]/60 hover:bg-[#483324]'
                  : 'bg-[#F2ECE4] hover:bg-[#EAE0D3] text-[#553E2F] border border-[#DFCDBB]'
              }`}
              title={isAdmin ? 'Open Admin Control Panel (Active)' : 'Log in to Admin Panel (Password: taq@123)'}
            >
              {isAdmin ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse" />
                  <Sliders className="w-3.5 h-3.5 text-[#D5B895]" />
                  <span>Admin Panel</span>
                </>
              ) : (
                <>
                  <Key className="w-3.5 h-3.5 text-[#866649]" />
                  <span>Admin</span>
                </>
              )}
            </button>

            <div className="text-[#B89B7A] opacity-60 ml-1">
              <BotanicalBranch className="w-7 h-7 rotate-12" />
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Admin Quick Button */}
            <button
              type="button"
              onClick={onAdminClick}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold border ${
                isAdmin
                  ? 'bg-[#322016] text-[#D5B895] border-[#D5B895]'
                  : 'bg-[#F2ECE4] text-[#553E2F] border-[#DFCDBB]'
              }`}
            >
              <Key className="w-3 h-3 text-[#C5A880]" />
              <span>{isAdmin ? 'Admin' : 'Login'}</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#342217] hover:bg-[#F2EAE0] transition-colors focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#FAF6F0] border-b border-[#E8DDD1] px-5 pt-3 pb-6 space-y-3 shadow-lg"
        >
          <div className="flex items-center justify-between border-b border-[#EFE5DA] pb-2 mb-2">
            <span className="font-cormorant italic text-xs text-[#8A725E] tracking-[0.2em]">
              Collection Navigation
            </span>
            <BotanicalBranch className="w-5 h-5 text-[#C5A880]" />
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`block px-3 py-2 text-sm uppercase tracking-[0.18em] rounded-md transition-colors ${
                  isActive
                    ? 'bg-[#EFE6DA] text-[#2D1D14] font-medium'
                    : 'text-[#5E4B3E] hover:bg-[#F4ECE2] hover:text-[#2D1D14]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#EAE0D3]">
            {/* Mobile Drawer Admin Button */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onAdminClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-[#342217] text-[#FAF7F0] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#4D3525] transition-colors"
            >
              <Sliders className="w-4 h-4 text-[#D5B895]" />
              <span>{isAdmin ? 'Admin Control Panel (Open)' : 'Admin Control Panel (Login)'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
