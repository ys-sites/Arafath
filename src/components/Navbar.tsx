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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#EEEEEE] py-3.5 shadow-minimal'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#EEEEEE]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer flex items-center space-x-3 group text-left"
          >
            <div className="w-8 h-8 rounded-none border border-[#111111] bg-white flex items-center justify-center">
              <ChefHat className="w-4 h-4 text-[#111111]" />
            </div>
            <div>
              <span className="text-base font-serif tracking-widest text-[#111111] uppercase font-bold block leading-none">
                Yaseer Arafath
              </span>
              <span className="text-[9px] tracking-widest font-mono uppercase text-[#888888] block mt-1">
                Head Chef • Slices Dubai
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest text-[#666666]">
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="hover:text-[#111111] transition-colors cursor-pointer flex items-center space-x-2"
            >
              <span>Awards</span>
              <span className="text-[9px] text-[#99731C] px-1.5 py-0.5 border border-[#99731C]/30 font-mono">
                2024
              </span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[#111111] transition-colors cursor-pointer"
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
              className="text-[#666666] hover:text-[#111111] transition-colors p-2"
              title="Instagram @yaseer.s.arafath"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenAIMenu}
              className="cursor-pointer text-[#666666] hover:text-[#111111] text-xs font-mono uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#99731C]" />
              <span>Menu Concierge</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="cursor-pointer bg-[#111111] hover:bg-[#333333] text-white font-medium text-xs px-5 py-2.5 rounded-none transition-colors tracking-widest uppercase"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="cursor-pointer bg-[#111111] text-white text-xs px-3.5 py-1.5 font-mono uppercase tracking-wider"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] bg-white border border-[#EEEEEE]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#EEEEEE] px-6 pt-6 pb-8 space-y-5 shadow-minimal animate-in slide-in-from-top-4 text-left">
          <nav className="flex flex-col space-y-4 font-mono text-[#111111] text-xs uppercase tracking-widest">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 border-b border-[#EEEEEE] hover:text-[#99731C]"
            >
              About & Journey
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left py-2 border-b border-[#EEEEEE] hover:text-[#99731C]"
            >
              Portfolio Gallery
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="text-left py-2 border-b border-[#EEEEEE] hover:text-[#99731C] flex items-center justify-between"
            >
              <span>Awards & Press</span>
              <span className="text-[#99731C] text-[10px] px-2 py-0.5 border border-[#99731C]/30">Superchef 2024</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 border-b border-[#EEEEEE] hover:text-[#99731C]"
            >
              Services & Catering
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 border-b border-[#EEEEEE] hover:text-[#99731C]"
            >
              Contact & Inquiries
            </button>
            <a
              href={CHEF_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-[#666666] flex items-center space-x-2 normal-case tracking-normal"
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
              className="w-full bg-white text-[#111111] text-xs py-3 border border-[#111111] flex items-center justify-center space-x-2 font-mono uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-[#99731C]" />
              <span>Menu Concierge</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#111111] text-white text-xs py-3 font-mono uppercase tracking-widest"
            >
              Inquire for VIP Booking
            </button>
          </div>
        </div>
      )}
    </header>
  );
};



