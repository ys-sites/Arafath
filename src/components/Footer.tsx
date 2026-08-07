import React from 'react';
import { ChefHat, Trophy, Instagram, Mail, MapPin, Heart } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE4D7] text-[#57534E] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#B88E28]/40 flex items-center justify-center shadow-sm">
                <ChefHat className="w-5 h-5 text-[#B88E28]" />
              </div>
              <div>
                <span className="text-lg font-serif font-bold text-[#1C1917] tracking-wider block">
                  Yaseer Arafath
                </span>
                <span className="text-[10px] text-[#B88E28] font-mono block font-semibold">
                  Head Chef • Slices Catering Dubai
                </span>
              </div>
            </div>

            <p className="text-xs text-[#44403C] leading-relaxed max-w-sm font-light">
              Winner of UAE Superchef 2024 & Emirates Culinary Guild Silver Medalist. Bringing high-resolution culinary artistry, molecular gastronomy, and Levant heritage to luxury dining across Dubai.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href={CHEF_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#EAE4D7] hover:border-[#B88E28] flex items-center justify-center text-[#B88E28] hover:bg-[#B88E28] hover:text-white transition-colors shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CHEF_PROFILE.contactEmail}`}
                className="w-8 h-8 rounded-full bg-white border border-[#EAE4D7] hover:border-[#B88E28] flex items-center justify-center text-[#B88E28] hover:bg-[#B88E28] hover:text-white transition-colors shadow-sm"
                title="Email Concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-[#1C1917] font-serif font-bold text-sm">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#B88E28] transition-colors">
                  Story & Credentials
                </a>
              </li>
              <li>
                <a href="#awards" className="hover:text-[#B88E28] transition-colors">
                  Awards & Press Cabinet
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B88E28] transition-colors">
                  Signature Dish Plating
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B88E28] transition-colors">
                  Catering & Freelance Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#B88E28] transition-colors">
                  Book VIP Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Roles */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-[#1C1917] font-serif font-bold text-sm">Culinary Directorship</h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-white rounded-2xl border border-[#EAE4D7] space-y-1 shadow-sm">
                <span className="text-[#B88E28] font-bold block">Slices Catering Dubai</span>
                <span className="text-[#6B655F] text-[11px] block">Head Chef — High-End Banquets & VIP Events</span>
              </div>
              <div className="flex items-center space-x-2 text-[#6B655F] text-xs pt-1">
                <MapPin className="w-4 h-4 text-[#B88E28] shrink-0" />
                <span>Dubai & Abu Dhabi, United Arab Emirates</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#EAE4D7] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B655F] gap-4">
          <p>© {new Date().getFullYear()} Chef Yaseer Arafath. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted for high-end culinary opportunities in Dubai</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
