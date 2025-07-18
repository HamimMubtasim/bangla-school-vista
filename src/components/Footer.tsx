import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  language: 'bn' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    bn: {
      schoolName: 'বাংলা স্কুল ভিস্তা',
      description: 'শিক্ষা, মূল্যবোধ এবং উৎকর্ষতার মাধ্যমে ভবিষ্যৎ নেতৃত্ব গড়ে তুলি।',
      quickLinks: {
        title: 'দ্রুত লিংক',
        links: [
          { name: 'হোম', href: '#home' },
          { name: 'আমাদের সম্পর্কে', href: '#about' },
          { name: 'ভর্তি', href: '#admissions' },
          { name: 'শিক্ষাক্রম', href: '#academics' }
        ]
      },
      academics: {
        title: 'একাডেমিক',
        links: [
          { name: 'বিজ্ঞান বিভাগ', href: '#science' },
          { name: 'বাণিজ্য বিভাগ', href: '#commerce' },
          { name: 'মানবিক বিভাগ', href: '#humanities' },
          { name: 'পরীক্ষার ফলাফল', href: '#results' }
        ]
      },
      contact: {
        title: 'যোগাযোগ',
        address: 'ধানমন্ডি, ঢাকা-১২০৫',
        phone: '+৮৮০ ১২৩৪ ৫৬৭৮৯০',
        email: 'info@banglaschool.edu.bd'
      },
      newsletter: {
        title: 'নিউজলেটার',
        description: 'সর্বশেষ সংবাদ ও আপডেট পেতে সাবস্ক্রাইব করুন',
        placeholder: 'আপনার ইমেইল',
        button: 'সাবস্ক্রাইব'
      },
      copyright: '© ২০২৪ বাংলা স্কুল ভিস্তা। সকল অধিকার সংরক্ষিত।',
      socialTitle: 'আমাদের অনুসরণ করুন'
    },
    en: {
      schoolName: 'Bangla School Vista',
      description: 'Building future leaders through education, values & excellence.',
      quickLinks: {
        title: 'Quick Links',
        links: [
          { name: 'Home', href: '#home' },
          { name: 'About Us', href: '#about' },
          { name: 'Admissions', href: '#admissions' },
          { name: 'Academics', href: '#academics' }
        ]
      },
      academics: {
        title: 'Academics',
        links: [
          { name: 'Science', href: '#science' },
          { name: 'Commerce', href: '#commerce' },
          { name: 'Humanities', href: '#humanities' },
          { name: 'Results', href: '#results' }
        ]
      },
      contact: {
        title: 'Contact',
        address: 'Dhanmondi, Dhaka-1205',
        phone: '+880 1234 567890',
        email: 'info@banglaschool.edu.bd'
      },
      newsletter: {
        title: 'Newsletter',
        description: 'Subscribe to get latest news and updates',
        placeholder: 'Your Email',
        button: 'Subscribe'
      },
      copyright: '© 2024 Bangla School Vista. All rights reserved.',
      socialTitle: 'Follow Us'
    }
  };

  const currentContent = content[language];
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">বস</span>
              </div>
              <h3 className="text-xl font-bold">{currentContent.schoolName}</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-primary-foreground/70 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">{currentContent.quickLinks.title}</h4>
            <ul className="space-y-2">
              {currentContent.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">{currentContent.academics.title}</h4>
            <ul className="space-y-2">
              {currentContent.academics.links.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-semibold mb-4">{currentContent.contact.title}</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-primary-foreground/80">{currentContent.contact.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-primary-foreground/80">{currentContent.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-primary-foreground/80">{currentContent.contact.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">{currentContent.newsletter.title}</h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                {currentContent.newsletter.description}
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder={currentContent.newsletter.placeholder}
                  className="flex-1 px-3 py-2 text-sm rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button variant="accent" size="sm">
                  {currentContent.newsletter.button}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <p className="text-primary-foreground/80 text-sm">
            {currentContent.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;