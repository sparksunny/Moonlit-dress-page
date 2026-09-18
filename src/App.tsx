import React, { useState, useEffect } from 'react';
import { DressDetail, SiteContent } from './types';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { BridalSection } from './components/BridalSection';
import { PartyWearSection } from './components/PartyWearSection';
import { Footer } from './components/Footer';
import { DressDetailModal } from './components/DressDetailModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminControlPanelModal } from './components/AdminControlPanelModal';
import {
  getAdminAuthState,
  setAdminAuthState,
  loadBridalDresses,
  loadPartyDresses,
  loadSiteContent,
  saveDresses,
  saveSiteContent,
  resetToDefaults,
} from './utils/storage';
import { Sliders, Check, LogOut } from 'lucide-react';

export default function App() {
  const [selectedDress, setSelectedDress] = useState<DressDetail | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Dynamic Dresses & Content loaded from storage / defaults
  const [bridalDresses, setBridalDresses] = useState<DressDetail[]>(() => loadBridalDresses());
  const [partyDresses, setPartyDresses] = useState<DressDetail[]>(() => loadPartyDresses());
  const [siteContent, setSiteContent] = useState<SiteContent>(() => loadSiteContent());

  // Admin States
  const [isAdmin, setIsAdmin] = useState<boolean>(() => getAdminAuthState());
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [adminInitialEditDress, setAdminInitialEditDress] = useState<DressDetail | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll spy to update active section in header
  useEffect(() => {
    const sectionIds = ['home', 'about', 'bridal', 'party-wear', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Admin Click Handler
  const handleAdminClick = () => {
    if (isAdmin) {
      setAdminInitialEditDress(null);
      setIsAdminPanelOpen(true);
    } else {
      setIsAdminLoginOpen(true);
    }
  };

  // On Login Success (Password: taq@123)
  const handleLoginSuccess = () => {
    setIsAdmin(true);
    setAdminAuthState(true);
    setIsAdminLoginOpen(false);
    setIsAdminPanelOpen(true);
  };

  // On Logout
  const handleLogout = () => {
    setIsAdmin(false);
    setAdminAuthState(false);
    setIsAdminPanelOpen(false);
  };

  // Save Dresses Handler
  const handleSaveDresses = (newBridal: DressDetail[], newParty: DressDetail[]) => {
    setBridalDresses(newBridal);
    setPartyDresses(newParty);
    saveDresses(newBridal, newParty);
  };

  // Save Site Content Handler
  const handleSaveSiteContent = (newContent: SiteContent) => {
    setSiteContent(newContent);
    saveSiteContent(newContent);
  };

  // Reset To Defaults Handler
  const handleResetToDefaults = () => {
    const defaults = resetToDefaults();
    setBridalDresses(defaults.bridal);
    setPartyDresses(defaults.party);
    setSiteContent(defaults.content);
  };

  // Quick edit from card directly
  const handleEditDressFromCard = (dress: DressDetail) => {
    setAdminInitialEditDress(dress);
    setIsAdminPanelOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#342318] selection:bg-[#E5D7C7] selection:text-[#2D1D14] relative">
      {/* 1. HEADER */}
      <Header
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onAdminClick={handleAdminClick}
        isAdmin={isAdmin}
        brandTitle={siteContent.brandTitle}
        slogan={siteContent.slogan}
      />

      {/* Main Content containing Introduction, Bridal, and Party Wear */}
      <main className="flex-grow">
        {/* 2. INTRODUCTION */}
        <Introduction
          onExploreClick={() => handleNavigate('bridal')}
          introContent={siteContent.intro}
          brandTitle={siteContent.brandTitle}
        />

        {/* 3. BRIDAL DRESSES */}
        <BridalSection
          dresses={bridalDresses}
          onViewDetails={(dress) => setSelectedDress(dress)}
          isAdmin={isAdmin}
          onEditDress={handleEditDressFromCard}
          title={siteContent.bridal.title}
          subtitle={siteContent.bridal.subtitle}
          badge={siteContent.bridal.badge}
          subtitleTag={siteContent.bridal.subtitleTag}
        />

        {/* 4. PARTY WEAR */}
        <PartyWearSection
          dresses={partyDresses}
          onViewDetails={(dress) => setSelectedDress(dress)}
          isAdmin={isAdmin}
          onEditDress={handleEditDressFromCard}
          title={siteContent.partyWear.title}
          subtitle={siteContent.partyWear.subtitle}
          badge={siteContent.partyWear.badge}
          subtitleTag={siteContent.partyWear.subtitleTag}
        />
      </main>

      {/* 5. FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        contactContent={siteContent.contact}
        brandTitle={siteContent.brandTitle}
        slogan={siteContent.slogan}
        onAdminClick={handleAdminClick}
        isAdmin={isAdmin}
      />

      {/* Customer Dress Details Inspection Modal */}
      <DressDetailModal
        dress={selectedDress}
        onClose={() => setSelectedDress(null)}
      />

      {/* Admin Password Login Modal (password: taq@123) */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onSuccess={handleLoginSuccess}
      />

      {/* Admin Full Control Panel Modal */}
      <AdminControlPanelModal
        isOpen={isAdminPanelOpen}
        onClose={() => {
          setIsAdminPanelOpen(false);
          setAdminInitialEditDress(null);
        }}
        onLogout={handleLogout}
        bridalDresses={bridalDresses}
        partyDresses={partyDresses}
        siteContent={siteContent}
        onSaveDresses={handleSaveDresses}
        onSaveSiteContent={handleSaveSiteContent}
        onResetToDefaults={handleResetToDefaults}
        initialEditDress={adminInitialEditDress}
      />

      {/* Floating Admin Mode Indicator when logged in */}
      {isAdmin && (
        <aside
          aria-label="Admin Status"
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 pl-3.5 pr-2 py-2 rounded-full bg-[#322016]/95 text-[#FAF7F0] border border-[#D5B895] shadow-xl backdrop-blur-xs animate-in fade-in"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse" />
            <span className="text-[11px] uppercase tracking-wider font-medium text-[#FAF7F0]">
              Admin Active
            </span>
          </div>
          <button
            onClick={() => {
              setAdminInitialEditDress(null);
              setIsAdminPanelOpen(true);
            }}
            className="px-3 py-1 rounded-full bg-[#D5B895] hover:bg-[#C9A983] text-[#24160E] text-[10px] uppercase tracking-wider font-bold transition-all shadow-xs active:scale-95"
          >
            Control Panel
          </button>
          <button
            onClick={handleLogout}
            title="Log out of Admin mode"
            className="p-1 rounded-full text-[#DEC8B2] hover:text-[#FAF7F0] hover:bg-[#483324] transition-colors ml-0.5"
            aria-label="Log Out of Admin"
          >
            <LogOut className="w-3.5 h-3.5 text-[#E5A99B]" />
          </button>
        </aside>
      )}
    </div>
  );
}
