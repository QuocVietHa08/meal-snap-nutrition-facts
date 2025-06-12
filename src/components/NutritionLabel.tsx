
import { Card } from "@/components/ui/card";

interface NutritionData {
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

interface NutritionLabelProps {
  data: NutritionData;
  className?: string;
}

const NutritionLabel = ({ data, className = "" }: NutritionLabelProps) => {
  const calculateDV = (nutrient: string, amount: number): number => {
    const dvValues: { [key: string]: number } = {
      totalFat: 78,
      saturatedFat: 20,
      cholesterol: 300,
      sodium: 2300,
      totalCarbohydrates: 275,
      dietaryFiber: 28,
      addedSugars: 50,
      protein: 50,
      vitaminD: 20,
      calcium: 1300,
      iron: 18,
      potassium: 4700,
    };
    
    return Math.round((amount / dvValues[nutrient]) * 100);
  };

  return (
    <Card className={`max-w-sm mx-auto bg-white text-black border-2 border-black font-inter ${className}`}>
      <div className="p-4">
        {/* Header */}
        <div className="border-b-8 border-black pb-2 mb-2">
          <h2 className="text-2xl font-bold">Nutrition Facts</h2>
          <div className="text-sm">
            <div>Serving size {data.servingSize}</div>
            <div>Servings per container {data.servingsPerContainer}</div>
          </div>
        </div>

        {/* Calories */}
        <div className="border-b-4 border-black pb-2 mb-2">
          <div className="flex justify-between items-end">
            <span className="text-xl font-bold">Calories</span>
            <span className="text-3xl font-bold">{data.calories}</span>
          </div>
        </div>

        {/* Daily Value Header */}
        <div className="border-b border-black pb-1 mb-2">
          <div className="text-sm font-bold text-right">% Daily Value*</div>
        </div>

        {/* Nutrients */}
        <div className="space-y-1 text-sm">
          <NutrientRow 
            label="Total Fat" 
            amount={`${data.totalFat}g`} 
            dv={calculateDV('totalFat', data.totalFat)} 
            bold 
          />
          <NutrientRow 
            label="Saturated Fat" 
            amount={`${data.saturatedFat}g`} 
            dv={calculateDV('saturatedFat', data.saturatedFat)} 
            indented 
          />
          <NutrientRow 
            label="Trans Fat" 
            amount={`${data.transFat}g`} 
            indented 
          />
          <NutrientRow 
            label="Cholesterol" 
            amount={`${data.cholesterol}mg`} 
            dv={calculateDV('cholesterol', data.cholesterol)} 
            bold 
          />
          <NutrientRow 
            label="Sodium" 
            amount={`${data.sodium}mg`} 
            dv={calculateDV('sodium', data.sodium)} 
            bold 
          />
          <NutrientRow 
            label="Total Carbohydrate" 
            amount={`${data.totalCarbohydrates}g`} 
            dv={calculateDV('totalCarbohydrates', data.totalCarbohydrates)} 
            bold 
          />
          <NutrientRow 
            label="Dietary Fiber" 
            amount={`${data.dietaryFiber}g`} 
            dv={calculateDV('dietaryFiber', data.dietaryFiber)} 
            indented 
          />
          <NutrientRow 
            label="Total Sugars" 
            amount={`${data.totalSugars}g`} 
            indented 
          />
          <NutrientRow 
            label="Added Sugars" 
            amount={`${data.addedSugars}g`} 
            dv={calculateDV('addedSugars', data.addedSugars)} 
            indented 
            doubleIndented 
          />
          <NutrientRow 
            label="Protein" 
            amount={`${data.protein}g`} 
            dv={calculateDV('protein', data.protein)} 
            bold 
            borderTop 
          />
        </div>

        {/* Vitamins and Minerals */}
        <div className="border-t-4 border-black pt-2 mt-2 space-y-1 text-sm">
          <NutrientRow 
            label="Vitamin D" 
            amount={`${data.vitaminD}mcg`} 
            dv={calculateDV('vitaminD', data.vitaminD)} 
          />
          <NutrientRow 
            label="Calcium" 
            amount={`${data.calcium}mg`} 
            dv={calculateDV('calcium', data.calcium)} 
          />
          <NutrientRow 
            label="Iron" 
            amount={`${data.iron}mg`} 
            dv={calculateDV('iron', data.iron)} 
          />
          <NutrientRow 
            label="Potassium" 
            amount={`${data.potassium}mg`} 
            dv={calculateDV('potassium', data.potassium)} 
          />
        </div>

        {/* Footer */}
        <div className="border-t border-black pt-2 mt-2 text-xs">
          <p>
            * The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 
            2,000 calories a day is used for general nutrition advice.
          </p>
        </div>
      </div>
    </Card>
  );
};

interface NutrientRowProps {
  label: string;
  amount: string;
  dv?: number;
  bold?: boolean;
  indented?: boolean;
  doubleIndented?: boolean;
  borderTop?: boolean;
}

const NutrientRow = ({ 
  label, 
  amount, 
  dv, 
  bold = false, 
  indented = false, 
  doubleIndented = false,
  borderTop = false 
}: NutrientRowProps) => {
  return (
    <div className={`flex justify-between ${borderTop ? 'border-t border-black pt-1' : ''}`}>
      <div className={`${bold ? 'font-bold' : ''} ${indented ? 'ml-4' : ''} ${doubleIndented ? 'ml-8' : ''}`}>
        {label} {amount}
      </div>
      {dv !== undefined && (
        <div className={`${bold ? 'font-bold' : ''}`}>
          {dv}%
        </div>
      )}
    </div>
  );
};

export default NutritionLabel;
