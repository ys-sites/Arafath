import { Dish, Milestone, PressItem, InstagramPost } from '../types';

export const CHEF_PROFILE = {
  name: "Chef Yaseer Arafath",
  title: "Head Chef | Culinary Innovator & Gastronomer",
  currentRole: "Head Chef at Slices Catering (Dubai, UAE)",
  portraitImage: "/yaseer.jpeg",
  kitchenImage: "/yaseer.jpeg",
  instagramHandle: "@yaseer.s.arafath",
  instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
  location: "Dubai, United Arab Emirates",
  yearsExperience: "12+",
  topTitle: "UAE Superchef 2024 Winner & ECG Silver Medalist",
  bio: `Chef Yaseer Arafath is a celebrated Head Chef based in Dubai, UAE, renowned for elevating Middle Eastern & international gastronomy into fine-art dining experiences. With over a decade of high-end culinary expertise, Chef Yaseer combines rigorous classical techniques—sautéing, precise charcoal grilling, and delicate molecular gastronomy—with rich Arabian cultural heritage. 

Currently leading culinary direction as Head Chef at Slices Catering Dubai, Chef Yaseer crafts bespoke catering operations, private VIP dinners, and high-volume luxury events across the United Arab Emirates. His background includes culinary leadership roles at The Arbor School Dubai and the iconic Queen Elizabeth 2 (QE2 Hotel & Ocean Liner in Dubai), alongside formal academic credentials in Culinary & Catering Management from Bharathiar University.`,
  quote: "Culinary artistry is the seamless bridge between deep heritage techniques and modern sensory expression. Every plate must tell a story of provenance, precision, and passion.",
  contactEmail: "yaseera.chef@gmail.com",
  phoneDisplay: "+971 50 123 4567",
  cateringCapacity: "10 to 2,000 Guests"
};

export const CHEF_STATS = [
  { label: "Years of Culinary Mastery", value: "12+" },
  { label: "UAE Superchef 2024 Title", value: "1st Place" },
  { label: "Emirates Culinary Guild", value: "Silver Medal" },
  { label: "High-End Events Curated", value: "1,200+" },
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
    badge: "Slices Catering VIP Favorite",
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
    badge: "Banquet Hors d'œuvre Star",
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
    badge: "VIP Banquet Directorship",
    awardWinning: true
  }
];

export const CAREER_MILESTONES: Milestone[] = [
  {
    year: "2024",
    title: "1st Prize Winner — UAE Superchef 2024",
    organization: "Xpatzhub Live Cooking Competition at Firki, Royal Ascot Hotel",
    location: "Dubai, UAE",
    description: "Earned first place among top professional chefs in the United Arab Emirates in a high-stakes live culinary showdown, showcasing speed, precision plating, and exceptional taste harmony.",
    category: "award",
    highlightBadge: "First Place Trophy",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2023",
    title: "Silver Medal Winner — Emirates Culinary Guild",
    organization: "Wathba Dates Festival & Auction",
    location: "Abu Dhabi / Dubai, UAE",
    description: "Awarded Silver Medal by the association of the Emirates Culinary Guild for Arabian/Levant Cuisine Main Course, evaluated by international master chefs.",
    category: "award",
    highlightBadge: "ECG Silver Medal",
  },
  {
    year: "2021 – Present",
    title: "Head Chef",
    organization: "Slices Catering",
    location: "Dubai, UAE",
    description: "Spearheading culinary operations, menu development, luxury banquets, VIP catering, and daily high-volume gourmet offerings for prestigious clients across Dubai and Abu Dhabi.",
    category: "experience",
    highlightBadge: "Current Leadership Role"
  },
  {
    year: "2022",
    title: "Expoculinaire Salon Culinaire UAE Medalist",
    organization: "Sharjah Expo Center / Worldchefs",
    location: "Sharjah & Dubai, UAE",
    description: "Competed in the prestigious ExpoCulinaire live cook-off judged by Worldchefs certified judges, recognized for innovative technique and flavor balance.",
    category: "award",
    highlightBadge: "Salon Culinaire"
  },
  {
    year: "2018 – 2021",
    title: "Senior Culinary Lead & School Catering Operations",
    organization: "The Arbor School Dubai",
    location: "Dubai, UAE",
    description: "Managed farm-to-table culinary initiatives, eco-conscious menu design, and large-scale nutritional gastronomy in alignment with sustainable culinary practices.",
    category: "experience"
  },
  {
    year: "2015 – 2018",
    title: "Sous Chef / Culinary Specialist",
    organization: "Queen Elizabeth 2 (QE2 Floating Hotel & Ocean Liner)",
    location: "Mina Rashid, Dubai, UAE",
    description: "Executed high-end maritime dining, luxury banquets, and classic fine dining menus aboard the historic QE2 liner in Dubai.",
    category: "experience"
  },
  {
    year: "2024",
    title: "Guest Culinary Judge & Keynote Demonstrator",
    organization: "Department of Hotel Management, Sir Issac Newton Arts & Science College",
    location: "India / International",
    description: "Invited as Chief Guest & Live Cooking Judge to inspire upcoming hotel management students, demonstrating advanced plating and kitchen management.",
    category: "press",
    highlightBadge: "Academic Keynote"
  },
  {
    year: "2007 – 2010",
    title: "Bachelor's Degree in Restaurant, Culinary & Catering Management",
    organization: "Bharathiar University",
    location: "Coimbatore, India",
    description: "Graduated with comprehensive formal grounding in food science, kitchen operations, menu engineering, sanitation, and hospitality management.",
    category: "education"
  }
];

