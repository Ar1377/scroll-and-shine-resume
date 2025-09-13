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
        <div className={`resume-section ${isVisible ? 'animate-in' : ''} max-w-6xl mx-auto`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Projects</h2>
            <div className="w-24 h-1 hero-gradient mx-auto rounded-full" />
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`project-card transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
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