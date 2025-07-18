import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AcademicsSection from '@/components/AcademicsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');

  const handleLanguageChange = (lang: 'bn' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={handleLanguageChange} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <AcademicsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
