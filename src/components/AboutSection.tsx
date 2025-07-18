import { motion } from 'framer-motion';
import { Target, Eye, Heart, Trophy, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AboutSectionProps {
  language: 'bn' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    bn: {
      title: 'আমাদের সম্পর্কে',
      subtitle: '২৫ বছরের শিক্ষাগত উৎকর্ষতার ইতিহাস',
      mission: {
        title: 'আমাদের লক্ষ্য',
        text: 'প্রতিটি শিক্ষার্থীর মধ্যে নৈতিক মূল্যবোধ, সৃজনশীলতা এবং নেতৃত্বের গুণাবলী বিকশিত করা।',
        icon: Target
      },
      vision: {
        title: 'আমাদের দৃষ্টিভঙ্গি',
        text: 'আন্তর্জাতিক মানের শিক্ষা প্রদানের মাধ্যমে দেশের শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠানে পরিণত হওয়া।',
        icon: Eye
      },
      values: {
        title: 'আমাদের মূল্যবোধ',
        text: 'সততা, সম্মান, দায়বদ্ধতা এবং সমাজের প্রতি ভালোবাসা আমাদের মূল ভিত্তি।',
        icon: Heart
      },
      achievements: [
        { title: 'জাতীয় পুরস্কার', count: '১৫+', icon: Trophy },
        { title: 'শিক্ষক', count: '১৫০+', icon: Users },
        { title: 'একাডেমিক প্রোগ্রাম', count: '৮+', icon: BookOpen }
      ],
      history: 'বাংলা স্কুল ভিস্তা ১৯৯৮ সালে প্রতিষ্ঠিত হয়েছিল। আমাদের প্রতিষ্ঠানটি দেশের অন্যতম শ্রেষ্ঠ শিক্ষা প্রতিষ্ঠান হিসেবে পরিচিত। আমরা ঐতিহ্যবাহী শিক্ষার সাথে আধুনিক প্রযুক্তির সমন্বয় ঘটিয়ে একটি অনন্য শিক্ষা পরিবেশ তৈরি করেছি।',
      cta: 'আরও জানুন'
    },
    en: {
      title: 'About Us',
      subtitle: '25 Years of Educational Excellence',
      mission: {
        title: 'Our Mission',
        text: 'To develop moral values, creativity, and leadership qualities in every student.',
        icon: Target
      },
      vision: {
        title: 'Our Vision',
        text: 'To become the country\'s premier educational institution through international quality education.',
        icon: Eye
      },
      values: {
        title: 'Our Values',
        text: 'Integrity, respect, accountability, and love for society form our core foundation.',
        icon: Heart
      },
      achievements: [
        { title: 'National Awards', count: '15+', icon: Trophy },
        { title: 'Faculty Members', count: '150+', icon: Users },
        { title: 'Academic Programs', count: '8+', icon: BookOpen }
      ],
      history: 'Bangla School Vista was established in 1998 and has become one of the country\'s premier educational institutions. We have created a unique learning environment by combining traditional education with modern technology.',
      cta: 'Learn More'
    }
  };

  const currentContent = content[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-warm">
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

        {/* Mission, Vision, Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[currentContent.mission, currentContent.vision, currentContent.values].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-8 bg-white rounded-2xl shadow-elegant hover:shadow-warm transition-all duration-300 group"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* History & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* History */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              {language === 'bn' ? 'আমাদের ইতিহাস' : 'Our History'}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {currentContent.history}
            </p>
            <Button variant="accent" size="lg" className="group">
              {currentContent.cta}
              <BookOpen className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {currentContent.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center p-6 bg-white rounded-xl shadow-elegant hover:shadow-warm transition-all duration-300 group"
                whileHover={{ x: 10 }}
              >
                <div className="w-14 h-14 bg-gradient-secondary rounded-full flex items-center justify-center mr-6 group-hover:animate-bounce-gentle">
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {achievement.count}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {achievement.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;