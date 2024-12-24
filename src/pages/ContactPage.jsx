import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Youtube', url: 'https://youtube.com' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/send-email', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      if (response.status === 200) {
        setSuccessMessage('Email sent successfully. Thank you for contacting us!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className="min-h-screen bg-white">
      <motion.h1
        variants={itemVariants}
        className="text-[6rem] md:text-[9rem] lg:text-[13rem] font-[500] border-b-2 px-2 pt-6 pb-8 md:pb-10 lg:pb-40"
      >
        Contact
      </motion.h1>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5"
      >
        {/* Left Column - Contact Information */}
        <motion.div
          variants={itemVariants}
          className="md:p-6 p-6 lg:py-10 space-y-16"
        >
          {/* Social Links */}
          <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-10 w-full lg:w-[25rem]">
            <h3 className="text-md">Social</h3>
            <div className="space-y-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-8 -mx-3 rounded-lg group transition-colors duration-300 hover:bg-black"
                >
                  <span className="text-md group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-10 w-full lg:w-[25rem]">
            <h3 className="text-md">Address</h3>
            <div>
              <p>Office no. 108, </p>
              <p> 1st Floor, Wing-C,</p>
              <p>Trade World Premises</p> 
              <p>Cooperative Society Ltd,</p>
              <p> Kamla Mills Compound</p>
              <p>Kamla City, Senapati Bapat Marg,</p>
              <p> Lower Parel, Mumbai - 400013</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-10 w-full lg:w-[25rem]">
            <h3 className="text-md">Say hi</h3>
            <a
              href="mailto:info@bamboodigital.in"
              className="text-lg hover:opacity-70 transition-opacity"
            >
             info@bamboodigital.in
            </a>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <div className="p-4 sm:p-6 lg:py-10">
          <motion.div
            variants={itemVariants}
            className="bg-black text-white p-8 md:py-10 lg:py-16"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16">
                Let's collaborate and make wonderful stuff together!
              </h2>

              <div className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none"
                    required
                  />
                </div>
              </div>

              {successMessage && (
                <div className="mt-4 text-green-400">
                  {successMessage}
                </div>
              )}
              <button
                type="submit"
                className="inline-block text-lg border-b border-white pb-1 hover:opacity-70 transition-opacity"
              >
                Submit your message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;

