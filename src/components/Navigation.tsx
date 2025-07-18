import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  language: 'bn' | 'en';
  onLanguageChange: (lang: 'bn' | 'en') => void;
}

const Navigation = ({ language, onLanguageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const menuItems = {
    bn: [
      { name: 'হোম', href: '#home', submenu: null },
      { name: 'আমাদের সম্পর্কে', href: '#about', submenu: null },
      { 
        name: 'ভর্তি', 
        href: '#admissions', 
        submenu: [
          { name: 'ভর্তি প্রক্রিয়া', href: '#admission-process' },
          { name: 'যোগ্যতা', href: '#eligibility' },
          { name: 'ফি কাঠামো', href: '#fees' },
          { name: 'বৃত্তি', href: '#scholarships' }
        ]
      },
      { 
        name: 'শিক্ষাক্রম', 
        href: '#academics', 
        submenu: [
          { name: 'বিজ্ঞান বিভাগ', href: '#science' },
          { name: 'বাণিজ্য বিভাগ', href: '#commerce' },
          { name: 'মানবিক বিভাগ', href: '#humanities' }
        ]
      },
      { name: 'সুবিধাসমূহ', href: '#facilities', submenu: null },
      { name: 'সংবাদ ও ইভেন্ট', href: '#news', submenu: null },
      { name: 'গ্যালারি', href: '#gallery', submenu: null },
      { name: 'যোগাযোগ', href: '#contact', submenu: null },
    ],
    en: [
      { name: 'Home', href: '#home', submenu: null },
      { name: 'About Us', href: '#about', submenu: null },
      { 
        name: 'Admissions', 
        href: '#admissions', 
        submenu: [
          { name: 'Admission Process', href: '#admission-process' },
          { name: 'Eligibility', href: '#eligibility' },
          { name: 'Fee Structure', href: '#fees' },
          { name: 'Scholarships', href: '#scholarships' }
        ]
      },
      { 
        name: 'Academics', 
        href: '#academics', 
        submenu: [
          { name: 'Science', href: '#science' },
          { name: 'Commerce', href: '#commerce' },
          { name: 'Humanities', href: '#humanities' }
        ]
      },
      { name: 'Facilities', href: '#facilities', submenu: null },
      { name: 'News & Events', href: '#news', submenu: null },
      { name: 'Gallery', href: '#gallery', submenu: null },
      { name: 'Contact', href: '#contact', submenu: null },
    ]
  };

  const logoText = {
    bn: 'বাংলা স্কুল ভিস্তা',
    en: 'Bangla School Vista'
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">বস</span>
            </div>
            <span className="text-xl font-bold text-primary">
              {logoText[language]}
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems[language].map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <motion.a
                  href={item.href}
                  className="flex items-center text-foreground hover:text-primary transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </motion.a>

                {/* Submenu */}
                <AnimatePresence>
                  {item.submenu && hoveredMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-elegant border border-border overflow-hidden"
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <motion.a
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          {subItem.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onLanguageChange(language === 'bn' ? 'en' : 'bn')}
                className="flex items-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'bn' ? 'EN' : 'বাং'}</span>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-border"
            >
              <div className="px-2 py-4 space-y-2">
                {menuItems[language].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="block px-3 py-2 text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors"
                    whileHover={{ x: 4 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      onLanguageChange(language === 'bn' ? 'en' : 'bn');
                      setIsOpen(false);
                    }}
                    className="flex items-center space-x-2"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;