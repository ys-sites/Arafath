import React, { useState } from 'react';
import { Trophy, Award, Newspaper, ExternalLink, CheckCircle2, ZoomIn } from 'lucide-react';
import { PRESS_ITEMS } from '../data/portfolioData';
import { ShinyText } from './ShinyText';
import { BlurText } from './BlurText';

export const AwardsSection: React.FC = () => {
  const [selectedPress, setSelectedPress] = useState<typeof PRESS_ITEMS[0] | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <section id="awards" className="py-24 bg-[#FFFFFF] border-b border-[#E8E4DC] text-[#1A1817] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
            Accolades & Press Features
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1817] tracking-tight font-normal">
            Recognized by{' '}
            <ShinyText
              text="Industry Authorities"
              color="#B88E28"
              shineColor="#FFF5B8"
              speed={2.5}
              className="italic font-serif font-light text-[#B88E28]"
            />
          </h2>
          <BlurText
            text="Award-winning culinary excellence verified by national competitions, Hozpitality Excellence Awards, the Emirates Culinary Guild, and premier UAE publications."
            delay={25}
            animateBy="words"
            className="text-[#68645E] text-sm sm:text-base font-light justify-center"
          />
        </div>

        {/* 2021 Gold Award Featured Ceremony Spotlight Banner */}
        <div className="mt-14 bg-[#FAF9F6] border border-[#B88E28]/30 hover:border-[#B88E28] transition-colors p-6 sm:p-8 shadow-minimal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-5 relative group cursor-pointer overflow-hidden border border-[#E8E4DC] bg-[#111111] h-80 sm:h-[400px]" onClick={() => setIsPhotoModalOpen(true)}>
              <img
                src="/gold_award_2021_enhanced.png"
                alt="Chef Yaseer Arafath 2021 Gold Award Ceremony"
                className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 bg-[#B88E28] text-white text-[10px] font-mono uppercase tracking-wider px-3 py-1 font-bold flex items-center space-x-1">
                <Trophy className="w-3 h-3 text-white" />
                <span>2021 GOLD AWARD</span>
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 p-2 text-[#1A1817] border border-[#E8E4DC] opacity-90 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#B88E28]" />
              </div>
              <div className="absolute bottom-3 left-3 text-white font-mono text-[11px] drop-shadow-md">
                Click to view enhanced ceremony photo
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2 text-[#B88E28] font-mono text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Middle East Chef Excellence Awards 2021</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif text-[#1A1817] font-normal leading-snug">
                Gold Award: Sous Chef of the Year 2021
              </h3>

              <p className="text-[#B88E28] font-mono text-xs font-semibold">
                Presented by Hozpitality Group • Slices Catering Services Dubai
              </p>

              <p className="text-[#44403C] text-sm leading-relaxed font-light">
                Chef Yaseer Arafath was conferred the prestigious <strong>Gold Award for Sous Chef of the Year</strong> at the 4th Middle East Chef Excellence Awards in recognition of exceptional culinary operations, high-capacity central kitchen management, and gourmet menu innovation.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#68645E]">
                <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 border border-[#E8E4DC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Verified Ceremony Stage Photo</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-white px-3 py-1.5 border border-[#E8E4DC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Slices Catering Leadership</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Spotlight Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
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
              <div
                key={press.id}
                onClick={() => setSelectedPress(press)}
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
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 2021 Gold Award Photo Zoom Modal */}
      {isPhotoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8E4DC] max-w-2xl w-full p-6 relative space-y-4 text-left shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#B88E28] uppercase tracking-widest bg-[#FAF9F6] px-3.5 py-1 border border-[#E8E4DC]">
                2021 Gold Award Presentation Ceremony
              </span>
              <button
                onClick={() => setIsPhotoModalOpen(false)}
                className="text-[#68645E] hover:text-[#1A1817] text-xs bg-[#FAF9F6] border border-[#E8E4DC] px-3 py-1 cursor-pointer font-mono"
              >
                ✕ Close
              </button>
            </div>

            <div className="relative max-h-[70vh] overflow-hidden bg-[#111111] border border-[#E8E4DC]">
              <img
                src="/gold_award_2021_enhanced.png"
                alt="Sous Chef of the Year 2021 Gold Award Ceremony"
                className="w-full h-full max-h-[65vh] object-contain mx-auto"
              />
            </div>

            <div className="space-y-1 font-mono text-xs text-[#555555]">
              <p className="font-semibold text-[#1A1817]">Hospitality Excellence - Sous Chef of the Year (Gold Award)</p>
              <p>Conferred to Yaseer Arafath, Sous Chef at Slices Catering Services Dubai (Hozpitality Group)</p>
            </div>
          </div>
        </div>
      )}

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

            {selectedPress.image && (
              <div className="relative h-64 overflow-hidden border border-[#E8E4DC] bg-[#FAFAFA]">
                <img
                  src={selectedPress.image}
                  alt={selectedPress.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

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





