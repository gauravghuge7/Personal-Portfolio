import { motion } from 'framer-motion';
import logo from '../../../public/personal_photos/gaurav_logo.jpg';
import { fadeInUp } from '../../utils/motionVariants';

function Footer() {
  return (
    <footer className='bg-surface text-fg border-t border-border py-8 sm:py-12'>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>

          {/* Logo Section */}
          <div className='space-y-3 sm:space-y-4'>
            <h3 className='text-xl sm:text-2xl font-bold text-accent'>GAURAV GHUGE</h3>
            <p className='text-sm sm:text-base text-muted'>
              Full Stack Developer passionate about AI, scalable systems, and real-world solutions.
            </p>
            <img src={logo} alt="logo" className='w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover' />
          </div>

          {/* About Section */}
          <div className='space-y-3 sm:space-y-4'>
            <h3 className='text-lg sm:text-xl font-semibold text-accent'>About</h3>
            <p className='text-sm sm:text-base text-muted'>
              Innovative developer with experience in modern web technologies, backend systems, and AI integrations.
            </p>
            <div
              className='bg-background-alt p-2 sm:p-3 rounded-lg hover:bg-border transition duration-300 text-center transform hover:scale-105'
            >
              <a
                href="https://drive.google.com/file/d/12QRsrUyt8NHMVAegAF_kfFuHj27Dv9OI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className='text-sm sm:text-base text-fg hover:text-accent transition duration-300'
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className='space-y-3 sm:space-y-4'>
            <h3 className='text-lg sm:text-xl font-semibold text-accent'>Connect</h3>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>
              {[
                { name: 'GitHub', url: 'https://github.com/gauravghuge7' },
                { name: 'LeetCode', url: 'https://leetcode.com/gauravghuge7/' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gaurav-ghuge-530651226/' },
                { name: 'HashNode', url: 'https://hashnode.com/@gauravghuge' },
                { name: 'Medium', url: 'https://medium.com/@gauravghuge737' },
                { name: 'Instagram', url: 'https://instagram.com/garry_7038?igshid=OGY3MTU3OGY1MW==' },
                { name: 'Twitter', url: 'https://twitter.com/gauravghuge737' },
                { name: 'YouTube', url: 'https://www.youtube.com/channel/UCNrGaENOoOUfkhCqRMxvTAw' },
              ].map((link) => (
                <div
                  key={link.name}
                  className='bg-background-alt p-2 rounded hover:bg-border transition duration-300 text-center transform hover:scale-105'
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-xs sm:text-sm text-fg hover:text-accent transition duration-300 block'
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className='space-y-3 sm:space-y-4'>
            <h3 className='text-lg sm:text-xl font-semibold text-accent'>Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {[
                'Java', 'C++', 'JavaScript', 'TypeScript', 'Python',
                'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
                'MySQL', 'Spring Boot', 'Docker', 'AWS', 'LangChain',
                'Neo4j', 'GraphQL', 'HTML', 'CSS', 'REST APIs'
              ].map(skill => (
                <span
                  key={skill}
                  className='px-2 sm:px-3 py-1 bg-background-alt text-fg rounded-full text-xs sm:text-sm'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-6 sm:mt-8 border-t border-border text-center pt-4'>
          <p className='text-sm sm:text-base text-muted'>
            © {new Date().getFullYear()} Gaurav Ghuge. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
