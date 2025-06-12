import openai from "./openai";
import { ChatCompletionMessageParam } from "openai/resources";

// Define the nutrition data structure
export interface NutritionData {
  foodName: string;
  servingSize: string;
  servingsPerContainer: string;
  calories: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  totalCarbohydrates: number;
  dietaryFiber: number;
  totalSugars: number;
  addedSugars: number;
  protein: number;
  vitaminD: number;
  calcium: number;
  iron: number;
  potassium: number;
}

/**
 * Analyzes a food image using OpenAI's Vision model and returns nutrition information
 * @param imageBase64 - Base64 encoded image data
 * @returns Promise with nutrition data
 */
export async function analyzeFoodImage(
  imageBase64: string
): Promise<NutritionData> {
  try {
    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: `You are a nutrition analysis expert. Analyze the food image and provide detailed nutritional information in JSON format.
        Identify the food items, estimate portion sizes, and provide accurate nutritional data.
        Return ONLY valid JSON with no additional text, following this exact structure:
        {
          "foodName": "Name of the dish",
          "servingSize": "Estimated serving size in grams",
          "servingsPerContainer": "1",
          "calories": number,
          "totalFat": number (in grams),
          "saturatedFat": number (in grams),
          "transFat": number (in grams),
          "cholesterol": number (in mg),
          "sodium": number (in mg),
          "totalCarbohydrates": number (in grams),
          "dietaryFiber": number (in grams),
          "totalSugars": number (in grams),
          "addedSugars": number (in grams),
          "protein": number (in grams),
          "vitaminD": number (in mcg),
          "calcium": number (in mg),
          "iron": number (in mg),
          "potassium": number (in mg)
        }`,
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Analyze this food image and provide nutritional information:",
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${imageBase64}`,
            },
          },
        ],
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      max_tokens: 1000,
      temperature: 0.2,
    });

    const content = response.choices[0]?.message?.content;

    console.log("Content:", content);

    if (!content) {
      throw new Error("No response content from OpenAI");
    }

    // Parse the JSON response
    try {
      // Simple approach to extract JSON content
      let jsonContent = content;

      // Remove markdown code block markers if present
      if (content.includes("```")) {
        // Remove the first occurrence of ```json or ``` at the beginning
        jsonContent = content.replace(/^```(?:json)?\s*/m, "");
        // Remove the last occurrence of ``` at the end
        jsonContent = jsonContent.replace(/```\s*$/m, "");
      }

      console.log("Cleaned JSON content:", jsonContent);

      // Try to find JSON object within the content
      const objectStart = jsonContent.indexOf("{");
      const objectEnd = jsonContent.lastIndexOf("}");

      if (objectStart !== -1 && objectEnd !== -1 && objectEnd > objectStart) {
        // Extract just the JSON object
        jsonContent = jsonContent.substring(objectStart, objectEnd + 1);
        console.log("Extracted JSON object:", jsonContent);
      }

      const nutritionData = JSON.parse(jsonContent) as NutritionData;
      return nutritionData;
    } catch (error) {
      console.error("Failed to parse OpenAI response:", content);
      throw new Error("Failed to parse nutrition data from AI response");
    }
  } catch (error) {
    console.error("Error analyzing food image:", error);
    throw error;
  }
}
