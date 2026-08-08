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
    <section id="about" className="py-24 bg-[#FFFFFF] text-[#111111] relative border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#99731C] font-semibold block">
            Biography & Credentials
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#111111] tracking-tight font-normal">
            A Decade of <span className="italic font-serif font-light text-[#444444]">Culinary Distinction</span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed font-light">
            From formal catering management studies at Bharathiar University to steering operations on the QE2 ocean liner and leading culinary directorship as Head Chef at Slices Catering Dubai.
          </p>
        </div>

        {/* Bio & Kitchen Action Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Action Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="h-full min-h-[420px] rounded-none bg-[#FAFAFA] border border-[#EEEEEE] p-3 shadow-minimal relative flex flex-col justify-between">
              <div className="relative h-[360px] lg:h-[440px] overflow-hidden group">
                <img
                  src={CHEF_PROFILE.kitchenImage}
                  alt="Chef Yaseer Arafath in Kitchen Action"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-200 tracking-widest font-semibold block">
                    Haute Cuisine Precision
                  </span>
                  <p className="text-sm font-serif text-white font-normal">Sautéing, Charcoal Grilling & Molecular Plating</p>
                </div>
              </div>

              {/* Quick Credential Strip */}
              <div className="mt-3 p-3 bg-white border border-[#EEEEEE] flex items-center justify-between text-xs text-[#555555]">
                <span className="font-mono text-[11px] font-semibold text-[#111111]">Bharathiar University Alumnus</span>
                <span className="font-mono text-[11px] text-[#888888]">Slices Catering Dubai</span>
              </div>
            </div>
          </div>

          {/* Editorial Bio Text Box */}
          <div className="lg:col-span-7 bg-white border border-[#EEEEEE] p-8 sm:p-10 shadow-minimal flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-5">
              <div className="flex items-center space-x-3 text-[#111111]">
                <ChefHat className="w-5 h-5 text-[#99731C]" />
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111111] font-normal">The Journey of Head Chef Yaseer Arafath</h3>
              </div>
              <p className="text-[#444444] text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
                {CHEF_PROFILE.bio}
              </p>
            </div>

            {/* Culinary Methodologies */}
            <div className="space-y-3 pt-6 border-t border-[#EEEEEE]">
              <span className="text-[11px] font-mono text-[#888888] uppercase tracking-widest block font-semibold">
                Signature Techniques & Expertise
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="bg-[#FAFAFA] text-[#111111] border border-[#EEEEEE] px-3.5 py-2 flex items-center space-x-2">
                  <Flame className="w-3.5 h-3.5 text-[#99731C]" />
                  <span>Binchotan Charcoal Grilling</span>
                </span>
                <span className="bg-[#FAFAFA] text-[#111111] border border-[#EEEEEE] px-3.5 py-2 flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#99731C]" />
                  <span>Molecular Gastronomy & Spheres</span>
                </span>
                <span className="bg-[#FAFAFA] text-[#111111] border border-[#EEEEEE] px-3.5 py-2 flex items-center space-x-2">
                  <Building2 className="w-3.5 h-3.5 text-[#99731C]" />
                  <span>High-Capacity Banquet Operations</span>
                </span>
                <span className="bg-[#FAFAFA] text-[#111111] border border-[#EEEEEE] px-3.5 py-2 flex items-center space-x-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#99731C]" />
                  <span>Menu Engineering & Audits</span>
                </span>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer bg-[#111111] hover:bg-[#333333] text-white text-xs font-mono uppercase tracking-widest px-6 py-3.5 transition-colors flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Inquire for Executive Consultation</span>
              </button>
            </div>
          </div>

        </div>

        {/* Academic & Guild Recognition Section */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Degree Card */}
          <div className="bg-white border border-[#EEEEEE] p-8 shadow-minimal space-y-4 hover:border-[#111111] transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#FAFAFA] border border-[#EEEEEE] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#111111]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#99731C] tracking-wider font-semibold">Academic Qualification</span>
                <h4 className="text-[#111111] font-serif text-lg font-normal mt-0.5">Bachelor's in Restaurant, Culinary & Catering Management</h4>
                <p className="text-[#888888] text-xs mt-1 font-mono">Bharathiar University (2007–2010)</p>
              </div>
            </div>
            <p className="text-[#555555] text-xs sm:text-sm leading-relaxed pl-14 font-light">
              Full 3-year formal degree covering classical food science, large-scale kitchen operations, menu engineering, sanitation, and catering logistics.
            </p>
          </div>

          {/* Guild Recognition Card */}
          <div className="bg-white border border-[#EEEEEE] p-8 shadow-minimal space-y-4 hover:border-[#111111] transition-colors">
            <div className="flex items-center space-x-3 text-[#111111]">
              <Award className="w-5 h-5 text-[#99731C]" />
              <h4 className="text-[#111111] font-serif text-lg font-normal">Emirates Culinary Guild Recognition</h4>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#555555] font-light">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#99731C] shrink-0 mt-0.5" />
                <span>Silver Medalist at Wathba Dates Festival & Auction (Dec 2023) for Levant Main Course.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#99731C] shrink-0 mt-0.5" />
                <span>ExpoCulinaire Salon Culinaire medalist recognized by Worldchefs international judges.</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#99731C] shrink-0 mt-0.5" />
                <span>Guest Chief Judge & Demonstrator at Sir Issac Newton Hotel Management Dept.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Career Timeline */}
        <div className="mt-20 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#EEEEEE] gap-4">
            <div>
              <h3 className="text-3xl font-serif text-[#111111] font-normal">Career Milestones Timeline</h3>
              <p className="text-[#888888] text-xs font-mono mt-1">Key credentials across competitions, executive roles, and academic foundations</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {(['all', 'award', 'experience', 'education'] as const).map(tabKey => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-4 py-2 uppercase tracking-wider font-semibold transition-all ${
                    activeTab === tabKey
                      ? 'bg-[#111111] text-white'
                      : 'bg-white text-[#666666] hover:text-[#111111] border border-[#EEEEEE]'
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
                className="bg-white border border-[#EEEEEE] hover:border-[#111111] p-7 transition-all duration-300 shadow-minimal flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#111111] font-mono text-xs font-semibold bg-[#FAFAFA] px-3 py-1 border border-[#EEEEEE]">
                      {item.year}
                    </span>
                    {item.highlightBadge && (
                      <span className="text-[10px] uppercase font-mono text-[#888888] bg-[#FAFAFA] px-2.5 py-0.5 border border-[#EEEEEE]">
                        {item.highlightBadge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-[#111111] font-serif text-lg font-normal group-hover:text-[#99731C] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#888888] text-xs mt-1 font-mono">
                      {item.organization} • <span className="text-[#111111]">{item.location}</span>
                    </p>
                  </div>

                  <p className="text-[#555555] text-xs leading-relaxed font-light">
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




