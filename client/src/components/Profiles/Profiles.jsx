import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

function Profiles() {
    const [profile, setProfile] = useState([
        {
            title: "GitHub",
            icon: "./github.png",
            link: "https://github.com/gauravghuge7",
            description: "See Repository at my GitHub profile",
            username: "gauravghuge7",
            color: "from-gray-700 to-gray-900",
            hoverColor: "hover:shadow-purple-500/20 hover:border-purple-400/30"
        },
        {
            title: "LinkedIn",
            icon: "./linked.png",
            link: "https://www.linkedin.com/in/gaurav-ghuge-530651226/",
            description: "Join me on LinkedIn",
            username: "gauravghuge",
            color: "from-blue-700 to-blue-900",
            hoverColor: "hover:shadow-blue-500/20 hover:border-blue-400/30"
        },
        {
            title: "Instagram",
            icon: "./insta.jpeg",
            link: "https://instagram.com/garry_7038?igshid=OGY3MTU3OGY1MW==",
            description: "Join with me on Instagram",
            username: "garry_7038",
            color: "from-pink-700 to-purple-900",
            hoverColor: "hover:shadow-pink-500/20 hover:border-pink-400/30"
        },
        {
            title: "Twitter",
            icon: "./twitter.png",
            link: "https://twitter.com/gauravghuge737",
            description: "Join with me on Twitter",
            username: "gauravghuge737",
            color: "from-sky-700 to-sky-900",
            hoverColor: "hover:shadow-sky-500/20 hover:border-sky-400/30"
        },
        {
            title: "HashNode",
            icon: "./hashnode.png",
            link: "https://hashnode.com/@gauravghuge",
            description: "Read my articles on HashNode",
            username: "gauravghuge",
            color: "from-blue-600 to-blue-800",
            hoverColor: "hover:shadow-blue-500/20 hover:border-blue-400/30"
        },
        {
            title: "Medium",
            icon: "./medium.png",
            link: "https://medium.com/@gauravghuge737",
            description: "Read my articles on Medium",
            username: "gauravghuge737",
            color: "from-gray-800 to-black",
            hoverColor: "hover:shadow-green-500/20 hover:border-green-400/30"
        },
        {
            title: "LeetCode",
            icon: "./leetcode.jpeg",
            link: "https://leetcode.com/gauravghuge7/",
            description: "Check my progress on LeetCode",
            username: "gauravghuge7",
            color: "from-amber-700 to-amber-900",
            hoverColor: "hover:shadow-amber-500/20 hover:border-amber-400/30"
        },
        {
            title: "HackerRank",
            icon: "./hacker.png",
            link: "https://www.hackerrank.com/profile/guduughuge7",
            description: "Check my progress on HackerRank",
            username: "guduughuge7",
            color: "from-emerald-700 to-emerald-900",
            hoverColor: "hover:shadow-emerald-500/20 hover:border-emerald-400/30"
        },
    ]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            
            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                            My Profiles
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Connect with me across platforms where I share my work, insights, and journey
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Profiles Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {profile.map((item, index) => (
                        <motion.a
                            key={index}
                            variants={cardVariants}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] ${item.hoverColor} hover:bg-white/[0.08] cursor-pointer overflow-hidden`}
                        >
                            {/* Gradient Background Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`} />
                            
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 group-hover:duration-200 -z-20" />
                            
                            {/* Icon Container */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                                <motion.img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-24 h-24 object-contain mx-auto relative z-10"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-4 text-center">
                                {/* Title */}
                                <h3 className="text-xl font-bold">
                                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                        {item.title}
                                    </span>
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Username */}
                                <div className="pt-4 border-t border-white/10">
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-gray-400 text-sm">@</span>
                                        <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                                            {item.username}
                                        </span>
                                        <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover Indicator */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-24 transition-all duration-300" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Stats/Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 text-sm">
                        Feel free to connect! I'm always open to interesting conversations and collaborations.
                    </p>
                    <div className="flex justify-center gap-6 mt-6">
                        <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">8</div>
                            <div className="text-gray-400 text-sm">Platforms</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">24/7</div>
                            <div className="text-gray-400 text-sm">Active</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">100%</div>
                            <div className="text-gray-400 text-sm">Engaged</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Profiles;