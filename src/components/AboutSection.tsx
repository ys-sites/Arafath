import React, { useState } from 'react';
import { ChefHat, GraduationCap, Building2, Flame, Award, CheckCircle2, Calendar, Sparkles, Download } from 'lucide-react';
import { CHEF_PROFILE, CAREER_MILESTONES } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'award' | 'experience' | 'education'>('all');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const filteredMilestones = CAREER_MILESTONES.filter(
    m => activeTab === 'all' || m.category === activeTab
  );

  const handleDownloadDossier = () => {
    const dossierText = `
CHEF YASEER ARAFATH — EXECUTIVE CULINARY DOSSIER
==================================================
Current Title: Head Chef at Slices Catering (Dubai, UAE)
Location: Dubai & Abu Dhabi, United Arab Emirates
Direct Contact: ${CHEF_PROFILE.contactEmail}
Instagram: https://www.instagram.com/yaseer.s.arafath/

HONORS & ACCOLADES
-------------------
• 1st Prize Winner — UAE Superchef 2024 (Xpatzhub Competition at Firki, Royal Ascot Hotel, June 2024)
• Silver Medalist — Emirates Culinary Guild (Wathba Dates Festival, Dec 2023)
• Medalist — ExpoCulinaire Salon Culinaire UAE (Worldchefs Certified)

ACADEMIC CREDENTIALS
--------------------
• Bachelor's Degree in Restaurant, Culinary & Catering Management
  Bharathiar University (2007 – 2010)

EXECUTIVE CAREER HIGHLIGHTS
----------------------------
• 2021 – Present: Head Chef @ Slices Catering Dubai (High-volume gourmet catering directorship)
• 2018 – 2021: Senior Culinary Lead @ The Arbor School Dubai
• 2015 – 2018: Sous Chef @ Queen Elizabeth 2 (QE2 Floating Hotel & Liner, Dubai)

CULINARY METHODOLOGY
---------------------
Sous-vide precision braising, Binchotan charcoal grilling, cryogenic nitrogen gastronomy, Levant heritage reductions, and high-capacity VIP banquet engineering.
    `;

    const blob = new Blob([dossierText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Chef_Yaseer_Arafath_Executive_Dossier.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="about" className="py-24 bg-[#FFFFFF] text-[#1A1817] relative border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
            Biography & Credentials
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1817] tracking-tight font-normal">
            A Decade of <span className="italic font-serif font-light text-[#4A4640]">Culinary Distinction</span>
          </h2>
          <p className="text-[#68645E] text-sm sm:text-base leading-relaxed font-light">
            From formal catering management studies at Bharathiar University to steering operations on the QE2 ocean liner and leading culinary directorship as Head Chef at Slices Catering Dubai.
          </p>
        </div>

        {/* Bio & Kitchen Action Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Action Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="h-full min-h-[420px] rounded-none bg-[#FAF9F6] border border-[#E8E4DC] p-3 shadow-minimal relative flex flex-col justify-between">
              <div className="relative h-[380px] lg:h-[480px] overflow-hidden group">
                <img
                  src="/yaseer.jpeg"
                  alt="Chef Yaseer Arafath Head Chef Dubai"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#B88E28] tracking-widest font-semibold block">
                    Chef Yaseer Arafath
                  </span>
                  <p className="text-sm font-serif text-white font-normal">Head Chef @ Slices Catering Dubai</p>
                </div>
              </div>

              {/* Quick Credential Strip */}
              <div className="mt-3 p-3 bg-white border border-[#E8E4DC] flex items-center justify-between text-xs text-[#68645E]">
                <span className="font-mono text-[11px] font-semibold text-[#1A1817]">Bharathiar University Alumnus</span>
                <span className="font-mono text-[11px] text-[#888888]">Slices Catering Dubai</span>
              </div>
            </div>
          </div>

          {/* Editorial Bio Text Box */}
          <div className="lg:col-span-7 bg-white border border-[#E8E4DC] p-8 sm:p-10 shadow-minimal flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-5">
              <div className="flex items-center space-x-3 text-[#1A1817]">
                <ChefHat className="w-5 h-5 text-[#B88E28]" />
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1817] font-normal">The Journey of Head Chef Yaseer Arafath</h3>
              </div>
              <p className="text-[#44403C] text-sm sm:text-base leading-relaxed whitespace-pre-line font-light">
                {CHEF_PROFILE.bio}
              </p>
            </div>

            {/* Culinary Methodologies */}
            <div className="space-y-3 pt-6 border-t border-[#E8E4DC]">
              <span className="text-[11px] font-mono text-[#888888] uppercase tracking-widest block font-semibold">
                Signature Techniques & Expertise
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-2 flex items-center space-x-2">
                  <Flame className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Binchotan Charcoal Grilling</span>
                </span>
                <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-2 flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Molecular Gastronomy & Spheres</span>
                </span>
                <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-2 flex items-center space-x-2">
                  <Building2 className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>High-Capacity Banquet Operations</span>
                </span>
                <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-2 flex items-center space-x-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Menu Engineering & Audits</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 font-mono text-xs">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer bg-[#1A1817] hover:bg-[#383431] text-white uppercase tracking-widest px-6 py-3.5 transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Inquire for Work & Collaboration</span>
              </button>

              <button
                onClick={handleDownloadDossier}
                className="cursor-pointer border border-[#E8E4DC] hover:border-[#1A1817] bg-[#FAF9F6] text-[#1A1817] uppercase tracking-wider px-5 py-3.5 transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-3.5 h-3.5 text-[#B88E28]" />
                <span>{downloadSuccess ? 'Dossier Downloaded' : 'Download Resume PDF'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Academic & Guild Recognition Section */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Degree Card */}
          <div className="bg-white border border-[#E8E4DC] p-8 shadow-minimal space-y-4 hover:border-[#1A1817] transition-colors">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-[#FAF9F6] border border-[#E8E4DC] flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-[#1A1817]" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#B88E28] tracking-wider font-semibold">Academic Qualification</span>
                <h4 className="text-[#1A1817] font-serif text-lg font-normal mt-0.5">Bachelor's in Restaurant, Culinary & Catering Management</h4>
                <p className="text-[#888888] text-xs mt-1 font-mono">Bharathiar University (2007–2010)</p>
              </div>
            </div>
            <p className="text-[#555555] text-xs sm:text-sm leading-relaxed pl-14 font-light">
              Full 3-year formal degree covering classical food science, large-scale kitchen operations, menu engineering, sanitation, and catering logistics.
            </p>
          </div>

          {/* Guild Recognition Card */}
          <div className="bg-white border border-[#E8E4DC] p-8 shadow-minimal space-y-4 hover:border-[#1A1817] transition-colors">
            <div className="flex items-center space-x-3 text-[#1A1817]">
              <Award className="w-5 h-5 text-[#B88E28]" />
              <h4 className="text-[#1A1817] font-serif text-lg font-normal">Emirates Culinary Guild Recognition</h4>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#555555] font-light">
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
        <div className="mt-20 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#E8E4DC] gap-4">
            <div>
              <h3 className="text-3xl font-serif text-[#1A1817] font-normal">Career Milestones Timeline</h3>
              <p className="text-[#888888] text-xs font-mono mt-1">Key credentials across competitions, executive roles, and academic foundations</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {(['all', 'award', 'experience', 'education'] as const).map(tabKey => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-4 py-2 uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    activeTab === tabKey
                      ? 'bg-[#1A1817] text-white'
                      : 'bg-white text-[#68645E] hover:text-[#1A1817] border border-[#E8E4DC]'
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
                className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-7 transition-all duration-300 shadow-minimal flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#1A1817] font-mono text-xs font-semibold bg-[#FAF9F6] px-3 py-1 border border-[#E8E4DC]">
                      {item.year}
                    </span>
                    {item.highlightBadge && (
                      <span className="text-[10px] uppercase font-mono text-[#B88E28] bg-[#FAF9F6] px-2.5 py-0.5 border border-[#E8E4DC] font-semibold">
                        {item.highlightBadge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-[#1A1817] font-serif text-lg font-normal group-hover:text-[#B88E28] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#888888] text-xs mt-1 font-mono">
                      {item.organization} • <span className="text-[#1A1817]">{item.location}</span>
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





