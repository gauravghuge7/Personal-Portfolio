import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Journey.css';

const Journey = () => {

   useEffect(() => {
      AOS.init({
      duration: 1000,
      once: true,
      });
   }, []);

   const bcs = {
      title: 'Education',
      description: `
         - Bachelor of Computer Science from Dr. Babasaheb Ambedkar Marathwada University (Expected 2025). 
         - Higher Secondary Education from Maharashtra State Board with 83.17% (2019 – 2021). 
         - Secondary Education from Maharashtra State Board with 79.00% (2018 – 2019).
      `,
      icon: '🎓',
   }

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
   }

   


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
      }
   ]

   useEffect(() => {
      const handleScroll = () => {
         const verticalCards = document.getElementById('line');
         if (verticalCards) {
            verticalCards.classList.add('animate');
            console.log('verticalCards', verticalCards);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);


  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-background">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center text-fg">My Journey</h1>

      <div className="space-y-8 sm:space-y-12">
         {/* Education Section */}
         <div className="relative">
            {/* Vertical Line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-400"></div>
            
            {/* Content Card */}
            <div className="ml-0 md:ml-12 lg:ml-16">
               <div className="bg-gradient-to-b from-blue-600 to-teal-400 text-white rounded-2xl sm:rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden flex flex-col items-center justify-between text-center p-6 sm:p-8 lg:p-10">
                  <div className="w-full">
                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">{bcs.title}</h2>
                     <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-6 lg:px-12 whitespace-pre-line">
                        {bcs.description}
                     </p>
                  </div>
                  <div className="flex items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6">
                     <span className="bg-white text-blue-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                        💼
                     </span>
                     <span className="bg-white text-teal-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                        🚀
                     </span>
                  </div>
               </div>
            </div>
         </div>

         {/* Horizontal Line - Hidden on mobile, visible on md+ */}
         <div className="hidden md:block h-1 bg-gradient-to-r from-blue-600 to-teal-400 ml-4"></div>

         {/* Work Experience Section */}
         <div className="relative">
            {/* Vertical Line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-400"></div>
            
            {/* Content Card */}
            <div className="ml-0 md:ml-12 lg:ml-16">
               <div className="bg-gradient-to-b from-blue-600 to-teal-400 text-white rounded-2xl sm:rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden flex flex-col items-center justify-between text-center p-6 sm:p-8 lg:p-10">
                  <div className="w-full">
                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">{arohi.title}</h2>
                     <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-6 lg:px-12 whitespace-pre-line">
                        {arohi.description}
                     </p>
                  </div>
                  <div className="flex items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6">
                     <span className="bg-white text-blue-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                        💼
                     </span>
                     <span className="bg-white text-teal-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                        🚀
                     </span>
                  </div>
               </div>
            </div>
         </div>

         {/* Projects Section */}
         {projects.map((project, index) => (
            <div key={index} className="relative">
               {/* Vertical Line - Hidden on mobile, visible on md+ */}
               {index < projects.length - 1 && (
                  <div className="hidden md:block absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-teal-400"></div>
               )}
               
               {/* Content Card */}
               <div className="ml-0 md:ml-12 lg:ml-16">
                  <div className="bg-gradient-to-b from-blue-600 to-teal-400 text-white rounded-2xl sm:rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden flex flex-col items-center justify-between text-center p-6 sm:p-8 lg:p-10">
                     <div className="w-full">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">{project.title}</h2>
                        <p className="text-base sm:text-lg leading-relaxed px-2 sm:px-6 lg:px-12 whitespace-pre-line">
                           {project.description}
                        </p>
                     </div>
                     <div className="flex items-center justify-center mt-4 sm:mt-6">
                        <span className="bg-white text-blue-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl shadow-md transform transition-transform duration-300 hover:scale-110">
                           {project.icon}
                        </span>
                     </div>
                  </div>
               </div>

               {/* Horizontal Line between projects - Hidden on mobile, visible on md+ */}
               {index < projects.length - 1 && (
                  <div className="hidden md:block h-1 bg-gradient-to-r from-blue-600 to-teal-400 ml-4 my-8"></div>
               )}
            </div>
         ))}
      </div>
   </div>
);
};

export default Journey;
