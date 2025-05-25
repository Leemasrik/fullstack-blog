import React from 'react';
import monn_img from '../assets/monn_img.png';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* Logo + Title */}
        <a className="flex items-center cursor-pointer group">
         <img
  src={monn_img}
  alt="Moon Logo"
  className="w-10 h-10 mr-2 transform transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_white]"
/>

          <span
            className="text-xl font-semibold transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3 w-10 h-10 mr-2 transform transition-transform duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_white]
"
          >
            Moon
          </span>
        </a>

        {/* Nav Links with hover animation */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
           <a
  href="#animation"
  className="hover:-translate-y-1 hover:rotate-2 transition-transform duration-300 inline-block hover-hollow hover:text-[green]"
>
  Home
</a>
          </li>
          <li>
            <a href="#extra" className="hover:-translate-y-1 hover:rotate-2 transition-transform duration-300 inline-block hover-hollow">
  Projects
</a>
          </li>
          <li>
           <a href="#about" className="hover:-translate-y-1 hover:rotate-2 transition-transform duration-300 inline-block hover-hollow">
  About us
</a>
          </li>
          <li>
         <a href="#contacts" className="hover:-translate-y-1 hover:rotate-2 transition-transform duration-300 inline-block hover-hollow">
  Contact us
</a>
          </li>
        </ul>

      </div>
    </header>
  );
};

export default Navbar;
