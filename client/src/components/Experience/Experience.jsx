import { useState, useRef, memo } from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { experience } from "../../services/information.js";
import Marquee from "../common/Marquee";
import { fadeInUp } from "../../utils/motionVariants";

const ExperienceCard = memo(function ExperienceCard({ exp, index, onOpenProjects }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="w-80 sm:w-96 h-full flex flex-col shadow-lg rounded-lg p-4 sm:p-6 bg-surface border border-border hover:shadow-2xl transition-shadow duration-300"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-accent2 mb-2">
        {exp.company}
      </h2>
      <hr className="border-border my-2" />
      <p className="text-xs sm:text-sm text-muted mb-2 truncate">
        <strong>Address:</strong> {exp.address}
      </p>
      <hr className="border-border my-2" />
      <p className="text-sm sm:text-base text-fg mb-2 truncate">
        <strong>Position:</strong> {exp.position}
      </p>
      <hr className="border-border my-2" />
      <p className="text-xs sm:text-sm text-muted mb-2">
        <strong>Start Date:</strong> {exp.startDate}
      </p>
      <p className="text-xs sm:text-sm text-muted mb-2">
        <strong>End Date:</strong> {exp.endDate}
      </p>
      <hr className="border-border my-2" />
      <p className="text-xs sm:text-sm text-fg mb-4 line-clamp-4 flex-1">{exp.description}</p>
      <button
        className="w-full sm:w-auto bg-accent2 text-white px-4 py-2 rounded-md hover:opacity-90 transition duration-300 text-sm sm:text-base mt-auto"
        onClick={() => onOpenProjects(index)}
      >
        View Projects
      </button>
    </motion.div>
  );
});

function Experience() {
  const projectRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openProjects = (idx) => {
    setCurrentIndex(idx);
    projectRef.current.showModal();
  };

  const closeProjects = () => {
    projectRef.current.close();
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-background text-fg min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-fg">
        Experience
      </h1>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Marquee
          items={experience}
          speed={experience.length * 10}
          renderItem={(exp, index) => (
            <ExperienceCard exp={exp} index={index} onOpenProjects={openProjects} />
          )}
        />
      </motion.section>

      {/* Projects Modal */}
      <dialog  ref={projectRef} className="custom-dialog p-4 sm:p-6 rounded-lg shadow-2xl bg-surface text-fg">
        <button
          onClick={closeProjects}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-600 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-sm sm:text-base hover:bg-red-700 transition"
        >
          X
        </button>
        <h2 className="text-xl sm:text-2xl font-semibold text-accent2 mb-4 sm:mb-6">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {experience[currentIndex]?.project?.map((pro, index) => (
            <div
              key={index}
              className="project-card border border-border rounded-lg p-3 sm:p-4 shadow hover:shadow-lg transition-shadow duration-300 bg-background-alt"
            >
              <h3 className="text-base sm:text-lg font-medium text-accent2 mb-2">
                {pro.name}
              </h3>
              <p className="text-xs sm:text-sm text-fg mb-2">{pro.description}</p>
              {pro.image && (
                <img
                  src={pro.image}
                  alt={`${pro.name} Image`}
                  className="w-full rounded-md mb-3 sm:mb-4"
                />
              )}
              <p className="text-xs sm:text-sm text-muted mb-2">
                <strong>Technologies:</strong> {pro.technologies}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <a
                  href={pro.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent2 text-white px-3 sm:px-4 py-2 rounded-md hover:opacity-90 transition duration-300 text-center text-sm sm:text-base"
                >
                  View Project
                </a>
                <a
                  href={pro.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-border text-fg px-3 sm:px-4 py-2 rounded-md hover:opacity-80 transition duration-300 text-center text-sm sm:text-base"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </dialog>
    </div>
  );
}

export default Experience;
