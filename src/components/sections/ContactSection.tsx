import React, { useEffect } from 'react';
import { Section } from '@/components/ui/section';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from 'framer-motion';
import { colors, animations } from '@/constants/theme';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_name: formData.get('user_name'),
          user_email: formData.get('user_email'),
          message: formData.get('message'),
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader 
        title={['Contact', 'Get in Touch', 'Reach Out', 'Contact Me']}
      />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-10 md:pt-20 px-4">
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3d348b] to-[#e6af2e] rounded-2xl blur opacity-20" />
          <div className="relative bg-white/90 dark:bg-[#191716]/90 p-6 md:p-8 rounded-xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="bg-transparent border-[#3d348b]/20 dark:border-[#e6af2e]/20 focus:border-[#3d348b] dark:focus:border-[#e6af2e]"
                />
                <Input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-transparent border-[#3d348b]/20 dark:border-[#e6af2e]/20 focus:border-[#3d348b] dark:focus:border-[#e6af2e]"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="min-h-[150px] bg-transparent border-[#3d348b]/20 dark:border-[#e6af2e]/20 focus:border-[#3d348b] dark:focus:border-[#e6af2e]"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#3d348b] to-[#e6af2e] text-white hover:shadow-lg transition-all duration-300 group"
              >
                <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitStatus !== 'idle' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mt-4 p-3 rounded-md ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}
                >
                  {submitStatus === 'success' 
                    ? 'Message sent successfully!'
                    : 'Failed to send message. Please try again.'}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        {/* Right Side - Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3d348b] to-[#e6af2e]">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: <Mail className="w-6 h-6" />, label: 'Email', href: 'mailto:harikrish120027@gmail.com', value: 'harikrish120027@gmail.com' },
              { icon: <Github className="w-6 h-6" />, label: 'GitHub', href: 'https://github.com/hari-cris-b', value: 'github.com/hari-cris-b' },
              { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', href: 'https://linkedin.com/in/hari-krishnan-b7b156204', value: 'linkedin.com/in/hari-krishnan' }
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center p-4 bg-white/50 dark:bg-[#191716]/50 rounded-xl hover:bg-white/80 dark:hover:bg-[#191716]/80 transition-all duration-300"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="p-2 rounded-full bg-gradient-to-r from-[#3d348b] to-[#e6af2e] text-white">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-[#3d348b] dark:text-[#e6af2e]">{item.label}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactSection; 