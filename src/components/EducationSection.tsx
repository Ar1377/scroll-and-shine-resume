import { useEffect, useRef, useState } from 'react';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`resume-section ${isVisible ? 'animate-in' : ''} max-w-4xl mx-auto`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">University of Miami</h3>
                <p className="text-lg text-muted-foreground mb-1">Coral Gables, FL</p>
                <p className="text-accent font-medium">Bachelor of Science in Data Science & Artificial Intelligence</p>
                <p className="text-sm text-muted-foreground mt-2">Expected Graduation: 2025</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground mb-4">Relevant Coursework</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Machine Learning',
                  'Data Visualization', 
                  'Algorithms',
                  'Financial Data Analysis'
                ].map((course, index) => (
                  <div key={course} className={`project-card transition-all duration-300`} style={{ animationDelay: `${index * 100}ms` }}>
                    <p className="font-medium text-foreground">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;