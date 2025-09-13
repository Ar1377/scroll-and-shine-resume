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
        <div className={`resume-section ${isVisible ? 'animate-in' : ''} max-w-5xl mx-auto relative`}>
          <div className="section-number">01</div>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-foreground mb-6">Education</h2>
            <div className="executive-divider" />
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                <h3 className="font-display text-3xl font-semibold text-primary mb-4">University of Miami</h3>
                <p className="font-sans text-xl text-muted-foreground mb-3">Coral Gables, Florida</p>
                <p className="font-sans text-lg text-foreground font-medium mb-4">Bachelor of Science in Data Science & Artificial Intelligence</p>
                <div className="flex items-center gap-2">
                  <span className="skill-tag accent">Expected Graduation: 2025</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <h4 className="font-display text-2xl font-semibold text-foreground mb-8">Core Curriculum</h4>
              <div className="space-y-4">
                {[
                  { course: 'Machine Learning', focus: 'Advanced Algorithms' },
                  { course: 'Data Visualization', focus: 'Statistical Graphics' }, 
                  { course: 'Algorithms', focus: 'Computational Theory' },
                  { course: 'Financial Data Analysis', focus: 'Quantitative Methods' }
                ].map((item, index) => (
                  <div key={item.course} className={`project-card transition-all duration-500`} style={{ animationDelay: `${index * 150}ms` }}>
                    <h5 className="font-sans font-semibold text-foreground mb-1">{item.course}</h5>
                    <p className="font-sans text-sm text-muted-foreground">{item.focus}</p>
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