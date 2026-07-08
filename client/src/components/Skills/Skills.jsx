import { useState } from "react";
import { motion } from "framer-motion";
import { skill } from "../../services/information";
import Marquee from "../common/Marquee";
import { fadeInUp } from "../../utils/motionVariants";

const SkillRow = ({ category, items, index, categoryType }) => {
  const getCategoryGlow = () => {
    switch(categoryType) {
      case "ai": return "hover:shadow-purple-500/30 hover:border-purple-400/50";
      case "frontend": return "hover:shadow-blue-500/30 hover:border-blue-400/50";
      case "backend": return "hover:shadow-green-500/30 hover:border-green-400/50";
      case "databases": return "hover:shadow-cyan-500/30 hover:border-cyan-400/50";
      case "systems": return "hover:shadow-orange-500/30 hover:border-orange-400/50";
      case "data": return "hover:shadow-yellow-500/30 hover:border-yellow-400/50";
      default: return "hover:shadow-accent/30 hover:border-accent/50";
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <h3 className="text-xl font-bold text-fg mb-4">
        <span className="bg-gradient-to-r from-fg to-muted bg-clip-text text-transparent">
          {category}
        </span>
      </h3>

      <Marquee
        items={items}
        reverse={index % 2 === 1}
        speed={items.length * 4}
        renderItem={(item) => (
          <SkillItem item={item} categoryType={categoryType} glow={getCategoryGlow()} />
        )}
      />
    </motion.div>
  );
};

const SkillItem = ({ item, categoryType, glow }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIconColor = () => {
    switch(categoryType) {
      case "ai": return "text-purple-400";
      case "frontend": return "text-blue-400";
      case "backend": return "text-green-400";
      case "databases": return "text-cyan-400";
      case "systems": return "text-orange-400";
      case "data": return "text-yellow-400";
      default: return "text-muted";
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group/item flex items-center gap-3 p-3 w-48 rounded-xl backdrop-blur-sm bg-background-alt/60 border border-border hover:bg-background-alt transition-all duration-300 cursor-pointer ${glow}`}
    >
      <div className={`relative flex-shrink-0 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        <div className={`absolute inset-0 ${getIconColor().replace('text-', 'bg-')} blur-md opacity-0 group-hover/item:opacity-20 transition-opacity duration-300`} />
        <img
          src={item.icon}
          alt={item.name}
          className="relative w-8 h-8 object-contain dark:brightness-0 dark:invert"
        />
      </div>

      <span className="text-fg font-medium text-sm flex-1 truncate">
        {item.name}
      </span>
    </div>
  );
};

export default function Skills() {
  const [skills] = useState(skill);

  return (
    <main className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-fg via-fg to-muted bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Full-stack engineering with specialized expertise in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Agentic AI & Generative AI
            </span>
          </p>
        </motion.div>

        {/* Skills Rows */}
        <div className="space-y-10">
          {skills.map((category, index) => (
            <SkillRow
              key={index}
              category={category.name}
              items={category.items}
              index={index}
              categoryType={category.type}
            />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500/30 border border-purple-400/50" />
              <span className="text-sm text-muted">AI & Generative AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500/30 border border-blue-400/50" />
              <span className="text-sm text-muted">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-400/50" />
              <span className="text-sm text-muted">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500/30 border border-cyan-400/50" />
              <span className="text-sm text-muted">Databases & DevOps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-400/50" />
              <span className="text-sm text-muted">Data Engineering</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
