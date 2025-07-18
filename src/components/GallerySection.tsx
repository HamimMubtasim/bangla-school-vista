import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GallerySectionProps {
  language: 'bn' | 'en';
}

const GallerySection = ({ language }: GallerySectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = {
    bn: {
      title: 'আমাদের গ্যালারি',
      subtitle: 'ক্যাম্পাস জীবনের স্মৃতিচারণ'
    },
    en: {
      title: 'Our Gallery',
      subtitle: 'Memories from Campus Life'
    }
  };

  // Sample gallery images (you can replace with actual images)
  const galleryImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop'
  ];

  const currentContent = content[language];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  return (
    <section className="py-20 bg-muted/30">
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

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elegant">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1
                }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentSlide ? 'ring-2 ring-primary scale-110' : 'opacity-70 hover:opacity-100'
              }`}
              whileHover={{ scale: index === currentSlide ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === currentSlide && (
                <motion.div
                  layoutId="activeSlide"
                  className="absolute inset-0 bg-primary/20"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;