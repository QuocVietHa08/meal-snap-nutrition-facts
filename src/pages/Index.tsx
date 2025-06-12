import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageUpload from "@/components/ImageUpload";
import NutritionLabel from "@/components/NutritionLabel";
import NutritionSummary from "@/components/NutritionSummary";
import NutritionLabelSkeleton from "@/components/NutritionLabelSkeleton";
import NutritionSummarySkeleton from "@/components/NutritionSummarySkeleton";
import { analyzeFoodImage, fileToBase64, NutritionData } from "@/config";

// Mock nutrition data - in a real app this would come from AI analysis
const mockNutritionData = {
  servingSize: "1 plate (350g)",
  servingsPerContainer: "1",
  calories: 520,
  totalFat: 18,
  saturatedFat: 6,
  transFat: 0,
  cholesterol: 75,
  sodium: 850,
  totalCarbohydrates: 45,
  dietaryFiber: 8,
  totalSugars: 12,
  addedSugars: 2,
  protein: 35,
  vitaminD: 2.5,
  calcium: 150,
  iron: 4.2,
  potassium: 650,
};

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [nutritionData, setNutritionData] = useState<NutritionData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    setUploadedImage(file);
    setIsAnalyzing(true);
    setError(null);

    try {
      // Convert the image file to base64
      const base64Image = await fileToBase64(file);

      // Analyze the image using OpenAI
      const result = await analyzeFoodImage(base64Image);

      // Update state with the analysis results
      setNutritionData(result);
      setShowResults(true);
    } catch (err) {
      console.error("Error analyzing food image:", err);
      setError("Failed to analyze the image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 pb-16">
        <Hero />

        <section className="mb-12">
          <ImageUpload
            onImageUpload={handleImageUpload}
            isLoading={isAnalyzing}
          />
        </section>

        {/* Show skeleton loading when analyzing */}
        {isAnalyzing && uploadedImage && (
          <div className="space-y-8 animate-pulse">
            <section>
              <h2 className="text-2xl font-bold font-poppins text-center mb-6">
                📊 Analyzing Your Food...
              </h2>
              <NutritionLabelSkeleton />
            </section>

            <section>
              <NutritionSummarySkeleton />
            </section>
          </div>
        )}

        {/* Show results when analysis is complete */}
        {showResults && nutritionData && !isAnalyzing && (
          <div className="space-y-8 animate-fade-in">
            <section>
              <h2 className="text-2xl font-bold font-poppins text-center mb-6">
                📊 Nutrition Analysis: {nutritionData.foodName}
              </h2>
              <NutritionLabel data={nutritionData} />
            </section>

            <section>
              <NutritionSummary />
            </section>
          </div>
        )}

        {!showResults && !uploadedImage && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              📸 Upload a photo of your meal to get started!
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-4">
            <p className="text-destructive">{error}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
