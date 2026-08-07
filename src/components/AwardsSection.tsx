import React, { useState } from 'react';
import { Trophy, Award, Newspaper, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PRESS_ITEMS } from '../data/portfolioData';

export const AwardsSection: React.FC = () => {
  const [selectedPress, setSelectedPress] = useState<typeof PRESS_ITEMS[0] | null>(null);

  return (
    <section id="awards" className="py-28 bg-[#FAF8F5] border-t border-[#EAE4D7] text-[#1C1917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] bg-white px-4 py-1.5 rounded-full border border-[#B88E28]/30 font-semibold inline-block shadow-sm">
            Accolades & Media Features
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1C1917] tracking-tight font-normal">
            Recognized by <span className="text-gold-gradient italic font-serif">Industry Authorities</span>
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base font-light">
            Award-winning culinary excellence verified by national competitions, the Emirates Culinary Guild, and premier UAE press publications.
          </p>
        </div>

        {/* Feature Spotlight Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Main Trophy Card: Superchef 2024 */}
          <div className="lg:col-span-7 bg-white border border-[#EAE4D7] p-8 sm:p-10 rounded-3xl shadow-editorial relative overflow-hidden flex flex-col justify-between hover:border-[#B88E28]/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-2 bg-[#1C1917] text-white font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                  <Trophy className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>1ST PRIZE WINNER</span>
                </span>
                <span className="text-[#B88E28] font-mono text-xs font-semibold">Royal Ascot Hotel • Dubai</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-serif text-[#1C1917] font-normal leading-tight">
                UAE's Superchef 2024 Winner
              </h3>
              
              <p className="text-[#B88E28] text-sm font-medium">
                Xpatzhub Live Culinary Competition at Firki, Royal Ascot Hotel (June 2024)
              </p>

              <p className="text-[#44403C] text-sm sm:text-base leading-relaxed font-light">
                Chef Yaseer Arafath claimed first prize in the high-stakes live culinary showdown against top professional chefs across the United Arab Emirates. His winning entry demonstrated speed, delicate Levant seasoning balance, and exquisite molecular plating.
              </p>

              {/* Press headline snippet */}
              <div className="mt-6 p-5 bg-[#FAF8F5] rounded-2xl border border-[#EAE4D7] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#B88E28] font-semibold">
                  <Newspaper className="w-4 h-4" />
                  <span>Khaleej Times Official Article Feature</span>
                </div>
                <blockquote className="text-[#1C1917] font-serif italic text-base sm:text-lg">
                  “UAE's Superchef 2024 is a resounding success — Mr. Yaser Arafath, Head Chef at Slices Catering, takes first prize.”
                </blockquote>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE4D7] flex items-center justify-between text-xs text-[#6B655F]">
              <span className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88E28]" />
                <span>Verified First Prize Trophy</span>
              </span>
              <span className="font-mono text-[#B88E28] font-semibold">Slices Catering Directorship</span>
            </div>
          </div>

          {/* Emirates Culinary Guild Silver Medal */}
          <div className="lg:col-span-5 bg-white border border-[#EAE4D7] p-8 sm:p-10 rounded-3xl shadow-editorial flex flex-col justify-between space-y-6 hover:border-[#B88E28]/40 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#B88E28]">
                <Award className="w-6 h-6" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">Guild Recognition</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal">
                Emirates Culinary Guild Silver Medal
              </h3>

              <p className="text-[#6B655F] text-xs font-mono">
                Wathba Dates Festival & Auction (Dec 2023)
              </p>

              <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#EAE4D7] space-y-2">
                <p className="text-xs font-semibold text-[#B88E28]">Award Category:</p>
                <p className="text-base font-serif text-[#1C1917] font-normal">Arabian / Levant Cuisine Main Course</p>
                <p className="text-xs text-[#44403C] leading-relaxed font-light">
                  Silver Medal certificate conferred by the President and Executive Board of the Emirates Culinary Guild, evaluated by international master chefs for depth of flavor and date reduction glaze.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-5 border-t border-[#EAE4D7]">
              <div className="flex items-center justify-between text-xs text-[#6B655F]">
                <span>Awarding Body:</span>
                <span className="text-[#1C1917] font-semibold">Emirates Culinary Guild (ECG)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#6B655F]">
                <span>Judging Panel:</span>
                <span className="text-[#B88E28] font-semibold">Worldchefs Certified Judges</span>
              </div>
            </div>
          </div>

        </div>

        {/* Press Coverage Cards */}
        <div className="mt-20 text-left">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal mb-8">
            Press Features & Media Archives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRESS_ITEMS.map((press) => (
              <div
                key={press.id}
                onClick={() => setSelectedPress(press)}
                className="bg-white border border-[#EAE4D7] hover:border-[#B88E28]/50 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-editorial cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#B88E28] font-mono text-xs font-bold uppercase tracking-wider">
                      {press.source}
                    </span>
                    <span className="text-[#6B655F] text-xs">{press.date}</span>
                  </div>

                  <h4 className="text-[#1C1917] font-serif font-normal text-lg leading-snug group-hover:text-[#B88E28] transition-colors">
                    {press.title}
                  </h4>

                  <p className="text-[#44403C] text-xs line-clamp-3 leading-relaxed font-light">
                    {press.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE4D7] flex items-center justify-between text-xs text-[#B88E28] font-semibold uppercase tracking-wider">
                  <span>{press.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Press Item Lightbox Modal */}
      {selectedPress && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-[#EAE4D7] max-w-xl w-full p-8 rounded-3xl shadow-2xl relative space-y-5 text-left">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#B88E28] uppercase tracking-widest bg-[#FAF8F5] px-3.5 py-1 rounded-full border border-[#B88E28]/30 font-semibold">
                {selectedPress.source} Media Archive
              </span>
              <button
                onClick={() => setSelectedPress(null)}
                className="text-[#57534E] hover:text-[#1C1917] text-xs bg-[#FAF8F5] border border-[#EAE4D7] px-3 py-1 rounded-full cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-2xl font-serif text-[#1C1917] font-normal leading-tight">
              {selectedPress.title}
            </h3>

            <p className="text-xs font-mono text-[#6B655F]">Date: {selectedPress.date}</p>

            <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#EAE4D7] text-[#44403C] text-sm leading-relaxed font-light">
              {selectedPress.excerpt}
            </div>

            <div className="p-4 bg-[#FAF8F5] border border-[#B88E28]/30 rounded-2xl text-xs text-[#B88E28]">
              <p className="font-semibold">Media Accreditation Notice:</p>
              <p className="mt-1 text-[#57534E] font-light">
                Verified press archive documenting Head Chef Yaseer Arafath's culinary awards in the UAE.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedPress(null)}
                className="bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full cursor-pointer shadow-md"
              >
                Close Media Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


