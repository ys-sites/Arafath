import React, { useState } from 'react';
import { ChefHat, GraduationCap, Building2, Flame, Award, CheckCircle2, Calendar, Sparkles } from 'lucide-react';
import { CHEF_PROFILE, CAREER_MILESTONES } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'award' | 'experience' | 'education'>('all');

  const filteredMilestones = CAREER_MILESTONES.filter(
    m => activeTab === 'all' || m.category === activeTab
  );

  return (
    <section id="about" className="py-28 bg-[#FAF8F5] text-[#1C1917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] bg-white px-4 py-1.5 rounded-full border border-[#B88E28]/30 font-semibold inline-block shadow-sm">
            Biography & Master Credentials
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1C1917] tracking-tight font-normal">
            A Decade of <span className="text-gold-gradient italic font-serif">Culinary Distinction</span>
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base leading-relaxed font-light">
            From formal catering management studies at Bharathiar University to steering operations on the QE2 ocean liner and leading high-volume culinary excellence as Head Chef at Slices Catering Dubai.
          </p>
        </div>

        {/* Bio & Kitchen Action Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Action Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="h-full min-h-[420px] rounded-3xl overflow-hidden bg-white border border-[#EAE4D7] p-3 shadow-editorial relative flex flex-col justify-between">
              <div className="relative h-[360px] lg:h-[440px] rounded-2xl overflow-hidden group">
                <img
                  src={CHEF_PROFILE.kitchenImage}
                  alt="Chef Yaseer Arafath in Kitchen Action"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-200 tracking-widest font-semibold block">
                    Haute Cuisine Precision
                  </span>
                  <p className="text-sm font-serif text-white font-normal">Sautéing, Charcoal Grilling & Molecular Plating</p>
                </div>
              </div>

              {/* Quick Credential Strip */}
              <div className="mt-3 p-3.5 bg-[#FAF8F5] rounded-xl border border-[#EAE4D7] flex items-center justify-between text-xs text-[#57534E]">
                <span className="font-semibold text-[#B88E28]">Bharathiar University Alumnus</span>
                <span className="font-mono text-[11px] text-[#6B655F]">Slices Catering Dubai</span>
              </div>
            </div>
          </div>

          {/* Editorial Bio Text Box */}
          <div className="lg:col-span-7 bg-white border border-[#EAE4D7] p-8 sm:p-10 rounded-3xl shadow-editorial flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-5">
              <div className="flex items-center space-x-3 text-[#B88E28]">
                <ChefHat className="w-6 h-6" />
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1C1917] font-normal">The Journey of Head Chef Yaseer Arafath</h3>
              </div>
              <p className="text-[#44403C] text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
                {CHEF_PROFILE.bio}
              </p>
            </div>

            {/* Culinary Methodologies */}
            <div className="space-y-3 pt-6 border-t border-[#EAE4D7]">
              <span className="text-xs font-mono text-[#B88E28] uppercase tracking-widest block font-semibold">
                Signature Techniques & Expertise
              </span>
              <div className="flex flex-wrap gap-2.5 text-xs">
                <span className="bg-[#FAF8F5] text-[#1C1917] border border-[#EAE4D7] px-4 py-2 rounded-xl flex items-center space-x-2 font-medium hover:border-[#B88E28]/40 transition-colors">
                  <Flame className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Binchotan Charcoal Grilling</span>
                </span>
                <span className="bg-[#FAF8F5] text-[#1C1917] border border-[#EAE4D7] px-4 py-2 rounded-xl flex items-center space-x-2 font-medium hover:border-[#B88E28]/40 transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Molecular Gastronomy & Spheres</span>
                </span>
                <span className="bg-[#FAF8F5] text-[#1C1917] border border-[#EAE4D7] px-4 py-2 rounded-xl flex items-center space-x-2 font-medium hover:border-[#B88E28]/40 transition-colors">
                  <Building2 className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>High-Capacity Banquet Operations</span>
                </span>
                <span className="bg-[#FAF8F5] text-[#1C1917] border border-[#EAE4D7] px-4 py-2 rounded-xl flex items-center space-x-2 font-medium hover:border-[#B88E28]/40 transition-colors">
                  <GraduationCap className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Menu Engineering & Audits</span>
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer bg-[#FAF8F5] hover:bg-[#F4F0E8] text-[#B88E28] border border-[#B88E28]/40 hover:border-[#B88E28] text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl font-semibold flex items-center space-x-2 transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#B88E28]" />
                <span>Inquire for Executive Consultation</span>
              </button>
            </div>
          </div>

        </div>

        {/* Academic & Guild Recognition Section */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Degree Card */}
          <div className="bg-white border border-[#EAE4D7] p-8 rounded-3xl shadow-editorial space-y-4 hover:border-[#B88E28]/40 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#B88E28]/30 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-[#B88E28]" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[#B88E28] tracking-wider font-semibold">Academic Qualification</span>
                <h4 className="text-[#1C1917] font-serif text-lg font-normal mt-0.5">Bachelor's in Restaurant, Culinary & Catering Management</h4>
                <p className="text-[#6B655F] text-xs mt-1">Bharathiar University (2007–2010)</p>
              </div>
            </div>
            <p className="text-[#44403C] text-xs sm:text-sm leading-relaxed pl-16 font-light">
              Full 3-year formal degree covering classical food science, large-scale kitchen operations, menu engineering, sanitation, and catering logistics.
            </p>
          </div>

          {/* Guild Recognition Card */}
          <div className="bg-white border border-[#EAE4D7] p-8 rounded-3xl shadow-editorial space-y-4 hover:border-[#B88E28]/40 transition-colors">
            <div className="flex items-center space-x-3 text-[#B88E28]">
              <Award className="w-6 h-6" />
              <h4 className="text-[#1C1917] font-serif text-lg font-normal">Emirates Culinary Guild Recognition</h4>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#44403C] font-light">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#B88E28] shrink-0 mt-0.5" />
                <span>Silver Medalist at Wathba Dates Festival & Auction (Dec 2023) for Levant Main Course.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#B88E28] shrink-0 mt-0.5" />
                <span>ExpoCulinaire Salon Culinaire medalist recognized by Worldchefs international judges.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#B88E28] shrink-0 mt-0.5" />
                <span>Guest Chief Judge & Demonstrator at Sir Issac Newton Hotel Management Dept.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Career Timeline */}
        <div className="mt-24 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 pb-5 border-b border-[#EAE4D7] gap-4">
            <div>
              <h3 className="text-3xl font-serif text-[#1C1917] font-normal">Career Milestones Timeline</h3>
              <p className="text-[#6B655F] text-xs font-light mt-1">Key credentials across competitions, executive roles, and academic foundations</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'award', 'experience', 'education'] as const).map(tabKey => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`text-xs px-4 py-2 rounded-full cursor-pointer uppercase tracking-wider font-semibold transition-all ${
                    activeTab === tabKey
                      ? 'bg-[#1C1917] text-white shadow-md'
                      : 'bg-white text-[#57534E] hover:text-[#1C1917] border border-[#EAE4D7]'
                  }`}
                >
                  {tabKey === 'all' ? 'All Milestones' : tabKey === 'award' ? 'Awards & Medals' : tabKey === 'experience' ? 'Executive Roles' : 'Education'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMilestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EAE4D7] hover:border-[#B88E28]/50 p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-editorial flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#B88E28] font-mono text-xs font-semibold bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#B88E28]/30">
                      {item.year}
                    </span>
                    {item.highlightBadge && (
                      <span className="text-[10px] uppercase font-mono text-[#6B655F] bg-[#FAF8F5] px-2.5 py-0.5 rounded border border-[#EAE4D7]">
                        {item.highlightBadge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-[#1C1917] font-serif text-lg font-normal group-hover:text-[#B88E28] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#6B655F] text-xs mt-1">
                      {item.organization} • <span className="text-[#B88E28]">{item.location}</span>
                    </p>
                  </div>

                  <p className="text-[#44403C] text-xs leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};



