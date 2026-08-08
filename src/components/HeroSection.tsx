import React from 'react';
import { ChevronRight, Calendar, Sparkles, Trophy, MapPin } from 'lucide-react';
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
    <section className="relative min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center bg-[#FFFFFF] text-[#111111] border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Ultra-Minimalist Copy & Key Info */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Minimalist Pill & Location */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666]">
                <span className="text-[#111111] font-semibold">Head Chef</span>
                <span>•</span>
                <span>Slices Catering Dubai</span>
                <span>•</span>
                <span className="text-[#99731C] font-semibold">UAE Superchef 2024</span>
              </div>
              
              <div className="w-12 h-[1px] bg-[#111111]" />
            </div>

            {/* Chef Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#111111] font-normal leading-[1.0] tracking-tight">
                CHEF YASEER <br />
                <span className="italic font-serif font-light text-[#444444]">ARAFATH</span>
              </h1>
              
              <p className="text-base sm:text-lg font-serif text-[#555555] font-light italic leading-relaxed">
                Head Chef at Slices Catering Dubai · Master of Modern Gastronomy & Levant Culinary Fusion
              </p>
            </div>

            {/* Position Narrative */}
            <p className="text-sm sm:text-base text-[#666666] max-w-xl font-light leading-relaxed">
              Directing large-scale luxury banquets, private VIP villa dinners, and bespoke molecular culinary experiences across the United Arab Emirates. Over 10 years of classical technique fused with Arabian provenance.
            </p>

            {/* Key Scaffolding Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-b border-[#EEEEEE] py-4 text-xs font-mono">
              <div>
                <span className="text-[#111111] font-bold block">Slices Catering</span>
                <span className="text-[#888888] text-[10px] block mt-0.5 uppercase tracking-wider">Head Chef</span>
              </div>
              <div>
                <span className="text-[#111111] font-bold block">Superchef '24</span>
                <span className="text-[#888888] text-[10px] block mt-0.5 uppercase tracking-wider">Winner</span>
              </div>
              <div>
                <span className="text-[#111111] font-bold block">10+ Years</span>
                <span className="text-[#888888] text-[10px] block mt-0.5 uppercase tracking-wider">Experience</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto cursor-pointer bg-[#111111] hover:bg-[#333333] text-white font-medium text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-colors flex items-center justify-center space-x-3"
              >
                <span>Inquire for VIP Dining</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="w-full sm:w-auto cursor-pointer border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white font-medium text-xs uppercase tracking-widest px-7 py-4 rounded-none transition-all flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
              </button>

              <button
                onClick={onOpenAIMenu}
                className="w-full sm:w-auto cursor-pointer text-[#666666] hover:text-[#111111] font-mono text-xs uppercase tracking-wider px-4 py-4 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#99731C]" />
                <span>Menu Concierge</span>
              </button>
            </div>

          </div>

          {/* Right Column: hero.png Minimalist Presentation */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto">
              
              {/* Minimalist Image Container */}
              <div className="relative rounded-none border border-[#EEEEEE] p-2 bg-[#FAFAFA] shadow-minimal overflow-hidden">
                <div className="relative h-[380px] sm:h-[500px] overflow-hidden">
                  <img
                    src="/hero.png"
                    alt="Chef Yaseer Arafath Plating Salmon Dish"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[105%] hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Subtle Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 text-[#111111] border border-[#EEEEEE] px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-widest font-semibold shadow-sm">
                    Live Micro-Plating Precision
                  </div>
                </div>

                {/* Minimalist Caption */}
                <div className="p-4 bg-white text-left space-y-1 border-t border-[#EEEEEE]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] uppercase tracking-wider">
                    <span>Chef Yaseer Arafath</span>
                    <span>Dubai, UAE</span>
                  </div>
                  <p className="text-xs text-[#444444] font-serif italic">
                    “Culinary excellence lies in the harmony between ancient Levant roots and modern plating precision.”
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};





