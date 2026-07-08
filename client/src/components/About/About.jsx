import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const TERMINAL_LINES = [
  { type: 'cmd', text: 'npm run build' },
  { type: 'out', text: 'built in 2.4s — 0 errors, 128 modules bundled' },
  { type: 'cmd', text: 'git commit -m "feat: add AI agent workflow"' },
  { type: 'out', text: '[main 8f3a1c2] 3 files changed, 142 insertions(+)' },
  { type: 'cmd', text: 'docker build -t gaurav/portfolio-api .' },
  { type: 'out', text: 'Successfully built and tagged gaurav/portfolio-api:latest' },
  { type: 'cmd', text: 'langchain-agent invoke --task "summarize-docs"' },
  { type: 'out', text: '✓ Agent completed task in 1.2s' },
];

const BADGES = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg', className: '-top-5 left-6 sm:left-10' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg', className: '-top-5 right-6 sm:right-10' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg', className: 'top-1/3 -right-5 sm:-right-8' },
  { name: 'LangChain', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg', className: 'top-2/3 -left-5 sm:-left-8' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg', className: '-bottom-5 left-6 sm:left-10' },
];

function useTypedTerminal(lines, { typeSpeed = 28, outDelay = 250, holdAtEnd = 2200, restartDelay = 600 } = {}) {
  const [completedLines, setCompletedLines] = useState([]);
  const [typingText, setTypingText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const resetTimer = setTimeout(() => {
        setCompletedLines([]);
        setTypingText('');
        setLineIndex(0);
      }, holdAtEnd);
      return () => clearTimeout(resetTimer);
    }

    const currentLine = lines[lineIndex];

    if (currentLine.type === 'out') {
      const outTimer = setTimeout(() => {
        setCompletedLines(prev => [...prev, currentLine]);
        setLineIndex(prev => prev + 1);
      }, outDelay);
      return () => clearTimeout(outTimer);
    }

    if (typingText.length < currentLine.text.length) {
      const typeTimer = setTimeout(() => {
        setTypingText(currentLine.text.slice(0, typingText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(typeTimer);
    }

    const nextTimer = setTimeout(() => {
      setCompletedLines(prev => [...prev, currentLine]);
      setTypingText('');
      setLineIndex(prev => prev + 1);
    }, restartDelay);
    return () => clearTimeout(nextTimer);
  }, [lineIndex, typingText, lines, typeSpeed, outDelay, holdAtEnd, restartDelay]);

  const isTyping = lineIndex < lines.length && lines[lineIndex]?.type === 'cmd';

  return { completedLines, typingText, isTyping };
}

function DevTerminal() {
  const { completedLines, typingText, isTyping } = useTypedTerminal(TERMINAL_LINES);

  return (
    <div className="relative w-full max-w-xl">
      {BADGES.map((badge) => (
        <motion.div
          key={badge.name}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: BADGES.indexOf(badge) * 0.3 }}
          className={`hidden sm:flex absolute ${badge.className} z-20 items-center gap-2 bg-surface/95 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-xl`}
        >
          <img src={badge.icon} alt="" className="w-4 h-4 object-contain dark:brightness-0 dark:invert" />
          <span className="text-xs font-medium text-fg">{badge.name}</span>
        </motion.div>
      ))}

      <div className="relative rounded-xl border border-border bg-surface/90 backdrop-blur-sm shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background-alt/60">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-muted font-mono">gaurav@dev:~</span>
        </div>

        <div className="px-4 sm:px-5 py-4 sm:py-5 font-mono text-xs sm:text-sm min-h-[220px] sm:min-h-[260px] space-y-1.5">
          {completedLines.map((line, i) =>
            line.type === 'cmd' ? (
              <div key={i} className="flex gap-2">
                <span className="text-green-500">$</span>
                <span className="text-fg">{line.text}</span>
              </div>
            ) : (
              <div key={i} className="pl-4 text-muted">{line.text}</div>
            )
          )}

          {isTyping && (
            <div className="flex gap-2">
              <span className="text-green-500">$</span>
              <span className="text-fg">{typingText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="w-[2px] h-4 bg-blue-400 self-center"
              />
            </div>
          )}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-5 right-6 sm:right-10 z-20 flex items-center gap-2 bg-surface/95 backdrop-blur-sm border border-border rounded-full px-3 py-1.5 shadow-xl"
      >
        <span className="relative flex w-2.5 h-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500" />
        </span>
        <span className="text-xs font-medium bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Available for work
        </span>
      </motion.div>
    </div>
  );
}

function About() {
  const [currentText, setCurrentText] = useState("Fullstack (MERN) Software Development");
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev =>
        prev === "Fullstack (MERN) Software Development"
          ? "Agentic AI & LLM Applications"
          : "Fullstack (MERN) Software Development"
      );
      setCharIndex(0);
    }, 6000);

    return () => clearInterval(textInterval);
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

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.95 },
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
      className="min-h-screen bg-background py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="pulse"
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="pulse"
        transition={{ delay: 2 }}
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 justify-center items-center relative z-10"
      >
        {/* Left content */}
        <motion.div
          variants={itemVariants}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 max-w-2xl"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-muted text-base sm:text-lg font-light tracking-wide">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Hello, It&apos;s Me
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Gaurav
              </span>
              <span className="block text-fg mt-2">Ghuge</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg lg:text-xl text-muted font-light leading-relaxed max-w-lg">
              Fullstack (MERN) developer building scalable web apps and agentic AI
              workflows — from React interfaces to Node/Express APIs and LangChain-powered
              automation.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="text-2xl sm:text-3xl md:text-4xl font-semibold h-12 sm:h-16 flex items-center">
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

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Get In Touch
            </Link>
            <a
              href="https://www.linkedin.com/in/gaurav-ghuge-530651226/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 rounded-xl font-semibold text-fg border border-border hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              View LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Right terminal panel */}
        <motion.div
          variants={panelVariants}
          className="flex-1 flex justify-center items-center w-full"
        >
          <DevTerminal />
        </motion.div>
      </motion.section>

      {/* Custom styles for gradient animation */}
      <style>{`
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
