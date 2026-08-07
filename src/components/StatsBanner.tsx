import React from 'react';
import { CHEF_STATS } from '../data/portfolioData';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-[#F4F0E8] border-y border-[#EAE4D7] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#EAE4D7]">
          {CHEF_STATS.map((stat, idx) => (
            <div key={idx} className={`pt-4 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''}`}>
              <div className="text-4xl sm:text-5xl font-serif text-[#B88E28] tracking-tight font-normal">
                {stat.value}
              </div>
              <p className="mt-2 text-xs text-[#57534E] font-semibold uppercase tracking-widest font-mono">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


