import React, { useEffect } from 'react';
import moonImage from '../assets/moon.jpg';

const MoonTrail = () => {
  useEffect(() => {
    const container = document.getElementById('about-trail');
    if (!container) return;

    const handleMouseMove = (e) => {
      // Ignore if the cursor is inside the cube container
      const cubeContainer = document.getElementById('cube-container');
      if (cubeContainer && cubeContainer.contains(e.target)) return;

      const moon = document.createElement('img');
      moon.src = moonImage;
      moon.style.position = 'absolute';
      moon.style.width = '20px';
      moon.style.height = '20px';
      moon.style.left = `${e.pageX}px`;
      moon.style.top = `${e.pageY}px`;
      moon.style.pointerEvents = 'none';
      moon.style.zIndex = '0';
      moon.style.transition = 'opacity 1s ease-out';
      moon.style.opacity = '1';

      document.body.appendChild(moon);

      setTimeout(() => {
        moon.style.opacity = '0';
        setTimeout(() => document.body.removeChild(moon), 1000);
      }, 50);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};

export default MoonTrail;
