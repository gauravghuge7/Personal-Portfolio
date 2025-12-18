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
      <div className="bg-black min-h-screen p-6 md:p-12 text-white relative overflow-hidden">
        {/* Subtle background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20" />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative z-10 text-center mb-16"
        >
          <motion.h1 className="text-5xl md:text-6xl font-bold mb-4">
            <motion.span variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {titleWords.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="inline-block mr-4">
                  {word}
                  {i === 0 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> </span>}
                </motion.span>
              ))}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Us</span>
            </motion.span>
          </motion.h1>
          <motion.p variants={childVariants} className="text-xl text-gray-400">
            Let’s connect with Gaurav Ghuge
          </motion.p>
        </motion.section>

        <motion.main
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-stretch gap-12 justify-center max-w-7xl mx-auto"
        >
          {/* Contact Details Card */}
          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl flex-1 flex flex-col justify-center transition-all duration-500"
          >
            <h2 className="text-4xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Details
            </h2>
            <p className="text-gray-400 mb-8 text-center">Connect with Gaurav to know more!</p>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex items-center justify-center gap-4 text-center transition-colors duration-300"
              >
                <Phone className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-1">PHONE</h3>
                  <p className="text-gray-300">+91 8767482793, +91 9421328262</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex items-center justify-center gap-4 text-center transition-colors duration-300"
              >
                <Mail className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-1">EMAIL</h3>
                  <p className="text-gray-300">gauravghuge737@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10, color: '#60a5fa' }}
                className="flex items-center justify-center gap-4 text-center transition-colors duration-300"
              >
                <MapPin className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-1">ADDRESS</h3>
                  <p className="text-gray-300">
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
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl flex-1"
          >
            <h2 className="text-4xl font-semibold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300"
              />
              <textarea
                rows="6"
                placeholder="Message"
                className="w-full p-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 resize-none"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold py-4 rounded-xl shadow-lg transition-all duration-300"
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