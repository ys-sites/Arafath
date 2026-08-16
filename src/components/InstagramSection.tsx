import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { INSTAGRAM_POSTS, CHEF_PROFILE } from '../data/portfolioData';
import { ShinyText } from './ShinyText';
import { BlurText } from './BlurText';

export const InstagramSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalVideos = INSTAGRAM_POSTS.length;

  const handlePrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 320;
      scrollContainerRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalVideos - 1));
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 320;
      scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
    setCurrentIndex((prev) => (prev < totalVideos - 1 ? prev + 1 : 0));
  };

  return (
    <section id="instagram" className="py-24 bg-[#FFFFFF] text-[#111111] border-b border-[#EEEEEE] relative">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#99731C] font-semibold">
            <Instagram className="w-3.5 h-3.5 text-[#99731C]" />
            <span>Social & Video Journal</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#111111] tracking-tight font-normal">
            Follow the{' '}
            <ShinyText
              text="Culinary Reels"
              color="#99731C"
              shineColor="#F5E080"
              speed={2.5}
              className="italic font-serif font-light text-[#99731C]"
            />
          </h2>
          <BlurText
            text="Behind the scenes live cooking reels, Superchef competition highlights, signature plating reveals, and VIP banquet action across Dubai."
            delay={25}
            animateBy="words"
            className="text-[#666666] text-sm sm:text-base font-light justify-center"
          />
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
              <p className="text-[11px] text-[#888888] font-light">Executive Chef @ The Arbor School Dubai</p>
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

        {/* Carousel Navigation Header Controls */}
        <div className="mt-12 flex items-center justify-between font-mono text-xs border-b border-[#EEEEEE] pb-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#99731C] font-semibold uppercase tracking-wider">Video Reel Gallery</span>
            <span className="text-[#888888]">({currentIndex + 1} of {totalVideos})</span>
          </div>

          {/* Left & Right Arrow Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Video Reel"
              className="w-10 h-10 bg-white border border-[#EEEEEE] hover:border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Video Reel"
              className="w-10 h-10 bg-white border border-[#EEEEEE] hover:border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Reel Carousel Container */}
        <div className="relative mt-6">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 pt-2 snap-x snap-mandatory"
          >
            {INSTAGRAM_POSTS.map((post, idx) => (
              <div
                key={post.id}
                className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 snap-start group bg-white border border-[#EEEEEE] hover:border-[#111111] transition-all duration-300 shadow-minimal flex flex-col justify-between overflow-hidden relative"
              >
                {/* Media Container */}
                <div className="relative h-96 sm:h-[420px] overflow-hidden bg-[#FAFAFA]">
                  <video
                    src={post.videoUrl || post.imageUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent opacity-85" />

                  {/* Play badge */}
                  <div className="absolute top-3 right-3 bg-white/90 p-2 text-[#111111] border border-[#EEEEEE] z-10 shadow-sm">
                    <Play className="w-3.5 h-3.5 text-[#111111] fill-[#111111]" />
                  </div>

                  {/* Reel Index Indicator */}
                  <div className="absolute top-3 left-3 bg-[#111111]/90 text-white font-mono text-[10px] px-2.5 py-1 z-10 font-semibold">
                    REEL 0{idx + 1}
                  </div>

                  {/* Bottom overlay with details */}
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-2 z-10">
                    {post.caption && (
                      <p className="text-xs font-serif font-normal leading-snug drop-shadow-md">
                        {post.caption}
                      </p>
                    )}
                    <div className="flex items-center space-x-4 font-mono text-[11px] text-amber-200">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3.5 h-3.5 text-[#99731C] fill-[#99731C]" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3.5 h-3.5 text-white" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 bg-white border-t border-[#EEEEEE] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#888888] truncate text-[11px]">
                    {post.tags.length > 0 ? `#${post.tags[0]}` : '@yaseer.s.arafath'}
                  </span>
                  <a
                    href={post.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#99731C] hover:text-[#111111] font-semibold flex items-center space-x-1"
                  >
                    <span>Watch Reel</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};




