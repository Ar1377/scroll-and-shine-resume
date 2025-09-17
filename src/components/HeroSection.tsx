import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-8 text-center relative z-10 max-w-6xl">
        <div className={`transition-all duration-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="executive-heading text-8xl md:text-9xl mb-8">
            Adi Rao
          </h1>
          <div className="executive-divider mb-12" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground font-semibold mb-12 tracking-wide">
            Senior Data Scientist & AI Strategist
          </h2>
          <p className="executive-text text-2xl max-w-4xl mx-auto mb-8">
            Transforming complex data into strategic insights and building next-generation AI solutions 
            that drive innovation in finance and technology sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <div className="executive-badge">
              University of Miami • 2025
            </div>
            <div className="executive-badge">
              Data Science & AI
            </div>
          </div>
        </div>
        
        <div className={`mt-16 transition-all duration-1200 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;