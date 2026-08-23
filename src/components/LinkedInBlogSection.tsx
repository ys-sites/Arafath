import React, { useState } from 'react';
import { Linkedin, ExternalLink, ThumbsUp, MessageSquare, Share2, Sparkles, CheckCircle2, Award, Calendar, ShieldCheck, X } from 'lucide-react';
import { ShinyText } from './ShinyText';
import { BlurText } from './BlurText';

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  linkedInUrl: string;
  badge?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-haccp",
    title: "Achieving HACCP Certification & Retaining Gold Rating at The Arbor School Dubai",
    category: "Executive Leadership & Food Safety",
    date: "August 2025",
    author: "YASEER Arafath",
    authorRole: "Executive Chef at The Arbor School Dubai",
    excerpt: "Proud to announce that The Arbor School Dubai ('The Farmhouse') has officially achieved HACCP Certification via AGA Certifications and retained the Dubai Municipality Gold Rating across canteen, kitchen & café.",
    content: `Achieving international HACCP (Hazard Analysis Critical Control Point) certification is a testament to our kitchen team's unwavering commitment to food safety and nutritional excellence.

Heading "The Farmhouse" culinary operations at The Arbor School Dubai, we have implemented rigorous thermal logs, critical control point checks, allergen segregation, and high-capacity sanitary workflows.

Special thanks to our dedicated kitchen brigade and AGA Certifications for verifying our kitchen governance standards. We continue to elevate farm-to-table school dining across Dubai.`,
    image: "/image.png",
    likes: 80,
    comments: 3,
    shares: 3,
    linkedInUrl: "https://www.linkedin.com/in/yaseer-arafath-75b67017b/",
    badge: "HACCP & Gold Certified"
  },
  {
    id: "post-slices-signoff",
    title: "Employee ID #10048277 Signing Off: A 2,083-Day Executive Journey at Slices Catering",
    category: "Career Milestones & Leadership",
    date: "August 2025",
    author: "YASEER Arafath",
    authorRole: "Former Head Chef & Production Manager",
    excerpt: "Today marks my last day at Slices Catering Dubai after nearly 6 years (2,083 days). Reflecting on an unforgettable executive journey leading central kitchen production and winning national culinary honors.",
    content: `Employee ID #10048277 Signing Off #

Today marks my last day at Slices Catering Services Dubai, and I want to take a moment to reflect on my nearly 6 years (2,083 days) journey as Head Chef & Production Manager.

Over these years, our team successfully managed high-capacity central kitchen production, catered VIP events up to 2,000+ guests, secured the 2021 Hozpitality Gold Award for Sous Chef of the Year, won 1st Prize at UAE Superchef 2024, and earned an Emirates Culinary Guild Silver Medal.

Deepest gratitude to the directors, kitchen brigade, and partners who made this journey extraordinary. Ready for the next executive chapter at The Arbor School Dubai!`,
    image: "/image 1.png",
    likes: 77,
    comments: 16,
    shares: 5,
    linkedInUrl: "https://www.linkedin.com/in/yaseer-arafath-75b67017b/",
    badge: "2,083 Days Leadership"
  },
  {
    id: "post-superchef",
    title: "Winning 1st Prize at UAE Superchef 2024 — High-Stakes Live Plating & Levant Flavors",
    category: "Competitions & Masterclass",
    date: "June 2024",
    author: "YASEER Arafath",
    authorRole: "1st Prize Winner • Head Chef",
    excerpt: "Claimed 1st place in the live Xpatzhub culinary competition at Royal Ascot Hotel Dubai, competing against top UAE professional chefs with signature braised short rib and molecular plating.",
    content: `High-stakes live cooking demands total poise and technical mastery.

In the live UAE Superchef 2024 competition held at Firki, Royal Ascot Hotel Dubai, I was honored to take first prize among top professional chefs across the Emirates.

My winning entry combined 12-hour braised short rib wrapped in laminated beetroot flatbread, citrus kumquat hummus, and fresh micro sprout garnishes. Grateful to the master judges and organizers for this top distinction.`,
    image: "/Menu/Beet Chappathi Braised short rib kumquat Hummus pepper Pickle.jpeg",
    likes: 120,
    comments: 24,
    shares: 12,
    linkedInUrl: "https://www.linkedin.com/in/yaseer-arafath-75b67017b/",
    badge: "1st Prize Trophy Winner"
  },
  {
    id: "post-gold-award",
    title: "Conferred Gold Award for Sous Chef of the Year at Hozpitality Excellence Awards",
    category: "Accolades & Press",
    date: "2021",
    author: "YASEER Arafath",
    authorRole: "Sous Chef of the Year",
    excerpt: "Honored on stage at the 4th Middle East Chef Excellence Awards, receiving the Gold Award for Sous Chef of the Year presented by Hozpitality Group in Dubai.",
    content: `Conferred the prestigious Gold Award for Sous Chef of the Year at the 4th Middle East Chef Excellence Awards!

This award reflects thousands of hours of high-capacity kitchen directorship, menu development, and food safety governance at Slices Catering Services Dubai.

Special thanks to Hozpitality Group, the judging committee, and my culinary team.`,
    image: "/gold_award_2021_enhanced.png",
    likes: 145,
    comments: 31,
    shares: 18,
    linkedInUrl: "https://www.linkedin.com/in/yaseer-arafath-75b67017b/",
    badge: "Gold Award Winner"
  }
];

