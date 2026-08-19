import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChefHat,
  GraduationCap,
  Trophy,
  Award,
  Newspaper,
  ExternalLink,
  Flame,
  Sparkles,
  Building2,
  Calendar,
  CheckCircle2,
  Download,
  ArrowLeft,
  Utensils,
  Wine,
  ZoomIn,
  Mail,
  MapPin,
  Share2,
  Eye,
  FileText,
  X
} from 'lucide-react';
import { CHEF_PROFILE, CHEF_STATS, CAREER_MILESTONES, PRESS_ITEMS, SIGNATURE_DISHES } from '../data/portfolioData';
import { Dish } from '../types';
import { ShinyText } from './ShinyText';
import { BlurText } from './BlurText';

interface PortfolioSubPageProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
  onOpenAIMenu: () => void;
  onSelectDishForBooking: (dishTitle: string) => void;
}

export const PortfolioSubPage: React.FC<PortfolioSubPageProps> = ({
  onBackToHome,
  onOpenBooking,
  onOpenAIMenu,
  onSelectDishForBooking
}) => {
  const [timelineFilter, setTimelineFilter] = useState<'all' | 'award' | 'experience' | 'education'>('all');
  const [galleryCategory, setGalleryCategory] = useState<string>('all');
  const [selectedPress, setSelectedPress] = useState<typeof PRESS_ITEMS[0] | null>(null);
  const [activeDish, setActiveDish] = useState<Dish | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);

  const filteredMilestones = CAREER_MILESTONES.filter(
    m => timelineFilter === 'all' || m.category === timelineFilter
  );

  const filteredDishes = SIGNATURE_DISHES.filter(
    dish => galleryCategory === 'all' || dish.category === galleryCategory
  );

  const handleDownloadDossier = () => {
    // Generate printable press kit summary
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
• 2021 – Present: Head Chef @ Slices Catering Dubai (Banquets up to 2,000+ guests)
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
    <div className="pt-24 sm:pt-28 bg-[#FAF9F6] text-[#1A1817] min-h-screen">
      
      {/* Sub-Page Header / Breadcrumb Strip */}
      <div className="bg-white border-b border-[#E8E4DC] py-4 px-4 sm:px-6 lg:px-8 shadow-minimal">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <button
            onClick={onBackToHome}
            className="flex items-center space-x-2 text-[#68645E] hover:text-[#1A1817] cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Executive Overview</span>
          </button>

          <div className="flex items-center space-x-2 text-[#888888] text-[11px]">
            <span>Home</span>
            <span>/</span>
            <span className="text-[#1A1817] font-semibold">Executive Portfolio & Press Dossier</span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenBooking}
              className="bg-[#1A1817] hover:bg-[#383431] text-white px-5 py-2 cursor-pointer transition-colors uppercase tracking-wider font-semibold"
            >
              Inquire for Services
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Page Hero Banner */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E4DC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5 text-left">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B88E28] font-semibold block">
                Official Dossier & Archive
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#1A1817] font-normal leading-[1.05] tracking-tight">
                EXECUTIVE PORTFOLIO & <br />
                <ShinyText
                  text="CULINARY DOSSIER"
                  color="#B88E28"
                  shineColor="#FFF5B8"
                  speed={2.5}
                  className="italic font-serif font-light text-[#B88E28]"
                />
              </h1>
              <BlurText
                text="Comprehensive documentation of Head Chef Yaseer Arafath's 10+ year career, verified competition trophies, press features, academic degree, and signature gastronomy portfolio in Dubai."
                delay={25}
                animateBy="words"
                className="text-base sm:text-lg font-serif text-[#5B564E] font-light italic leading-relaxed max-w-2xl"
              />

              {/* Scaffolding Badges */}
              <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
                <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-1.5 flex items-center space-x-2">
                  <Trophy className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>UAE Superchef 2024 1st Prize</span>
                </span>
                <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-1.5 flex items-center space-x-2">
                  <Award className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Emirates Culinary Guild Silver Medalist</span>
                </span>
                <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-1.5 flex items-center space-x-2">
                  <Building2 className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Head Chef @ Slices Catering Dubai</span>
                </span>
                <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-1.5 flex items-center space-x-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#B88E28]" />
                  <span>Bharathiar University Alumnus</span>
                </span>
              </div>
            </div>

            {/* Quick Metrics Column */}
            <div className="lg:col-span-4 bg-[#FAF9F6] border border-[#E8E4DC] p-6 space-y-4 text-left shadow-minimal">
              <div className="flex items-center space-x-3 pb-3 border-b border-[#E8E4DC]">
                <div className="w-10 h-10 bg-white border border-[#E8E4DC] flex items-center justify-center font-serif text-base font-bold text-[#1A1817]">
                  YA
                </div>
                <div>
                  <h3 className="font-serif text-base text-[#1A1817]">Chef Yaseer Arafath</h3>
                  <span className="text-[10px] font-mono text-[#B88E28] block">Verified Executive Chef • Dubai</span>
                </div>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-[#E8E4DC]/60">
                  <span className="text-[#888888]">Current Employer:</span>
                  <span className="text-[#1A1817] font-semibold">Slices Catering</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E4DC]/60">
                  <span className="text-[#888888]">Catering Capacity:</span>
                  <span className="text-[#1A1817] font-semibold">10 to 2,000+ Guests</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E8E4DC]/60">
                  <span className="text-[#888888]">Superchef Title:</span>
                  <span className="text-[#B88E28] font-semibold">1st Prize Winner (2024)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#888888]">Academic Degree:</span>
                  <span className="text-[#1A1817] font-semibold">B.Sc. Culinary Mgmt</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#1A1817] hover:bg-[#383431] text-white font-mono text-xs uppercase tracking-widest py-3 transition-colors text-center cursor-pointer"
                >
                  Inquire for Executive Services
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: Biography & Credentials */}
      <section className="py-20 bg-[#FAF9F6] border-b border-[#E8E4DC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
              Section 01 / Biography & Background
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#1A1817] font-normal">
              Biography & <span className="italic font-serif font-light text-[#4A4640]">Academic Grounding</span>
            </h2>
            <p className="text-[#68645E] text-sm sm:text-base font-light">
              Detailed professional history, academic background, and culinary philosophy of Head Chef Yaseer Arafath.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Chef Portrait Photo */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white border border-[#E8E4DC] p-3 shadow-minimal h-full flex flex-col justify-between">
                <div className="relative h-[420px] lg:h-[500px] overflow-hidden">
                  <img
                    src="/yaseer.jpeg"
                    alt="Chef Yaseer Arafath Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-left space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#B88E28] tracking-widest font-semibold block">
                      Chef Yaseer Arafath
                    </span>
                    <p className="text-sm font-serif text-white font-normal">Head Chef @ Slices Catering Dubai</p>
                  </div>
                </div>

                <div className="mt-3 p-3 bg-[#FAF9F6] border border-[#E8E4DC] flex items-center justify-between text-xs font-mono text-[#68645E]">
                  <span>Bharathiar University Alumnus</span>
                  <span className="text-[#1A1817] font-semibold">Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Detailed Narrative & Core Philosophy */}
            <div className="lg:col-span-7 bg-white border border-[#E8E4DC] p-8 sm:p-10 shadow-minimal flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <div className="flex items-center space-x-3">
                  <ChefHat className="w-5 h-5 text-[#B88E28]" />
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1817] font-normal">
                    The Culinary Narrative of Head Chef Yaseer
                  </h3>
                </div>

                <p className="text-[#44403C] text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                  {CHEF_PROFILE.bio}
                </p>

                <div className="p-5 bg-[#FAF9F6] border border-[#E8E4DC] space-y-2">
                  <span className="text-xs font-mono uppercase text-[#B88E28] font-semibold tracking-wider block">
                    Core Executive Philosophy
                  </span>
                  <blockquote className="text-base sm:text-lg font-serif italic text-[#1A1817]">
                    “{CHEF_PROFILE.quote}”
                  </blockquote>
                </div>
              </div>

              {/* Technique Badges */}
              <div className="space-y-3 pt-6 border-t border-[#E8E4DC]">
                <span className="text-[11px] font-mono text-[#888888] uppercase tracking-widest block font-semibold">
                  Executive Techniques & Methodologies
                </span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-2 flex items-center space-x-2">
                    <Flame className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span>Binchotan Charcoal Grilling</span>
                  </span>
                  <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-2 flex items-center space-x-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span>36-Hour Sous-Vide Precision</span>
                  </span>
                  <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-2 flex items-center space-x-2">
                    <Building2 className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span>Cryogenic Nitrogen Spheres</span>
                  </span>
                  <span className="bg-[#FAF9F6] text-[#1A1817] border border-[#E8E4DC] px-3.5 py-2 flex items-center space-x-2">
                    <GraduationCap className="w-3.5 h-3.5 text-[#B88E28]" />
                    <span>HACCP & Banquet Logistics</span>
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Academic & International Food Safety Certifications Cabinet */}
          <div className="mt-14 space-y-8 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8E4DC] pb-4 gap-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
                  Accredited Credentials Cabinet
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1817] font-normal">
                  Academic Degree & International Food Safety Certifications
                </h3>
              </div>
              <span className="text-xs font-mono text-[#888888]">Verified Global & Government Standards</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 1. Bharathiar University B.Sc. Degree */}
              <div className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-7 transition-all shadow-minimal flex flex-col justify-between space-y-5 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#1A1817] text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-bold">
                      ACADEMIC DEGREE
                    </span>
                    <span className="text-[11px] font-mono text-[#B88E28] font-semibold">Apr 2010 / 2011</span>
                  </div>

                  <h4 className="text-xl font-serif text-[#1A1817] font-normal group-hover:text-[#B88E28] transition-colors leading-snug">
                    B.Sc. Catering Science & Hotel Management
                  </h4>

                  <p className="text-xs font-mono text-[#68645E]">
                    Bharathiar University (Faculty of Science) • Rathnavel Subramaniam College of Arts & Science (Autonomous)
                  </p>

                  <p className="text-xs text-[#44403C] leading-relaxed font-light">
                    3-year formal Bachelor of Science degree in food chemistry, menu engineering, sanitation, and hotel management.
                  </p>

                  <div className="p-3 bg-[#FAF9F6] border border-[#E8E4DC] space-y-1 font-mono text-[11px] text-[#555555]">
                    <div className="flex justify-between">
                      <span>Honors Classification:</span>
                      <span className="text-[#1A1817] font-semibold">First Class (Part III)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reg / Cert No:</span>
                      <span className="text-[#888888]">071CH094 / 287888</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E4DC] flex items-center justify-between font-mono text-[11px] text-[#68645E]">
                  <span>Status: Grade A Graduate</span>
                  <CheckCircle2 className="w-4 h-4 text-[#B88E28]" />
                </div>
              </div>

              {/* 2. Highfield Level 3 International HACCP */}
              <div className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-7 transition-all shadow-minimal flex flex-col justify-between space-y-5 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#B88E28] text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-bold">
                      HIGHFIELD CERTIFIED
                    </span>
                    <span className="text-[11px] font-mono text-[#B88E28] font-semibold">10 Jan 2022</span>
                  </div>

                  <h4 className="text-xl font-serif text-[#1A1817] font-normal group-hover:text-[#B88E28] transition-colors leading-snug">
                    Level 3 International Award in HACCP for Catering
                  </h4>

                  <p className="text-xs font-mono text-[#68645E]">
                    Highfield Qualifications (UK & Global Leader) • Splendid Quality Consultants
                  </p>

                  <p className="text-xs text-[#44403C] leading-relaxed font-light">
                    Hazard Analysis Critical Control Point system design, thermal control, allergen management, and critical limits verification.
                  </p>

                  <div className="p-3 bg-[#FAF9F6] border border-[#E8E4DC] space-y-1 font-mono text-[11px] text-[#555555]">
                    <div className="flex justify-between">
                      <span>Certificate Number:</span>
                      <span className="text-[#1A1817] font-semibold">HAC3911003</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Awarding Body:</span>
                      <span className="text-[#888888]">Highfield Qualifications</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E4DC] flex items-center justify-between font-mono text-[11px] text-[#68645E]">
                  <span>Status: Certified Master</span>
                  <CheckCircle2 className="w-4 h-4 text-[#B88E28]" />
                </div>
              </div>

              {/* 3. Highfield Level 4 Managing Food Safety */}
              <div className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-7 transition-all shadow-minimal flex flex-col justify-between space-y-5 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#1A1817] text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-bold">
                      EXECUTIVE LEVEL 4
                    </span>
                    <span className="text-[11px] font-mono text-[#B88E28] font-semibold">Food Safety</span>
                  </div>

                  <h4 className="text-xl font-serif text-[#1A1817] font-normal group-hover:text-[#B88E28] transition-colors leading-snug">
                    Level 4 Award in Managing Food Safety for Catering
                  </h4>

                  <p className="text-xs font-mono text-[#68645E]">
                    Highfield Qualifications • Advanced Catering Standards
                  </p>

                  <p className="text-xs text-[#44403C] leading-relaxed font-light">
                    Senior kitchen food safety management, staff sanitation training directorship, cross-contamination prevention, and audit readiness.
                  </p>

                  <div className="p-3 bg-[#FAF9F6] border border-[#E8E4DC] space-y-1 font-mono text-[11px] text-[#555555]">
                    <div className="flex justify-between">
                      <span>Governance Level:</span>
                      <span className="text-[#1A1817] font-semibold">Level 4 Executive</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Focus:</span>
                      <span className="text-[#888888]">Central Kitchen Auditing</span>
                    </div>
                  </div>
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

              {/* 4. TSI Quality Services Level 5 Food Safety */}
              <div className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-7 transition-all shadow-minimal flex flex-col justify-between space-y-5 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#B88E28] text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-bold">
                      TSI LEVEL 5 AUDIT
                    </span>
                    <span className="text-[11px] font-mono text-[#B88E28] font-semibold">Quality SOC</span>
                  </div>

                  <h4 className="text-xl font-serif text-[#1A1817] font-normal group-hover:text-[#B88E28] transition-colors leading-snug">
                    Level 5 Award in Food Safety & Operational Audit
                  </h4>

                  <p className="text-xs font-mono text-[#68645E]">
                    TSI Quality Services L.L.C. S.O.C.
                  </p>

                  <p className="text-xs text-[#44403C] leading-relaxed font-light">
                    Advanced operational audit directorship, quality assurance protocol execution, and central kitchen compliance across Dubai facilities.
                  </p>

                  <div className="p-3 bg-[#FAF9F6] border border-[#E8E4DC] space-y-1 font-mono text-[11px] text-[#555555]">
                    <div className="flex justify-between">
                      <span>Certification Body:</span>
                      <span className="text-[#1A1817] font-semibold">TSI Quality Services</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scope:</span>
                      <span className="text-[#888888]">Central Production Audits</span>
                    </div>
                  </div>
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

              {/* 5. Dubai Municipality Gold Rating & HACCP Operations */}
              <div className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-7 transition-all shadow-minimal flex flex-col justify-between space-y-5 group md:col-span-2 lg:col-span-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#1A1817] text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-bold">
                      GOVERNMENT RATING
                    </span>
                    <span className="text-[11px] font-mono text-[#B88E28] font-semibold">Dubai Municipality</span>
                  </div>

                  <h4 className="text-xl font-serif text-[#1A1817] font-normal group-hover:text-[#B88E28] transition-colors leading-snug">
                    Dubai Municipality Gold Rating & HACCP Kitchen Certification
                  </h4>

                  <p className="text-xs font-mono text-[#68645E]">
                    The Arbor School Dubai & Slices Catering Central Operations
                  </p>

                  <p className="text-xs text-[#44403C] leading-relaxed font-light">
                    Retained Dubai Municipality Gold Rating across Kitchen, Canteen, and Café. Conferred HACCP Certification via AGA Certifications (Aligned Global Assurance ME) for zero-fault food safety, temperature tracking, and hygiene governance.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-[#FAF9F6] border border-[#E8E4DC] font-mono text-[11px] text-[#555555]">
                    <div>
                      <span className="text-[#888888] block">Rating Level:</span>
                      <span className="text-[#B88E28] font-bold">Dubai Municipality Gold Rating</span>
                    </div>
                    <div>
                      <span className="text-[#888888] block">HACCP Assessor Body:</span>
                      <span className="text-[#1A1817] font-semibold">AGA Certifications (ME)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E4DC] flex items-center justify-between font-mono text-[11px] text-[#68645E]">
                  <span>Status: Retained Gold Standard Compliance</span>
                  <CheckCircle2 className="w-4 h-4 text-[#B88E28]" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Career Milestones Timeline */}
      <section className="py-20 bg-white border-b border-[#E8E4DC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 pb-4 border-b border-[#E8E4DC] gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
                Section 02 / Chronological Timeline
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1817] font-normal mt-1">
                Career Milestones Timeline
              </h2>
            </div>

            {/* Timeline Filter Pills */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {(['all', 'award', 'experience', 'education'] as const).map(tabKey => (
                <button
                  key={tabKey}
                  onClick={() => setTimelineFilter(tabKey)}
                  className={`px-4 py-2 uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    timelineFilter === tabKey
                      ? 'bg-[#1A1817] text-white'
                      : 'bg-[#FAF9F6] text-[#68645E] hover:text-[#1A1817] border border-[#E8E4DC]'
                  }`}
                >
                  {tabKey === 'all' ? 'All Milestones' : tabKey === 'award' ? 'Awards & Trophies' : tabKey === 'experience' ? 'Executive Roles' : 'Education'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMilestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] border border-[#E8E4DC] hover:border-[#1A1817] p-7 transition-all duration-300 shadow-minimal flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#1A1817] font-mono text-xs font-semibold bg-white px-3 py-1 border border-[#E8E4DC]">
                      {item.year}
                    </span>
                    {item.highlightBadge && (
                      <span className="text-[10px] uppercase font-mono text-[#B88E28] bg-white px-2.5 py-0.5 border border-[#E8E4DC] font-semibold">
                        {item.highlightBadge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-[#1A1817] font-serif text-xl font-normal group-hover:text-[#B88E28] transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[#888888] text-xs mt-1.5 font-mono">
                      {item.organization} • <span className="text-[#1A1817]">{item.location}</span>
                    </p>
                  </div>

                  <p className="text-[#44403C] text-xs leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-[11px] font-mono text-[#68645E]">
                  <span className="capitalize">Category: {item.category}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E28]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: Accolades & Press Cabinet */}
      <section className="py-20 bg-[#FAF9F6] border-b border-[#E8E4DC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
              Section 03 / Media & Press Cabinet
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#1A1817] font-normal">
              Accolades & <span className="italic font-serif font-light text-[#4A4640]">Verified Press Features</span>
            </h2>
            <p className="text-[#68645E] text-sm sm:text-base font-light">
              Verified competition wins, Khaleej Times features, and Emirates Culinary Guild accolades.
            </p>
          </div>

          {/* Featured Trophy Highlight */}
          <div className="bg-white border border-[#E8E4DC] p-8 sm:p-12 shadow-minimal mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="bg-[#1A1817] text-white font-mono text-[11px] uppercase tracking-wider px-3.5 py-1">
                  1ST PRIZE WINNER
                </span>
                <span className="text-[#B88E28] font-mono text-xs font-semibold">Royal Ascot Hotel • Dubai</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-serif text-[#1A1817] font-normal leading-tight">
                UAE's Superchef 2024 Winner
              </h3>
              
              <p className="text-[#B88E28] text-xs font-mono">
                Xpatzhub Live Culinary Competition at Firki, Royal Ascot Hotel (June 2024)
              </p>

              <p className="text-[#44403C] text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                Chef Yaseer Arafath claimed first prize in the high-stakes live culinary showdown against top professional chefs across the United Arab Emirates. His winning entry demonstrated speed, delicate Levant seasoning balance, and exquisite molecular plating.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#FAF9F6] border border-[#E8E4DC] p-6 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#B88E28] font-semibold">
                <Newspaper className="w-4 h-4 text-[#B88E28]" />
                <span>Khaleej Times Feature</span>
              </div>
              <blockquote className="text-[#1A1817] font-serif italic text-base">
                “UAE's Superchef 2024 is a resounding success — Mr. Yaser Arafath, Head Chef at Slices Catering, takes first prize.”
              </blockquote>
            </div>
          </div>

          {/* Press Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRESS_ITEMS.map(press => (
              <a
                key={press.id}
                href={press.url || "https://www.instagram.com/yaseer.s.arafath/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-7 cursor-pointer transition-all duration-300 shadow-minimal flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#B88E28] font-mono text-xs font-bold uppercase tracking-wider">
                      {press.source}
                    </span>
                    <span className="text-[#888888] text-xs font-mono">{press.date}</span>
                  </div>

                  <h4 className="text-[#1A1817] font-serif font-normal text-lg leading-snug group-hover:text-[#B88E28] transition-colors">
                    {press.title}
                  </h4>

                  <p className="text-[#44403C] text-xs line-clamp-3 leading-relaxed font-light">
                    {press.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#1A1817] font-mono font-semibold uppercase tracking-wider">
                  <span>{press.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#B88E28]" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: Signature Plating Portfolio */}
      <section className="py-20 bg-white border-b border-[#E8E4DC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
              Section 04 / Signature Culinary Creations
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#1A1817] font-normal">
              Signature <span className="italic font-serif font-light text-[#4A4640]">Plating Portfolio</span>
            </h2>
            <p className="text-[#68645E] text-sm sm:text-base font-light">
              Explore Chef Yaseer's haute cuisine repertoire—from 36-hour braised lamb shanks to VIP fruit displays.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 pb-3 sm:pb-0 font-mono text-xs mb-10 scrollbar-none">
            {[
              { id: 'all', label: 'All Creations' },
              { id: 'signature', label: 'Signature Dishes' },
              { id: 'levant', label: 'Modern Levant' },
              { id: 'catering', label: 'VIP Banquets & Displays' },
              { id: 'dessert', label: 'Haute Desserts' },
              { id: 'drinks', label: 'Botanical Elixirs' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setGalleryCategory(cat.id)}
                className={`px-4 py-2 uppercase tracking-wider font-semibold transition-all shrink-0 cursor-pointer ${
                  galleryCategory === cat.id
                    ? 'bg-[#1A1817] text-white'
                    : 'bg-[#FAF9F6] text-[#68645E] hover:text-[#1A1817] border border-[#E8E4DC]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dish Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map(dish => (
              <div
                key={dish.id}
                onClick={() => setActiveDish(dish)}
                className="group bg-[#FAF9F6] border border-[#E8E4DC] hover:border-[#1A1817] cursor-pointer transition-all duration-300 shadow-minimal flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-white">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817]/80 via-transparent to-transparent opacity-90" />
                  
                  {dish.badge && (
                    <div className="absolute top-4 left-4 bg-white text-[#1A1817] font-mono text-[10px] uppercase tracking-wider px-3 py-1 border border-[#E8E4DC] font-semibold">
                      {dish.badge}
                    </div>
                  )}

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 text-[#1A1817] border border-[#E8E4DC]">
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

                <div className="p-6 space-y-4 text-left flex-1 flex flex-col justify-between">
                  <p className="text-[#44403C] text-xs leading-relaxed line-clamp-3 font-light">
                    {dish.description}
                  </p>

                  <div className="pt-4 border-t border-[#E8E4DC] space-y-2.5 text-xs font-mono">
                    <div className="flex items-center text-[#68645E]">
                      <Utensils className="w-3.5 h-3.5 text-[#B88E28] mr-2 shrink-0" />
                      <span className="truncate"><strong className="text-[#1A1817]">Technique:</strong> {dish.technique}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: Executive Consultation Banner */}
      <section className="py-20 bg-[#FAF9F6] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E4DC] p-8 sm:p-14 text-center relative shadow-minimal">
            <div className="max-w-3xl mx-auto space-y-5">
              <span className="inline-flex items-center space-x-2 text-[#B88E28] text-xs font-mono uppercase tracking-widest font-semibold">
                <Sparkles className="w-4 h-4 text-[#B88E28]" />
                <span>Executive Concierge Consultation</span>
              </span>

              <h2 className="text-3xl sm:text-5xl font-serif text-[#1A1817] font-normal">
                Book Head Chef Yaseer Arafath for VIP Engagements
              </h2>

              <p className="text-[#44403C] text-sm sm:text-base leading-relaxed font-light max-w-xl mx-auto">
                Request private dining, high-capacity banquet direction via Slices Catering, menu engineering audits, or live culinary masterclasses across Dubai and Abu Dhabi.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto bg-[#1A1817] hover:bg-[#383431] text-white font-mono text-xs uppercase tracking-widest px-8 py-4 cursor-pointer transition-colors"
                >
                  Submit VIP Inquiry
                </button>

                <button
                  onClick={onOpenAIMenu}
                  className="w-full sm:w-auto bg-[#FAF9F6] text-[#1A1817] hover:bg-white font-mono text-xs uppercase tracking-wider px-8 py-4 border border-[#E8E4DC] cursor-pointer transition-colors flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-[#B88E28]" />
                  <span>Launch AI Menu Concierge</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Item Modal */}
      {selectedPress && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8E4DC] max-w-xl w-full p-8 space-y-5 text-left shadow-2xl">
            <div className="flex items-center justify-between font-mono">
              <span className="text-xs text-[#B88E28] uppercase tracking-widest bg-[#FAF9F6] px-3.5 py-1 border border-[#E8E4DC]">
                {selectedPress.source} Press Archive
              </span>
              <button
                onClick={() => setSelectedPress(null)}
                className="text-[#68645E] hover:text-[#1A1817] text-xs bg-[#FAF9F6] border border-[#E8E4DC] px-3 py-1 cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <h3 className="text-2xl font-serif text-[#1A1817] font-normal leading-tight">
              {selectedPress.title}
            </h3>

            <p className="text-xs font-mono text-[#888888]">Date: {selectedPress.date}</p>

            <div className="p-5 bg-[#FAF9F6] border border-[#E8E4DC] text-[#44403C] text-sm leading-relaxed font-light">
              {selectedPress.excerpt}
            </div>

            <div className="pt-2 flex justify-end font-mono">
              <button
                onClick={() => setSelectedPress(null)}
                className="bg-[#1A1817] hover:bg-[#383431] text-white text-xs uppercase tracking-widest px-6 py-3 cursor-pointer"
              >
                Close Archive
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dish Lightbox Modal */}
      {activeDish && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-[#E8E4DC] max-w-3xl w-full shadow-2xl overflow-hidden relative my-8 text-left">
            <button
              onClick={() => setActiveDish(null)}
              className="absolute top-4 right-4 z-20 bg-white text-[#1A1817] p-2 cursor-pointer border border-[#E8E4DC]"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              <div className="md:col-span-6 relative min-h-[320px] md:min-h-full bg-[#FAF9F6]">
                <img
                  src={activeDish.image}
                  alt={activeDish.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-6 p-7 sm:p-9 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 font-mono">
                    <span className="text-[10px] uppercase tracking-wider text-white font-bold bg-[#1A1817] px-3 py-1">
                      {activeDish.category}
                    </span>
                    {activeDish.badge && (
                      <span className="text-[10px] text-[#B88E28] bg-[#FAF9F6] border border-[#E8E4DC] px-2.5 py-0.5 font-semibold">
                        {activeDish.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1817] font-normal">
                    {activeDish.title}
                  </h3>

                  <p className="text-[#44403C] text-xs sm:text-sm leading-relaxed font-light">
                    {activeDish.description}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-[#E8E4DC] text-xs font-mono">
                    <div>
                      <span className="text-[#B88E28] font-semibold uppercase tracking-wider block mb-1">Culinary Technique:</span>
                      <p className="text-[#44403C] italic font-light">{activeDish.technique}</p>
                    </div>

                    <div>
                      <span className="text-[#B88E28] font-semibold uppercase tracking-wider block mb-1.5">Ingredients:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeDish.ingredients.map((ing, i) => (
                          <span key={i} className="bg-[#FAF9F6] text-[#1A1817] text-[11px] px-2.5 py-1 border border-[#E8E4DC] font-light">
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#E8E4DC] flex items-center space-x-3 font-mono">
                  <button
                    onClick={() => {
                      const title = activeDish.title;
                      setActiveDish(null);
                      onSelectDishForBooking(title);
                    }}
                    className="flex-1 bg-[#1A1817] hover:bg-[#383431] text-white text-xs uppercase tracking-widest py-3.5 cursor-pointer text-center"
                  >
                    Inquire for Dish
                  </button>
                  <button
                    onClick={() => setActiveDish(null)}
                    className="bg-[#FAF9F6] text-[#68645E] hover:text-[#1A1817] text-xs px-4 py-3.5 border border-[#E8E4DC] cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
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

    </div>
  );
};
