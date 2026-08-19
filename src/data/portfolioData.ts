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
    image: "/Menu/Wood flavored Beef Tenderloin Rossini, Toasted Brioche,Foie Grass, Confit Ratte Potato & Veal Demi glaze.jpeg",
    badge: "Haute Cuisine Feature",
    awardWinning: true
  },
  {
    id: "dish-2",
    title: "Beet Chappathi Braised Short Rib & Kumquat Hummus",
    category: "levant",
    description: "Slow-braised short rib wrapped in vibrant beetroot chappathi, paired with citrus kumquat hummus and artisanal pepper pickle.",
    technique: "12-hour short rib braising, beetroot flatbread lamination, kumquat ultrasonic emulsification",
    ingredients: ["Braised Beef Short Rib", "Beetroot Chappathi", "Kumquat Hummus", "Pepper Pickle", "Micro Sprouts"],
    pairing: "Spiced Pomegranate & Hibiscus Elixir",
    image: "/Menu/Beet Chappathi Braised short rib kumquat Hummus pepper Pickle.jpeg",
    badge: "Superchef 2024 Winning Creation",
    awardWinning: true
  },
  {
    id: "dish-3",
    title: "Pan-Seared Atlantic Salmon & Cauliflower Mousseline",
    category: "signature",
    description: "Crispy skin Atlantic salmon fillet served on velvet cauliflower mousseline with sun-dried tomatoes, roasted cherry tomatoes, and scallion curls.",
    technique: "Crispy pan-searing, cauliflower velvet pureeing, tomato confit reduction",
    ingredients: ["Atlantic Salmon", "Cauliflower Mousseline", "Sun-Dried Tomatoes", "Roasted Tomatoes", "Scallions"],
    pairing: "Chilled Citrus Lemongrass Infusion",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.10.48 AM (7).jpeg",
    badge: "Executive Culinary Feature",
    awardWinning: true
  },
  {
    id: "dish-4",
    title: "Herb-Stuffed Chicken Ballotine with Poultry Jus",
    category: "signature",
    description: "Tender roasted chicken ballotine stuffed with wild herb duxelles, served over roasted broccolini, root vegetables, and rich poultry jus.",
    technique: "Sous-vide precision ballotine, herb duxelles stuffing, pan-glazing",
    ingredients: ["Organic Chicken Breast", "Wild Herb Duxelles", "Roasted Broccolini", "Poultry Reduction"],
    pairing: "Cold-Pressed Rosemary Botanical Tonic",
    image: "/Menu/WhatsApp Image 2026-08-12 at 12.24.10 PM (3).jpeg",
    badge: "Classic Gastronomy",
    awardWinning: false
  },
  {
    id: "dish-5",
    title: "Velvet Chocolate Sphere & Raspberry Amber Gel",
    category: "dessert",
    description: "Artisanal chocolate velvet dome with raspberry core, amber fruit gel cube, pistachio sponge micro-cake, and toasted hazelnut crumble.",
    technique: "Velvet cacao spraying, amber gel slicing, pistachio microwave sponge",
    ingredients: ["Dark Cacao Mousse", "Fresh Raspberries", "Amber Fruit Gel", "Pistachio Sponge", "Toasted Hazelnut"],
    pairing: "Royal Emirates Cardamom Coffee",
    image: "/Menu/WhatsApp Image 2026-08-12 at 12.24.10 PM (1).jpeg",
    badge: "Haute Pastry Creation",
    awardWinning: true
  },
  {
    id: "dish-6",
    title: "Crispy Panko Arancini with Truffle Mushroom Velouté",
    category: "catering",
    description: "Golden panko-crusted risotto arancini resting on creamed truffle mushroom sauce with tender asparagus spears and edamame.",
    technique: "Risotto ball lamination, panko frying, truffle mushroom reduction",
    ingredients: ["Arborio Rice Arancini", "Truffle Mushroom Velouté", "Charred Asparagus", "Edamame Beans"],
    pairing: "Sparkling Pear & Thyme Mocktail",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.10.48 AM (3).jpeg",
    badge: "Gourmet Banquet Highlight",
    awardWinning: false
  },
  {
    id: "dish-7",
    title: "Crispy Katsu & Cauliflower Saffron Coconut Curry",
    category: "levant",
    description: "Golden katsu crisp over fragrant basmati rice, charred cauliflower florets, and aromatic saffron coconut curry with bell pepper julienne.",
    technique: "Panko pan-crisping, saffron coconut emulsion, low-temp cauliflower roasting",
    ingredients: ["Crispy Katsu Fillet", "Basmati Rice", "Roasted Cauliflower", "Saffron Coconut Curry"],
    pairing: "Chilled Mango Ginger Lassi",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.10.48 AM (6).jpeg",
    badge: "Modern Fusion Dish",
    awardWinning: false
  },
  {
    id: "dish-8",
    title: "Gourmet Wagyu Sliders with Wild Rocket & Halloumi",
    category: "catering",
    description: "Juicy artisanal Wagyu beef patties on toasted brioche buns topped with seared halloumi, wild rocket, and garlic truffle aioli.",
    technique: "Cast-iron seared Wagyu, brioche toaster lamination, truffle garlic emulsification",
    ingredients: ["Prime Wagyu Beef", "Brioche Buns", "Seared Halloumi", "Wild Rocket", "Truffle Aioli"],
    pairing: "Smoked Applewood Botanical Tonic",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.08.26 AM (3).jpeg",
    badge: "VIP Event Favorite",
    awardWinning: false
  },
  {
    id: "dish-9",
    title: "Tamago Ribbons & Smashed Avocado Sourdough",
    category: "signature",
    description: "Delicate Japanese tamago egg ribbons layered over smashed avocado sourdough with roasted cherry tomatoes, labneh, and chili oil drizzle.",
    technique: "Tamago crepe slicing, avocado mashing, chili oil infusion",
    ingredients: ["Tamago Egg Ribbons", "Smashed Avocado", "Seeded Sourdough", "Labneh", "Chili Oil"],
    pairing: "Iced Green Tea & Citrus Tonic",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.10.48 AM (2).jpeg",
    badge: "Artisanal Breakfast Feature",
    awardWinning: false
  },
  {
    id: "dish-10",
    title: "VIP Luxury Banquet & Canapé Buffet Spread",
    category: "catering",
    description: "Opulent catering installation featuring multi-tiered savory canapés, botanical elixir shot glasses, mini sliders, and fruit skewers.",
    technique: "Multi-tiered buffet curation, precision canapé assembly, high-capacity presentation",
    ingredients: ["Artisanal Canapés", "Botanical Shot Glass Elixirs", "Gourmet Tartlets", "Fruit Skewers"],
    pairing: "Custom Sommelier Non-Alcoholic Elixir Bar",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.08.26 AM (4).jpeg",
    badge: "Executive Catering Directorship",
    awardWinning: true
  },
  {
    id: "dish-11",
    title: "Artisanal Gourmet Breakfast & Parfait Bar",
    category: "catering",
    description: "Luxury breakfast buffet station featuring matcha chia pudding glasses, mango coconut sago flutes, and mini brioche sliders.",
    technique: "Matcha chia hydration, mango sago layering, high-end event staging",
    ingredients: ["Organic Matcha Chia", "Mango Coconut Sago", "Fresh Berries", "Mini Brioche Sliders"],
    pairing: "Freshly Pressed Botanical Juice Selection",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.08.27 AM.jpeg",
    badge: "VIP Banquet Directorship",
    awardWinning: false
  },
  {
    id: "dish-12",
    title: "Chilled Soba Noodle Salad with Lemon Ponzu",
    category: "signature",
    description: "Refreshing buckwheat soba noodles tossed with tender bok choy, julienned zucchini, edamame, and zesty lemon ponzu dressing.",
    technique: "Soba blanching & chilling, vegetable julienning, ponzu emulsification",
    ingredients: ["Buckwheat Soba Noodles", "Bok Choy", "Edamame", "Julienned Zucchini", "Lemon Ponzu"],
    pairing: "Chilled Yuzu Sparkler",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.10.48 AM (1).jpeg",
    badge: "Healthy Gastronomy Feature",
    awardWinning: false
  },
  {
    id: "dish-13",
    title: "Wild Blueberry Compote & Fresh Fig Granola Bowl",
    category: "dessert",
    description: "Rich wild blueberry compote layered with Greek yogurt, toasted nut granola, sliced fresh figs, green apple, and chia seeds.",
    technique: "Wild berry simmering, honey nut granola roasting, precision fruit fan plating",
    ingredients: ["Wild Blueberry Compote", "Greek Yogurt", "Fresh Figs", "Toasted Granola", "Chia Seeds"],
    pairing: "Cold-Pressed Passionfruit & Mint Elixir",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.10.48 AM (4).jpeg",
    badge: "Gourmet Breakfast Feature",
    awardWinning: false
  },
  {
    id: "dish-14",
    title: "Crispy Katsu Bao Buns & Gourmet Bento Platter",
    category: "catering",
    description: "Steamed lotus leaf bao buns stuffed with crispy chicken katsu and sriracha mayo, accompanied by fruit boats and tuile dessert pots.",
    technique: "Lotus bao steaming, chicken katsu frying, tuile baking",
    ingredients: ["Steamed Bao Buns", "Crispy Chicken Katsu", "Sriracha Mayo", "Fruit Boats", "Tuile Pots"],
    pairing: "Sparkling Yuzu Lychee Tonic",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.09.59 AM (1).jpeg",
    badge: "VIP Bento Platter",
    awardWinning: false
  },
  {
    id: "dish-15",
    title: "Sesame Crusted Amuse-Bouche Canapé",
    category: "catering",
    description: "Black and white sesame-crusted morsel served on a toasted crisp round with roasted bell pepper, black olive ring, and micro basil.",
    technique: "Sesame crusting, mini brioche toast crunching, micro-canapé assembly",
    ingredients: ["Sesame Seed Crust", "Toasted Brioche Base", "Roasted Bell Pepper", "Black Olive Ring"],
    pairing: "Chilled Sparkling Botanical Tonic",
    image: "/Menu/WhatsApp Image 2026-08-12 at 12.24.11 PM.jpeg",
    badge: "Amuse-Bouche Feature",
    awardWinning: false
  },
  {
    id: "dish-16",
    title: "Artisanal Lamb Sausage Shakshuka with Sourdough",
    category: "levant",
    description: "Spiced tomato skillet with artisanal lamb sausage, poached organic eggs, crumbled feta cheese, mint sprigs, and charred sourdough.",
    technique: "Skillet simmering, egg poaching, lamb sausage searing, sourdough charring",
    ingredients: ["Artisanal Lamb Sausage", "Spiced Tomato Ragout", "Poached Organic Eggs", "Feta Cheese"],
    pairing: "Spiced Cardamom & Mint Elixir",
    image: "/Menu/WhatsApp Image 2026-08-13 at 11.08.26 AM (1).jpeg",
    badge: "Authentic Levant Feature",
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
    year: "2021",
    title: "Gold Award Winner — Hozpitality Excellence Awards",
    organization: "4th Middle East Chef Excellence Awards",
    location: "Dubai, UAE",
    description: "Awarded Gold Award for Sous Chef of the Year at Slices Catering Services Dubai, presented on stage at the Hozpitality Excellence Awards ceremony.",
    category: "award",
    highlightBadge: "Sous Chef of the Year Gold Award",
    image: "/gold_award_2021_enhanced.png"
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
    title: "Hozpitality Excellence 2021 Gold Award — Sous Chef of the Year",
    date: "2021",
    excerpt: "Awarded the prestigious Gold Award for Sous Chef of the Year at the 4th Middle East Chef Excellence Awards for culinary leadership and executive banquet operations at Slices Catering Services Dubai.",
    linkText: "View Gold Award Ceremony Photo",
    url: "/WhatsApp Image 2026-08-12 at 12.24.10 PM.jpeg",
    image: "/WhatsApp Image 2026-08-12 at 12.24.10 PM.jpeg",
    verifiedWinner: true
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "ig-1",
    caption: "Live Culinary Masterclass & Signature Plating",
    likes: 1482,
    comments: 124,
    type: "video",
    videoUrl: "/vid 1.mp4",
    imageUrl: "/vid 1.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["ChefMasterclass", "DubaiChefs", "Gastronomy"]
  },
  {
    id: "ig-2",
    caption: "High-Capacity Banquet Production behind the scenes",
    likes: 930,
    comments: 68,
    type: "video",
    videoUrl: "/vid 2.mp4",
    imageUrl: "/vid 2.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["SlicesCatering", "BanquetOps", "CulinaryDirectorship"]
  },
  {
    id: "ig-3",
    caption: "UAE Superchef 2024 Live Cooking Highlights",
    likes: 1120,
    comments: 89,
    type: "video",
    videoUrl: "/vid 3.mp4",
    imageUrl: "/vid 3.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["Superchef2024", "1stPrize", "LiveCooking"]
  },
  {
    id: "ig-4",
    caption: "VIP Private Dining & Molecular Gastronomy",
    likes: 854,
    comments: 52,
    type: "video",
    videoUrl: "/vid 4.mp4",
    imageUrl: "/vid 4.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["PrivateChef", "MolecularGastronomy", "LuxuryDining"]
  },
  {
    id: "ig-5",
    caption: "Farmhouse Culinary Vision & Live Cooking Showcase",
    likes: 1045,
    comments: 76,
    type: "video",
    videoUrl: "/vid 5.mp4",
    imageUrl: "/vid 5.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["FarmToTable", "ExecutiveChef", "ArborSchool"]
  },
  {
    id: "ig-6",
    caption: "Emirates Culinary Guild & Levant Flavor Mastery",
    likes: 1290,
    comments: 98,
    type: "video",
    videoUrl: "/vid 6.mp4",
    imageUrl: "/vid 6.mp4",
    instagramUrl: "https://www.instagram.com/yaseer.s.arafath/",
    tags: ["LevantCuisine", "EmiratesCulinaryGuild", "CulinaryArt"]
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
