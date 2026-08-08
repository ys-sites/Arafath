import React from 'react';
import { ChevronRight, Sparkles, Trophy, MapPin, Award } from 'lucide-react';
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
      
      {/* Background Image: hero.png fills the WHOLE hero section cleanly */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <img
          src="/hero.png"
          alt="Chef Yaseer Arafath Precision Micro-Plating"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[70%_center] sm:object-right-center"
        />
        
        {/* Scrim gradient ONLY on the far left so photo remains crisp & clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/90 via-35% to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/80 via-transparent to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-28 sm:pt-36 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content Box with Ultra-Luxurious Bodoni / Cinzel Typography */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-7 text-left">
            
            {/* Scaffolding Badges & Location */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-mono uppercase tracking-[0.25em] text-[#68645E]">
                <span className="text-[#1A1817] font-semibold tracking-[0.3em]">HEAD CHEF</span>
                <span>•</span>
                <span>SLICES CATERING DUBAI</span>
                <span>•</span>
                <span className="text-[#B88E28] font-semibold">UAE SUPERCHEF 2024</span>
              </div>
              
              <div className="w-16 h-[1px] bg-[#1A1817]" />
            </div>

            {/* Chef Name & Title in High-Fashion Bodoni / Cinzel Serif */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#1A1817] font-normal leading-[1.05] tracking-tight">
                CHEF YASEER <br />
                <span className="italic font-serif font-light text-[#B88E28]">ARAFATH</span>
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
                className="w-full sm:w-auto cursor-pointer bg-[#1A1817] hover:bg-[#383431] text-white font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors flex items-center justify-center space-x-3 shadow-minimal"
              >
                <span>Inquire for VIP Dining</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="w-full sm:w-auto cursor-pointer border border-[#1A1817] text-[#1A1817] hover:bg-[#1A1817] hover:text-white font-mono text-xs uppercase tracking-[0.2em] px-7 py-4 transition-all flex items-center justify-center space-x-2 bg-white/60"
              >
                <span>View Portfolio</span>
              </button>

              <button
                onClick={onOpenAIMenu}
                className="w-full sm:w-auto cursor-pointer text-[#68645E] hover:text-[#1A1817] font-mono text-xs uppercase tracking-wider px-4 py-4 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
                <span>Menu Concierge</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};







