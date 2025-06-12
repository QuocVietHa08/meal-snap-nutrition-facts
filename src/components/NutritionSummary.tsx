
import { Card } from "@/components/ui/card";

interface NutritionSummaryProps {
  className?: string;
}

const NutritionSummary = ({ className = "" }: NutritionSummaryProps) => {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold font-poppins mb-4">
          🍽️ Meal Analysis Summary
        </h3>
        
        <div className="space-y-3 text-muted-foreground">
          <p className="flex items-start gap-2">
            <span className="text-lg">🥩</span>
            <span>
              <strong className="text-foreground">High in Protein:</strong> This meal provides excellent protein content, 
              perfect for muscle building and recovery.
            </span>
          </p>
          
          <p className="flex items-start gap-2">
            <span className="text-lg">🌽</span>
            <span>
              <strong className="text-foreground">Moderate Carbs:</strong> Good energy source with a balanced mix of 
              simple and complex carbohydrates.
            </span>
          </p>
          
          <p className="flex items-start gap-2">
            <span className="text-lg">🥑</span>
            <span>
              <strong className="text-foreground">Healthy Fats:</strong> Contains beneficial unsaturated fats that support 
              heart health and nutrient absorption.
            </span>
          </p>
          
          <p className="flex items-start gap-2">
            <span className="text-lg">🧂</span>
            <span>
              <strong className="text-foreground">Watch the Sodium:</strong> This meal is moderately high in sodium. 
              Consider balancing with low-sodium options throughout the day.
            </span>
          </p>
          
          <p className="flex items-start gap-2">
            <span className="text-lg">🌟</span>
            <span>
              <strong className="text-foreground">Overall:</strong> A well-balanced meal that fits nicely into a 
              healthy diet. Great choice for post-workout or lunch!
            </span>
          </p>
        </div>
        
        <div className="bg-muted/50 rounded-lg p-4 mt-6">
          <p className="text-sm text-muted-foreground text-center">
            💡 <strong>Tip:</strong> Try pairing this with some fresh vegetables or a side salad to boost your daily fiber and vitamin intake!
          </p>
        </div>
      </div>
    </Card>
  );
};

export default NutritionSummary;
