import { Dish, Milestone, PressItem, InstagramPost } from '../types';

export const CHEF_PROFILE = {
  name: "Chef Yaseer Arafath",
  title: "Executive Chef | Culinary Innovator & Gastronomer",
  currentRole: "Executive Chef at The Arbor School Dubai",
  portraitImage: "/yaseer.jpeg",
  kitchenImage: "/yaseer.jpeg",
  instagramHandle: "@yaseer.s.arafath",
  instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
  location: "Dubai, United Arab Emirates",
  yearsExperience: "15+",
  topTitle: "Executive Chef @ Arbor • UAE Superchef 2024 Winner & Date-A-Cheese 2026 Finalist",
  bio: `Chef Yaseer Arafath is an Executive Chef based in Dubai, UAE, currently heading culinary operations & "The Farmhouse" at The Arbor School Dubai. With over 15 years of high-end gastronomy, production management, and central kitchen leadership across the UAE, Chef Yaseer achieved HACCP Certification (AGA Certifications) for kitchen operations and retained the Dubai Municipality Gold Rating across canteen, kitchen, and café.

Currently leading executive culinary directorship at Arbor, Chef Yaseer crafts sustainable farm-to-table cuisine, live cookery lunches, and high-volume nutritional gastronomy. Previously Head Chef & Production Manager at Slices Catering Dubai for nearly 6 years (2,083 days), his achievements include placing 1st in the UAE Superchef 2024 Competition, 5th in the Date-A-Cheese 2026 Competition among hundreds of chefs, earning an Emirates Culinary Guild Silver Medal, and holding a Bachelor's Degree in Culinary & Catering Management (Grade A) from Bharathiar University.`,
  quote: "Culinary artistry is the seamless bridge between deep heritage techniques, uncompromising food safety, and modern sensory expression.",
  contactEmail: "yaseer.s.arafath@gmail.com",
  phoneDisplay: "+971 50 302 3056",
  whatsappNumber: "+971 50 302 3056",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=971503023056&text&type=phone_number&app_absent=0",
  linkedinUrl: "https://www.linkedin.com/in/yaseer-arafath-75b67017b/",
  collaborationScope: "Executive Leadership & Consulting"
};

export const CHEF_STATS = [
  { label: "Years of Executive Culinary Mastery", value: "15+" },
  { label: "UAE Superchef 2024 Winner", value: "1st Place" },
  { label: "Date-A-Cheese 2026 Competition", value: "5th Place" },
  { label: "Food Safety & Audit Standard", value: "HACCP & Gold" },
];

export const SIGNATURE_DISHES: Dish[] = [
  {
    id: "dish-1",
    title: "Wood Flavored Beef Tenderloin Rossini",
    category: "signature",
    description: "Wood-smoked beef tenderloin layered over toasted artisanal brioche with seared foie gras, confit Ratte potatoes, and rich 72-hour veal demi-glace.",
    technique: "Wood-smoking, butter pan-searing, 72-hour veal bone reduction, Ratte potato confit",
    ingredients: ["Prime Beef Tenderloin", "Foie Gras", "Toasted Brioche", "Confit Ratte Potato", "Veal Demi-Glace"],
    pairing: "Non-Alcoholic Smoked Oak & Blackberry Reduction",
    image: "/Wood flavored Beef Tenderloin Rossini, Toasted Brioche,Foie Grass, Confit Ratte Potato & Veal Demi glaze.jpeg",
    badge: "Haute Cuisine Feature",
    awardWinning: true
  },
  {
    id: "dish-2",
    title: "Charcoal Croissant Casserole with Parmesan Sauce",
    category: "signature",
    description: "Artisanal charcoal croissant casserole served with rich aged Parmesan emulsion and micro herbal garnishes.",
    technique: "Charcoal puff lamination, slow casserole baking, aged Parmesan reduction",
    ingredients: ["Activated Charcoal Croissant", "Aged Parmesan Cream", "Organic Micro Herbs", "Clarified Butter"],
    pairing: "Cold-Pressed Botanical Rosemary Tonic",
    image: "/Charcoal croissant casserole Parmesan sauce.jpeg",
    badge: "Chef's Signature Innovation",
    awardWinning: true
  },
  {
    id: "dish-3",
    title: "Beet Chappathi Braised Short Rib & Kumquat Hummus",
    category: "levant",
    description: "Slow-braised short rib wrapped in vibrant beetroot chappathi, paired with citrus kumquat hummus and artisanal pepper pickle.",
    technique: "12-hour short rib braising, beetroot flatbread lamination, kumquat ultrasonic emulsification",
    ingredients: ["Braised Beef Short Rib", "Beetroot Chappathi", "Kumquat Hummus", "Pepper Pickle", "Micro Sprouts"],
    pairing: "Spiced Pomegranate & Hibiscus Elixir",
    image: "/Beet Chappathi Braised short rib kumquat Hummus pepper Pickle.jpeg",
    badge: "Superchef 2024 Winning Creation",
    awardWinning: true
  },
  {
    id: "dish-4",
    title: "VIP Artisanal Tropical Fruit Boats",
    category: "catering",
    description: "Handcrafted bamboo boats filled with diced dragonfruit, golden melon, papaya rubies, and fresh berries, garnished with edible pansies.",
    technique: "Precision fruit carving, botanical flower infusion, chilled VIP presentation",
    ingredients: ["Dragonfruit (Pitaya)", "Papaya Rubies", "Golden Melon", "Fresh Berries", "Edible Pansies"],
    pairing: "Cold-Pressed Passionfruit & Yuzu Spritz",
    image: "/image.png",
    badge: "VIP Artisanal Display",
    awardWinning: false
  },
  {
    id: "dish-5",
    title: "Savory Whipped Cream & Botanical Tarts",
    category: "dessert",
    description: "Delicate shortcrust pastry shells filled with savory whipped cream mousse, smoked paprika dust, and edible flower garnishes.",
    technique: "Shortcrust pastry baking, whipped mousse piping, spice dusting",
    ingredients: ["Shortcrust Tart Shells", "Savory Whipped Cream", "Paprika Dust", "Edible Botanical Flowers"],
    pairing: "Royal Emirates Coffee & Cardamom Infusion",
    image: "/image copy.png",
    badge: "Gourmet Culinary Feature",
    awardWinning: false
  },
  {
    id: "dish-6",
    title: "Bespoke Plated Culinary Degustation",
    category: "catering",
    description: "Haute cuisine tasting course crafted for exclusive VIP private villa dining across the United Arab Emirates.",
    technique: "Live molecular plating, emulsion reduction, micro-green accenting",
    ingredients: ["Chef's Selection Fine Ingredients"],
    pairing: "Custom Sommelier Non-Alcoholic Pairing",
    image: "/image copy 2.png",
    badge: "Executive Tasting Directorship",
    awardWinning: true
  }
];

