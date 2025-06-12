
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageUpload from "@/components/ImageUpload";
import NutritionLabel from "@/components/NutritionLabel";
import NutritionSummary from "@/components/NutritionSummary";

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

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
    setIsAnalyzing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
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

        {showResults && (
          <div className="space-y-8 animate-fade-in">
            <section>
              <h2 className="text-2xl font-bold font-poppins text-center mb-6">
                📊 Nutrition Analysis
              </h2>
              <NutritionLabel data={mockNutritionData} />
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
      </main>
    </div>
  );
};

export default Index;
