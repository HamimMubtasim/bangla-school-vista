import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeachersSectionProps {
  language: 'bn' | 'en';
}

const TeachersSection = ({ language }: TeachersSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = {
    bn: {
      title: 'আমাদের শিক্ষকমণ্ডলী',
      subtitle: 'অভিজ্ঞ ও দক্ষ শিক্ষকদের তত্ত্বাবধানে'
    },
    en: {
      title: 'Our Teachers',
      subtitle: 'Under the guidance of experienced and skilled teachers'
    }
  };

  const teachers = [
    {
      name: language === 'bn' ? 'ড. সাবিনা খাতুন' : 'Dr. Sabina Khatun',
      subject: language === 'bn' ? 'গণিত বিভাগ' : 'Mathematics Department',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c96a3fd8?w=300&h=300&fit=crop',
      experience: language === 'bn' ? '১৫ বছর' : '15 years'
    },
    {
      name: language === 'bn' ? 'মো. করিম উদ্দিন' : 'Md. Karim Uddin',
      subject: language === 'bn' ? 'পদার্থবিজ্ঞান বিভাগ' : 'Physics Department',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      experience: language === 'bn' ? '২০ বছর' : '20 years'
    },
    {
      name: language === 'bn' ? 'মিসেস রহিমা আক্তার' : 'Mrs. Rahima Akter',
      subject: language === 'bn' ? 'ইংরেজি বিভাগ' : 'English Department',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      experience: language === 'bn' ? '১২ বছর' : '12 years'
    },
    {
      name: language === 'bn' ? 'ড. আহমেদ হাসান' : 'Dr. Ahmed Hasan',
      subject: language === 'bn' ? 'রসায়ন বিভাগ' : 'Chemistry Department',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      experience: language === 'bn' ? '১৮ বছর' : '18 years'
    },
    {
      name: language === 'bn' ? 'মিসেস নাসরিন সুলতানা' : 'Mrs. Nasrin Sultana',
      subject: language === 'bn' ? 'বাংলা বিভাগ' : 'Bengali Department',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop',
      experience: language === 'bn' ? '১৪ বছর' : '14 years'
    }
  ];

  const currentContent = content[language];
  const slidesToShow = 3;
  const maxSlide = Math.max(0, teachers.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {currentContent.subtitle}
          </p>
        </motion.div>

        {/* Teachers Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Teachers Grid */}
          <div className="overflow-hidden mx-12">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`
              }}
            >
              {teachers.map((teacher, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-1/3 px-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-warm transition-all duration-500 group hover:-translate-y-2">
                    {/* Teacher Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Teacher Info */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                        {teacher.name}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {teacher.subject}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {language === 'bn' ? 'অভিজ্ঞতা: ' : 'Experience: '}{teacher.experience}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;