import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Github, Linkedin, Youtube } from 'lucide-react';
import { Tilt } from 'react-tilt';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  // Typing effect for subtitle
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "AI/ML Developer | LangChain Enthusiast | Backend Explorer";
  
  useEffect(() => {
    if (inView) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setDisplayedText(fullText.substring(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(typingInterval);
        }
      }, 50);
      
      return () => clearInterval(typingInterval);
    }
  }, [inView]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-8 relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#6366f1",
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
        >
          {/* Profile Image - Larger on desktop, smaller on mobile */}
          <motion.div 
            className="lg:col-span-2 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <Tilt
              options={{
                max: 25,
                scale: 1.05,
                speed: 1000,
              }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl transform transition-all duration-500 hover:scale-105">
                  <img 
                    src="1000263317.jpg" 
                    alt="Sudesh Patil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary-500 dark:bg-primary-600"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
                ></motion.div>
                <motion.div 
                  className="absolute bottom-4 -left-4 w-8 h-8 rounded-full bg-secondary-400 dark:bg-secondary-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: 'spring' }}
                ></motion.div>
              </div>
            </Tilt>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="lg:col-span-3 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.span 
              className="inline-block py-1 px-4 mb-4 text-sm font-medium text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/30 rounded-full"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.span>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              I'm <span className="text-primary-600 dark:text-primary-400">Sudesh Patil</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-6 h-8"
              variants={itemVariants}
            >
              {displayedText}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.p 
              className="text-neutral-700 dark:text-neutral-300 mb-8 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Fresher with practical project experience in AI/ML, LLMs, and LangChain. 
              Enjoys building real-world tools, collaborating on AI projects, and solving 
              complex problems through code.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary transform hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn btn-outline transform hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div 
              className="flex space-x-4 mt-8 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {[
                { icon: Github, href: 'https://github.com/SudeshRPatil20', label: 'GitHub Profile' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sudesh-patil-010188231', label: 'LinkedIn Profile' },
                { icon: Youtube, href: 'https://www.youtube.com/@Blockbash-jb7gt', label: 'YouTube Channel' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors transform hover:scale-110"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-primary-600 dark:text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;