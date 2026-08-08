import React from 'react';
import { ChevronRight, Sparkles, Trophy, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenAIMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenAIMenu }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex items-center overflow-hidden bg-[#FAF9F6] text-[#1A1817] border-b border-[#E8E4DC]">
      
      {/* Background Image: hero.png fills the WHOLE hero section */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero.png"
          alt="Chef Yaseer Arafath Precision Micro-Plating"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[75%_center] sm:object-center filter contrast-[103%] brightness-[97%] scale-[1.01]"
        />
        
        {/* Soft porcelain ivory gradient overlays for maximum contrast & photo theme match */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 via-50% to-[#FAF9F6]/40 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-transparent to-[#FAF9F6]/50 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content Box */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-7 text-left bg-[#FAF9F6]/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 border border-[#E8E4DC]/60 lg:border-none">
            
            {/* Scaffolding Badges & Location */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#68645E]">
                <span className="text-[#1A1817] font-semibold">Head Chef</span>
                <span>•</span>
                <span>Slices Catering Dubai</span>
                <span>•</span>
                <span className="text-[#B88E28] font-semibold">UAE Superchef 2024</span>
              </div>
              
              <div className="w-12 h-[1px] bg-[#1A1817]" />
            </div>

            {/* Chef Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#1A1817] font-normal leading-[1.0] tracking-tight">
                CHEF YASEER <br />
                <span className="italic font-serif font-light text-[#4A4640]">ARAFATH</span>
              </h1>
              
              <p className="text-base sm:text-lg font-serif text-[#5B564E] font-light italic leading-relaxed">
                Head Chef at Slices Catering Dubai · Master of Modern Gastronomy & Levant Culinary Fusion
              </p>
            </div>

            {/* Position Narrative */}
            <p className="text-sm sm:text-base text-[#68645E] max-w-xl font-light leading-relaxed">
              Directing large-scale luxury banquets, private VIP villa dinners, and bespoke molecular culinary experiences across the United Arab Emirates. Over 10 years of classical technique fused with Arabian provenance.
            </p>

            {/* Key Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-b border-[#E8E4DC] py-4 text-xs font-mono">
              <div>
                <span className="text-[#1A1817] font-bold block">Slices Catering</span>
                <span className="text-[#888888] text-[10px] block mt-0.5 uppercase tracking-wider">Head Chef</span>
              </div>
              <div>
                <span className="text-[#1A1817] font-bold block">Superchef '24</span>
                <span className="text-[#B88E28] text-[10px] block mt-0.5 uppercase tracking-wider font-semibold">1st Prize</span>
              </div>
              <div>
                <span className="text-[#1A1817] font-bold block">10+ Years</span>
                <span className="text-[#888888] text-[10px] block mt-0.5 uppercase tracking-wider">Experience</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto cursor-pointer bg-[#1A1817] hover:bg-[#383431] text-white font-mono text-xs uppercase tracking-widest px-8 py-4 transition-colors flex items-center justify-center space-x-3 shadow-minimal"
              >
                <span>Inquire for VIP Dining</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="w-full sm:w-auto cursor-pointer border border-[#1A1817] text-[#1A1817] hover:bg-[#1A1817] hover:text-white font-mono text-xs uppercase tracking-widest px-7 py-4 transition-all flex items-center justify-center space-x-2 bg-white/80"
              >
                <span>View Portfolio</span>
              </button>

              <button
                onClick={onOpenAIMenu}
                className="w-full sm:w-auto cursor-pointer text-[#68645E] hover:text-[#1A1817] font-mono text-xs uppercase tracking-wider px-4 py-4 flex items-center justify-center space-x-1.5 transition-colors bg-white/60 sm:bg-transparent"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
                <span>Menu Concierge</span>
              </button>
            </div>

          </div>

          {/* Right Floating Badge / Photo Accreditation Card */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end items-end h-full">
            <div className="bg-[#FAF9F6]/90 backdrop-blur-md border border-[#E8E4DC] p-6 max-w-sm text-left space-y-3 shadow-minimal">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#B88E28] font-semibold">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Live Plating Masterclass</span>
                </span>
                <span>Dubai • UAE</span>
              </div>
              <blockquote className="text-xs text-[#1A1817] font-serif italic leading-relaxed">
                “Culinary artistry is the delicate balance between ancient Levant provenance and high-resolution molecular precision.”
              </blockquote>
              <div className="pt-2 border-t border-[#E8E4DC] flex items-center justify-between text-[10px] font-mono text-[#68645E]">
                <span>Featured: Salmon Micro-Plating</span>
                <span className="text-[#1A1817] font-semibold">Slices Catering</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};






