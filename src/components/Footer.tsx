import React from 'react';
import { ChefHat, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#EEEEEE] text-[#666666] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <img
                src="/LOGO.png"
                alt="Chef Yaseer Arafath Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div>
                <span className="text-base font-serif font-bold text-[#1A1817] tracking-wider block uppercase">
                  Yaseer Arafath
                </span>
                <span className="text-[9px] text-[#B88E28] font-mono block font-semibold uppercase tracking-wider">
                  Head Chef • Slices Catering Dubai
                </span>
              </div>
            </div>

            <p className="text-xs text-[#555555] leading-relaxed max-w-sm font-light">
              Winner of UAE Superchef 2024 & Emirates Culinary Guild Silver Medalist. Bringing high-resolution culinary artistry, molecular gastronomy, and Levant heritage to luxury dining across Dubai.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={CHEF_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#25D366]/10 border border-[#25D366]/40 hover:bg-[#25D366]/30 flex items-center justify-center text-[#25D366] transition-colors"
                title="WhatsApp Direct Chat (+971 50 302 3056)"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href={CHEF_PROFILE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#FAFAFA] border border-[#EEEEEE] hover:border-[#111111] flex items-center justify-center text-[#111111] transition-colors"
                title="Instagram @yaseer.s.arafath"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CHEF_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#FAFAFA] border border-[#EEEEEE] hover:border-[#0A66C2] flex items-center justify-center text-[#0A66C2] transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CHEF_PROFILE.contactEmail}`}
                className="w-8 h-8 bg-[#FAFAFA] border border-[#EEEEEE] hover:border-[#111111] flex items-center justify-center text-[#111111] transition-colors"
                title="Email Concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left font-mono text-xs">
            <h4 className="text-[#111111] font-serif font-bold text-sm">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#111111] transition-colors">
                  Story & Credentials
                </a>
              </li>
              <li>
                <a href="#awards" className="hover:text-[#111111] transition-colors">
                  Awards & Press Cabinet
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#111111] transition-colors">
                  Signature Dish Plating
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#111111] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Roles */}
          <div className="md:col-span-4 space-y-3 text-left font-mono text-xs">
            <h4 className="text-[#111111] font-serif font-bold text-sm">Culinary Directorship</h4>
            <div className="space-y-2">
              <div className="p-3 bg-[#FAFAFA] border border-[#EEEEEE] space-y-1">
                <span className="text-[#111111] font-bold block">Slices Catering Dubai</span>
                <span className="text-[#888888] text-[11px] block">Head Chef — High-End Banquets & VIP Events</span>
              </div>
              <div className="flex items-center space-x-2 text-[#888888] text-xs pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#99731C] shrink-0" />
                <span>Dubai & Abu Dhabi, United Arab Emirates</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#EEEEEE] flex flex-col sm:flex-row items-center justify-between text-xs text-[#888888] font-mono gap-4">
          <p>© {new Date().getFullYear()} Chef Yaseer Arafath. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Crafted for high-end culinary opportunities in Dubai</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

