
const Hero = () => {
  return (
    <section className="py-12 px-4 text-center animate-fade-in">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
          Snap your meal.{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Know your nutrition.
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Upload a photo of any dish and get instant nutritional analysis. 
          Perfect for tracking your health goals! 🥗✨
        </p>
      </div>
    </section>
  );
};

export default Hero;
