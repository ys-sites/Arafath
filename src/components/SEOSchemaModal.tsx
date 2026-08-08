import React, { useState } from 'react';
import { Code, Check, Copy, ShieldCheck } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white border border-[#EEEEEE] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-[#111111] text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#EEEEEE]">
          <div className="flex items-center space-x-2 font-mono">
            <Code className="w-5 h-5 text-[#99731C]" />
            <div>
              <h3 className="text-xl font-serif text-[#111111] font-normal">SEO & Structured Schema</h3>
              <p className="text-[10px] text-[#888888] font-mono">Google Rich Snippets & JSON-LD Microdata</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#666666] hover:text-[#111111] font-mono text-xs bg-[#FAFAFA] border border-[#EEEEEE] px-3 py-1.5 cursor-pointer"
          >
            ✕ Close
          </button>
        </div>

        <div className="mt-4 space-y-4 font-mono text-xs">
          <div className="p-3.5 bg-[#FAFAFA] border border-[#EEEEEE] flex items-center space-x-2 text-[#555555]">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#99731C]" />
            <span>This site is fully optimized for Google Search keywords: "Head Chef Dubai", "VIP Catering Dubai", "UAE Superchef 2024".</span>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between bg-[#FAFAFA] px-4 py-2.5 border border-[#EEEEEE] text-xs text-[#888888]">
              <span>JSON-LD Microdata Output</span>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 text-[#111111] hover:text-[#99731C] cursor-pointer font-semibold"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>

            <pre className="bg-[#FAFAFA] p-4 border-x border-b border-[#EEEEEE] text-[11px] text-[#111111] overflow-x-auto max-h-72">
              {JSON.stringify(jsonLdSchema, null, 2)}
            </pre>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#EEEEEE] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#111111] hover:bg-[#333333] text-white font-mono text-xs uppercase tracking-widest px-6 py-2.5 cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};

