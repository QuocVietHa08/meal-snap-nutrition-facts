import { Skeleton } from "@/components/ui/skeleton";

const NutritionSummarySkeleton = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <Skeleton className="h-6 w-3/4 mx-auto mb-4" />
      
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NutritionSummarySkeleton;
