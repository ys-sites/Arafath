import React, { useState } from 'react';
import { Dish } from '../types';
import { SIGNATURE_DISHES } from '../data/portfolioData';
import { ZoomIn, Award, Utensils, Wine } from 'lucide-react';
import { ShinyText } from './ShinyText';
import { BlurText } from './BlurText';

interface GallerySectionProps {
  onSelectDishForBooking: (dishTitle: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectDishForBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDish, setActiveDish] = useState<Dish | null>(null);

  const filteredDishes = SIGNATURE_DISHES.filter((dish) => {
    if (selectedCategory === 'all') return true;
    return dish.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-24 bg-[#FFFFFF] text-[#111111] relative border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#99731C] font-semibold block">
            Culinary Plating Portfolio
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#111111] tracking-tight font-normal">
            Signature{' '}
            <ShinyText
              text="Plating Gallery"
              color="#99731C"
              shineColor="#F5E080"
              speed={2.5}
              className="italic font-serif font-light text-[#99731C]"
            />
          </h2>
          <BlurText
            text="Explore Chef Yaseer Arafath's signature creations—from award-winning Levant lamb to artisanal VIP banquets and cold-pressed botanical elixirs."
            delay={30}
            animateBy="words"
            className="text-[#666666] text-sm sm:text-base font-light justify-center"
          />
        </div>

        {/* Filter Bar */}
        <div className="mt-10 flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 pb-3 sm:pb-0 scrollbar-none font-mono text-xs">
          {[
            { id: 'all', label: 'All Creations' },
            { id: 'signature', label: 'Signature Dishes' },
            { id: 'levant', label: 'Modern Levant' },
            { id: 'catering', label: 'VIP Banquets & Displays' },
            { id: 'dessert', label: 'Haute Desserts' },
            { id: 'drinks', label: 'Botanical Elixirs' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 uppercase tracking-wider font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#111111] text-white'
                  : 'bg-white text-[#666666] hover:text-[#111111] border border-[#EEEEEE]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dish Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setActiveDish(dish)}
              className="group bg-white border border-[#EEEEEE] hover:border-[#111111] hover:-translate-y-2.5 hover:shadow-2xl cursor-pointer transition-all duration-300 shadow-minimal flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-[#FAFAFA]">
                <img
                  src={dish.image}
                  alt={dish.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-90" />
                
                {dish.badge && (
                  <div className="absolute top-4 left-4 bg-white/95 text-[#111111] font-mono text-[10px] uppercase tracking-wider px-3 py-1 border border-[#EEEEEE] shadow-sm flex items-center space-x-1.5 font-semibold">
                    {dish.awardWinning && <Award className="w-3 h-3 text-[#99731C]" />}
                    <span>{dish.badge}</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-2 text-[#111111] border border-[#EEEEEE]">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-200 tracking-widest font-semibold block">
                    {dish.category}
                  </span>
                  <h3 className="text-white font-serif font-normal text-xl leading-snug">
                    {dish.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
                <p className="text-[#555555] text-xs leading-relaxed line-clamp-3 font-light">
                  {dish.description}
                </p>

                <div className="pt-4 border-t border-[#EEEEEE] space-y-2.5 text-xs font-mono">
                  <div className="flex items-center text-[#666666]">
                    <Utensils className="w-3.5 h-3.5 text-[#99731C] mr-2 shrink-0" />
                    <span className="truncate"><strong className="text-[#111111] font-medium">Technique:</strong> {dish.technique}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {dish.ingredients.slice(0, 3).map((ing, idx) => (
                      <span key={idx} className="bg-[#FAFAFA] text-[#555555] text-[10px] px-2 py-0.5 border border-[#EEEEEE]">
                        {ing}
                      </span>
                    ))}
                    {dish.ingredients.length > 3 && (
                      <span className="bg-[#FAFAFA] text-[#888888] text-[10px] px-2 py-0.5 border border-[#EEEEEE]">
                        +{dish.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom & Dish Detail Modal */}
      {activeDish && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-[#EEEEEE] max-w-3xl w-full shadow-2xl overflow-hidden relative my-8 text-left">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveDish(null)}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-[#111111] p-2 cursor-pointer border border-[#EEEEEE]"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Dish Image Column */}
              <div className="md:col-span-6 relative min-h-[320px] md:min-h-full bg-[#FAFAFA]">
                <img
                  src={activeDish.image}
                  alt={activeDish.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dish Detail Column */}
              <div className="md:col-span-6 p-7 sm:p-9 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold bg-[#111111] px-3 py-1">
                      {activeDish.category}
                    </span>
                    {activeDish.badge && (
                      <span className="text-[10px] font-mono text-[#99731C] bg-[#FAFAFA] border border-[#EEEEEE] px-2.5 py-0.5 font-semibold">
                        {activeDish.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#111111] font-normal">
                    {activeDish.title}
                  </h3>

                  <p className="text-[#555555] text-xs sm:text-sm leading-relaxed font-light">
                    {activeDish.description}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#EEEEEE] text-xs font-mono">
                    <div>
                      <span className="text-[#99731C] font-semibold uppercase tracking-wider block mb-1">Culinary Technique:</span>
                      <p className="text-[#555555] italic font-light">{activeDish.technique}</p>
                    </div>

                    <div>
                      <span className="text-[#99731C] font-semibold uppercase tracking-wider block mb-1.5">Ingredients:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeDish.ingredients.map((ing, i) => (
                          <span key={i} className="bg-[#FAFAFA] text-[#111111] text-[11px] px-2.5 py-1 border border-[#EEEEEE] font-light">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-[#99731C] font-semibold uppercase tracking-wider block mb-1 flex items-center">
                        <Wine className="w-3.5 h-3.5 text-[#99731C] mr-1.5" />
                        <span>Recommended Beverage Pairing:</span>
                      </span>
                      <p className="text-[#555555] font-light">{activeDish.pairing}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EEEEEE] flex items-center space-x-3">
                  <button
                    onClick={() => {
                      const title = activeDish.title;
                      setActiveDish(null);
                      onSelectDishForBooking(title);
                    }}
                    className="flex-1 bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest py-3.5 cursor-pointer"
                  >
                    Inquire for Dish
                  </button>
                  <button
                    onClick={() => setActiveDish(null)}
                    className="bg-[#FAFAFA] text-[#666666] hover:text-[#111111] font-mono text-xs px-4 py-3.5 border border-[#EEEEEE] cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};



