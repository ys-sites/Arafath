import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, GraduationCap, Building2, CheckCircle2, Calendar, MapPin, Sparkles } from 'lucide-react';
import { CAREER_MILESTONES } from '../data/portfolioData';
import { Milestone } from '../types';

export const TimelineTree: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'award' | 'experience' | 'education'>('all');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filteredMilestones = CAREER_MILESTONES.filter(
    m => activeTab === 'all' || m.category === activeTab
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'award':
        return <Trophy className="w-4 h-4 text-[#B88E28]" />;
      case 'experience':
        return <Building2 className="w-4 h-4 text-[#B88E28]" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-[#B88E28]" />;
      default:
        return <Award className="w-4 h-4 text-[#B88E28]" />;
    }
  };

  return (
    <div className="mt-16 text-left relative">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-16 pb-6 border-b border-[#E8E4DC] gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] font-semibold block">
            Interactive Timeline Tree
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-[#1A1817] font-normal mt-1">
            Career Milestones & Chronology
          </h3>
          <p className="text-[#68645E] text-xs font-mono mt-1">
            Key credentials across competitions, executive roles, and academic foundations
          </p>
        </div>

        {/* Animated Filter Pills */}
        <div className="flex flex-wrap gap-2 font-mono text-xs">
          {(['all', 'award', 'experience', 'education'] as const).map(tabKey => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`relative px-4 py-2 uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                activeTab === tabKey
                  ? 'text-white'
                  : 'text-[#68645E] hover:text-[#1A1817] bg-white border border-[#E8E4DC]'
              }`}
            >
              {activeTab === tabKey && (
                <motion.div
                  layoutId="activeTimelineTab"
                  className="absolute inset-0 bg-[#1A1817] z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                {tabKey === 'all'
                  ? 'All Milestones'
                  : tabKey === 'award'
                  ? 'Awards & Medals'
                  : tabKey === 'experience'
                  ? 'Executive Roles'
                  : 'Education'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Tree Container */}
      <div className="relative max-w-5xl mx-auto px-2 sm:px-0">
        
        {/* Central Vertical Tree Line Spine (Desktop Center, Mobile Left) */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#B88E28]/30 via-[#1A1817]/20 to-[#B88E28]/30 -translate-x-1/2 hidden sm:block pointer-events-none" />
        <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#B88E28]/30 via-[#1A1817]/20 to-[#B88E28]/30 -translate-x-1/2 sm:hidden pointer-events-none" />

        {/* Milestone Tree Items */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredMilestones.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.title + item.year}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.08 }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  
                  {/* Empty Spacer Column for Desktop Grid Alignment */}
                  <div className="w-full sm:w-1/2 hidden sm:block" />

                  {/* Central Node Orb */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: hoveredIdx === idx ? 1.25 : 1,
                        borderColor: hoveredIdx === idx ? '#B88E28' : '#E8E4DC'
                      }}
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-white border-2 rounded-full flex items-center justify-center shadow-minimal transition-colors cursor-pointer"
                    >
                      {getCategoryIcon(item.category)}
                    </motion.div>
                  </div>

                  {/* Content Card Column */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-6 sm:p-7 shadow-minimal transition-all duration-300 relative group-hover:shadow-xl"
                    >
                      {/* Connector Branch Line on Hover */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 hidden sm:block w-8 h-[2px] bg-[#E8E4DC] group-hover:bg-[#B88E28] transition-colors ${
                          isEven ? '-right-8' : '-left-8'
                        }`}
                      />

                      <div className="space-y-4">
                        {/* Year & Highlight Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center space-x-1.5 text-[#1A1817] font-mono text-xs font-bold bg-[#FAF9F6] px-3 py-1 border border-[#E8E4DC]">
                            <Calendar className="w-3.5 h-3.5 text-[#B88E28]" />
                            <span>{item.year}</span>
                          </span>

                          {item.highlightBadge && (
                            <span className="text-[10px] uppercase font-mono text-[#B88E28] bg-[#FAF9F6] px-2.5 py-1 border border-[#E8E4DC] font-semibold flex items-center space-x-1">
                              <Sparkles className="w-3 h-3 text-[#B88E28]" />
                              <span>{item.highlightBadge}</span>
                            </span>
                          )}
                        </div>

                        {/* Title & Organization */}
                        <div>
                          <h4 className="text-[#1A1817] font-serif text-xl sm:text-2xl font-normal leading-snug group-hover:text-[#B88E28] transition-colors">
                            {item.title}
                          </h4>
                          <div className="flex items-center space-x-2 text-[#68645E] text-xs mt-2 font-mono">
                            <span className="font-semibold text-[#1A1817]">{item.organization}</span>
                            <span>•</span>
                            <span className="flex items-center text-[#888888]">
                              <MapPin className="w-3 h-3 mr-1 text-[#B88E28]" />
                              {item.location}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#555555] text-xs sm:text-sm leading-relaxed font-light">
                          {item.description}
                        </p>

                        {/* Footer Category Bar */}
                        <div className="pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                          <span className="capitalize">Scope: {item.category}</span>
                          <CheckCircle2 className="w-4 h-4 text-[#B88E28]" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
