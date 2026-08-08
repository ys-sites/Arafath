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
            <div className="w-12 h-12 bg-white border border-[#EEEEEE] flex items-center justify-center font-serif font-semibold text-base text-[#111111]">
              YA
            </div>
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

        {/* Grid of Feed Posts */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#EEEEEE] hover:border-[#111111] transition-all duration-300 shadow-minimal flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative h-64 overflow-hidden bg-[#FAFAFA]">
                <img
                  src={post.imageUrl}
                  alt="Instagram post by Chef Yaseer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-85" />

                {/* Post type overlay badge */}
                <div className="absolute top-3 right-3 bg-white/90 p-2 text-[#111111] border border-[#EEEEEE]">
                  {post.type === 'video' ? (
                    <Play className="w-3.5 h-3.5 text-[#111111]" />
                  ) : post.type === 'carousel' ? (
                    <Film className="w-3.5 h-3.5 text-[#111111]" />
                  ) : (
                    <Instagram className="w-3.5 h-3.5 text-[#111111]" />
                  )}
                </div>

                {/* Hover overlay with engagement stats */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6 text-white font-mono text-xs">
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

              {/* Caption Content */}
              <div className="p-5 space-y-3 text-left flex-1 flex flex-col justify-between">
                <p className="text-[#555555] text-xs line-clamp-3 leading-relaxed font-light">
                  {post.caption}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] text-[#99731C] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Highlight Reels Banner */}
        <div className="mt-12 text-center space-y-3 font-mono">
          <p className="text-xs text-[#888888] uppercase tracking-widest">
            Featured Instagram Highlights:
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {['🏆 Awards & Superchef', '🍽️ Signature Plating', '✨ VIP Banquets', '🎥 Live Demonstrations', '🎓 University Keynotes'].map((hl, idx) => (
              <a
                key={idx}
                href={CHEF_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#FAFAFA] text-[#555555] hover:text-[#111111] border border-[#EEEEEE] hover:border-[#111111] px-4 py-2 transition-all flex items-center space-x-1 font-light"
              >
                <span>{hl}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};



