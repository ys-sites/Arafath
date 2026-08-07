import React, { useState } from 'react';
import { Sparkles, Utensils, CheckCircle2, ArrowRight, Loader2, RefreshCw } from 'lucide-react';
import { AIMenuResponse } from '../types';

interface AIMenuCuratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAttachMenuToBooking: (menuTitle: string, menuSummary: string) => void;
}

export const AIMenuCuratorModal: React.FC<AIMenuCuratorModalProps> = ({
  isOpen,
  onClose,
  onAttachMenuToBooking
}) => {
  const [eventType, setEventType] = useState('Exclusive VIP Dining');
  const [cuisinePreference, setCuisinePreference] = useState('Levant & Modern Fusion');
  const [guestCount, setGuestCount] = useState('25');
  const [dietary, setDietary] = useState('Halal / Organic / GF Options');
  const [budgetTier, setBudgetTier] = useState('Royal Fine Dining');
  const [specificNotes, setSpecificNotes] = useState('Focus on signature date reductions, gold leaf accents, and live charcoal smoke presentation.');

  const [loading, setLoading] = useState(false);
  const [generatedMenu, setGeneratedMenu] = useState<AIMenuResponse | null>(null);

  if (!isOpen) return null;

  const handleGenerateMenu = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ai-menu-curator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventType,
          cuisinePreference,
          guestCount,
          dietary,
          budgetTier,
          specificNotes
        })
      });

      const data = await res.json();
      if (data.success && data.menu) {
        setGeneratedMenu(data.menu);
      }
    } catch (err) {
      console.error('Error generating AI menu proposal:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#EAE4D7] max-w-3xl w-full p-6 sm:p-8 rounded-3xl shadow-2xl relative my-8 text-[#1C1917] animate-in zoom-in-95">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EAE4D7]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B88E28]/30 flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-[#B88E28]" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-[#1C1917] font-normal">AI Bespoke Menu Curator</h3>
              <p className="text-[11px] text-[#B88E28] font-mono font-semibold">Chef Yaseer Arafath • Gemini Intelligence</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#57534E] hover:text-[#1C1917] text-xs bg-[#FAF8F5] px-3 py-1.5 rounded-full cursor-pointer border border-[#EAE4D7]"
          >
            ✕ Close
          </button>
        </div>

        {/* Input Form vs Generated Menu Result */}
        {!generatedMenu ? (
          <form onSubmit={handleGenerateMenu} className="mt-6 space-y-4 text-left">
            <p className="text-xs text-[#57534E] leading-relaxed font-light">
              Define your event parameters below. Chef Yaseer's AI Curator will generate an exclusive 4-course gourmet menu with dish descriptions, plating notes, and beverage pairings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Event Type</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28]"
                >
                  <option value="Exclusive VIP Dining">Exclusive VIP Private Dining</option>
                  <option value="Gala Wedding Banquet">Gala Wedding Banquet</option>
                  <option value="Corporate Hospitality">Corporate Hospitality Summit</option>
                  <option value="Live Molecular Masterclass">Live Molecular Masterclass</option>
                  <option value="Yacht / Villa Dinner">Yacht / Luxury Villa Dinner</option>
                </select>
              </div>

              <div>
                <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Cuisine Style</label>
                <select
                  value={cuisinePreference}
                  onChange={(e) => setCuisinePreference(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28]"
                >
                  <option value="Levant & Modern Fusion">Levant & Modern Middle Eastern</option>
                  <option value="Molecular Gastronomy">Molecular Gastronomy & Spheres</option>
                  <option value="Charcoal Grill & Wagyu">Charcoal Binchotan & Prime Meats</option>
                  <option value="Seafood & Citrus Elixirs">Red Sea Seafood & Cold-Pressed Elixirs</option>
                </select>
              </div>

              <div>
                <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Expected Guests</label>
                <input
                  type="text"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28]"
                  placeholder="e.g. 15, 50, 200"
                />
              </div>

              <div>
                <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Budget / Service Tier</label>
                <select
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28]"
                >
                  <option value="Royal Fine Dining">Royal Fine Dining (Gold Leaf & Truffle)</option>
                  <option value="Executive Premium">Executive Premium (4-Course)</option>
                  <option value="Luxury Banquet">Gourmet Luxury Banquet</option>
                </select>
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Dietary Preferences</label>
              <input
                type="text"
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28]"
                placeholder="e.g. Halal, Gluten-Free, Keto, Vegan option for 4 guests"
              />
            </div>

            <div className="text-xs">
              <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Theme & Plating Preferences</label>
              <textarea
                value={specificNotes}
                onChange={(e) => setSpecificNotes(e.target.value)}
                rows={2}
                className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28] resize-none font-light"
                placeholder="Specific flavor notes, decor style, or special requests..."
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest py-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Generating Custom Menu with Gemini...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Curate Bespoke Event Menu</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Menu Result Display */
          <div className="mt-6 space-y-5 text-left max-h-[70vh] overflow-y-auto pr-2">
            
            <div className="p-5 bg-[#FAF8F5] border border-[#EAE4D7] rounded-2xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-[#B88E28] bg-white px-2.5 py-0.5 rounded border border-[#B88E28]/30 font-semibold">
                  Custom Proposal Result
                </span>
                <span className="text-xs text-[#6B655F]">Lead Time: {generatedMenu.estimatedPrepLeadTime}</span>
              </div>
              <h4 className="text-2xl font-serif font-normal text-[#1C1917] mt-2">
                {generatedMenu.menuTitle}
              </h4>
              <p className="text-xs text-[#44403C] mt-1 leading-relaxed font-light">
                {generatedMenu.conceptOverview}
              </p>
            </div>

            {/* Courses list */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-[#B88E28] font-bold tracking-wider block">Proposed 4-Course Progression</span>

              {generatedMenu.courses.map((course, idx) => (
                <div key={idx} className="bg-[#FAF8F5] border border-[#EAE4D7] p-5 rounded-2xl space-y-2 text-xs shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#B88E28] font-mono text-[11px] font-bold">
                      {course.courseName}
                    </span>
                    <span className="text-[10px] text-[#6B655F]">Course 0{idx + 1}</span>
                  </div>

                  <h5 className="text-[#1C1917] font-serif font-normal text-base">
                    {course.dishTitle}
                  </h5>

                  <p className="text-[#44403C] font-light">{course.description}</p>

                  <div className="pt-2 border-t border-[#EAE4D7] grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                    <div className="text-[#6B655F]">
                      <strong className="text-[#B88E28]">Plating:</strong> {course.platingNotes}
                    </div>
                    <div className="text-[#6B655F]">
                      <strong className="text-[#B88E28]">Pairing:</strong> {course.pairingSuggestion}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chef Special Touch */}
            <div className="p-4 bg-[#FAF8F5] border border-[#B88E28]/30 rounded-2xl text-xs space-y-1">
              <span className="font-semibold text-[#B88E28] uppercase tracking-wider block">Chef Yaseer's Signature Finishing Touch:</span>
              <p className="text-[#44403C] font-light">{generatedMenu.chefSpecialTouch}</p>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const summary = `${generatedMenu.menuTitle}: ${generatedMenu.courses.map(c => c.dishTitle).join(', ')}`;
                  onAttachMenuToBooking(generatedMenu.menuTitle, summary);
                  onClose();
                }}
                className="flex-1 bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest py-3.5 rounded-xl shadow-md transition-all text-center cursor-pointer flex items-center justify-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Attach Menu to Booking Request</span>
              </button>

              <button
                onClick={() => setGeneratedMenu(null)}
                className="bg-[#FAF8F5] text-[#57534E] hover:text-[#1C1917] text-xs px-4 py-3.5 rounded-xl border border-[#EAE4D7] cursor-pointer flex items-center justify-center space-x-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Adjust Parameters</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

