import React, { useState } from 'react';
import { Trophy, Award, Newspaper, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PRESS_ITEMS } from '../data/portfolioData';

export const AwardsSection: React.FC = () => {
  const [selectedPress, setSelectedPress] = useState<typeof PRESS_ITEMS[0] | null>(null);

  return (
    <section id="awards" className="py-24 bg-[#FFFFFF] border-b border-[#E8E4DC] text-[#1A1817] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
            Accolades & Press Features
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1817] tracking-tight font-normal">
            Recognized by <span className="italic font-serif font-light text-[#4A4640]">Industry Authorities</span>
          </h2>
          <p className="text-[#68645E] text-sm sm:text-base font-light">
            Award-winning culinary excellence verified by national competitions, the Emirates Culinary Guild, and premier UAE press publications.
          </p>
        </div>

        {/* Feature Spotlight Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Main Trophy Card: Superchef 2024 */}
          <div className="lg:col-span-7 bg-white border border-[#E8E4DC] p-8 sm:p-10 shadow-minimal relative flex flex-col justify-between hover:border-[#1A1817] transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-2 bg-[#1A1817] text-white font-mono text-[11px] uppercase tracking-wider px-3.5 py-1">
                  <Trophy className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>1ST PRIZE WINNER</span>
                </span>
                <span className="text-[#B88E28] font-mono text-xs font-semibold">Royal Ascot Hotel • Dubai</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-serif text-[#1A1817] font-normal leading-tight">
                UAE's Superchef 2024 Winner
              </h3>
              
              <p className="text-[#B88E28] text-xs font-mono">
                Xpatzhub Live Culinary Competition at Firki, Royal Ascot Hotel (June 2024)
              </p>

              <p className="text-[#44403C] text-sm sm:text-base leading-relaxed font-light">
                Chef Yaseer Arafath claimed first prize in the high-stakes live culinary showdown against top professional chefs across the United Arab Emirates. His winning entry demonstrated speed, delicate Levant seasoning balance, and exquisite molecular plating.
              </p>

              {/* Press headline snippet */}
              <div className="mt-6 p-5 bg-[#FAF9F6] border border-[#E8E4DC] space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#B88E28] font-semibold">
                  <Newspaper className="w-4 h-4" />
                  <span>Khaleej Times Official Article Feature</span>
                </div>
                <blockquote className="text-[#1A1817] font-serif italic text-base sm:text-lg">
                  “UAE's Superchef 2024 is a resounding success — Mr. Yaser Arafath, Head Chef at Slices Catering, takes first prize.”
                </blockquote>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#888888] font-mono">
              <span className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#B88E28]" />
                <span>Verified First Prize Trophy</span>
              </span>
              <span className="text-[#1A1817] font-semibold">Slices Catering Directorship</span>
            </div>
          </div>

          {/* Emirates Culinary Guild Silver Medal */}
          <div className="lg:col-span-5 bg-white border border-[#E8E4DC] p-8 sm:p-10 shadow-minimal flex flex-col justify-between space-y-6 hover:border-[#1A1817] transition-colors">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#B88E28]">
                <Award className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-bold">Guild Recognition</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1817] font-normal">
                Emirates Culinary Guild Silver Medal
              </h3>

              <p className="text-[#888888] text-xs font-mono">
                Wathba Dates Festival & Auction (Dec 2023)
              </p>

              <div className="p-5 bg-[#FAF9F6] border border-[#E8E4DC] space-y-2">
                <p className="text-xs font-mono font-semibold text-[#B88E28]">Award Category:</p>
                <p className="text-base font-serif text-[#1A1817] font-normal">Arabian / Levant Cuisine Main Course</p>
                <p className="text-xs text-[#555555] leading-relaxed font-light">
                  Silver Medal certificate conferred by the President and Executive Board of the Emirates Culinary Guild, evaluated by international master chefs for depth of flavor and date reduction glaze.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-5 border-t border-[#E8E4DC] font-mono text-xs">
              <div className="flex items-center justify-between text-[#888888]">
                <span>Awarding Body:</span>
                <span className="text-[#1A1817] font-semibold">Emirates Culinary Guild (ECG)</span>
              </div>
              <div className="flex items-center justify-between text-[#888888]">
                <span>Judging Panel:</span>
                <span className="text-[#B88E28] font-semibold">Worldchefs Certified Judges</span>
              </div>
            </div>
          </div>

        </div>

        {/* Press Coverage Cards */}
        <div className="mt-20 text-left">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1817] font-normal mb-8">
            Press Features & Media Archives
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRESS_ITEMS.map((press) => (
              <a
                key={press.id}
                href={press.url || "https://www.instagram.com/yaseer.s.arafath/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-7 transition-all duration-300 shadow-minimal cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#B88E28] font-mono text-xs font-bold uppercase tracking-wider">
                      {press.source}
                    </span>
                    <span className="text-[#888888] text-xs font-mono">{press.date}</span>
                  </div>

                  <h4 className="text-[#1A1817] font-serif font-normal text-lg leading-snug group-hover:text-[#B88E28] transition-colors">
                    {press.title}
                  </h4>

                  <p className="text-[#44403C] text-xs line-clamp-3 leading-relaxed font-light">
                    {press.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#1A1817] font-mono font-semibold uppercase tracking-wider">
                  <span>{press.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B88E28]" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Press Item Lightbox Modal */}
      {selectedPress && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8E4DC] max-w-xl w-full p-8 relative space-y-5 text-left shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#B88E28] uppercase tracking-widest bg-[#FAF9F6] px-3.5 py-1 border border-[#E8E4DC]">
                {selectedPress.source} Media Archive
              </span>
              <button
                onClick={() => setSelectedPress(null)}
                className="text-[#68645E] hover:text-[#1A1817] text-xs bg-[#FAF9F6] border border-[#E8E4DC] px-3 py-1 cursor-pointer font-mono"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-2xl font-serif text-[#1A1817] font-normal leading-tight">
              {selectedPress.title}
            </h3>

            <p className="text-xs font-mono text-[#888888]">Date: {selectedPress.date}</p>

            <div className="p-5 bg-[#FAF9F6] border border-[#E8E4DC] text-[#44403C] text-sm leading-relaxed font-light">
              {selectedPress.excerpt}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedPress(null)}
                className="bg-[#1A1817] hover:bg-[#383431] text-white font-mono text-xs uppercase tracking-widest px-6 py-3 cursor-pointer"
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




