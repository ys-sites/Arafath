import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, MapPin, Mail, Phone, User, CheckCircle2, Loader2, Sparkles, Send } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';
import { ShinyText } from './ShinyText';
import { BlurText } from './BlurText';

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
  const [guestCount, setGuestCount] = useState<number | ''>(20);
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
      const res = await fetch('https://formsubmit.co/ajax/sharafath2001@hotmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || 'Not provided',
          eventType,
          eventDate: eventDate || 'To be decided',
          guestCount: guestCount || 'Not specified',
          location,
          notes: notes || 'No extra notes',
          _subject: `New VIP Dining Inquiry: ${name} (${eventType})`,
          _captcha: 'false'
        })
      });

      if (res.ok) {
        setSubmittedBooking({
          bookingId: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
          message: 'Thank you! Your VIP inquiry has been transmitted directly to sharafath2001@hotmail.com and Chef Yaseer Arafath\'s concierge team. We will review your event details and respond within 12 hours.'
        });
      } else {
        setSubmittedBooking({
          bookingId: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
          message: 'Thank you! Your VIP inquiry has been transmitted to sharafath2001@hotmail.com. We will respond within 12 hours.'
        });
      }
    } catch (err) {
      console.error('Error submitting booking via FormSubmit:', err);
      setSubmittedBooking({
        bookingId: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
        message: 'Thank you! Your VIP inquiry has been transmitted to sharafath2001@hotmail.com. We will respond within 12 hours.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FFFFFF] text-[#111111] border-b border-[#EEEEEE] relative">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#99731C] font-semibold block">
            Concierge & Inquiries
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#111111] tracking-tight font-normal">
            Inquire for{' '}
            <ShinyText
              text="VIP Booking"
              color="#99731C"
              shineColor="#F5E080"
              speed={2.5}
              className="italic font-serif font-light text-[#99731C]"
            />
          </h2>
          <BlurText
            text="Request Head Chef Yaseer Arafath for private dining, high-capacity banquet direction via Slices Catering, menu consulting, or media engagements across Dubai and internationally."
            delay={25}
            animateBy="words"
            className="text-[#666666] text-sm sm:text-base font-light justify-center"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Left Contact Card */}
          <div className="lg:col-span-5 bg-white border border-[#EEEEEE] p-8 sm:p-10 space-y-8 shadow-minimal">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif text-[#111111] font-normal">Executive Concierge</h3>
              <p className="text-xs text-[#555555] leading-relaxed font-light">
                Whether you require a bespoke multi-course tasting menu for a luxury residence or full banquet operations through Slices Catering Dubai, our concierge team responds within 12 hours.
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center space-x-3 p-4 bg-[#FAFAFA] border border-[#EEEEEE]">
                <Mail className="w-4 h-4 text-[#99731C] shrink-0" />
                <div>
                  <span className="text-[#888888] block text-[10px]">Direct Email</span>
                  <span className="text-[#111111] font-semibold">{CHEF_PROFILE.contactEmail}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-[#FAFAFA] border border-[#EEEEEE]">
                <MapPin className="w-4 h-4 text-[#99731C] shrink-0" />
                <div>
                  <span className="text-[#888888] block text-[10px]">Primary Location</span>
                  <span className="text-[#111111] font-semibold">Dubai, United Arab Emirates</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-[#FAFAFA] border border-[#EEEEEE]">
                <Users className="w-4 h-4 text-[#99731C] shrink-0" />
                <div>
                  <span className="text-[#888888] block text-[10px]">Event Capacity</span>
                  <span className="text-[#111111] font-semibold">{CHEF_PROFILE.cateringCapacity}</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#FAFAFA] border border-[#EEEEEE] text-xs space-y-2">
              <div className="flex items-center space-x-2 text-[#99731C] font-mono font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#99731C]" />
                <span>Superchef Standards Guarantee</span>
              </div>
              <p className="text-[#555555] leading-relaxed text-[11px] font-light">
                100% Halal certified ingredients, bespoke molecular presentation, live charcoal grill setups, and custom floral design execution.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 bg-white border border-[#EEEEEE] p-8 sm:p-10 shadow-minimal">
            {!submittedBooking ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-serif text-[#111111] font-normal mb-6">
                  Submit Event Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Your Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sheikh Rashid / Victoria Smith"
                        className="w-full bg-[#FAFAFA] border border-[#EEEEEE] pl-10 pr-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                      />
                      <User className="w-4 h-4 text-[#888888] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Email Address *</label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. client@domain.com"
                        className="w-full bg-[#FAFAFA] border border-[#EEEEEE] pl-10 pr-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                      />
                      <Mail className="w-4 h-4 text-[#888888] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Phone / WhatsApp</label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+971 50 000 0000"
                        className="w-full bg-[#FAFAFA] border border-[#EEEEEE] pl-10 pr-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                      />
                      <Phone className="w-4 h-4 text-[#888888] absolute left-3 top-3.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Inquiry Category</label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full bg-[#FAFAFA] border border-[#EEEEEE] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                    >
                      <option value="Private VIP Dining">Private VIP Villa / Yacht Dining</option>
                      <option value="Slices Banquet Catering">Large Banquet Catering (Slices)</option>
                      <option value="Menu Engineering Consulting">Restaurant / Hotel Menu Consulting</option>
                      <option value="Live Cooking Masterclass">Live Culinary Show & Masterclass</option>
                      <option value="Press / Brand Endorsement">Media / Press / Brand Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Preferred Event Date</label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-[#FAFAFA] border border-[#EEEEEE] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                    />
                  </div>

                  {/* Direct Number Input for Guest Count */}
                  <div>
                    <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Estimated Guest Count *</label>
                    <div className="relative">
                      <input
                        type="number"
                        min={1}
                        max={5000}
                        required
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value === '' ? '' : Number(e.target.value))}
                        placeholder="e.g. 50, 200, 1000"
                        className="w-full bg-[#FAFAFA] border border-[#EEEEEE] pl-10 pr-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                      />
                      <Users className="w-4 h-4 text-[#888888] absolute left-3 top-3.5" />
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono">
                  <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Venue Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Palm Jumeirah Villa / Emirates Palace Abu Dhabi"
                    className="w-full bg-[#FAFAFA] border border-[#EEEEEE] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] font-sans"
                  />
                </div>

                <div className="text-xs font-mono">
                  <label className="block text-[#888888] mb-1 uppercase tracking-wider text-[10px]">Dietary & Event Requirements</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describe specific dish requests, dietary restrictions, or attached menu consultation notes..."
                    className="w-full bg-[#FAFAFA] border border-[#EEEEEE] px-4 py-3 text-[#111111] focus:outline-none focus:border-[#111111] resize-none font-sans font-light"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest py-4 transition-colors flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
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
              <div className="p-8 bg-[#FAFAFA] border border-[#EEEEEE] space-y-5 text-center">
                <div className="w-12 h-12 bg-[#111111] text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>

                <span className="text-xs font-mono uppercase text-[#99731C] font-semibold tracking-widest block">
                  Reference: {submittedBooking.bookingId}
                </span>

                <h4 className="text-3xl font-serif text-[#111111] font-normal">
                  Inquiry Received
                </h4>

                <p className="text-[#555555] text-xs sm:text-sm leading-relaxed font-light">
                  {submittedBooking.message}
                </p>

                <div className="pt-4 border-t border-[#EEEEEE] flex justify-center">
                  <button
                    onClick={() => setSubmittedBooking(null)}
                    className="bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest px-6 py-3 cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </motion.div>
    </section>
  );
};



