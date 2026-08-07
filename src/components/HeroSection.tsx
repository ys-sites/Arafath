import React from 'react';
import { Award, Trophy, ChevronRight, Calendar, Sparkles, MapPin, ChefHat } from 'lucide-react';
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
    <section className="relative min-h-screen pt-36 pb-24 flex items-center overflow-hidden bg-[#FAF8F5] text-[#1C1917]">
      {/* Warm Soft Glow Gradients */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#F4F0E8] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#EAE4D7]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Editorial Copy Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Accolades & Title Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-2 bg-white border border-[#B88E28]/40 text-[#B88E28] text-xs px-4 py-1.5 rounded-full font-semibold uppercase tracking-wider shadow-sm">
                <Trophy className="w-3.5 h-3.5 text-[#B88E28]" />
                <span>UAE Superchef 2024 Winner</span>
              </span>

              <span className="inline-flex items-center space-x-2 bg-white border border-[#EAE4D7] text-[#57534E] text-xs px-3.5 py-1.5 rounded-full font-medium tracking-wider shadow-sm">
                <Award className="w-3.5 h-3.5 text-[#B88E28]" />
                <span>Emirates Culinary Guild Recognition</span>
              </span>

              <span className="inline-flex items-center space-x-1 text-[#6B655F] text-xs px-2 py-1 font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#B88E28]" />
                <span>Dubai, UAE</span>
              </span>
            </div>

            {/* Chef Name & Editorial Heading */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#B88E28] font-semibold block">
                Editorial Culinary Portfolio
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-[#1C1917] font-normal leading-[0.95] tracking-tight">
                CHEF YASEER <br />
                <span className="text-gold-gradient italic font-serif font-light">ARAFATH</span>
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-[#57534E] tracking-wide font-light italic border-l-2 border-[#B88E28]/50 pl-4 py-1">
                Head Chef at Slices Catering Dubai · Master of Modern Gastronomy & Levant Fusion
              </p>
            </div>

            {/* Position Narrative */}
            <p className="text-base sm:text-lg text-[#44403C] max-w-2xl font-light leading-relaxed">
              Crafting understated high-end culinary experiences, royal banquets, and molecular gastronomy across the United Arab Emirates. Blending over a decade of classical technique with Arabian cultural provenance.
            </p>

            {/* Career Scaffolding Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 max-w-2xl text-xs">
              <div className="bg-white border border-[#EAE4D7] p-4 rounded-xl shadow-editorial hover:border-[#B88E28]/50 transition-colors">
                <span className="text-[#B88E28] font-serif text-sm font-semibold block uppercase tracking-wider">Slices Catering</span>
                <span className="text-[#6B655F] text-[11px] block mt-1">Head Chef Directorship</span>
              </div>
              <div className="bg-white border border-[#EAE4D7] p-4 rounded-xl shadow-editorial hover:border-[#B88E28]/50 transition-colors">
                <span className="text-[#1C1917] font-serif text-sm font-semibold block uppercase tracking-wider">QE2 Liner Dubai</span>
                <span className="text-[#6B655F] text-[11px] block mt-1">Classic Fine Dining</span>
              </div>
              <div className="bg-white border border-[#EAE4D7] p-4 rounded-xl shadow-editorial hover:border-[#B88E28]/50 transition-colors col-span-2 sm:col-span-1">
                <span className="text-[#B88E28] font-serif text-sm font-semibold block uppercase tracking-wider">10+ Years</span>
                <span className="text-[#6B655F] text-[11px] block mt-1">Culinary Leadership</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg transition-all flex items-center space-x-3 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Inquire for VIP Dining</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="cursor-pointer bg-white hover:bg-[#F4F0E8] text-[#1C1917] text-xs uppercase tracking-widest px-7 py-4 rounded-full border border-[#EAE4D7] hover:border-[#B88E28] flex items-center space-x-2 transition-all font-semibold shadow-sm"
              >
                <ChefHat className="w-4 h-4 text-[#B88E28]" />
                <span>View Portfolio</span>
              </button>

              <button
                onClick={onOpenAIMenu}
                className="cursor-pointer bg-white hover:bg-[#F4F0E8] text-[#B88E28] text-xs uppercase tracking-widest px-6 py-4 rounded-full border border-[#B88E28]/30 flex items-center space-x-2 transition-all font-semibold shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-[#B88E28]" />
                <span>Menu Concierge</span>
              </button>
            </div>

          </div>

          {/* Hero Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Frame */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-[#B88E28]/30 via-transparent to-[#B88E28]/10 blur-md opacity-60" />

              {/* Portrait Frame */}
              <div className="relative rounded-[2.25rem] bg-white border border-[#EAE4D7] p-3 shadow-2xl overflow-hidden">
                
                {/* Character Image Container */}
                <div className="relative h-[420px] sm:h-[480px] rounded-[1.75rem] overflow-hidden group bg-[#FAF8F5]">
                  <img
                    src={CHEF_PROFILE.portraitImage}
                    alt="Chef Yaseer Arafath Executive Head Chef Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent" />
                  
                  {/* Floating Superchef Badge */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-xl text-[#B88E28] font-serif text-xs px-4 py-2 rounded-full border border-[#B88E28]/30 flex items-center space-x-2 shadow-lg">
                    <Trophy className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span className="font-sans font-semibold uppercase tracking-wider text-[10px]">UAE Superchef 2024</span>
                  </div>

                  {/* Character Name Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-left space-y-1">
                    <span className="text-[10px] uppercase font-mono text-amber-200 tracking-widest font-semibold block">
                      Head Chef • Slices Catering Dubai
                    </span>
                    <h3 className="text-white font-serif text-2xl font-normal">
                      Chef Yaseer Arafath
                    </h3>
                    <p className="text-stone-200 text-xs font-light">
                      Superchef First Prize Winner (Xpatzhub, Royal Ascot Hotel)
                    </p>
                  </div>
                </div>

                {/* Editorial Quote Box */}
                <div className="mt-3 p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE4D7] text-left">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl text-[#B88E28] leading-none font-serif shrink-0">“</div>
                    <p className="text-xs text-[#57534E] italic font-serif leading-relaxed">
                      {CHEF_PROFILE.quote}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



