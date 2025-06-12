
import { Camera } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-xl">
              <Camera className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NutriSnap
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
