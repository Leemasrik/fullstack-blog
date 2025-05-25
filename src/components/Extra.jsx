import React from 'react';
import { motion } from 'framer-motion';
import Moon from '../components/Moon.jsx';
import Projects from './Projects.jsx'
import gallaxy2 from '../assets/gallaxy2.webp';
const Hero = () => {
   const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative z-10 text-gray-400 bg-[#A7C7E7] body-font pt-20" style={{backgroundImage: `url(${gallaxy2})`}} >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 container px-5 py-24 mx-auto">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      

        
        {/* 🎯 Animated Left Text Section */}
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h1
  className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white overflow-hidden whitespace-nowrap drop-shadow-[0_0_10px_white]
"
  style={{
    display: 'inline-block',
    animation: 'scrollText 10s linear infinite',
  }}
>
  We Can Create Great Projects For You
</h1>

          <p className="mb-8 leading-relaxed text-[white]">
            We have created great projects for our clients where everyone is pleased with our work and had a great experience.
          </p>
          <button onClick={scrollToProjects}  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition">Projects</button>
        </motion.div>

        {/* 🎯 Animated 3D Moon Section */}
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ scale: 0.5, rotate: 10, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <Moon />
        </motion.div>
      
       


      </div>
      </div>
    </section>
  );
};

export default Hero;
