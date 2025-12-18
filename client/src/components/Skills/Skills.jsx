import { useState } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ category, items, index, categoryType }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const getCategoryGlow = () => {
    switch(categoryType) {
      case "ai": return "hover:shadow-purple-500/30 hover:border-purple-400/50";
      case "frontend": return "hover:shadow-blue-500/30 hover:border-blue-400/50";
      case "backend": return "hover:shadow-green-500/30 hover:border-green-400/50";
      case "databases": return "hover:shadow-cyan-500/30 hover:border-cyan-400/50";
      case "systems": return "hover:shadow-orange-500/30 hover:border-orange-400/50";
      default: return "hover:shadow-white/30 hover:border-gray-400/50";
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`relative group backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-500 ${getCategoryGlow()} hover:bg-white/[0.08]`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <h3 className="text-xl font-bold text-white mb-6 relative">
        <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {category}
        </span>
        <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-white/50 to-transparent rounded-full" />
      </h3>

      <div className="space-y-3">
        {items.map((item, idx) => (
          <SkillItem 
            key={idx} 
            item={item} 
            index={idx}
            categoryType={categoryType}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillItem = ({ item, index, categoryType }) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      }
    }
  };

  const getIconColor = () => {
    switch(categoryType) {
      case "ai": return "text-purple-400";
      case "frontend": return "text-blue-400";
      case "backend": return "text-green-400";
      case "databases": return "text-cyan-400";
      case "systems": return "text-orange-400";
      default: return "text-gray-300";
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer group/item"
    >
      <div className={`relative flex-shrink-0 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
        <div className={`absolute inset-0 ${getIconColor().replace('text-', 'bg-')} blur-md opacity-0 group-hover/item:opacity-20 transition-opacity duration-300`} />
        <img 
          src={item.icon} 
          alt={item.name}
          className="relative w-8 h-8 object-contain filter brightness-0 invert"
        />
      </div>
      
      <motion.span
        animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 0.95 : 1 }}
        transition={{ duration: 0.2 }}
        className="text-gray-200 font-medium text-sm flex-1"
      >
        {item.name}
      </motion.span>
    </motion.div>
  );
};

export default function Skills() {
  const [skills] = useState([
    {
      name: "Agentic AI & Generative AI",
      type: "ai",
      items: [
        { name: "Agentic AI Workflows", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
        { name: "AI Agents & Multi-Agent Systems", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
        { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg" },
        { name: "LangGraph", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/langchain.svg" },
        { name: "RAG", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vectorlogozone.svg" },
        { name: "Prompt Engineering", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
        { name: "Memory-Aware Agents", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/memory.svg" },
        { name: "Fine-Tuning", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/huggingface.svg" },
        { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/huggingface.svg" },
        { name: "OpenAI (GPT-4/4o)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
        { name: "Claude", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg" },
        { name: "Gemini", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" },
        { name: "Llama-3", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg" },
        { name: "Vector Databases", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pinecone.svg" },
      ]
    },
    {
      name: "Backend (Python & AI APIs)",
      type: "backend",
      items: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/flask.svg" },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/rest.svg" },
        { name: "Async APIs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg" },
        { name: "Microservices", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" },
        { name: "JWT Authentication", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jwt.svg" },
        { name: "AI Inference APIs", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" },
      ]
    },
    {
      name: "Frontend (JavaScript Ecosystem)",
      type: "frontend",
      items: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg" },
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vuedotjs.svg" },
        { name: "Redux / Zustand", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redux.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg" },
        { name: "Shadcn UI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg" },
      ]
    },
    {
      name: "Backend (JavaScript & Java)",
      type: "backend",
      items: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/express.svg" },
        { name: "MVC Architecture", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/architecture.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/java.svg" },
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/springboot.svg" },
        { name: "Spring Security", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/springsecurity.svg" },
        { name: "Hibernate / JPA", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/java.svg" },
      ]
    },
    {
      name: "Core & Systems",
      type: "systems",
      items: [
        { name: "C++", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg" },
        { name: "Qt Creator", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/qt.svg" },
        { name: "Data Structures & Algorithms", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leetcode.svg" },
        { name: "OOPS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/java.svg" },
        { name: "System Design", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/architecture.svg" },
      ]
    },
    {
      name: "Databases & DevOps",
      type: "databases",
      items: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg" },
        { name: "Neo4j", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/neo4j.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" },
        { name: "CI/CD", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linux.svg" },
        { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" },
      ]
    }
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Full-stack engineering with specialized expertise in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Agentic AI & Generative AI
            </span>
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <SkillCard
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
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500/30 border border-purple-400/50" />
              <span className="text-sm text-gray-400">AI & Generative AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500/30 border border-blue-400/50" />
              <span className="text-sm text-gray-400">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-400/50" />
              <span className="text-sm text-gray-400">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500/30 border border-cyan-400/50" />
              <span className="text-sm text-gray-400">Databases & DevOps</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}