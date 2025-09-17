import { useEffect, useRef, useState } from 'react';

const ContactSection = () => {
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

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'addy.s.rao@gmail.com',
      href: 'mailto:addy.s.rao@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'linkedin.com/in/adi-rao-740497199',
      href: 'https://linkedin.com/in/adi-rao-740497199'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '(608) 770-1828',
      href: 'tel:+16087701828'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`resume-section ${isVisible ? 'animate-in' : ''} max-w-5xl mx-auto text-center relative`}>
          <div className="section-number">04</div>
          <div className="mb-16">
            <h2 className="executive-heading text-5xl mb-8">Let's Connect</h2>
            <div className="executive-divider mb-8" />
            <p className="executive-text text-xl max-w-4xl mx-auto">
              Ready to collaborate on transformative data science initiatives and drive strategic innovation 
              through artificial intelligence solutions in finance and technology sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`executive-card group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/[0.1] to-accent/[0.1] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="executive-heading text-xl mb-4">{method.title}</h3>
                  <p className="executive-text text-lg">{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-border/50">
        <p className="text-muted-foreground text-sm">
          © 2024 Adi Rao. Built with React, TypeScript & Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;