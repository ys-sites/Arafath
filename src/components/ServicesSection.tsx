import React from 'react';
import { CULINARY_SERVICES } from '../data/portfolioData';
import { UtensilsCrossed, Building2, ChefHat, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onOpenAIMenu: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking, onOpenAIMenu }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-[#B88E28]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#B88E28]" />;
      case 'ChefHat': return <ChefHat className="w-6 h-6 text-[#B88E28]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#B88E28]" />;
      default: return <ChefHat className="w-6 h-6 text-[#B88E28]" />;
    }
  };

  return (
    <section id="services" className="py-28 bg-[#FAF8F5] border-t border-[#EAE4D7] text-[#1C1917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] bg-white px-4 py-1.5 rounded-full border border-[#B88E28]/30 font-semibold inline-block shadow-sm">
            Culinary Offerings
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1C1917] tracking-tight font-normal">
            Services & <span className="text-gold-gradient italic font-serif">Executive Direction</span>
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base font-light">
            From intimate private dining to large-scale gala banquets for 2,000+ guests through Slices Catering Dubai, Head Chef Yaseer Arafath delivers uncompromising culinary perfection.
          </p>
        </div>

        {/* Services Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {CULINARY_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EAE4D7] hover:border-[#B88E28]/50 p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-1 shadow-editorial flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-5">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#B88E28]/30 flex items-center justify-center">
                  {getIcon(srv.icon)}
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal group-hover:text-[#B88E28] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-[#44403C] text-xs sm:text-sm leading-relaxed font-light">
                  {srv.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-[#EAE4D7] text-xs text-[#44403C] font-light">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B88E28] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#EAE4D7]">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#FAF8F5] hover:bg-[#1C1917] text-[#B88E28] hover:text-white font-semibold text-xs uppercase tracking-widest py-3.5 rounded-xl border border-[#B88E28]/40 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-sm"
                >
                  <span>Inquire for {srv.title.split(' ')[0]} Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Menu Curator Callout */}
        <div className="mt-20 bg-white border border-[#B88E28]/40 p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden shadow-editorial">
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <span className="inline-flex items-center space-x-2 bg-[#FAF8F5] text-[#B88E28] text-xs px-4 py-1.5 rounded-full border border-[#B88E28]/30 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
              <span>Personalized Concierge Consultation</span>
            </span>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#1C1917] font-normal">
              Bespoke Event Menu Consultation
            </h3>

            <p className="text-[#44403C] text-xs sm:text-sm leading-relaxed font-light">
              Planning a VIP dinner, corporate banquet, or royal wedding? Input your event size, dietary preferences, and theme to generate a tailored 4-course menu proposal curated by Chef Yaseer's AI consultation assistant.
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenAIMenu}
                className="cursor-pointer bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-md transition-all inline-flex items-center space-x-2 transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Launch Bespoke Menu Concierge</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


