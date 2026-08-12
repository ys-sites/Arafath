import React, { useState } from 'react';
import { Sparkles, Utensils, CheckCircle2, Loader2, RefreshCw } from 'lucide-react';
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
  const [conceptType, setConceptType] = useState('Restaurant & Hotel Menu Concept');
  const [cuisinePreference, setCuisinePreference] = useState('Levant & Modern Fusion');
  const [collaborationFocus, setCollaborationFocus] = useState('Executive Culinary Directorship');
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
          eventType: conceptType,
          cuisinePreference,
          guestCount: 'N/A (Consulting)',
          dietary: collaborationFocus,
          budgetTier: 'Executive Concept',
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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#EEEEEE] max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-[#111111]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EEEEEE]">
          <div className="flex items-center space-x-3 font-mono">
            <div className="w-8 h-8 bg-[#FAFAFA] border border-[#EEEEEE] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#99731C]" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-[#111111] font-normal">AI Culinary Concept Curator</h3>
              <p className="text-[10px] text-[#99731C] uppercase tracking-wider font-semibold">Chef Yaseer Arafath • Gemini Intelligence</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#666666] hover:text-[#111111] font-mono text-xs bg-[#FAFAFA] px-3 py-1.5 cursor-pointer border border-[#EEEEEE]"
          >
            ✕ Close
          </button>
        </div>

        {/* Input Form vs Generated Menu Result */}
        {!generatedMenu ? (
          <form onSubmit={handleGenerateMenu} className="mt-6 space-y-4 text-left">
            <p className="text-xs text-[#555555] leading-relaxed font-light">
              Select your culinary direction below. Chef Yaseer's AI Curator will generate a 4-course menu concept proposal with dish descriptions, plating notes, and flavor pairings for your review.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Concept Type</label>
                <select
                  value={conceptType}
                  onChange={(e) => setConceptType(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-[#EEEEEE] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                >
                  <option value="Restaurant & Hotel Menu Concept">Restaurant & Hotel Menu Concept</option>
                  <option value="Executive Fine Dining Tasting">Executive Fine Dining Tasting</option>
                  <option value="Live Molecular Demonstration">Live Molecular Demonstration</option>
                  <option value="Brand Partnership & Product Launch">Brand Partnership & Product Launch</option>
                </select>
              </div>

              <div>
                <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Cuisine Style</label>
                <select
                  value={cuisinePreference}
                  onChange={(e) => setCuisinePreference(e.target.value)}
                  className="w-full bg-[#FAFAFA] border border-[#EEEEEE] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                >
                  <option value="Levant & Modern Fusion">Levant & Modern Middle Eastern</option>
                  <option value="Molecular Gastronomy">Molecular Gastronomy & Spheres</option>
                  <option value="Charcoal Grill & Wagyu">Charcoal Binchotan & Prime Meats</option>
                  <option value="Seafood & Citrus Elixirs">Red Sea Seafood & Cold-Pressed Elixirs</option>
                </select>
              </div>
            </div>

            <div className="text-xs font-mono">
              <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Collaboration Focus</label>
              <input
                type="text"
                value={collaborationFocus}
                onChange={(e) => setCollaborationFocus(e.target.value)}
                className="w-full bg-[#FAFAFA] border border-[#EEEEEE] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                placeholder="e.g. Menu Revamp, Recipe R&D, Executive Directorship"
              />
            </div>

            <div className="text-xs font-mono">
              <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Culinary & Plating Vision Notes</label>
              <textarea
                value={specificNotes}
                onChange={(e) => setSpecificNotes(e.target.value)}
                rows={3}
                className="w-full bg-[#FAFAFA] border border-[#EEEEEE] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] resize-none font-sans font-light"
                placeholder="Specific flavor notes, decor style, or special culinary requests..."
              />
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest py-4 transition-colors flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Generating Custom Concept with Gemini...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Curate Culinary Concept</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Menu Result Display */
          <div className="mt-6 space-y-5 text-left max-h-[70vh] overflow-y-auto pr-2">
            
            <div className="p-5 bg-[#FAFAFA] border border-[#EEEEEE]">
              <div className="flex items-center justify-between font-mono">
                <span className="text-[10px] uppercase text-[#99731C] bg-white px-2.5 py-0.5 border border-[#EEEEEE] font-semibold">
                  Custom Proposal Result
                </span>
                <span className="text-xs text-[#888888]">Lead Time: {generatedMenu.estimatedPrepLeadTime}</span>
              </div>
              <h4 className="text-2xl font-serif font-normal text-[#111111] mt-2">
                {generatedMenu.menuTitle}
              </h4>
              <p className="text-xs text-[#555555] mt-1 leading-relaxed font-light">
                {generatedMenu.conceptOverview}
              </p>
            </div>

            {/* Courses list */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-[#99731C] font-bold tracking-wider block">Proposed 4-Course Progression</span>

              {generatedMenu.courses.map((course, idx) => (
                <div key={idx} className="bg-[#FAFAFA] border border-[#EEEEEE] p-5 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-[#99731C] text-[11px] font-bold">
                      {course.courseName}
                    </span>
                    <span className="text-[10px] text-[#888888]">Course 0{idx + 1}</span>
                  </div>

                  <h5 className="text-[#111111] font-serif font-normal text-base">
                    {course.dishTitle}
                  </h5>

                  <p className="text-[#555555] font-light">{course.description}</p>

                  <div className="pt-2 border-t border-[#EEEEEE] grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="text-[#888888]">
                      <strong className="text-[#99731C]">Plating:</strong> {course.platingNotes}
                    </div>
                    <div className="text-[#888888]">
                      <strong className="text-[#99731C]">Pairing:</strong> {course.pairingSuggestion}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chef Special Touch */}
            <div className="p-4 bg-[#FAFAFA] border border-[#EEEEEE] text-xs space-y-1 font-mono">
              <span className="font-semibold text-[#99731C] uppercase tracking-wider block">Chef Yaseer's Signature Finishing Touch:</span>
              <p className="text-[#555555] font-sans font-light">{generatedMenu.chefSpecialTouch}</p>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const summary = `${generatedMenu.menuTitle}: ${generatedMenu.courses.map(c => c.dishTitle).join(', ')}`;
                  onAttachMenuToBooking(generatedMenu.menuTitle, summary);
                  onClose();
                }}
                className="flex-1 bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest py-3.5 transition-colors text-center cursor-pointer flex items-center justify-center space-x-2"
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Attach Concept to Collaboration Inquiry</span>
              </button>

              <button
                onClick={() => setGeneratedMenu(null)}
                className="bg-[#FAFAFA] text-[#666666] hover:text-[#111111] font-mono text-xs px-4 py-3.5 border border-[#EEEEEE] cursor-pointer flex items-center justify-center space-x-1"
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
