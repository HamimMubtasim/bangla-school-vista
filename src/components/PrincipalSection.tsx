import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface PrincipalSectionProps {
  language: 'bn' | 'en';
}

const PrincipalSection = ({ language }: PrincipalSectionProps) => {
  const content = {
    bn: {
      title: 'অধ্যক্ষের বাণী',
      quote: 'শিক্ষা হলো সেই শক্তি যা একটি জাতিকে উন্নতির শিখরে পৌঁছাতে পারে। আমাদের প্রতিটি শিক্ষার্থী যেন সত্যিকারের মানুষ হয়ে গড়ে ওঠে, এটাই আমাদের লক্ষ্য।',
      name: 'ড. মোহাম্মদ রহিম উদ্দিন',
      designation: 'অধ্যক্ষ, বাংলা স্কুল ভিস্তা'
    },
    en: {
      title: "Principal's Message",
      quote: 'Education is the power that can take a nation to the peak of progress. Our goal is for every student to grow up to be a true human being.',
      name: 'Dr. Mohammad Rahim Uddin',
      designation: 'Principal, Bangla School Vista'
    }
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <Quote className="w-16 h-16 text-primary/20 absolute -top-4 -left-4" />
              <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground italic pl-8">
                "{currentContent.quote}"
              </blockquote>
            </div>
            
            <div className="pl-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {currentContent.name}
              </h3>
              <p className="text-lg text-muted-foreground">
                {currentContent.designation}
              </p>
            </div>
          </motion.div>

          {/* Principal Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-elegant">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;