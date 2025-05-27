import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-100 bg-indigo-500 bg-opacity-25 rounded-full">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Fill out the form below or use our contact details to reach out.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2"
            >
              <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiUser className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiMail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Message
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3">
                            <FiMessageSquare className="h-5 w-5 text-gray-400" />
                          </div>
                          <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-white/5 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300"
                            placeholder="Tell us about your project..."
                          />
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <span className="mr-2">Send Message</span>
                        <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/2"
            >
              <div className="h-full bg-white/5 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-indigo-600 bg-opacity-20 p-3 rounded-lg">
                      <FiMail className="h-6 w-6 text-indigo-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-300">Email</h3>
                      <p className="mt-1 text-indigo-200">Satviky5@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-purple-600 bg-opacity-20 p-3 rounded-lg">
                      <FiPhone className="h-6 w-6 text-purple-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-300">Phone</h3>
                      <p className="mt-1 text-indigo-200">+91 981-845-80XX</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 bg-pink-600 bg-opacity-20 p-3 rounded-lg">
                      <FiMapPin className="h-6 w-6 text-pink-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-300">Location</h3>
                      <p className="mt-1 text-indigo-200">Delhi,India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-medium text-gray-300 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble', 'Github'].map((social) => (
                      <motion.a
                        key={social}
                        href="#"
                        whileHover={{ y: -3 }}
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300"
                        aria-label={social}
                      >
                        <span className="sr-only">{social}</span>
                        {/* Replace with actual social icons */}
                        <span className="text-white">{social.charAt(0)}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;