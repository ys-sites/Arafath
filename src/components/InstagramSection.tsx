import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Play, Film } from 'lucide-react';
import { INSTAGRAM_POSTS, CHEF_PROFILE } from '../data/portfolioData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-[#FFFFFF] text-[#111111] border-b border-[#EEEEEE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#99731C] font-semibold">
            <Instagram className="w-3.5 h-3.5 text-[#99731C]" />
            <span>Social Journal</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#111111] tracking-tight font-normal">
            Follow the <span className="italic font-serif font-light text-[#444444]">Culinary Journey</span>
          </h2>
          <p className="text-[#666666] text-sm sm:text-base font-light">
            Behind the scenes at Slices Catering Dubai, live Superchef competition highlights, signature plating reveals, and VIP banquet moments.
          </p>
        </div>

        {/* Profile Stats Bar */}
        <div className="mt-12 bg-[#FAFAFA] border border-[#EEEEEE] p-6 sm:p-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-minimal">
          <div className="flex items-center space-x-4">
            <img
              src="/image 1.png"
              alt="Chef Yaseer Arafath Instagram"
              className="w-14 h-14 rounded-full object-cover border border-[#EEEEEE] shadow-sm shrink-0"
            />
            <div className="text-left space-y-0.5 font-mono">
              <h3 className="text-[#111111] font-serif text-lg font-normal flex items-center space-x-2">
                <span>Chef Yaseer Arafath</span>
                <span className="bg-[#111111] text-white text-[10px] px-1.5 py-0.5 font-bold" title="Verified Chef">✓</span>
              </h3>
              <p className="text-xs text-[#99731C]">{CHEF_PROFILE.instagramHandle}</p>
              <p className="text-[11px] text-[#888888] font-light">Head Chef @ Slices Catering Dubai</p>
            </div>
          </div>

          <a
            href={CHEF_PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest px-6 py-3 transition-colors flex items-center space-x-2 shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid of Video Reels (Uncluttered, No Captions) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#EEEEEE] hover:border-[#111111] transition-all duration-300 shadow-minimal overflow-hidden relative block"
            >
              {/* Media Container */}
              <div className="relative h-80 sm:h-96 overflow-hidden bg-[#FAFAFA]">
                <video
                  src={post.videoUrl || post.imageUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 via-transparent to-transparent opacity-85" />

                {/* Post type overlay badge */}
                <div className="absolute top-3 right-3 bg-white/90 p-2 text-[#111111] border border-[#EEEEEE] z-10">
                  <Play className="w-3.5 h-3.5 text-[#111111]" />
                </div>

                {/* Hover overlay with engagement stats */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6 text-white font-mono text-xs z-20">
                  <div className="flex items-center space-x-1.5">
                    <Heart className="w-4 h-4 text-[#99731C] fill-[#99731C]" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};



