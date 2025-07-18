import { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Calculator, BookText, Microscope, Globe, Palette, Book, Beaker, Languages, Music, Gamepad2, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import classroomImg from '@/assets/classroom.jpg';
import libraryImg from '@/assets/library.jpg';
import scienceLabImg from '@/assets/science-lab.jpg';

interface AcademicsSectionProps {
  language: 'bn' | 'en';
}

const AcademicsSection = ({ language }: AcademicsSectionProps) => {
  const [selectedLevel, setSelectedLevel] = useState<'primary' | 'secondary'>('secondary');

  const content = {
    bn: {
      title: 'একাডেমিক প্রোগ্রাম',
      subtitle: 'উন্নত পাঠ্যক্রম এবং বিশ্বমানের শিক্ষা',
      togglePrimary: 'প্রাথমিক (১ম-৮ম শ্রেণি)',
      toggleSecondary: 'মাধ্যমিক (৯ম-১০ম শ্রেণি)',
      primarySubjects: [
        { title: 'বাংলা', icon: Book, description: 'মাতৃভাষা শিক্ষা ও সাহিত্য' },
        { title: 'ইংরেজি', icon: Languages, description: 'আন্তর্জাতিক ভাষা শিক্ষা' },
        { title: 'গণিত', icon: Calculator, description: 'সংখ্যা ও গাণিতিক দক্ষতা' },
        { title: 'বিজ্ঞান', icon: Beaker, description: 'প্রকৃতি ও বিজ্ঞান অধ্যয়ন' },
        { title: 'সমাজবিজ্ঞান', icon: Globe, description: 'সমাজ ও ইতিহাস জ্ঞান' },
        { title: 'ধর্ম শিক্ষা', icon: Book, description: 'নৈতিক ও ধর্মীয় মূল্যবোধ' },
        { title: 'শিল্পকলা', icon: Palette, description: 'শিল্প ও সৃজনশীলতা' },
        { title: 'শারীরিক শিক্ষা', icon: Gamepad2, description: 'স্বাস্থ্য ও ক্রীড়া' }
      ],
      programs: [
        {
          title: 'বিজ্ঞান বিভাগ',
          description: 'পদার্থবিজ্ঞান, রসায়ন, জীববিজ্ঞান এবং গণিত নিয়ে আধুনিক বিজ্ঞান শিক্ষা',
          icon: FlaskConical,
          subjects: ['পদার্থবিজ্ঞান', 'রসায়ন', 'জীববিজ্ঞান', 'উচ্চতর গণিত'],
          image: scienceLabImg,
          color: 'from-blue-500 to-purple-600'
        },
        {
          title: 'বাণিজ্য বিভাগ',
          description: 'হিসাববিজ্ঞান, ব্যবসায় শিক্ষা এবং অর্থনীতির মাধ্যমে ব্যবসায়িক জ্ঞান',
          icon: Calculator,
          subjects: ['হিসাববিজ্ঞান', 'ব্যবসায় শিক্ষা', 'অর্থনীতি', 'ব্যাংকিং'],
          image: classroomImg,
          color: 'from-green-500 to-emerald-600'
        },
        {
          title: 'মানবিক বিভাগ',
          description: 'ইতিহাস, ভূগোল, সমাজবিজ্ঞান এবং সাহিত্যের মাধ্যমে মানবিক শিক্ষা',
          icon: BookText,
          subjects: ['ইতিহাস', 'ভূগোল', 'সমাজবিজ্ঞান', 'বাংলা সাহিত্য'],
          image: libraryImg,
          color: 'from-orange-500 to-red-600'
        }
      ],
      facilities: [
        { name: 'আধুনিক ল্যাবরেটরি', icon: Microscope },
        { name: 'ডিজিটাল লাইব্রেরি', icon: Globe },
        { name: 'সৃজনশীল কর্মশালা', icon: Palette }
      ],
      cta: 'বিস্তারিত দেখুন'
    },
    en: {
      title: 'Academic Programs',
      subtitle: 'Advanced Curriculum & World-Class Education',
      togglePrimary: 'Primary (Classes 1-8)',
      toggleSecondary: 'Secondary (Classes 9-10)',
      primarySubjects: [
        { title: 'Bengali', icon: Book, description: 'Mother tongue and literature' },
        { title: 'English', icon: Languages, description: 'International language education' },
        { title: 'Mathematics', icon: Calculator, description: 'Numbers and mathematical skills' },
        { title: 'Science', icon: Beaker, description: 'Nature and science studies' },
        { title: 'Social Science', icon: Globe, description: 'Society and history knowledge' },
        { title: 'Religious Studies', icon: Book, description: 'Moral and religious values' },
        { title: 'Arts', icon: Palette, description: 'Art and creativity' },
        { title: 'Physical Education', icon: Gamepad2, description: 'Health and sports' }
      ],
      programs: [
        {
          title: 'Science',
          description: 'Modern science education with Physics, Chemistry, Biology and Mathematics',
          icon: FlaskConical,
          subjects: ['Physics', 'Chemistry', 'Biology', 'Higher Mathematics'],
          image: scienceLabImg,
          color: 'from-blue-500 to-purple-600'
        },
        {
          title: 'Commerce',
          description: 'Business knowledge through Accounting, Business Studies and Economics',
          icon: Calculator,
          subjects: ['Accounting', 'Business Studies', 'Economics', 'Banking'],
          image: classroomImg,
          color: 'from-green-500 to-emerald-600'
        },
        {
          title: 'Humanities',
          description: 'Humanistic education through History, Geography, Social Science and Literature',
          icon: BookText,
          subjects: ['History', 'Geography', 'Social Science', 'Bengali Literature'],
          image: libraryImg,
          color: 'from-orange-500 to-red-600'
        }
      ],
      facilities: [
        { name: 'Modern Laboratories', icon: Microscope },
        { name: 'Digital Library', icon: Globe },
        { name: 'Creative Workshops', icon: Palette }
      ],
      cta: 'View Details'
    }
  };

  const currentContent = content[language];

  return (
    <section id="academics" className="py-20 bg-background">
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-elegant">
            <button
              onClick={() => setSelectedLevel('primary')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedLevel === 'primary'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {currentContent.togglePrimary}
            </button>
            <button
              onClick={() => setSelectedLevel('secondary')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedLevel === 'secondary'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {currentContent.toggleSecondary}
            </button>
          </div>
        </motion.div>

        {/* Programs Grid */}
        <div className="mb-16">
          {selectedLevel === 'primary' ? (
            /* Primary Level Subjects */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentContent.primarySubjects.map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-xl p-6 shadow-elegant hover:shadow-warm transition-all duration-500 group-hover:-translate-y-2 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <subject.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                      {subject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {subject.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Secondary Level Programs */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {currentContent.programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-elegant hover:shadow-warm transition-all duration-500 group-hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <program.icon className="w-16 h-16 text-white animate-bounce-gentle" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-glow transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {program.description}
                      </p>

                      {/* Subjects */}
                      <div className="space-y-2 mb-6">
                        {program.subjects.map((subject, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="flex items-center text-sm"
                          >
                            <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                            <span className="text-foreground">{subject}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      >
                        {currentContent.cta}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'bn' ? 'আমাদের সুবিধাসমূহ' : 'Our Facilities'}
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {language === 'bn' 
                ? 'আধুনিক শিক্ষার জন্য প্রয়োজনীয় সকল সুবিধা'
                : 'All necessary facilities for modern education'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentContent.facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <facility.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-semibold">{facility.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicsSection;