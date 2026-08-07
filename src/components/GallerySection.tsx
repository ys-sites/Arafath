import React, { useState } from 'react';
import { Dish } from '../types';
import { SIGNATURE_DISHES } from '../data/portfolioData';
import { ZoomIn, Award, Utensils, Wine } from 'lucide-react';

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
    <section id="gallery" className="py-28 bg-[#FAF8F5] text-[#1C1917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] bg-white px-4 py-1.5 rounded-full border border-[#B88E28]/30 font-semibold inline-block shadow-sm">
            Culinary Plating Portfolio
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1C1917] tracking-tight font-normal">
            Signature <span className="text-gold-gradient italic font-serif">Plating Gallery</span>
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base font-light">
            Explore Chef Yaseer Arafath's signature creations—from award-winning Levant lamb to artisanal VIP banquets and cold-pressed botanical elixirs.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
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
              className={`text-xs px-5 py-2.5 rounded-full cursor-pointer uppercase tracking-wider font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#1C1917] text-white shadow-md'
                  : 'bg-white text-[#57534E] hover:text-[#1C1917] border border-[#EAE4D7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dish Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => setActiveDish(dish)}
              className="group bg-white border border-[#EAE4D7] hover:border-[#B88E28]/50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-editorial flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-68 overflow-hidden bg-[#FAF8F5]">
                <img
                  src={dish.image}
                  alt={dish.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent opacity-90" />
                
                {dish.badge && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#B88E28] font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[#B88E28]/40 shadow-sm flex items-center space-x-1.5">
                    {dish.awardWinning && <Award className="w-3 h-3 text-[#B88E28]" />}
                    <span>{dish.badge}</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md p-2 rounded-full text-[#B88E28] border border-[#EAE4D7]">
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
                <p className="text-[#44403C] text-xs leading-relaxed line-clamp-3 font-light">
                  {dish.description}
                </p>

                <div className="pt-4 border-t border-[#EAE4D7] space-y-2.5 text-xs">
                  <div className="flex items-center text-[#6B655F]">
                    <Utensils className="w-3.5 h-3.5 text-[#B88E28] mr-2 shrink-0" />
                    <span className="truncate"><strong className="text-[#1C1917] font-medium">Technique:</strong> {dish.technique}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {dish.ingredients.slice(0, 3).map((ing, idx) => (
                      <span key={idx} className="bg-[#FAF8F5] text-[#44403C] text-[10px] px-2.5 py-0.5 rounded-md border border-[#EAE4D7]">
                        {ing}
                      </span>
                    ))}
                    {dish.ingredients.length > 3 && (
                      <span className="bg-[#FAF8F5] text-[#6B655F] text-[10px] px-2 py-0.5 rounded-md border border-[#EAE4D7]">
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
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-[#EAE4D7] max-w-3xl w-full rounded-3xl shadow-2xl overflow-hidden relative my-8 animate-in zoom-in-95">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveDish(null)}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-[#1C1917] p-2 rounded-full cursor-pointer transition-colors border border-[#EAE4D7] shadow-sm"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Dish Image Column */}
              <div className="md:col-span-6 relative min-h-[320px] md:min-h-full bg-[#FAF8F5]">
                <img
                  src={activeDish.image}
                  alt={activeDish.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dish Detail Column */}
              <div className="md:col-span-6 p-7 sm:p-9 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold bg-[#1C1917] px-3 py-1 rounded-full">
                      {activeDish.category}
                    </span>
                    {activeDish.badge && (
                      <span className="text-[10px] font-mono text-[#B88E28] bg-[#FAF8F5] border border-[#B88E28]/30 px-2.5 py-0.5 rounded-full font-semibold">
                        {activeDish.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal">
                    {activeDish.title}
                  </h3>

                  <p className="text-[#44403C] text-xs sm:text-sm leading-relaxed font-light">
                    {activeDish.description}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#EAE4D7] text-xs">
                    <div>
                      <span className="text-[#B88E28] font-semibold uppercase tracking-wider block mb-1">Culinary Technique:</span>
                      <p className="text-[#44403C] italic font-light">{activeDish.technique}</p>
                    </div>

                    <div>
                      <span className="text-[#B88E28] font-semibold uppercase tracking-wider block mb-1.5">Ingredients:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeDish.ingredients.map((ing, i) => (
                          <span key={i} className="bg-[#FAF8F5] text-[#1C1917] text-[11px] px-2.5 py-1 rounded-lg border border-[#EAE4D7] font-light">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-[#B88E28] font-semibold uppercase tracking-wider block mb-1 flex items-center">
                        <Wine className="w-3.5 h-3.5 text-[#B88E28] mr-1.5" />
                        <span>Recommended Beverage Pairing:</span>
                      </span>
                      <p className="text-[#44403C] font-light">{activeDish.pairing}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EAE4D7] flex items-center space-x-3">
                  <button
                    onClick={() => {
                      const title = activeDish.title;
                      setActiveDish(null);
                      onSelectDishForBooking(title);
                    }}
                    className="flex-1 bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md transition-all text-center cursor-pointer"
                  >
                    Inquire for Dish
                  </button>
                  <button
                    onClick={() => setActiveDish(null)}
                    className="bg-[#FAF8F5] text-[#57534E] hover:text-[#1C1917] text-xs px-4 py-3.5 rounded-xl border border-[#EAE4D7] cursor-pointer"
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


