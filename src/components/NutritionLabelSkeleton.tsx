import { Skeleton } from "@/components/ui/skeleton";

const NutritionLabelSkeleton = () => {
  return (
    <div className="max-w-md mx-auto bg-white border-2 border-black p-4">
      {/* Header */}
      <div className="border-b-8 border-black pb-1 mb-2">
        <Skeleton className="h-7 w-full mb-2" />
        <Skeleton className="h-5 w-3/4" />
      </div>

      {/* Calories */}
      <div className="border-b border-black pb-2 mb-2">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-1/4" />
        </div>
      </div>

      {/* Main nutrients */}
      <div className="border-b-8 border-black pb-2 mb-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex justify-between items-center mb-2">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-5 w-16" />
          </div>
        ))}
      </div>

      {/* Vitamins */}
      <div className="border-b border-black pb-2 mb-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex justify-between items-center mb-2">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-5 w-16" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
};

export default NutritionLabelSkeleton;
