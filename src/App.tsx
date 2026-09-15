import React, { useState, useEffect } from 'react';
import { DressDetail } from './types';
import { BRIDAL_DRESSES, PARTY_WEAR } from './data/catalog';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { BridalSection } from './components/BridalSection';
import { PartyWearSection } from './components/PartyWearSection';
import { Footer } from './components/Footer';
import { DressDetailModal } from './components/DressDetailModal';

export default function App() {
  const [selectedDress, setSelectedDress] = useState<DressDetail | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

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

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F0] text-[#342318] selection:bg-[#E5D7C7] selection:text-[#2D1D14]">
      {/* 1. HEADER */}
      <Header
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content containing Introduction, Bridal, and Party Wear */}
      <main className="flex-grow">
        {/* 2. INTRODUCTION */}
        <Introduction
          onExploreClick={() => handleNavigate('bridal')}
        />

        {/* 3. BRIDAL DRESSES */}
        <BridalSection
          dresses={BRIDAL_DRESSES}
          onViewDetails={(dress) => setSelectedDress(dress)}
        />

        {/* 4. PARTY WEAR */}
        <PartyWearSection
          dresses={PARTY_WEAR}
          onViewDetails={(dress) => setSelectedDress(dress)}
        />
      </main>

      {/* 5. FOOTER */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Visual Detail Showcase Modal (Catalog Only - Strictly No Purchasing) */}
      <DressDetailModal
        dress={selectedDress}
        onClose={() => setSelectedDress(null)}
      />
    </div>
  );
}
