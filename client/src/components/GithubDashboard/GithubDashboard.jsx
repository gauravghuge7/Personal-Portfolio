import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motionVariants';

const GithubDashboard = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col items-center p-6 bg-background text-fg min-h-screen">
      {/* Header Section */}
      <h1 className="text-5xl font-bold mb-2 text-fg">Hi 👋, I am Gaurav Ashok Ghuge</h1>
      <h3 className="text-2xl text-muted mb-6">A passionate software engineer from India</h3>

      {/* Profile Views */}
      <p className="mb-6">
        <img
          src="https://komarev.com/ghpvc/?username=gauravghuge7&label=Profile%20views&color=ff69b4&style=flat"
          alt="Profile Views"
        />
      </p>

      {/* GitHub Trophies */}
      <p className="mb-8">
        <a href="https://github.com/ryo-ma/github-profile-trophy">
          <img
            src="https://github-profile-trophy.vercel.app/?username=gauravghuge7&theme=darkhub&no-bg=true&no-frame=true&margin-w=15"
            alt="GitHub Trophies"
            className="rounded-lg shadow-lg"
          />
        </a>
      </p>

      {/* Twitter Follow */}
      <p className="mb-6">
        <a href="https://twitter.com/gauravghuge737" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.shields.io/twitter/follow/gauravghuge737?logo=twitter&style=for-the-badge&labelColor=000&color=1DA1F2"
            alt="Twitter Follow"
          />
        </a>
      </p>

      {/* Current Work */}
      <h4 className="text-xl font-semibold text-fg mb-2">
        🔭 I’m currently working as an intern at Arohi Softwares as a full stack developer on
      </h4>
      <p className="text-blue-500 underline mb-6">
        <a href="https://github.com/gauravghuge7/emplyeemanagement1">Employee Management</a>
      </p>

      {/* Contact */}
      <h4 className="text-lg mb-8">📫 How to reach me: <strong>gauravghuge737@gmail.com</strong></h4>

      {/* Social Links */}
      <h3 className="text-2xl font-semibold mb-4">Connect with me:</h3>
      <div className="flex space-x-8 mb-8">
        <a href="https://dev.to/gauravghuge_737dev.to" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg"
            alt="Dev.to"
            className="w-10 h-10"
          />
        </a>
        <a href="https://twitter.com/gauravghuge737" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
            alt="Twitter"
            className="w-10 h-10"
          />
        </a>
        <a href="https://linkedin.com/in/gaurav-ghuge-530651226" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="LinkedIn"
            className="w-10 h-10"
          />
        </a>
        <a href="https://instagram.com/gaurav_ghuge_737" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
            alt="Instagram"
            className="w-10 h-10"
          />
        </a>
        <a href="https://hashnode.com/@gauravghuge" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hashnode.svg"
            alt="Hashnode"
            className="w-10 h-10"
          />
        </a>
        <a href="https://medium.com/@gauravghuge737" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg"
            alt="Medium"
            className="w-10 h-10"
          />
        </a>
        <a href="https://www.youtube.com/c/enjoy with gaurav @gauravghuge848" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg"
            alt="YouTube"
            className="w-10 h-10"
          />
        </a>
        <a href="https://www.hackerrank.com/guduughuge7" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
            alt="HackerRank"
            className="w-10 h-10"
          />
        </a>
        <a href="https://www.leetcode.com/gauravghuge7" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
            alt="LeetCode"
            className="w-10 h-10"
          />
        </a>
      </div>

      {/* Languages and Tools */}
      <h3 className="text-2xl font-semibold mb-4">Languages and Tools:</h3>
      <div className="grid grid-cols-3 gap-8 mb-8">
        <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="AWS"
            className="w-16 h-16"
          />
        </a>
        <a href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="C"
            className="w-16 h-16"
          />
        </a>
        <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
            className="w-16 h-16"
          />
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="CSS3"
            className="w-16 h-16"
          />
        </a>
        <a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="Express"
            className="w-16 h-16"
          />
        </a>
        {/* Add more languages and tools here */}
      </div>

      {/* GitHub Stats Section */}
      <h3 className="text-2xl font-semibold mb-4">GitHub Stats</h3>
      <div className="flex flex-col items-center space-y-8">
        <p>
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=gauravghuge7&show_icons=true&locale=en&layout=compact&theme=chartreuse-dark"
            alt="Top Languages"
            className="rounded-lg shadow-lg"
          />
        </p>
        <p>
          <img
            src="https://github-readme-stats.vercel.app/api?username=gauravghuge7&show_icons=true&locale=en&theme=chartreuse-dark"
            alt="GitHub Stats"
            className="rounded-lg shadow-lg"
          />
        </p>
        <p>
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=gauravghuge7&theme=chartreuse-dark"
            alt="GitHub Streak"
            className="rounded-lg shadow-lg"
          />
        </p>
      </div>
    </motion.div>
  );
};

export default GithubDashboard;
