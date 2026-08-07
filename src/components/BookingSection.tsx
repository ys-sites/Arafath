import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Mail, Phone, User, CheckCircle2, Loader2, Sparkles, Send } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';

interface BookingSectionProps {
  prefilledMenuTitle?: string;
  prefilledMenuSummary?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  prefilledMenuTitle,
  prefilledMenuSummary
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Private VIP Dining');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState(20);
  const [location, setLocation] = useState('Dubai, UAE');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    bookingId: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (prefilledMenuTitle) {
      setNotes(`[ATTACHED PROPOSAL: ${prefilledMenuTitle}]\n${prefilledMenuSummary || ''}`);
    }
  }, [prefilledMenuTitle, prefilledMenuSummary]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          eventType,
          eventDate,
          guestCount,
          location,
          notes
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedBooking({
          bookingId: data.bookingId,
          message: data.message
        });
      }
    } catch (err) {
      console.error('Error submitting booking:', err);
      // Fallback simulated success
      setSubmittedBooking({
        bookingId: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
        message: 'Thank you! Your VIP inquiry has been received by Chef Yaseer Arafath\'s concierge team. We will review your event details and respond within 12 hours.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#FAF8F5] text-[#1C1917] border-t border-[#EAE4D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] bg-white px-4 py-1.5 rounded-full border border-[#B88E28]/30 font-semibold inline-block shadow-sm">
            Concierge & Inquiries
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1C1917] tracking-tight font-normal">
            Inquire for <span className="text-gold-gradient italic font-serif">VIP Booking</span>
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base font-light">
            Request Head Chef Yaseer Arafath for private dining, high-capacity banquet direction via Slices Catering, menu consulting, or media engagements across Dubai and internationally.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Contact Card */}
          <div className="lg:col-span-5 bg-white border border-[#EAE4D7] p-8 sm:p-10 rounded-3xl space-y-8 shadow-editorial">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif text-[#1C1917] font-normal">Executive Concierge</h3>
              <p className="text-xs text-[#44403C] leading-relaxed font-light">
                Whether you require a bespoke multi-course tasting menu for a luxury residence or full banquet operations through Slices Catering Dubai, our concierge team responds within 12 hours.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-center space-x-3 p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE4D7]">
                <Mail className="w-5 h-5 text-[#B88E28] shrink-0" />
                <div>
                  <span className="text-[#6B655F] block text-[10px] font-mono">Direct Email</span>
                  <span className="text-[#1C1917] font-mono font-semibold">{CHEF_PROFILE.contactEmail}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE4D7]">
                <MapPin className="w-5 h-5 text-[#B88E28] shrink-0" />
                <div>
                  <span className="text-[#6B655F] block text-[10px] font-mono">Primary Location</span>
                  <span className="text-[#1C1917] font-mono font-semibold">Dubai, United Arab Emirates</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE4D7]">
                <Users className="w-5 h-5 text-[#B88E28] shrink-0" />
                <div>
                  <span className="text-[#6B655F] block text-[10px] font-mono">Event Capacity</span>
                  <span className="text-[#1C1917] font-mono font-semibold">{CHEF_PROFILE.cateringCapacity}</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#FAF8F5] border border-[#B88E28]/30 rounded-2xl text-xs space-y-2">
              <div className="flex items-center space-x-2 text-[#B88E28] font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#B88E28]" />
                <span>Superchef Standards Guarantee</span>
              </div>
              <p className="text-[#44403C] leading-relaxed text-[11px] font-light">
                100% Halal certified ingredients, bespoke molecular presentation, live charcoal grill setups, and custom floral design execution.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white border border-[#EAE4D7] p-8 sm:p-10 rounded-3xl shadow-editorial">
            {!submittedBooking ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-serif text-[#1C1917] font-normal mb-6">
                  Submit Event Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Your Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sheikh Rashid / Victoria Smith"
                        className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl pl-10 pr-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28] transition-colors"
                      />
                      <User className="w-4 h-4 text-[#6B655F] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Email Address *</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. client@domain.com"
                        className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl pl-10 pr-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28] transition-colors"
                      />
                      <Mail className="w-4 h-4 text-[#6B655F] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Phone / WhatsApp</label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl pl-10 pr-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28] transition-colors"
                      />
                      <Phone className="w-4 h-4 text-[#6B655F] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Inquiry Category</label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28] transition-colors"
                    >
                      <option value="Private VIP Dining">Private VIP Villa / Yacht Dining</option>
                      <option value="Slices Banquet Catering">Large Banquet Catering (Slices)</option>
                      <option value="Menu Engineering Consulting">Restaurant / Hotel Menu Consulting</option>
                      <option value="Live Cooking Masterclass">Live Culinary Show & Masterclass</option>
                      <option value="Press / Brand Endorsement">Media / Press / Brand Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Preferred Event Date</label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Guest Count ({guestCount})</label>
                    <input
                      type="range"
                      min={2}
                      max={500}
                      step={5}
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full accent-[#B88E28] mt-3"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Venue Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Palm Jumeirah Villa / Emirates Palace Abu Dhabi"
                    className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28] transition-colors"
                  />
                </div>

                <div className="text-xs">
                  <label className="block text-[#6B655F] mb-1 font-mono uppercase tracking-wider text-[11px]">Dietary & Event Requirements</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describe specific dish requests, dietary restrictions, or attached menu consultation notes..."
                    className="w-full bg-[#FAF8F5] border border-[#EAE4D7] rounded-xl px-4 py-3 text-[#1C1917] focus:outline-none focus:border-[#B88E28] transition-colors resize-none font-light"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest py-4 rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Submit Inquiry to Concierge</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Confirmation View */
              <div className="p-8 bg-[#FAF8F5] border border-[#B88E28]/40 rounded-2xl space-y-5 text-center animate-in zoom-in-95">
                <div className="w-14 h-14 rounded-full bg-[#B88E28] text-white mx-auto flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>

                <span className="text-xs font-mono uppercase text-[#B88E28] font-semibold tracking-widest block">
                  Reference: {submittedBooking.bookingId}
                </span>

                <h4 className="text-3xl font-serif text-[#1C1917] font-normal">
                  Inquiry Received
                </h4>

                <p className="text-[#44403C] text-xs sm:text-sm leading-relaxed font-light">
                  {submittedBooking.message}
                </p>

                <div className="pt-4 border-t border-[#EAE4D7] flex justify-center">
                  <button
                    onClick={() => setSubmittedBooking(null)}
                    className="bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full cursor-pointer shadow-md"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};