export const LinkedInBlogSection: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="journal" className="py-24 bg-[#FAF9F6] border-b border-[#E8E4DC] text-[#1A1817] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 border border-[#E8E4DC] text-xs font-mono text-[#0A66C2] font-semibold">
            <Linkedin className="w-4 h-4 fill-current text-[#0A66C2]" />
            <span>Executive LinkedIn Activity & Journal</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-serif text-[#1A1817] tracking-tight font-normal">
            Insights &{' '}
            <ShinyText
              text="Executive Updates"
              color="#B88E28"
              shineColor="#FFF5B8"
              speed={2.5}
              className="italic font-serif font-light text-[#B88E28]"
            />
          </h2>

          <BlurText
            text="Official posts, career announcements, food safety certifications, and competition highlights directly from Chef Yaseer Arafath's LinkedIn feed."
            delay={25}
            animateBy="words"
            className="text-[#68645E] text-sm sm:text-base font-light justify-center"
          />

          <div className="pt-2">
            <a
              href="https://www.linkedin.com/in/yaseer-arafath-75b67017b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-[#0A66C2] hover:text-[#004182] hover:underline"
            >
              <span>Connect with Chef Yaseer on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setActivePost(post)}
              className="bg-white border border-[#E8E4DC] hover:border-[#1A1817] p-6 sm:p-8 transition-all duration-300 shadow-minimal cursor-pointer flex flex-col justify-between group hover:shadow-xl relative"
            >
              <div className="space-y-4">
                
                {/* Author LinkedIn Strip */}
                <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full border border-[#E8E4DC] overflow-hidden bg-[#1A1817] shrink-0">
                      <img
                        src="/yaseer.jpeg"
                        alt={post.author}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold text-[#1A1817] flex items-center space-x-1">
                        <span>{post.author}</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#0A66C2]" />
                      </h4>
                      <p className="text-[11px] font-mono text-[#888888] truncate max-w-[200px] sm:max-w-[260px]">
                        {post.authorRole}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 text-[#0A66C2]">
                    <Linkedin className="w-4 h-4 fill-current" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold hidden sm:inline">Post</span>
                  </div>
                </div>

                {/* Optional Badge */}
                {post.badge && (
                  <div className="flex">
                    <span className="text-[10px] uppercase font-mono text-[#B88E28] bg-[#FAF9F6] px-2.5 py-1 border border-[#E8E4DC] font-semibold flex items-center space-x-1">
                      <Sparkles className="w-3 h-3 text-[#B88E28]" />
                      <span>{post.badge}</span>
                    </span>
                  </div>
                )}

                {/* Image Preview in Widescreen 16:9 Aspect Ratio */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#E8E4DC] bg-[#111111]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: post.image === '/image 1.png' ? 'center 15%' : 'center' }}
                  />
                </div>

                {/* Title & Category */}
                <div>
                  <span className="text-[11px] font-mono text-[#888888] block uppercase tracking-wider mb-1">
                    {post.category} • {post.date}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#1A1817] font-normal leading-snug group-hover:text-[#B88E28] transition-colors">
                    {post.title}
                  </h3>
                </div>

                {/* Excerpt */}
                <p className="text-[#555555] text-xs sm:text-sm leading-relaxed font-light line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* LinkedIn Style Reaction Bar */}
              <div className="mt-6 pt-4 border-t border-[#E8E4DC] flex items-center justify-between text-xs font-mono text-[#68645E]">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1 hover:text-[#0A66C2]">
                    <ThumbsUp className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageSquare className="w-3.5 h-3.5 text-[#888888]" />
                    <span>{post.comments}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Share2 className="w-3.5 h-3.5 text-[#888888]" />
                    <span>{post.shares}</span>
                  </span>
                </div>

                <span className="text-[#1A1817] font-semibold text-[11px] group-hover:underline flex items-center space-x-1">
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3 text-[#B88E28]" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Blog Article Detail Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8E4DC] max-w-3xl w-full p-6 sm:p-8 relative space-y-6 text-left shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Top Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DC]">
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-[#0A66C2] fill-current" />
                <div>
                  <span className="text-xs font-mono font-bold text-[#1A1817] block">{activePost.author}</span>
                  <span className="text-[11px] font-mono text-[#888888]">{activePost.authorRole}</span>
                </div>
              </div>

              <button
                onClick={() => setActivePost(null)}
                className="text-[#68645E] hover:text-[#1A1817] text-xs bg-[#FAF9F6] border border-[#E8E4DC] px-3.5 py-1.5 cursor-pointer font-mono font-semibold"
              >
                ✕ Close Article
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto space-y-5 pr-1 flex-1">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#B88E28] uppercase tracking-wider font-semibold">
                  {activePost.category} • {activePost.date}
                </span>
                {activePost.badge && (
                  <span className="text-[10px] uppercase font-mono text-[#B88E28] bg-[#FAF9F6] px-2.5 py-0.5 border border-[#E8E4DC]">
                    {activePost.badge}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif text-[#1A1817] font-normal leading-snug">
                {activePost.title}
              </h2>

              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#E8E4DC] bg-[#111111]">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: activePost.image === '/image 1.png' ? 'center 15%' : 'center' }}
                />
              </div>

              <div className="p-5 bg-[#FAF9F6] border border-[#E8E4DC] text-[#44403C] text-sm leading-relaxed font-light whitespace-pre-line space-y-3 font-sans">
                {activePost.content}
              </div>

            </div>

            {/* Modal Footer Link */}
            <div className="pt-4 border-t border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <span className="text-[#888888]">
                Published on LinkedIn • {activePost.likes} Reactions
              </span>
              <a
                href={activePost.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] hover:bg-[#004182] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-semibold flex items-center space-x-2 transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                <Linkedin className="w-4 h-4 fill-current" />
                <span>View Full Post on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