export const CAREER_MILESTONES: Milestone[] = [
  {
    year: "Aug 2025 – Present",
    title: "Executive Chef",
    organization: "The Arbor School Dubai (The Farmhouse)",
    location: "Dubai, UAE",
    description: "Heading 'The Farmhouse' culinary vision & operations. Achieved HACCP Certification via AGA Certifications and retained Dubai Municipality Gold Rating across canteen, kitchen & café.",
    category: "experience",
    highlightBadge: "Current Leadership Role"
  },
  {
    year: "2026",
    title: "5th Place Winner — Date-A-Cheese 2026 Competition",
    organization: "Date-A-Cheese Culinary Competition",
    location: "Dubai, UAE",
    description: "Placed 5th among hundreds of competing professional chefs across the UAE, showcasing artisanal date-cheese pairings and precision technique.",
    category: "award",
    highlightBadge: "Top 5 UAE Finalist"
  },
  {
    year: "2024",
    title: "1st Prize Winner — UAE Superchef 2024",
    organization: "Xpatzhub Live Cooking Competition at Firki, Royal Ascot Hotel",
    location: "Dubai, UAE",
    description: "Earned first place among top professional chefs in the United Arab Emirates in a high-stakes live culinary showdown, showcasing speed, precision plating, and taste harmony.",
    category: "award",
    highlightBadge: "First Place Trophy"
  },
  {
    year: "Aug 2022 – Aug 2025",
    title: "Head Chef",
    organization: "Slices Catering",
    location: "Dubai, UAE",
    description: "Directing large-scale gourmet culinary operations, menu development, luxury banquets, and daily high-volume gourmet offerings for 3+ years as Head Chef.",
    category: "experience"
  },
  {
    year: "Oct 2019 – Jul 2022",
    title: "Production Manager",
    organization: "Slices Catering",
    location: "Dubai, UAE",
    description: "Managed central kitchen production operations, menu costing, food safety compliance, and supply chain logistics over 2,083 total days at Slices.",
    category: "experience"
  },
  {
    year: "2023",
    title: "Silver Medal Winner — Emirates Culinary Guild",
    organization: "Wathba Dates Festival & Auction",
    location: "Abu Dhabi / Dubai, UAE",
    description: "Awarded Silver Medal by the association of the Emirates Culinary Guild for Arabian/Levant Cuisine Main Course, evaluated by international master chefs.",
    category: "award",
    highlightBadge: "ECG Silver Medal"
  },
  {
    year: "Dec 2018 – Dec 2019",
    title: "Chef De Partie",
    organization: "Queen Elizabeth 2 (QE2 Floating Hotel & Ocean Liner)",
    location: "Mina Rashid, Dubai, UAE",
    description: "Executed high-end maritime dining, luxury banquets, and classic fine dining menus aboard the historic QE2 liner in Dubai.",
    category: "experience"
  },
  {
    year: "Jun 2007 – May 2010",
    title: "Bachelor's Degree in Restaurant, Culinary & Catering Management",
    organization: "Bharathiar University",
    location: "Coimbatore, India",
    description: "Graduated with Grade 'A' honors, building comprehensive grounding in food science, kitchen operations, menu engineering, sanitation, and hospitality management.",
    category: "education",
    highlightBadge: "Grade A Graduate"
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    id: "press-1",
    source: "Khaleej Times & Xpatzhub",
    title: "UAE's Superchef 2024 is a resounding success — Mr. Yaser Arafath takes first prize",
    date: "June 2024",
    excerpt: "The live culinary showdown at Firki, Royal Ascot Hotel saw top chefs from across Dubai and Abu Dhabi compete. Mr. Yaser Arafath, Head Chef at Slices Catering, won first prize with his extraordinary mastery of Levant flavors and modern plating.",
    linkText: "Read Khaleej Times Feature",
    url: "https://www.khaleejtimes.com/",
    verifiedWinner: true
  },
  {
    id: "press-2",
    source: "Emirates Culinary Guild Gazette",
    title: "Silver Medal Awarded for Arabian/Levant Main Course at Wathba Festival",
    date: "December 2023",
    excerpt: "Recognizing Chef Yaseer Arafath's outstanding contribution to modern Arabian cuisine with a Silver Medal certificate signed by the ECG Guild President.",
    linkText: "View ECG Medal Record",
    url: "https://www.emiratesculinaryguild.net/",
    verifiedWinner: true
  },
  {
    id: "press-3",
    source: "Hozpitality Excellence Awards",
    title: "Middle East Chef Excellence Award Winner — Slices Catering",
    date: "2021 - 2024",
    excerpt: "Recognized at the 4th Middle East Chef Excellence Awards for culinary directorship, molecular techniques, and high-capacity banquet management in Dubai.",
    linkText: "View Hozpitality Record",
    url: "https://www.hozpitality.com/",
    verifiedWinner: true
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    caption: "",
    likes: 1482,
    comments: 124,
    type: "video",
    videoUrl: "/vid 1.mp4",
    imageUrl: "/vid 1.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: []
  },
  {
    id: "ig-2",
    caption: "",
    likes: 930,
    comments: 68,
    type: "video",
    videoUrl: "/vid 2.mp4",
    imageUrl: "/vid 2.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: []
  },
  {
    id: "ig-3",
    caption: "",
    likes: 1120,
    comments: 89,
    type: "video",
    videoUrl: "/vid 3.mp4",
    imageUrl: "/vid 3.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: []
  },
  {
    id: "ig-4",
    caption: "",
    likes: 854,
    comments: 52,
    type: "video",
    videoUrl: "/vid 4.mp4",
    imageUrl: "/vid 4.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: []
  }
];

