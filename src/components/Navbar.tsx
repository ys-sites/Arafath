import React, { useState, useEffect } from 'react';
import { ChefHat, Calendar, Sparkles, Menu, X, Instagram, Trophy } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAIMenu: () => void;
  onOpenSEOModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAIMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#EAE4D7] py-3.5 shadow-sm'
          : 'bg-[#FAF8F5]/80 backdrop-blur-md border-b border-[#EAE4D7]/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#B88E28]/40 bg-[#FFFFFF] p-0.5 flex items-center justify-center shadow-sm group-hover:border-[#B88E28] transition-all">
              <div className="w-full h-full bg-[#FAF8F5] rounded-full flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-[#B88E28]" />
              </div>
            </div>
            <div>
              <span className="text-lg font-serif tracking-widest text-[#1C1917] uppercase font-bold block leading-none group-hover:text-[#B88E28] transition-colors">
                Yaseer Arafath
              </span>
              <span className="text-[9px] tracking-widest uppercase text-[#B88E28] font-semibold block mt-1">
                Head Chef • Slices Dubai
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-widest font-semibold text-[#57534E]">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#B88E28] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-[#B88E28] transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="hover:text-[#B88E28] transition-colors cursor-pointer flex items-center space-x-2"
            >
              <span>Awards</span>
              <span className="bg-[#B88E28]/10 text-[#B88E28] text-[9px] px-2 py-0.5 rounded border border-[#B88E28]/30 flex items-center gap-1 font-mono">
                <Trophy className="w-2.5 h-2.5" />
                2024
              </span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-[#B88E28] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#B88E28] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={CHEF_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#57534E] hover:text-[#B88E28] transition-colors p-2"
              title="Instagram @yaseer.s.arafath"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenAIMenu}
              className="cursor-pointer bg-white hover:bg-[#F4F0E8] text-[#B88E28] text-xs px-4 py-2 rounded-full border border-[#B88E28]/30 flex items-center space-x-2 transition-all hover:border-[#B88E28] shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
              <span className="font-semibold uppercase tracking-wider text-[10px]">Menu Concierge</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="cursor-pointer bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs px-5 py-2.5 rounded-full shadow-md transition-all flex items-center space-x-2 transform hover:-translate-y-0.5 tracking-wider uppercase"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Inquire</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="cursor-pointer bg-[#B88E28] text-white text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-sm"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1917] hover:text-[#B88E28] bg-white border border-[#EAE4D7]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5]/98 backdrop-blur-2xl border-b border-[#EAE4D7] px-6 pt-6 pb-8 space-y-5 shadow-xl animate-in slide-in-from-top-4">
          <nav className="flex flex-col space-y-4 font-semibold text-[#1C1917] text-sm uppercase tracking-widest">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 border-b border-[#EAE4D7] hover:text-[#B88E28]"
            >
              About & Journey
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left py-2 border-b border-[#EAE4D7] hover:text-[#B88E28]"
            >
              Portfolio Gallery
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="text-left py-2 border-b border-[#EAE4D7] hover:text-[#B88E28] flex items-center justify-between"
            >
              <span>Awards & Press</span>
              <span className="bg-[#B88E28]/10 text-[#B88E28] text-xs px-2.5 py-0.5 rounded font-mono border border-[#B88E28]/30">Superchef 2024</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 border-b border-[#EAE4D7] hover:text-[#B88E28]"
            >
              Services & Catering
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 border-b border-[#EAE4D7] hover:text-[#B88E28]"
            >
              Contact & Inquiries
            </button>
            <a
              href={CHEF_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-[#B88E28] flex items-center space-x-2 normal-case tracking-normal"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram @yaseer.s.arafath</span>
            </a>
          </nav>

          <div className="pt-3 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIMenu();
              }}
              className="w-full bg-white text-[#B88E28] text-xs py-3 rounded-xl border border-[#B88E28]/30 flex items-center justify-center space-x-2 font-semibold uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#B88E28]" />
              <span>Menu Concierge Consultation</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#1C1917] text-white font-bold text-xs py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 uppercase tracking-widest"
            >
              <Calendar className="w-4 h-4" />
              <span>Inquire for VIP Booking</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


