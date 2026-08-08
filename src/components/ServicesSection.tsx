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
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-[#111111]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#111111]" />;
      case 'ChefHat': return <ChefHat className="w-5 h-5 text-[#111111]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#111111]" />;
      default: return <ChefHat className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#FFFFFF] border-b border-[#EEEEEE] text-[#111111] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#99731C] font-semibold block">
            Culinary Offerings
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#111111] tracking-tight font-normal">
            Services & <span className="italic font-serif font-light text-[#444444]">Executive Direction</span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-light">
            From intimate private dining to large-scale gala banquets for 2,000+ guests through Slices Catering Dubai, Head Chef Yaseer Arafath delivers uncompromising culinary perfection.
          </p>
        </div>

        {/* Services Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {CULINARY_SERVICES.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EEEEEE] hover:border-[#111111] p-8 sm:p-10 transition-all duration-300 shadow-minimal flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 bg-[#FAFAFA] border border-[#EEEEEE] flex items-center justify-center">
                  {getIcon(srv.icon)}
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#111111] font-normal group-hover:text-[#99731C] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-[#555555] text-xs sm:text-sm leading-relaxed font-light">
                  {srv.description}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-[#EEEEEE] text-xs text-[#555555] font-light">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#99731C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#EEEEEE]">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest py-3.5 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Inquire for {srv.title.split(' ')[0]} Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Menu Curator Callout */}
        <div className="mt-16 bg-[#FAFAFA] border border-[#EEEEEE] p-8 sm:p-12 text-center relative shadow-minimal">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-flex items-center space-x-2 text-[#99731C] text-xs font-mono uppercase tracking-widest font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#99731C]" />
              <span>Personalized Concierge Consultation</span>
            </span>

            <h3 className="text-3xl sm:text-4xl font-serif text-[#111111] font-normal">
              Bespoke Event Menu Consultation
            </h3>

            <p className="text-[#555555] text-xs sm:text-sm leading-relaxed font-light">
              Planning a VIP dinner, corporate banquet, or royal wedding? Input your event size, dietary preferences, and theme to generate a tailored 4-course menu proposal curated by Chef Yaseer's AI consultation assistant.
            </p>

            <div className="pt-3">
              <button
                onClick={onOpenAIMenu}
                className="cursor-pointer bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest px-8 py-4 transition-colors inline-flex items-center space-x-2"
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



