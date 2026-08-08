import { Dish, Milestone, PressItem, InstagramPost } from '../types';

export const CHEF_PROFILE = {
  name: "Chef Yaseer Arafath",
  title: "Head Chef | Culinary Innovator & Gastronomer",
  currentRole: "Head Chef at Slices Catering (Dubai, UAE)",
  portraitImage: "/arafath.png",
  kitchenImage: "/arafath.png",
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
    title: "Signature 36-Hour Levant Lamb Shank",
    category: "signature",
    description: "Award-winning braised lamb shank infused with cardamom, star anise, and organic date reduction, served alongside charred heirloom carrots, garlic labneh mousse, and saffron jus.",
    technique: "Sous-vide for 36 hours at 62°C, charcoal searing, nitrogen flash emulsion",
    ingredients: ["Fresh UAE Grass-fed Lamb", "Liwa Date Syrup", "Star Anise", "Cardamom", "Garlic Labneh Mousse", "Saffron Reduction"],
    pairing: "Non-Alcoholic Spiced Hibiscus & Oak Mocktail",
    image: "/src/assets/images/signature_plating_dish_1786112937657.jpg",
    badge: "ECG Silver Medalist Recipe",
    awardWinning: true
  },
  {
    id: "dish-2",
    title: "VIP Artisanal Tropical & Edible Flower Fruit Boats",
    category: "catering",
    description: "Handcrafted bamboo leaf boats overflowing with ripe dragonfruit, papaya rubies, golden melon sphere, berries, and Damascus edible orchids, drizzled with lime mint coulis.",
    technique: "Precision fruit carving, botanical infusion, chill preservation",
    ingredients: ["Pitaya (Dragonfruit)", "Berry Collection", "Damascus Orchids", "Fresh Mint Coulis", "Citrus Elixir"],
    pairing: "Cold-Pressed Passionfruit & Elderflower Tonic",
    image: "/src/assets/images/catering_dessert_display_1786112954643.jpg",
    badge: "Slices Catering VIP Favorite",
    awardWinning: false
  },
  {
    id: "dish-3",
    title: "Smoked Wagyu Beef Skewers with Herb Emulsion",
    category: "signature",
    description: "Tender cubes of MB7+ Wagyu beef grilled over binchotan charcoal, glazed with sumac pomegranate syrup, dressed with micro herbs and white garlic cream.",
    technique: "Binchotan charcoal searing, smoke dome presentation, micro greens layering",
    ingredients: ["MB7+ Wagyu Beef", "Pomegranate Molasses", "Binchotan Smoke", "Micro Cilantro", "Whipped Garlic Cream"],
    pairing: "Smoked Black Tea & Bergamot Infusion",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    badge: "Live Grill Station Star",
    awardWinning: true
  },
  {
    id: "dish-4",
    title: "Citrus Thyme & Cold-Pressed Botanical Elixirs",
    category: "drinks",
    description: "Vibrant yellow citrus elixirs garnished with charred thyme twigs and dried cranberry rubies, engineered for high-energy VIP banquets and corporate hospitality.",
    technique: "Cold-press extraction, ultrasonic herb infusion, aromatic oil extraction",
    ingredients: ["Organic Yellow Grapefruit", "Valencia Orange", "Wild Thyme", "Dried Cranberries", "Agave Nectar"],
    pairing: "Ideal refreshing welcome drink for VIP receptions",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80",
    badge: "Custom Drink Craft",
    awardWinning: false
  },
  {
    id: "dish-5",
    title: "Deconstructed Pistachio & Rose Water Parfait",
    category: "dessert",
    description: "Velvety Iranian pistachio mousse, caramelized filo pastry shards, cardamom gelato, and nitrogen-frozen rose water pearls.",
    technique: "Cryogenic nitrogen pearls, delicate pastry tuile layering, whipped mousse stabilization",
    ingredients: ["Iranian Green Pistachios", "Cardamom Cream", "Damascus Rose Water", "Gold Leaf 24K", "Crisp Filo"],
    pairing: "Royal Emirates Gahwa (Arabic Coffee)",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80",
    badge: "Fine Dining Dessert",
    awardWinning: true
  },
  {
    id: "dish-6",
    title: "Pan-Seared Red Sea Snapper with Saffron Velvet",
    category: "levant",
    description: "Crispy skin snapper resting on saffron-infused cauliflower purée, topped with sea fennel, pomegranate arils, and lemon butter emulsion.",
    technique: "Pan-searing with clarified ghee, emulsion whisking, micro salad garnishing",
    ingredients: ["Red Sea Snapper", "Iranian Saffron", "Cauliflower Purée", "Pomegranate Rubies", "Sea Fennel"],
    pairing: "Sparkling Yuzu & Rosemary Spritz",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1000&q=80",
    badge: "Levant Seafood Feature",
    awardWinning: false
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
