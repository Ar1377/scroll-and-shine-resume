import { useEffect, useRef, useState } from 'react';

const ExperienceSection = () => {
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

  const projects = [
    {
      title: 'RevMatcher - Car Trading Platform',
      role: 'Founder & Developer',
      description: 'Designed and developed a React + Firebase platform enabling peer-to-peer car trading, modeled on Airbnb/Turo UI/UX.',
      technologies: ['React', 'Firebase', 'Firestore', 'Authentication'],
      highlights: [
        'Implemented authentication and Firestore database integration',
        'Built messaging system and listing uploads',
        'Coordinated with peers on Figma mockups and system design'
      ]
    },
    {
      title: 'Data Research Projects',
      role: 'Data Analyst',
      description: 'Conducted multiple statistical analysis projects exploring economic and social patterns.',
      technologies: ['Python', 'R', 'dplyr', 'Statistical Modeling'],
      highlights: [
        'Built models analyzing unemployment rates and voting patterns',
        'Conducted time-series analysis of global health trends',
        'Created infographics highlighting gender inequality in finance',
        'Implemented RANSAC circle detection algorithm'
      ]
    },
    {
      title: 'Personal Investment Portfolio',
      role: 'Finance & Investment Strategy',
      description: 'Personally managed Roth IRA with $12k+ contributions, analyzing long-term returns.',
      technologies: ['Quantitative Analysis', 'Portfolio Strategy', 'ETF Analysis'],
      highlights: [
        'Applied quantitative methods to evaluate trading patterns',
        'Analyzed buy/sell thresholds and compounding growth scenarios',
        'Focused on SPYG ETFs and individual equities (Microsoft)'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`resume-section ${isVisible ? 'animate-in' : ''} max-w-7xl mx-auto relative`}>
          <div className="section-number">02</div>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-foreground mb-6">Experience & Projects</h2>
            <div className="executive-divider" />
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`executive-card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-3">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                      <h3 className="executive-heading text-3xl">{project.title}</h3>
                      <div className="executive-badge w-fit">
                        {project.role}
                      </div>
                    </div>
                    <p className="executive-text text-xl mb-8">{project.description}</p>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <p className="font-sans text-foreground leading-relaxed">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-semibold text-foreground">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;