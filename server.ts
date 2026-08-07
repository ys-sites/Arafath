import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Booking inquiry endpoint
  app.post("/api/booking", (req, res) => {
    const { name, email, phone, eventType, eventDate, guestCount, location, notes } = req.body;

    if (!name || !email || !eventType) {
      return res.status(400).json({ error: "Missing required fields: name, email, and eventType are mandatory." });
    }

    const bookingId = `YA-${Math.floor(100000 + Math.random() * 900000)}`;
    
    // In a production setup, this sends email / SMS notifications or logs to database
    console.log(`[BOOKING RECEIVED] ${bookingId} for ${name} (${email}) - ${eventType}`);

    return res.json({
      success: true,
      bookingId,
      message: `Thank you ${name}. Your booking request for ${eventType} has been submitted to Chef Yaseer Arafath's concierge team.`,
      summary: {
        bookingId,
        name,
        email,
        phone,
        eventType,
        eventDate: eventDate || "Flexible",
        guestCount: guestCount || "TBD",
        location: location || "Dubai, UAE",
        notes
      }
    });
  });

  // AI Menu Curation Endpoint powered by Gemini API
  app.post("/api/ai-menu-curator", async (req, res) => {
    const { eventType, cuisinePreference, guestCount, dietary, budgetTier, specificNotes } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;

    const systemPrompt = `You are Chef Yaseer Arafath, Head Chef at Slices Catering in Dubai, Winner of UAE Superchef 2024, and Silver Medalist at the Emirates Culinary Guild. 
Your signature style blends modern Middle Eastern/Levant heritage with contemporary European techniques, molecular gastronomy highlights, charcoal grilling, and vibrant artistic presentation suitable for Dubai high-society banquets, luxury weddings, and private VIP dining.

Generate a bespoke, luxurious 4-course menu proposal based on the following event request:
- Event Type: ${eventType || "Exclusive Private Dining"}
- Cuisine Style: ${cuisinePreference || "Levant & Modern Gastronomy"}
- Guest Count: ${guestCount || "20"}
- Dietary Restrictions: ${dietary || "None specified"}
- Budget Tier: ${budgetTier || "Ultra Fine Dining"}
- Additional Details: ${specificNotes || "Focus on signature dishes, aromatic spices, gold accents, and theatrical plating."}

Respond strictly in valid JSON format matching this schema:
{
  "menuTitle": "string",
  "conceptOverview": "string",
  "courses": [
    {
      "courseName": "Amuse-Bouche" | "Appetizer" | "Main Course" | "Dessert",
      "dishTitle": "string",
      "description": "string",
      "platingNotes": "string",
      "pairingSuggestion": "string"
    }
  ],
  "chefSpecialTouch": "string",
  "estimatedPrepLeadTime": "string"
}`;

    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: systemPrompt,
          config: {
            responseMimeType: "application/json",
          }
        });

        const text = response.text || "";
        const parsed = JSON.parse(text);
        return res.json({ success: true, menu: parsed });
      } catch (err: any) {
        console.error("Gemini API Error, falling back to curated proposal generator:", err?.message || err);
      }
    }

    // High quality curated fallback if Gemini key is missing or errored
    const fallbackMenu = {
      menuTitle: `Royal ${cuisinePreference || "Levant"} Gastronomy Tasting Menu`,
      conceptOverview: `A handcrafted 4-course culinary journey designed by Chef Yaseer Arafath, combining 36-hour slow cooking, local Emirati date infusions, micro-herb emulsions, and gold-leaf theatrical finishing.`,
      courses: [
        {
          courseName: "Amuse-Bouche",
          dishTitle: "Smoked Date & Truffle Pearl Spheres",
          description: "Encapsulated local Liwa date reduction with white truffle essence, crispy kunafa nest, and edible gold leaf.",
          platingNotes: "Served over fragrant rosemary smoke under a crystal cloche.",
          pairingSuggestion: "Sparkling White Tea & Gold Leaf Elixir"
        },
        {
          courseName: "Appetizer",
          dishTitle: "Cured Red Sea Snapper with Saffron Citrus Gel",
          description: "Thinly sliced snapper cured in sumac and bergamot, pickled fennel bulb, pomegranate rubies, and finger lime caviar.",
          platingNotes: "Arranged in a minimalist crescent on black volcanic slate.",
          pairingSuggestion: "Artisanal Thyme & Bergamot Spritz"
        },
        {
          courseName: "Main Course",
          dishTitle: "Signature 36-Hour Sous-Vide Levant Lamb Shank",
          description: "Emirates Culinary Guild Silver Medal winning recipe: tender lamb shank infused with cardamon and star anise, roasted garlic labneh, charred heirloom carrots, and saffron reduction.",
          platingNotes: "Drizzled tableside with rich natural jus from a brass pitcher.",
          pairingSuggestion: "Non-Alcoholic Spiced Hibiscus & Oak Mocktail"
        },
        {
          courseName: "Dessert",
          dishTitle: "Deconstructed Pistachio & Rose Water Parfait",
          description: "Velvety pistachio mousse, caramelized filo shards, cardamom gelato, and candied Damascus rose petals.",
          platingNotes: "Presented inside handcrafted organic bamboo boats.",
          pairingSuggestion: "Cardamom-Infused Royal Arabic Coffee (Gahwa)"
        }
      ],
      chefSpecialTouch: "Live molecular nitro-dragon dessert finish & personalized souvenir menu printed on linen paper.",
      estimatedPrepLeadTime: "3 to 5 business days for custom ingredient sourcing"
    };

    return res.json({ success: true, menu: fallbackMenu });
  });

  // Vite Middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Chef Yaseer Arafath Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
