import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { GallerySection } from './components/GallerySection';
import { ServicesSection } from './components/ServicesSection';
import { InstagramSection } from './components/InstagramSection';
import { BookingSection } from './components/BookingSection';
import { PortfolioSubPage } from './components/PortfolioSubPage';
import { AIMenuCuratorModal } from './components/AIMenuCuratorModal';
import { SEOSchemaModal } from './components/SEOSchemaModal';
import { Footer } from './components/Footer';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');
  const [isAIMenuOpen, setIsAIMenuOpen] = useState(false);
  const [isSEOModalOpen, setIsSEOModalOpen] = useState(false);
  const [prefilledMenuTitle, setPrefilledMenuTitle] = useState('');
  const [prefilledMenuSummary, setPrefilledMenuSummary] = useState('');

  const handleScrollToBooking = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById('contact');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDishForBooking = (dishTitle: string) => {
    setPrefilledMenuTitle(dishTitle);
    setPrefilledMenuSummary(`Requested Dish Feature: ${dishTitle}`);
    handleScrollToBooking();
  };

  const handleAttachMenuToBooking = (menuTitle: string, menuSummary: string) => {
    setPrefilledMenuTitle(menuTitle);
    setPrefilledMenuSummary(menuSummary);
    handleScrollToBooking();
  };

  const handleGoHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPortfolioSubPage = () => {
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Chef Yaseer! I would like to inquire about private catering / culinary collaboration."
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1817] font-sans selection:bg-[#1A1817] selection:text-white relative">
      {/* Top Fixed Header */}
      <Navbar
        currentView={currentView}
        onGoHome={handleGoHome}
        onOpenPortfolioSubPage={handleOpenPortfolioSubPage}
        onOpenBooking={handleScrollToBooking}
        onOpenAIMenu={() => setIsAIMenuOpen(true)}
        onOpenSEOModal={() => setIsSEOModalOpen(true)}
      />

      {/* Dynamic View Switcher */}
      {currentView === 'home' ? (
        <main>
          <HeroSection
            onOpenBooking={handleScrollToBooking}
            onOpenAIMenu={() => setIsAIMenuOpen(true)}
            onOpenPortfolioSubPage={handleOpenPortfolioSubPage}
          />

          <StatsBanner />

          <GallerySection
            onSelectDishForBooking={handleSelectDishForBooking}
          />

          <ServicesSection
            onOpenBooking={handleScrollToBooking}
            onOpenAIMenu={() => setIsAIMenuOpen(true)}
          />

          <InstagramSection />

          <BookingSection
            prefilledMenuTitle={prefilledMenuTitle}
            prefilledMenuSummary={prefilledMenuSummary}
          />
        </main>
      ) : (
        <main>
          <PortfolioSubPage
            onBackToHome={handleGoHome}
            onOpenBooking={handleScrollToBooking}
            onOpenAIMenu={() => setIsAIMenuOpen(true)}
            onSelectDishForBooking={handleSelectDishForBooking}
          />
        </main>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* Quick Menu AI Floating Trigger */}
        <button
          onClick={() => setIsAIMenuOpen(true)}
          className="group flex items-center gap-2 bg-white/95 backdrop-blur-md border border-[#B88E28]/40 hover:border-[#B88E28] text-[#1A1817] px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          title="Bespoke Menu Consultation"
        >
          <Sparkles className="w-4 h-4 text-[#B88E28] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Menu Concierge</span>
        </button>

        {/* WhatsApp Direct Inquiry Button */}
        <a
          href={`https://wa.me/971501234567?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white w-12 h-12 rounded-full shadow-2xl shadow-[#25D366]/20 transition-all duration-300 hover:scale-110"
          title="Direct WhatsApp Inquiry"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
        </a>
      </div>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <AIMenuCuratorModal
        isOpen={isAIMenuOpen}
        onClose={() => setIsAIMenuOpen(false)}
        onAttachMenuToBooking={handleAttachMenuToBooking}
      />

      <SEOSchemaModal
        isOpen={isSEOModalOpen}
        onClose={() => setIsSEOModalOpen(false)}
      />
    </div>
  );
}