export const CULINARY_SERVICES = [
  {
    title: "Luxury Private Dining & VIP Banquets",
    icon: "UtensilsCrossed",
    description: "Bespoke multi-course fine dining experiences delivered at luxury villas, royal residences, yachts, and exclusive venues across Dubai.",
    features: ["Customized 5-8 course tasting menus", "Molecular gastronomy live presentation", "Dedicated service crew & sommelier pairing", "Table setting & aesthetic decor guidance"]
  },
  {
    title: "High-End Corporate & Wedding Catering",
    icon: "Building2",
    description: "Through Slices Catering, Chef Yaseer leads large-scale gourmet culinary operations for 50 to 2,000+ guests with flawless execution.",
    features: ["Live interactive cooking & grill stations", "Cold-pressed juice & botanical elixir bars", "Dietary custom options (Keto, Vegan, Halal, GF)", "Seamless logistics & temperature controls"]
  },
  {
    title: "Menu Engineering & Culinary Consulting",
    icon: "ChefHat",
    description: "Expert consultation for restaurants, hotels, and luxury catering concepts seeking menu revamps, recipe development, and kitchen optimization.",
    features: ["Recipe standardization & food cost modeling", "Levant & Modern Fusion concept design", "Staff training & kitchen workflow setup", "Quality control & HACCP alignment"]
  },
  {
    title: "Masterclasses & Live Culinary Shows",
    icon: "Sparkles",
    description: "Engaging cooking demonstrations, guest judge appearances, corporate team-building culinary workshops, and media appearances.",
    features: ["Live molecular gastronomy demos", "Hands-on grilling & technique workshops", "Media & brand ambassador engagements", "University & culinary school keynotes"]
  }
];
