import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.main 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col min-h-screen ">
        {/* Header */}
        <div className='mb-16'></div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between flex-grow gap-12">
          {/* Left Content */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block mb-6 px-3 py-1 text-xs font-semibold tracking-wider text-indigo-100 bg-indigo-500 bg-opacity-25 rounded-full">
                PRODUCT DESIGNER & DEVELOPER
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              <span className="block">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">Satvik Yadav</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
            >
              Product designer specializing in UI design and design systems.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mb-8"
            >
              <h2 className="text-xl font-mono text-pink-300 mb-2">&lt;coder&gt;</h2>
              <p className="text-lg text-gray-300">
                Front end developer who writes clean, elegant and efficient code.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex space-x-6"
            >
              <button className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden group">
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white border-opacity-20 text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                About Me
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 relative z-10 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-xl">
              <motion.div 
                className="rounded-2xl shadow-2xl w-full h-auto overflow-hidden"
                initial={{ scale: 1.05, y: 20 }}
                animate={{ 
                  scale: isHovered ? 1.1 : 1.05,
                  y: isHovered ? -10 : 0
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 100,
                  damping: 10
                }}
                style={{
                  maxHeight: '70vh'
                }}
              >
                <img 
                  src="/images/heroimg.jpg" 
                  alt="Satvik Yadav - Designer & Developer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white/20 backdrop-filter backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-white/10"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 20,
                  y: isHovered ? 0 : 20
                }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">Available for work</h3>
                    <p className="text-xs text-gray-200">Open to new opportunities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Latest Work Section */}
        <motion.section variants={itemVariants} className="mt-24 mb-16">
          <h2 className="text-2xl font-bold mb-8">SOME OF MY LATEST WORK</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Work Item 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">My UI design book</h3>
              <p className="text-indigo-300 mb-4">Book</p>
              <div className="h-40 bg-indigo-900/50 rounded-lg mb-4 overflow-clip"><img src="/images/uiBook.png" alt="" /></div>
              <p className="text-sm text-gray-300">A comprehensive guide to modern UI design principles</p>
            </motion.div>

            {/* Work Item 2 */}
           <motion.div 
  whileHover={{ y: -5 }}
  className="bg-white/10 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all"
>
  <h3 className="text-xl font-bold mb-2">Canberra vs South Sydney</h3>
  <p className="text-indigo-300 mb-4">11 May, 8:00PM, 120 markets (and 1 dodgy referee)</p>
  
  <div className="flex justify-between mb-4 items-center">
    <div className="flex items-center">
      <span className="text-lg mr-2">Canberra</span>
      <span className="text-xs text-gray-400">(aka "The Underdogs Who Might Actually Win This Time")</span>
    </div>
    <span className="text-lg font-bold bg-green-500/20 px-2 py-1 rounded">1.52</span>
  </div>
  
  <div className="flex justify-between items-center mb-2">
    <div className="flex items-center">
      <span className="text-lg mr-2">South</span>
      <span className="text-xs text-gray-400">(aka "The Favorites Who Choke Under Pressure")</span>
    </div>
    <span className="text-lg font-bold bg-red-500/20 px-2 py-1 rounded">2.32</span>
  </div>

  <div className="mt-4 pt-4 border-t border-white/10">
    <p className="text-xs text-gray-400 italic">
      Warning: These odds are 50% math, 30% guesswork, and 20% what the bookie had for breakfast.
      <br />
      <span className="block mt-1">"Not responsible for lost bets or broken TVs" - The Management</span>
    </p>
  </div>
  
  <button className="mt-4 w-full py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 text-sm font-bold rounded-lg hover:from-yellow-400/30 hover:to-yellow-600/30 transition-all">
    Place Bet (With Monopoly Money)
  </button>
</motion.div>

            {/* Work Item 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-400/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">Creating a lean design system</h3>
              <p className="text-indigo-300 mb-4">Design system</p>
              <div className="h-40 bg-purple-900/50 rounded-lg mb-4 overflow-clip"><img src="/images/uxdesign.png" alt="" /></div>
              <p className="text-sm text-gray-300">How we built an efficient design system for rapid prototyping</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Satvik Yadav</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Dribbble</a>
            </div>
          </div>
        </motion.footer>
      </div>
    </motion.main>
  );
};

export default Hero;