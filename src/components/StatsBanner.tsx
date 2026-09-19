import React from 'react';
import { CHEF_STATS } from '../data/portfolioData';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-[#FAF9F6] border-y border-[#E8E4DC] py-6 sm:py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full overflow-x-auto scrollbar-none">
          <div className="grid grid-cols-5 min-w-[720px] lg:min-w-0 border border-[#E8E4DC] divide-x divide-[#E8E4DC] bg-white shadow-minimal">
            {CHEF_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center px-3 sm:px-4 lg:px-6 py-5 sm:py-7 text-center space-y-2 min-h-[130px] group hover:bg-[#FAF9F6] transition-colors"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#1A1817] font-normal tracking-tight flex items-center justify-center min-h-[2.75rem] whitespace-nowrap px-1">
                  {stat.value}
                </div>
                <div className="w-8 h-[1px] bg-[#B88E28]/40 my-1 group-hover:w-12 transition-all duration-300" />
                <p className="text-[10px] sm:text-[11px] text-[#68645E] uppercase tracking-[0.14em] sm:tracking-[0.2em] font-mono text-center leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};




