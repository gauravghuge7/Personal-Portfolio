import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/motionVariants'

const education = [
   {
      schoolName: 'Maharashtra state Board of Secondary and Higher Secondary Education',
      degree: 'Secondary Education',
      year: 2019,
      major: 'Science',
      percentage: 79.00,
   },
   {
      schoolName: 'Maharashtra state Board of Secondary and Higher Secondary Education',
      degree: 'Higher Secondary Education ',
      year: "2021",
      major: 'Science',
      percentage: 83.17,
   },
   {
      schoolName: 'Dr Babasaheb Ambedkar Marathwada University',
      degree: 'Bachelor of Science in Computer Science',
      year: "Expected 2025",
      major: 'Computer Science',
      percentage: "grade A++",
   }
];

const Education = () => {
   return (
      <div className="min-h-screen bg-background text-fg py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
         <motion.section
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full max-w-5xl mx-auto bg-surface p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border border-border">
            <h2 className="text-2xl sm:text-3xl text-center text-accent font-bold mb-6 sm:mb-8">Education</h2>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
               <table className="table-auto w-full text-left border-collapse bg-background-alt text-fg">
                  <thead>
                     <tr className="bg-border/40 text-accent">
                        <th className="p-3 lg:p-4 text-sm lg:text-base">School Name</th>
                        <th className="p-3 lg:p-4 text-sm lg:text-base">Degree</th>
                        <th className="p-3 lg:p-4 text-sm lg:text-base">Year</th>
                        <th className="p-3 lg:p-4 text-sm lg:text-base">Major</th>
                        <th className="p-3 lg:p-4 text-sm lg:text-base">Percentage</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        education.map((item, index) => (
                           <tr key={index} className="hover:bg-border/30 transition-colors duration-300">
                              <td className="p-3 lg:p-4 border-b border-border text-sm lg:text-base">{item.schoolName}</td>
                              <td className="p-3 lg:p-4 border-b border-border text-sm lg:text-base">{item.degree}</td>
                              <td className="p-3 lg:p-4 border-b border-border text-sm lg:text-base">{item.year}</td>
                              <td className="p-3 lg:p-4 border-b border-border text-sm lg:text-base">{item.major}</td>
                              <td className="p-3 lg:p-4 border-b border-border text-sm lg:text-base">{item.percentage}</td>
                           </tr>
                        ))
                     }
                  </tbody>
               </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
               {
                  education.map((item, index) => (
                     <div key={index} className="bg-background-alt border border-border rounded-lg p-4 shadow-md">
                        <div className="space-y-3">
                           <div>
                              <h3 className="text-accent font-semibold text-sm mb-1">School Name</h3>
                              <p className="text-fg text-sm">{item.schoolName}</p>
                           </div>
                           <div>
                              <h3 className="text-accent font-semibold text-sm mb-1">Degree</h3>
                              <p className="text-fg text-sm">{item.degree}</p>
                           </div>
                           <div>
                              <h3 className="text-accent font-semibold text-sm mb-1">Year</h3>
                              <p className="text-fg text-sm">{item.year}</p>
                           </div>
                           <div>
                              <h3 className="text-accent font-semibold text-sm mb-1">Major</h3>
                              <p className="text-fg text-sm">{item.major}</p>
                           </div>
                           <div>
                              <h3 className="text-accent font-semibold text-sm mb-1">Percentage</h3>
                              <p className="text-fg text-sm">{item.percentage}</p>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </motion.section>
      </div>
   )
}

export default Education