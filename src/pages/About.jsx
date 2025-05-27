import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiMusic, FiLayers } from 'react-icons/fi';
import { FaLaptopCode, FaRegLaughSquint, FaRobot } from 'react-icons/fa';
import './About.css'; // Assuming you have a CSS file for additional styles

const About = () => {
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

  const stats = [
    { value: "1000+", label: "Cups of Coffee", icon: <FiCoffee className="text-amber-400" /> },
    { value: "∞", label: "Bad Jokes", icon: <FaRegLaughSquint className="text-pink-400" /> },
    { value: "24/7", label: "Debugging", icon: <FaRobot className="text-indigo-400" /> }
  ];

  const skills = [
    { name: "React", level: 90, color: "from-cyan-500 to-blue-600" },
    { name: "JavaScript", level: 85, color: "from-yellow-400 to-amber-500" },
    { name: "CSS", level: 95, color: "from-indigo-500 to-purple-600" },
    { name: "Dad Jokes", level: 110, color: "from-red-500 to-pink-600" }
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
              WHO AM I?
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-300">Satvik</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              A developer who turns <span className="text-amber-300">coffee</span> into <span className="text-indigo-300">code</span>, 
              and <span className="line-through">bugs</span> features into solutions.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* About Content */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-2/3"
            >
              <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <FaLaptopCode className="mr-3 text-indigo-400" />
                    Professional Me
                  </h2>
                  
                  <p className="mb-4">
                    I'm a passionate full-stack developer with a knack for creating beautiful, functional applications. 
                    With <span className="text-amber-300">5+ years</span> of experience, I've mastered the art of turning 
                    complex problems into elegant solutions.
                  </p>
                  
                  <p className="mb-6">
                    My code is like my humor - <span className="text-pink-300">clean, efficient,</span> and occasionally 
                    <span className="text-red-300"> unpredictable</span>. I believe in writing code that even your 
                    grandma could understand (though she might not appreciate my variable naming conventions).
                  </p>

                  <h2 className="text-2xl font-bold mb-6 flex items-center mt-10">
                    <FaRegLaughSquint className="mr-3 text-pink-400" />
                    Personal Me
                  </h2>
                  
                  <p className="mb-4">
                    When I'm not wrestling with JavaScript or arguing with CSS, you can find me:
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <FiMusic className="mr-2 text-purple-400" />
                      Jamming to terrible music that my neighbors hate
                    </li>
                   
                    <li className="flex items-center">
                      <FiLayers className="mr-2 text-blue-400" />
                      Stacking snacks in perfect pyramids before eating them
                    </li>
                  </ul>

                  <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 my-6 italic bg-white/5 rounded-r-lg">
                    "I don't always test my code, but when I do, I do it in production."
                    <footer className="text-sm mt-2 text-gray-400">— Satvik, probably</footer>
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Stats & Skills */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-1/3 space-y-8"
            >
              {/* Fun Stats */}
              <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <FiCode className="mr-2 text-indigo-400" />
                  By The Numbers
                </h3>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl mr-4">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-6">My Superpowers</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span>{skill.level > 100 ? "Over 9000!" : `${skill.level}%`}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(skill.level, 100)}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <div className="bg-gradient-to-br from-indigo-600/30 to-pink-600/30 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-3">Did You Know?</h3>
                <p className="text-sm">
                  I once spent 3 hours debugging only to realize I forgot to save my file. 
                  My rubber duck now has PTSD.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;