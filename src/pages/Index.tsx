import HeroSection from '../components/HeroSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen section-gradient">
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
