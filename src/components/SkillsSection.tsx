import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: 'Programming & Development',
      skills: ['Python', 'R', 'SQL', 'React', 'JavaScript', 'Firebase', 'Supabase', 'TypeScript']
    },
    {
      title: 'Data Analysis & Visualization',
      skills: ['pandas', 'dplyr', 'ggplot2', 'matplotlib', 'Machine Learning', 'Statistical Modeling']
    },
    {
      title: 'Finance & Investment',
      skills: ['Equity Trading', 'ETF Analysis', 'Valuation Modeling', 'Portfolio Strategy', 'Risk Assessment']
    },
    {
      title: 'Leadership & Soft Skills',
      skills: ['Entrepreneurship', 'Team Leadership', 'Strategic Planning', 'Communication', 'Project Management']
    }
  ];

  const achievements = [
    {
      title: 'Fraternity Leadership',
      description: 'Rush Chair Candidate at University of Miami, leading recruitment strategy and event planning'
    },
    {
      title: 'Fitness Discipline',
      description: 'Trained consistently 5x/week, achieving elite physique benchmarks'
    },
    {
      title: 'Campus Involvement',
      description: 'Active in tech and finance communities, leveraging networking for entrepreneurship opportunities'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`resume-section ${isVisible ? 'animate-in' : ''} max-w-7xl mx-auto relative`}>
          <div className="section-number">03</div>
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-foreground mb-6">Expertise & Leadership</h2>
            <div className="executive-divider" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <div 
                  key={category.title}
                  className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <h3 className="font-display text-2xl font-semibold text-primary mb-6">{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skill} 
                        className={`skill-tag transition-all duration-300 hover:scale-105`}
                        style={{ animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership & Activities */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-primary mb-8">Leadership & Activities</h3>
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className={`project-card transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                >
                  <h4 className="font-sans font-semibold text-foreground mb-3 text-lg">{achievement.title}</h4>
                  <p className="font-sans text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;