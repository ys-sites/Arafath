import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenAIMenu: () => void;
  onOpenPortfolioSubPage: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenPortfolioSubPage }) => {
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
          
          {/* Left Hero Content Box with Clean Elegant Bodoni / Cinzel Typography */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-7 text-left">
            
            {/* Minimalist Location & Category Tag */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-mono uppercase tracking-[0.3em] text-[#68645E]">
                <span className="text-[#1A1817] font-semibold">DUBAI, UAE</span>
                <span>•</span>
                <span className="text-[#B88E28] font-semibold">HAUTE GASTRONOMY</span>
              </div>
              
              <div className="w-16 h-[1px] bg-[#1A1817]" />
            </div>

            {/* Chef Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#1A1817] font-normal leading-[1.05] tracking-tight">
                CHEF YASEER <br />
                <span className="italic font-serif font-light text-[#B88E28]">ARAFATH</span>
              </h1>
              
              <p className="text-base sm:text-lg font-serif text-[#5B564E] font-light italic leading-relaxed">
                Head Chef at Slices Catering · Master of Modern Gastronomy & Levant Fusion
              </p>
            </div>

            {/* Position Narrative */}
            <p className="text-sm sm:text-base text-[#68645E] max-w-xl font-light leading-relaxed">
              Directing luxury banquets, private VIP villa dinners, and bespoke molecular culinary experiences across the United Arab Emirates with over a decade of classical precision.
            </p>

            {/* Clean Symmetrical Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-b border-[#E8E4DC] py-4 text-xs font-mono">
              <div>
                <span className="text-[#1A1817] font-bold block text-sm sm:text-base">12+ Years</span>
                <span className="text-[#888888] text-[10px] block mt-0.5 uppercase tracking-wider">Culinary Mastery</span>
              </div>
              <div>
                <span className="text-[#1A1817] font-bold block text-sm sm:text-base">1st Prize</span>
                <span className="text-[#B88E28] text-[10px] block mt-0.5 uppercase tracking-wider font-semibold">UAE Superchef '24</span>
              </div>
              <div>
                <span className="text-[#1A1817] font-bold block text-sm sm:text-base">1,200+</span>
                <span className="text-[#888888] text-[10px] block mt-0.5 uppercase tracking-wider">Events Curated</span>
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
                onClick={onOpenPortfolioSubPage}
                className="w-full sm:w-auto cursor-pointer border border-[#1A1817] text-[#1A1817] hover:bg-[#1A1817] hover:text-white font-mono text-xs uppercase tracking-[0.2em] px-7 py-4 transition-all flex items-center justify-center space-x-2 bg-white/60"
              >
                <span>View Full Portfolio</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};








