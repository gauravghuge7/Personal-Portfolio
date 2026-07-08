import { Component } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react'; // Optional: npm install lucide-react for icons

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const headingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default class Contact extends Component {
  render() {
    const titleWords = 'Contact Us'.split(' ');

    return (
      <div className="bg-background min-h-screen p-4 sm:p-6 lg:p-12 text-fg relative overflow-hidden">
        {/* Subtle background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10" />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative z-10 text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <motion.span variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {titleWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-2 sm:mr-4">
                  {word}
                  {i === 0 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> </span>}
                </motion.span>
              ))}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Us</span>
            </motion.span>
          </motion.h1>
          <motion.p variants={childVariants} className="text-base sm:text-lg lg:text-xl text-muted px-4">
            Let's connect with Gaurav Ghuge
          </motion.p>
        </motion.section>

        <motion.main
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 justify-center max-w-7xl mx-auto"
        >
          {/* Contact Details Card */}
          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            className="bg-surface/60 backdrop-blur-xl border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex-1 flex flex-col justify-center transition-all duration-500"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Details
            </h2>
            <p className="text-muted mb-6 sm:mb-8 text-center text-sm sm:text-base">Connect with Gaurav to know more!</p>

            <div className="space-y-6 sm:space-y-8">
              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center transition-colors duration-300"
              >
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 mb-1">PHONE</h3>
                  <p className="text-sm sm:text-base text-muted break-all">+91 8767482793, +91 9421328262</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center transition-colors duration-300"
              >
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 mb-1">EMAIL</h3>
                  <p className="text-sm sm:text-base text-muted break-all">gauravghuge737@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center transition-colors duration-300"
              >
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 mb-1">ADDRESS</h3>
                  <p className="text-sm sm:text-base text-muted">
                    226, At Deopul Village, Post Wasadi <br />
                    Sub-District Kannad, Aurangabad (Sambajinagar) <br />
                    Maharashtra, India 431104
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            className="bg-surface/60 backdrop-blur-xl border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl flex-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <form className="space-y-4 sm:space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 sm:p-4 lg:p-5 rounded-xl bg-background-alt border border-border text-fg placeholder-muted focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 sm:p-4 lg:p-5 rounded-xl bg-background-alt border border-border text-fg placeholder-muted focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 sm:p-4 lg:p-5 rounded-xl bg-background-alt border border-border text-fg placeholder-muted focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 text-sm sm:text-base"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-3 sm:p-4 lg:p-5 rounded-xl bg-background-alt border border-border text-fg placeholder-muted focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 resize-none text-sm sm:text-base"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-3 sm:py-4 rounded-xl shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Send Now!
              </motion.button>
            </form>
          </motion.div>
        </motion.main>
      </div>
    );
  }
}