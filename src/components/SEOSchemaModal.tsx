import React, { useState } from 'react';
import { Code, Check, Copy, Search, ShieldCheck } from 'lucide-react';
import { CHEF_PROFILE } from '../data/portfolioData';

interface SEOSchemaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOSchemaModal: React.FC<SEOSchemaModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yaseer Arafath",
    "alternateName": "Chef Yaseer Arafath",
    "jobTitle": "Head Chef",
    "worksFor": {
      "@type": "FoodEstablishment",
      "name": "Slices Catering",
      "location": "Dubai, United Arab Emirates"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Bharathiar University",
      "department": "Department of Restaurant, Culinary & Catering Management"
    },
    "award": [
      "1st Prize Winner - UAE Superchef 2024",
      "Silver Medalist - Emirates Culinary Guild (Wathba Dates Festival 2023)"
    ],
    "knowsAbout": [
      "Levant Gastronomy",
      "Modern Middle Eastern Fine Dining",
      "Molecular Gastronomy",
      "Binchotan Charcoal Grilling",
      "VIP Banquet Catering"
    ],
    "sameAs": [
      "https://www.instagram.com/yaseer.s.arafath/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonLdSchema, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FBF8F3] border border-[#E6DDD3] max-w-2xl w-full p-6 sm:p-8 rounded-3xl shadow-2xl relative my-8 text-[#231A17] animate-in zoom-in-95 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E6DDD3]">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-[#7A3B2E]" />
            <div>
              <h3 className="text-xl font-serif font-bold text-[#231A17]">SEO & Structured Schema</h3>
              <p className="text-[11px] text-[#806E66] font-mono">Google Rich Snippets & JSON-LD Microdata</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#5A4A43] hover:text-[#231A17] text-xs bg-white border border-[#E6DDD3] px-3 py-1.5 rounded-full cursor-pointer"
          >
            ✕ Close
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div className="p-3.5 bg-[#FAF2E8] border border-[#D8A675]/50 rounded-2xl flex items-center space-x-2 text-xs text-[#7A3B2E]">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#7A3B2E]" />
            <span>This site is fully optimized for Google Search keywords: "Head Chef Dubai", "VIP Catering Dubai", "UAE Superchef 2024".</span>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between bg-white px-4 py-2.5 rounded-t-2xl border border-[#E6DDD3] text-xs text-[#5A4A43] font-mono">
              <span>JSON-LD Microdata Output</span>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 text-[#7A3B2E] hover:text-[#5C2D25] cursor-pointer font-semibold"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>

            <pre className="bg-[#FAF5EE] p-4 rounded-b-2xl border-x border-b border-[#E6DDD3] text-[11px] font-mono text-[#3A2A24] overflow-x-auto max-h-72">
              {JSON.stringify(jsonLdSchema, null, 2)}
            </pre>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E6DDD3] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#7A3B2E] hover:bg-[#5C2D25] text-white font-medium text-xs px-6 py-2.5 rounded-full cursor-pointer shadow-md"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
