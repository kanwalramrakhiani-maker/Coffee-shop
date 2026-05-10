import { GoogleGenAI, Type } from "@google/genai";
import { MenuItem } from "../types";
import { menuItems } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getDrinkRecommendation(userPrompt: string): Promise<{
  recommendedItemId: string;
  reason: string;
  pairingSuggestion: string;
}> {
  const menuContext = menuItems.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    category: item.category
  }));

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Based on the user's mood or preference: "${userPrompt}", recommend the best drink from our menu.
    
    Menu: ${JSON.stringify(menuContext)}
    
    Return a JSON object with:
    - recommendedItemId: the ID of the menu item
    - reason: a concise, inviting explanation why this matches their mood (max 20 words)
    - pairingSuggestion: a small snack or detail to enjoy with it`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          recommendedItemId: { type: Type.STRING },
          reason: { type: Type.STRING },
          pairingSuggestion: { type: Type.STRING }
        },
        required: ["recommendedItemId", "reason", "pairingSuggestion"]
      }
    }
  });

  return JSON.parse(response.text.trim());
}
