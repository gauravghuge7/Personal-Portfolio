import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/motionVariants';

const bcs = {
   title: 'Education',
   description: `
      - Bachelor of Computer Science from Dr. Babasaheb Ambedkar Marathwada University (Expected 2025).
      - Higher Secondary Education from Maharashtra State Board with 83.17% (2019 – 2021).
      - Secondary Education from Maharashtra State Board with 79.00% (2018 – 2019).
   `,
   icon: '🎓',
};

const arohi = {
   title: 'Work Experience',
   description: `
      - Full Stack Developer Intern at Arohi Softwares (May 2024 – Sep 2024).
      - Responsibilities included:
         - Payment integration and verification using Node.js.
         - Integration of APIs like Cloudinary, Razorpay, and AWS for storage and payments.
         - Development of an Employee Management System using the MERN stack.
         - Contributions to a Learning Management System's design and deployment.
   `,
   icon: '💼',
};

const projects = [
   {
      title: 'Projects - Laptop Checker App',
      description: `
         - Designed an interface in Next.js for evaluating laptop performance and delivering actionable insights.
         - Focused on system hardware interaction and user-centric design principles.
         - Links:
            - Live App: https://second-hand-laptop-checker.vercel.app/
            - Source Code: https://github.com/gauravghuge7/Second_hand_Laptop_checker
      `,
      icon: '🚀',
   },
   {
      title: 'Projects - Company Management System',
      description: `
         - Built a Jira-like system for managing teams, clients, and tasks using React and Node.js.
         - Developed tools for automated data gathering and impactful insights.
         - Links:
            - Source Code: https://github.com/gauravghuge7/company-management
      `,
      icon: '🚀',
   },
   {
      title: 'Projects - Student Career Guide and Preparation',
      description: `
         - Developed a MERN-based career guidance platform with a responsive UI using React.
         - Integrated OpenAI for question paper preparation and automated scoring.
         - Links:
            - Live Project: https://naukari-project.onrender.com/
      `,
      icon: '🚀',
   },
   {
      title: 'Projects - Learning Management System',
      description: `
         - Contributed to the design and deployment of an LMS focusing on content management and interaction.
         - Technologies used include React, Node.js, and AWS.
      `,
      icon: '🚀',
   },
];

const timelineEntries = [bcs, arohi, ...projects];

const Journey = () => {
   return (
      <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: '-50px' }}
         className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-background"
      >
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center text-fg">My Journey</h1>

         <div className="space-y-8 sm:space-y-12">
            {timelineEntries.map((entry, index) => (
               <motion.div key={entry.title} variants={fadeInUp} className="relative">
                  {index < timelineEntries.length - 1 && (
                     <div className="hidden md:block absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent2"></div>
                  )}

                  <div className="ml-0 md:ml-12 lg:ml-16">
                     <div className="bg-gradient-to-b from-accent to-accent2 text-white rounded-2xl sm:rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden flex flex-col items-center justify-between text-center p-6 sm:p-8 lg:p-10">
                        <div className="w-full">
                           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">{entry.title}</h2>
                           <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-6 lg:px-12 whitespace-pre-line">
                              {entry.description}
                           </p>
                        </div>
                        <div className="flex items-center justify-center mt-4 sm:mt-6">
                           <span className="bg-surface text-accent rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                              {entry.icon}
                           </span>
                        </div>
                     </div>
                  </div>

                  {index < timelineEntries.length - 1 && (
                     <div className="hidden md:block h-1 bg-gradient-to-r from-accent to-accent2 ml-4 my-8"></div>
                  )}
               </motion.div>
            ))}
         </div>
      </motion.div>
   );
};

export default Journey;
