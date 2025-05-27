import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiCoffee, FiWifi, FiZap } from 'react-icons/fi';
import { FaToilet } from 'react-icons/fa';

const Location = () => {
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

  const locations = [
    {
      title: "Official HQ",
      description: "My actual work address (when I'm not avoiding work)",
      icon: <FiMapPin className="text-red-400" />,
      address: "123 Code Street, Delhi 110001, India",
      funnyLine: "The doorman knows me by my error messages"
    },
    {
      title: "Coding Cafés",
      description: "Where I pretend to work while people-watching",
      icon: <FiCoffee className="text-amber-400" />,
      address: "Various caffeine dealers across Delhi",
      funnyLine: "Look for the guy crying over console errors"
    },
    {
      title: "Emergency Locations",
      description: "Places I debug when inspiration strikes",
      icon: <FaToilet className="text-blue-400" />,
      address: "1. My bathroom 2. Metro 3. Your mom's house",
      funnyLine: "Eureka moments happen in weird places"
    }
  ];

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
              HUNT ME DOWN
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Where in Delhi <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">is Satvik?</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              I'm like a stack trace - sometimes hard to find but always leaving clues
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10 hover:border-indigo-500/30 transition-all"
              >
                <div className="text-3xl mb-4">
                  {location.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{location.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{location.description}</p>
                <div className="bg-white/5 p-4 rounded-lg mb-4">
                  <p className="font-mono text-sm">{location.address}</p>
                </div>
               
              </motion.div>
            ))}
          </div>

          {/* Map Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FiZap className="mr-3 text-yellow-400" />
                Probable Coordinates
              </h3>
              <p className="mb-6">
                Below is where I'm <span className="line-through">hiding</span> located most days.
                If I'm not there, check the nearest chai stall or burger joint.
              </p>
              
              {/* Embedded Google Map */}
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.43027219062!2d77.06889949999999!3d28.5272181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy"
                  className="rounded-lg"
                  title="Delhi Location"
                ></iframe>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="mb-4 sm:mb-0">
                  <h4 className="font-bold mb-2">Pro Tip:</h4>
                  <p className="text-sm text-gray-300">
                    If lost, follow the sound of keyboard clacking and occasional frustrated screams.
                  </p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-xl transition-all flex items-center">
                  <FiWifi className="mr-2" />
                  Ping Me Virtually
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Still can't find me? I might be offline...
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Try these digital coordinates instead. Warning: I respond faster to memes than formal emails.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="tel:+911234567890" className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-all">
                <FiPhone className="mr-2" />
                +91 9818458017
              </a>
              <a href="mailto:satvik@example.com" className="flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-all">
                <FiMail className="mr-2" />
                satviky5@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Location;