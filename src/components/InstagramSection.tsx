import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Play, Film } from 'lucide-react';
import { INSTAGRAM_POSTS, CHEF_PROFILE } from '../data/portfolioData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-28 bg-[#FAF8F5] text-[#1C1917] border-t border-[#EAE4D7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#B88E28] bg-white px-4 py-1.5 rounded-full border border-[#B88E28]/30 font-semibold shadow-sm">
            <Instagram className="w-3.5 h-3.5 text-[#B88E28]" />
            <span>Social Journal</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1C1917] tracking-tight font-normal">
            Follow the <span className="text-gold-gradient italic font-serif">Culinary Journey</span>
          </h2>
          <p className="text-[#57534E] text-sm sm:text-base font-light">
            Behind the scenes at Slices Catering Dubai, live Superchef competition highlights, signature plating reveals, and VIP banquet moments.
          </p>
        </div>

        {/* Profile Stats Bar */}
        <div className="mt-12 bg-white border border-[#EAE4D7] p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-editorial">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-full border border-[#B88E28]/40 bg-[#FAF8F5] p-0.5 shadow-sm">
              <div className="w-full h-full bg-[#FAF8F5] rounded-full flex items-center justify-center font-serif font-semibold text-lg text-[#B88E28]">
                YA
              </div>
            </div>
            <div className="text-left space-y-0.5">
              <h3 className="text-[#1C1917] font-serif text-lg font-normal flex items-center space-x-2">
                <span>Chef Yaseer Arafath</span>
                <span className="bg-[#B88E28] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold" title="Verified Chef">✓</span>
              </h3>
              <p className="text-xs text-[#B88E28] font-mono">{CHEF_PROFILE.instagramHandle}</p>
              <p className="text-[11px] text-[#6B655F] font-light">Head Chef @ Slices Catering Dubai</p>
            </div>
          </div>

          <a
            href={CHEF_PROFILE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-[#1C1917] hover:bg-[#B88E28] text-white font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full shadow-md transition-all flex items-center space-x-2 shrink-0 transform hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Grid of Feed Posts */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#EAE4D7] hover:border-[#B88E28]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-editorial flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative h-64 overflow-hidden bg-[#FAF8F5]">
                <img
                  src={post.imageUrl}
                  alt="Instagram post by Chef Yaseer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent opacity-85" />

                {/* Post type overlay badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full text-[#B88E28] border border-[#EAE4D7]">
                  {post.type === 'video' ? (
                    <Play className="w-3.5 h-3.5 text-[#B88E28]" />
                  ) : post.type === 'carousel' ? (
                    <Film className="w-3.5 h-3.5 text-[#B88E28]" />
                  ) : (
                    <Instagram className="w-3.5 h-3.5 text-[#B88E28]" />
                  )}
                </div>

                {/* Hover overlay with engagement stats */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6 text-white font-medium text-sm">
                  <div className="flex items-center space-x-1.5">
                    <Heart className="w-5 h-5 text-[#B88E28] fill-[#B88E28]" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-5 space-y-3 text-left flex-1 flex flex-col justify-between">
                <p className="text-[#44403C] text-xs line-clamp-3 leading-relaxed font-light">
                  {post.caption}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] text-[#B88E28] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Highlight Reels Banner */}
        <div className="mt-14 text-center space-y-3">
          <p className="text-xs font-mono text-[#6B655F] uppercase tracking-widest">
            Featured Instagram Highlights:
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs">
            {['🏆 Awards & Superchef', '🍽️ Signature Plating', '✨ VIP Banquets', '🎥 Live Demonstrations', '🎓 University Keynotes'].map((hl, idx) => (
              <a
                key={idx}
                href={CHEF_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#FAF8F5] text-[#57534E] hover:text-[#B88E28] border border-[#EAE4D7] hover:border-[#B88E28]/40 px-4 py-2 rounded-full transition-all flex items-center space-x-1 font-light shadow-sm"
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


