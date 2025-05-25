// pages/About.jsx
import React from 'react';
import RotatingCube from '../components/RotatingCube';
import { motion } from 'framer-motion';
import MoonTrail from './MoonTrail';
import gallaxy3 from '../assets/gallaxy3.jpg'

const About = () => {
  return (
    <section className=" relative text-gray-400 bg-gray-900 body-font"
    style={{backgroundImage:`url(${gallaxy3})`}}>
       <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 container px-5 py-24 mx-auto">

      <motion.div
        className="container px-5 py-24 mx-auto flex flex-col"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="lg:w-8/12 mx-auto z-50 backdrop-blur-lg bg-white/10 border-b border-white/30 shadow-lg">
          {/* Animated Cube Container */}
          <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0, ease: 'easeOut' }}
  className="flex justify-center items-center mb-15 w-full h-full "
>
  <div
    className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-4 z-50 backdrop-blur-lg bg-white/10 border-b border-white/30 shadow-lg mt-15"
    style={{ width: '350px', height: '350px' }}
  >
    <RotatingCube />
  </div>
</motion.div>


          {/* Text Content */}
          <div className="flex flex-col sm:flex-row">
            {/* Left Profile Info */}
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                {/* Avatar icon */}
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center mt-4">
                <h2 className="text-white text-lg font-medium">Leema Sri</h2>
                <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-400">
                  A creative and aspiring Full Stack Developer with a passion for UI/UX design, web development, and machine learning.
                </p>
              </div>
            </div>

            {/* Right Description */}
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 border-t sm:border-t-0 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Whether it's designing sleek front-end interfaces or building powerful back-end solutions, I strive to deliver high-performance projects using the latest and most efficient tools in the industry.
                <br /><br />
                From interactive web designs to visually compelling templates, I focus on making every project not only work flawlessly but also look exceptional.
              </p>
              <a
                href="https://drive.google.com/file/d/1lJeNM2voP_L3BtEqr9XkGYjbi5D215Gq/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 inline-flex items-center"
              >
                Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default About;
