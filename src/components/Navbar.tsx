import React, { useState, useEffect } from 'react';
import { ChefHat, Calendar, Sparkles, Menu, X, Instagram, Trophy, FileText, Phone } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onGoHome: () => void;
  onOpenBooking: () => void;
  onOpenSEOModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onGoHome,
  onOpenBooking
}) => {
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

  const handleNavClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E8E4DC] py-3.5 shadow-minimal'
          : 'bg-white/80 backdrop-blur-sm border-b border-[#E8E4DC]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick()}
            className="cursor-pointer flex items-center space-x-2.5 sm:space-x-3.5 group text-left"
          >
            <img
              src="/LOGO.png"
              alt="Chef Yaseer Arafath Logo"
              className="h-10 sm:h-12 w-auto object-contain shrink-0"
            />
            <div>
              <span className="text-sm sm:text-base font-serif tracking-widest text-[#1A1817] uppercase font-bold block leading-none">
                Yaseer Arafath
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest font-mono uppercase text-[#68645E] block mt-1 font-semibold">
                Head Chef • Slices Dubai
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest text-[#68645E]">
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-[#1A1817] transition-colors cursor-pointer"
            >
              <span>Biography</span>
            </button>

            <button
              onClick={() => handleNavClick('awards')}
              className="hover:text-[#1A1817] transition-colors cursor-pointer"
            >
              <span>Awards & Press</span>
            </button>
            
            <button
              onClick={() => handleNavClick('gallery')}
              className="hover:text-[#1A1817] transition-colors cursor-pointer"
            >
              <span>Signature Plating</span>
            </button>
            
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#1A1817] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={CHEF_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#1ebd59] transition-colors p-2"
              title="WhatsApp Direct Chat"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={CHEF_PROFILE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#68645E] hover:text-[#1A1817] transition-colors p-2"
              title="Instagram @yaseer.s.arafath"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="cursor-pointer bg-[#1A1817] hover:bg-[#383431] text-white font-mono text-xs px-5 py-2.5 rounded-none transition-colors tracking-widest uppercase"
            >
              Inquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="cursor-pointer bg-[#1A1817] text-white text-xs px-3.5 py-1.5 font-mono uppercase tracking-wider"
            >
              Inquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1817] bg-white border border-[#E8E4DC]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E8E4DC] px-6 pt-6 pb-8 space-y-5 shadow-minimal animate-in slide-in-from-top-4 text-left">
          <nav className="flex flex-col space-y-4 font-mono text-[#1A1817] text-xs uppercase tracking-widest">
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-[#E8E4DC] hover:text-[#B88E28]"
            >
              <span>Biography & Credentials</span>
            </button>
            <button
              onClick={() => handleNavClick('awards')}
              className="text-left py-2 border-b border-[#E8E4DC] hover:text-[#B88E28]"
            >
              <span>Awards & Press Cabinet</span>
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="text-left py-2 border-b border-[#E8E4DC] hover:text-[#B88E28]"
            >
              Signature Plating Portfolio
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 border-b border-[#E8E4DC] hover:text-[#B88E28]"
            >
              Contact & Inquiries
            </button>
          </nav>

          <div className="pt-3 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#1A1817] text-white text-xs py-3 font-mono uppercase tracking-widest"
            >
              Inquire to Work & Collaborate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};




