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
            <div className="lg:col-span-3">
              <div className="executive-card">
                <div className="mb-6">
                  <div className="executive-badge inline-block mb-4">
                    Premier Institution
                  </div>
                </div>
                <h3 className="executive-heading text-4xl mb-6">University of Miami</h3>
                <p className="executive-text text-xl mb-4">Coral Gables, Florida</p>
                <p className="font-display text-2xl text-foreground font-semibold mb-6">
                  Bachelor of Science in Data Science & Artificial Intelligence
                </p>
                <div className="executive-badge">
                  Expected Graduation: 2025
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <h4 className="executive-heading text-3xl mb-10">Core Curriculum</h4>
              <div className="space-y-6">
                {[
                  { course: 'Machine Learning', focus: 'Advanced Algorithms & Neural Networks' },
                  { course: 'Data Visualization', focus: 'Statistical Graphics & Analytics' }, 
                  { course: 'Algorithms', focus: 'Computational Theory & Optimization' },
                  { course: 'Financial Data Analysis', focus: 'Quantitative Methods & Modeling' }
                ].map((item, index) => (
                  <div key={item.course} className={`executive-card transition-all duration-700`} style={{ animationDelay: `${index * 150}ms` }}>
                    <h5 className="executive-heading text-lg mb-3">{item.course}</h5>
                    <p className="executive-text">{item.focus}</p>
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