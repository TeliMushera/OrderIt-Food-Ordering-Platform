const axios = require("axios");

exports.generateDishDescription = async ({
  name,
  category,
  spiceLevel,
  price,
}) => {
  const prompt = `
You are a professional food classification assistant.

Generate ONLY valid JSON.
No markdown.
No explanation text.

IMPORTANT RULES:
- Tags must be accurate restaurant-style tags
- Do NOT misclassify dishes
- Do NOT label main courses as desserts
- Allergens must be realistic
- Serves must be realistic (1 or 2)
- bestFor must be meal timings only

Dish Name: ${name}
Category: ${category}
Spice Level: ${spiceLevel}
Base Price: ${price}

Return JSON in this EXACT format:
{
  "description": "string",
  "tags": ["string"],
  "allergens": ["string"],
  "serves": "string",
  "bestFor": ["string"]
}
`;

  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.4,
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response || !response.data) {
      throw new Error("Empty response from AI provider");
    }

    const content = response.data?.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("AI response missing content");
    }

    return JSON.parse(content);
  } catch (err) {
    console.error("AI request failed:", err.message);
    console.error("AI provider response:", err.response?.data || err.config || null);

    const fallback = {
      description: `A delicious ${name} in the ${category} category with ${spiceLevel} spice and a price of ${price}.`,
      tags: [category, spiceLevel, "fresh", "tasty"],
      allergens: ["milk", "wheat"],
      serves: "1",
      bestFor: ["Lunch", "Dinner"],
      fallback: true,
    };

    return fallback;
  }
};