import React from 'react';
import { motion } from 'framer-motion';
import ecommerce from '../assets/ecommerce.webp';
import uiux from '../assets/uiux.webp';
import ml from '../assets/ml.jpg';
import gallaxy from '../assets/gallaxy.webp';

const cardVariants = {
  hidden: { scale: 0.2, opacity: 0, rotate: -30 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 3,         // slower
      ease: 'easeOut',
      type: 'spring',
      stiffness: 60,
    },
  },
};

const Testimonals = () => {
  const cards = [
    {
      img: ecommerce,
      link: 'https://my-shopty.vercel.app',
      desc: "We’re passionate about bringing you the best products at great prices. Founded in [1990], we focus on quality, customer satisfaction, and a seamless shopping experience. Your happiness is our priority!",
      title: 'Frontend Development',
      tech: 'React js',
    },
   
    {
      img: ml,
      link:'https://movierecommender-kwwc4tizqknukqb7psxupa.streamlit.app/',
      desc: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk...",
      title: 'Machine Learning',
      tech: 'Python',
    },
     {
      img: uiux,
      link:'https://www.figma.com/design/ia8z2iQul7wUTCepeis5bT/ISIC-Medical?node-id=0-1&t=naEBlsXS0DxItP8t-1',
      desc: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk...",
      title: 'UI/UX Design',
      tech: 'Figma',
    },
  ];

  return (
   <section
  id="projects"
  className="relative text-gray-400 body-font bg-cover bg-center"
  style={{ backgroundImage: `url(${gallaxy})` }}
>
  <div className="absolute inset-0 bg-black/70 z-0"></div>

  <div className="relative z-10 container px-5 py-24 mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }} // triggers every time section comes into view
            >
              <div className="h-full text-center h-full text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:z-10">
                {card.link ? (
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                      src={card.img}
                    />
                  </a>
                ) : (
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                    src={card.img}
                  />
                )}
                <p className="leading-relaxed">{card.desc}</p>
                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">{card.title}</h2>
                <p className="text-gray-500">{card.tech}</p>
              </div>
            </motion.div>
          ))}
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
