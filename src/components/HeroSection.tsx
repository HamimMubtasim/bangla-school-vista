import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroCampus from '@/assets/hero-campus.jpg';

interface HeroSectionProps {
  language: 'bn' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    bn: {
      title: 'স্বাগতম বাংলা স্কুল ভিস্তা',
      subtitle: 'শিক্ষা, মূল্যবোধ এবং উৎকর্ষতার মাধ্যমে ভবিষ্যৎ নেতৃত্ব গড়ে তুলি',
      description: 'আধুনিক শিক্ষা ব্যবস্থা এবং ঐতিহ্যবাহী মূল্যবোধের সমন্বয়ে আমরা প্রতিটি শিক্ষার্থীর সর্বোচ্চ সম্ভাবনা বিকশিত করি।',
      cta1: 'ভর্তি হোন',
      cta2: 'আমাদের সম্পর্কে জানুন',
      stats: [
        { label: 'শিক্ষার্থী', value: '২,৫০০+', icon: Users },
        { label: 'বছরের অভিজ্ঞতা', value: '২৫+', icon: BookOpen },
        { label: 'পুরস্কার', value: '১০০+', icon: Award }
      ]
    },
    en: {
      title: 'Welcome to Bangla School Vista',
      subtitle: 'Building Future Leaders Through Education, Values & Excellence',
      description: 'We nurture the highest potential of every student through a perfect blend of modern education and traditional values.',
      cta1: 'Apply Now',
      cta2: 'Learn About Us',
      stats: [
        { label: 'Students', value: '2,500+', icon: Users },
        { label: 'Years of Excellence', value: '25+', icon: BookOpen },
        { label: 'Awards', value: '100+', icon: Award }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroCampus} 
          alt="Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {currentContent.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-medium opacity-90 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {currentContent.subtitle}
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {currentContent.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-4 group"
            >
              {currentContent.cta1}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
            >
              {currentContent.cta2}
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {currentContent.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;