export const PRESS_ITEMS: PressItem[] = [
  {
    id: "press-1",
    source: "Khaleej Times",
    title: "UAE's Superchef 2024 is a resounding success — Mr. Yaser Arafath takes first prize",
    date: "June 2024",
    excerpt: "The live culinary showdown at Firki, Royal Ascot Hotel saw top chefs from across Dubai and Abu Dhabi compete. Mr. Yaser Arafath, Head Chef at Slices Catering, won first prize with his extraordinary mastery of Levant flavors and modern plating.",
    linkText: "Read Coverage Summary",
    verifiedWinner: true
  },
  {
    id: "press-2",
    source: "Emirates Culinary Guild Official Gazette",
    title: "Silver Medal Awarded for Arabian/Levant Main Course at Wathba Festival",
    date: "December 2023",
    excerpt: "Recognizing Chef Yaseer Arafath's outstanding contribution to modern Arabian cuisine with a Silver Medal certificate signed by the ECG Guild President.",
    linkText: "View ECG Medal Record",
    verifiedWinner: true
  },
  {
    id: "press-3",
    source: "Hospitality News Middle East",
    title: "Elevating Catering Standards in the UAE: Slices Catering's Culinary Drive",
    date: "2024",
    excerpt: "An inside look at how Head Chef Yaseer Arafath fuses molecular techniques with high-capacity banquet management to set new benchmarks in Dubai hospitality.",
    linkText: "Read Article Feature",
    verifiedWinner: false
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    caption: "Holding the 1st Place Trophy at UAE Superchef 2024! Grateful for the intense live competition and support from Slices Catering team. #Superchef2024 #ChefYaseer #DubaiChefs #SlicesCatering",
    likes: 1482,
    comments: 124,
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["#Superchef2024", "#FirkiDubai", "#FirstPrize"]
  },
  {
    id: "ig-2",
    caption: "Official Silver Medal Certificate from the Emirates Culinary Guild at Wathba Dates Festival. Passion for Levant cuisine continues! 🥈🇦🇪 #EmiratesCulinaryGuild #LevantCuisine #DubaiCatering",
    likes: 930,
    comments: 68,
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["#EmiratesCulinaryGuild", "#SilverMedal", "#AbuDhabi"]
  },
  {
    id: "ig-3",
    caption: "Freshly prepared artisanal fruit boats with edible flowers for today's luxury VIP catering banquet in Downtown Dubai. Every detail counts! 🌺🥭 #SlicesCatering #VIPEvent #GourmetCatering",
    likes: 1120,
    comments: 89,
    type: "carousel",
    imageUrl: "/src/assets/images/catering_dessert_display_1786112954643.jpg",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["#FruitPlatter", "#LuxuryCatering", "#DowntownDubai"]
  },
  {
    id: "ig-4",
    caption: "Live molecular gastronomy demonstration at Sir Issac Newton College Hotel Mgmt dept. Sharing knowledge with the next generation of culinary leaders. 👨‍🍳🔥 #CulinaryEducation #LiveCooking #KeynoteChef",
    likes: 854,
    comments: 52,
    type: "video",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["#LiveCooking", "#GuestChef", "#HotelManagement"]
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
