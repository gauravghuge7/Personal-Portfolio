import { useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef } from 'react';
import AboutImage from "../../../public/personal_photos/photo_gaurav_ghgue.jpg";
import GauravGhibali from "../../../public/personal_photos/gibili_photo.png";

function About() {
  const [currentImage, setCurrentImage] = useState(AboutImage);
  const [currentText, setCurrentText] = useState("Fullstack (MERN) Software Development");
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prev => prev === AboutImage ? GauravGhibali : AboutImage);
    }, 6000);

    const textInterval = setInterval(() => {
      setCurrentText(prev => 
        prev === "Software Developer" 
          ? "Java Developer" 
          : "Fullstack Software Development"
      );
      setCharIndex(0);
    }, 6000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (charIndex < currentText.length) {
      const typingInterval = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(typingInterval);
    }
  }, [charIndex, currentText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    pulse: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="pulse"
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="pulse"
        transition={{ delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-center items-center relative z-10"
      >
        {/* Left content */}
        <motion.div 
          variants={itemVariants}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-2xl"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-gray-400 text-lg font-light tracking-wide">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Hello, It&apos;s Me
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Gaurav
              </span>
              <span className="block text-white mt-2">Ghuge</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg">
              I am a professional software developer with expertise in modern web technologies and scalable applications.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="text-3xl md:text-4xl font-semibold h-16 flex items-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-[2px] h-10 bg-blue-400 ml-1"
              />
            </div>
            <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl -z-10"></div>
          </motion.div>

          {/* <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-blue-500 transition-all duration-300"></div>
              <div className="absolute inset-[1px] bg-gray-950 rounded-xl"></div>
              <a 
                href="./Gaurav_Ghuge_Resume.pdf" 
                download
                className="relative flex items-center gap-3 text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </motion.button>
          </motion.div> */}
        </motion.div>

        {/* Right image */}
        <motion.div 
          variants={imageVariants}
          className="flex-1 flex justify-center items-center"
        >
          <div className="relative group">
            {/* Outer glow ring */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-blue-500/30 blur-lg"
            />
            
            {/* Inner ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-gradient-shift bg-[length:200%_auto]"></div>
            </div>
            
            {/* Image container */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-full p-1 bg-gray-950"
            >
              <motion.img 
                key={currentImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                onLoad={() => setImageLoaded(true)}
                src={currentImage} 
                alt="Gaurav Ghuge" 
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-gray-900/50 transition-all duration-500"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </motion.div>
            
            {/* Floating element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Available for work
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      
      {/* Custom styles for gradient animation */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  )
}

export default About;