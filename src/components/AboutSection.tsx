import React, { useState } from 'react';
import { ChefHat, GraduationCap, Building2, Flame, Award, CheckCircle2, Calendar, Sparkles, FileText, ExternalLink, Eye, Download, X } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';
import { ShinyText } from './ShinyText';
import { BlurText } from './BlurText';
import { TimelineTree } from './TimelineTree';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);

  return (
    <section id="about" className="py-24 bg-[#FFFFFF] text-[#1A1817] relative border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
            Biography & Credentials
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1817] tracking-tight font-normal">
            A Decade of{' '}
            <ShinyText
              text="Culinary Distinction"
              color="#B88E28"
              shineColor="#FFF5B8"
              speed={2.5}
              className="italic font-serif font-light text-[#B88E28]"
            />
          </h2>
          <BlurText
            text="From formal culinary management studies at Bharathiar University to steering operations on the QE2 ocean liner, Slices Catering, and leading executive culinary directorship as Executive Chef at The Arbor School Dubai."
            delay={25}
            animateBy="words"
            className="text-[#68645E] text-sm sm:text-base leading-relaxed font-light justify-center"
          />
        </div>

        {/* Bio & Kitchen Action Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Action Photo Column — Clean Full Height Layout without excess blank space */}
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="bg-[#FAF9F6] border border-[#E8E4DC] p-3 shadow-minimal flex flex-col flex-1">
              <div className="relative w-full flex-1 min-h-[420px] lg:min-h-[480px] overflow-hidden group">
                <img
                  src="/yaseer.jpeg"
                  alt="Chef Yaseer Arafath Executive Chef Dubai"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#B88E28] tracking-widest font-semibold block">
                    Chef Yaseer Arafath
                  </span>
                  <p className="text-sm font-serif text-white font-normal">Executive Chef @ The Arbor School Dubai</p>
                </div>
              </div>

              {/* Quick Credential Strip Tightly Attached */}
              <div className="mt-3 p-3 bg-white border border-[#E8E4DC] flex items-center justify-between text-xs text-[#68645E]">
                <span className="font-mono text-[11px] font-semibold text-[#1A1817]">Bharathiar University Alumnus</span>
                <span className="font-mono text-[11px] text-[#888888]">Executive Chef — Arbor</span>
              </div>
            </div>
          </div>

          {/* Editorial Bio Text Box */}
          <div className="lg:col-span-7 bg-white border border-[#E8E4DC] p-8 sm:p-10 shadow-minimal flex flex-col justify-between space-y-8 text-left">
            <div className="space-y-5">
              <div className="flex items-center space-x-3 text-[#1A1817]">
                <ChefHat className="w-5 h-5 text-[#B88E28]" />
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1817] font-normal">The Journey of Executive Chef Yaseer Arafath</h3>
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
            </div>
          </div>

        </div>

        {/* Academic & Certified Food Safety Documents Section */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Degree Card */}
          <div className="bg-white border border-[#E8E4DC] p-7 shadow-minimal space-y-4 hover:border-[#1A1817] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#1A1817]">
                <GraduationCap className="w-5 h-5 text-[#B88E28]" />
                <span className="text-[10px] font-mono uppercase text-[#B88E28] tracking-wider font-semibold">Academic Degree</span>
              </div>
              <h4 className="text-[#1A1817] font-serif text-lg font-normal">B.Sc. Catering Science & Hotel Management</h4>
              <p className="text-[#888888] text-xs font-mono">Bharathiar University (April 2010 / First Class Honors)</p>
              <p className="text-[#555555] text-xs leading-relaxed font-light">
                Formal 3-year degree in classical food chemistry, large-scale kitchen operations, menu engineering, sanitation, and catering logistics.
              </p>
            </div>
            <div className="pt-3 border-t border-[#E8E4DC] text-xs font-mono text-[#B88E28] font-semibold">
              Reg. No: 071CH094
            </div>
          </div>

          {/* Highfield Food Safety Level 4 PDF Card */}
          <div className="bg-white border border-[#E8E4DC] p-7 shadow-minimal space-y-4 hover:border-[#1A1817] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#1A1817]">
                <FileText className="w-5 h-5 text-[#B88E28]" />
                <span className="text-[10px] font-mono uppercase text-[#B88E28] tracking-wider font-semibold">Level 4 Award</span>
              </div>
              <h4 className="text-[#1A1817] font-serif text-lg font-normal">Highfield Level 4 Managing Food Safety</h4>
              <p className="text-[#888888] text-xs font-mono">Highfield Qualifications • International Standard</p>
              <p className="text-[#555555] text-xs leading-relaxed font-light">
                Executive food safety management, HACCP plan design, temperature audit compliance, and kitchen allergen control.
              </p>
            </div>
            
            <div className="pt-3 border-t border-[#E8E4DC] flex items-center justify-between font-mono text-xs">
              <button
                onClick={() => setSelectedPdf({
                  title: 'Highfield Level 4 Award in Managing Food Safety for Catering',
                  url: '/Food Safety Level-4.pdf'
                })}
                className="flex items-center space-x-1.5 text-[#1A1817] hover:text-[#B88E28] font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#B88E28]" />
                <span>View PDF Document</span>
              </button>
              <a
                href="/Food Safety Level-4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#1A1817] flex items-center space-x-1"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* TSI Food Safety Level 5 PDF Card */}
          <div className="bg-white border border-[#E8E4DC] p-7 shadow-minimal space-y-4 hover:border-[#1A1817] transition-colors flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#1A1817]">
                <Award className="w-5 h-5 text-[#B88E28]" />
                <span className="text-[10px] font-mono uppercase text-[#B88E28] tracking-wider font-semibold">Level 5 Audit</span>
              </div>
              <h4 className="text-[#1A1817] font-serif text-lg font-normal">Level 5 Food Safety & Operational Audit</h4>
              <p className="text-[#888888] text-xs font-mono">TSI Quality Services L.L.C. S.O.C.</p>
              <p className="text-[#555555] text-xs leading-relaxed font-light">
                Central kitchen operational audit directorship, quality assurance protocols, and municipal compliance standards.
              </p>
            </div>

            <div className="pt-3 border-t border-[#E8E4DC] flex items-center justify-between font-mono text-xs">
              <button
                onClick={() => setSelectedPdf({
                  title: 'Level 5 Award in Food Safety & Operational Audit Management',
                  url: '/Yaseer-Arafath-.pdf'
                })}
                className="flex items-center space-x-1.5 text-[#1A1817] hover:text-[#B88E28] font-semibold cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-[#B88E28]" />
                <span>View PDF Document</span>
              </button>
              <a
                href="/Yaseer-Arafath-.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#1A1817] flex items-center space-x-1"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Interactive PDF Document Viewer Modal */}
        {selectedPdf && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white border border-[#E8E4DC] max-w-4xl w-full h-[88vh] flex flex-col shadow-2xl overflow-hidden relative text-left">
              
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-[#1A1817] text-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-[#B88E28]" />
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-normal leading-snug">{selectedPdf.title}</h3>
                    <span className="text-[11px] font-mono text-[#B88E28]">Official Certified Document</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href={selectedPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center space-x-1.5 bg-[#383431] hover:bg-[#4A4640] text-white px-3 py-1.5 text-xs font-mono"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span>New Tab</span>
                  </a>
                  <a
                    href={selectedPdf.url}
                    download
                    className="flex items-center space-x-1.5 bg-[#B88E28] hover:bg-[#9E781E] text-white px-3 py-1.5 text-xs font-mono font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="bg-[#383431] hover:bg-red-900 text-white p-1.5 cursor-pointer ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF Canvas / Viewer */}
              <div className="flex-1 bg-[#2A2A2A] relative">
                <iframe
                  src={`${selectedPdf.url}#toolbar=1`}
                  className="w-full h-full border-0"
                  title={selectedPdf.title}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 bg-[#FAF9F6] border-t border-[#E8E4DC] flex items-center justify-between text-xs font-mono text-[#68645E]">
                <span>Document: {selectedPdf.url.replace('/', '')}</span>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-[#1A1817] font-semibold hover:underline cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Career Timeline Tree */}
        <TimelineTree />

      </div>
    </section>
  );
};





