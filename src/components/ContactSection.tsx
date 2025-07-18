import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ContactSectionProps {
  language: 'bn' | 'en';
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const content = {
    bn: {
      title: 'যোগাযোগ করুন',
      subtitle: 'আমাদের সাথে সংযুক্ত হন',
      form: {
        name: 'আপনার নাম',
        email: 'ইমেইল ঠিকানা',
        phone: 'ফোন নম্বর',
        subject: 'বিষয়',
        message: 'বার্তা',
        submit: 'বার্তা পাঠান'
      },
      contactInfo: [
        {
          icon: MapPin,
          title: 'ঠিকানা',
          details: 'ধানমন্ডি, ঢাকা-১২০৫, বাংলাদেশ'
        },
        {
          icon: Phone,
          title: 'ফোন',
          details: '+৮৮০ ১২৩৪ ৫৬৭৮৯০'
        },
        {
          icon: Mail,
          title: 'ইমেইল',
          details: 'info@banglaschool.edu.bd'
        },
        {
          icon: Clock,
          title: 'কার্যসময়',
          details: 'রবি - বৃহস্পতি: ৮:০০ - ৪:০০'
        }
      ],
      successMessage: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Get in Touch with Us',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message'
      },
      contactInfo: [
        {
          icon: MapPin,
          title: 'Address',
          details: 'Dhanmondi, Dhaka-1205, Bangladesh'
        },
        {
          icon: Phone,
          title: 'Phone',
          details: '+880 1234 567890'
        },
        {
          icon: Mail,
          title: 'Email',
          details: 'info@banglaschool.edu.bd'
        },
        {
          icon: Clock,
          title: 'Working Hours',
          details: 'Sun - Thu: 8:00 AM - 4:00 PM'
        }
      ],
      successMessage: 'Your message has been sent successfully!'
    }
  };

  const currentContent = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: currentContent.successMessage,
      description: language === 'bn' 
        ? 'আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।'
        : 'We will get back to you soon.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                {language === 'bn' ? 'যোগাযোগের তথ্য' : 'Contact Information'}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {language === 'bn' 
                  ? 'আমাদের সাথে যোগাযোগ করুন এবং আপনার যেকোনো প্রশ্নের উত্তর পান।'
                  : 'Contact us and get answers to any questions you may have.'
                }
              </p>
            </div>

            <div className="space-y-6">
              {currentContent.contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center p-6 bg-white rounded-xl shadow-elegant hover:shadow-warm transition-all duration-300 group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mr-6 group-hover:animate-pulse-glow">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary mb-1">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {info.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-64 bg-muted rounded-xl overflow-hidden shadow-elegant"
            >
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-primary font-medium">
                    {language === 'bn' ? 'ইন্টারেক্টিভ ম্যাপ' : 'Interactive Map'}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {language === 'bn' ? 'আমাদের অবস্থান দেখুন' : 'View Our Location'}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-elegant"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              {language === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder={currentContent.form.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder={currentContent.form.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Input
                    type="tel"
                    name="phone"
                    placeholder={currentContent.form.phone}
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-12"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Input
                    type="text"
                    name="subject"
                    placeholder={currentContent.form.subject}
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="h-12"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Textarea
                  name="message"
                  placeholder={currentContent.form.message}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="resize-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full group"
                  variant="default"
                >
                  {currentContent.form.submit}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;