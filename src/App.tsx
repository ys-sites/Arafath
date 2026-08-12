import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBanner } from './components/StatsBanner';
import { AboutSection } from './components/AboutSection';
import { AwardsSection } from './components/AwardsSection';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { BookingSection } from './components/BookingSection';
import { SEOSchemaModal } from './components/SEOSchemaModal';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isSEOModalOpen, setIsSEOModalOpen] = useState(false);
  const [prefilledMenuTitle, setPrefilledMenuTitle] = useState('');
  const [prefilledMenuSummary, setPrefilledMenuSummary] = useState('');

  const handleScrollToBooking = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectDishForBooking = (dishTitle: string) => {
    setPrefilledMenuTitle(dishTitle);
    setPrefilledMenuSummary(`Requested Dish Feature: ${dishTitle}`);
    handleScrollToBooking();
  };

  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Chef Yaseer! I would like to inquire about culinary collaboration."
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1817] font-sans selection:bg-[#1A1817] selection:text-white relative">
      {/* Top Fixed Header */}
      <Navbar
        onGoHome={handleGoHome}
        onOpenBooking={handleScrollToBooking}
        onOpenSEOModal={() => setIsSEOModalOpen(true)}
      />

      {/* Main Single-Page Portfolio */}
      <main>
        <HeroSection
          onOpenBooking={handleScrollToBooking}
          onOpenPortfolioSubPage={handleScrollToAbout}
        />

        <StatsBanner />

        <AboutSection
          onOpenBooking={handleScrollToBooking}
        />

        <AwardsSection />

        <GallerySection
          onSelectDishForBooking={handleSelectDishForBooking}
        />

        <InstagramSection />

        <BookingSection
          prefilledMenuTitle={prefilledMenuTitle}
          prefilledMenuSummary={prefilledMenuSummary}
        />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        {/* WhatsApp Direct Inquiry Button */}
        <a
          href={`https://api.whatsapp.com/send/?phone=971503023056&text=${whatsappMessage}&type=phone_number&app_absent=0`}
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
      <SEOSchemaModal
        isOpen={isSEOModalOpen}
        onClose={() => setIsSEOModalOpen(false)}
      />
    </div>
  );
}
