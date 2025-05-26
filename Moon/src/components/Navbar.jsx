import React, { useState } from 'react';
import monn_img from '../assets/monn_img.png';
import { Menu, X } from 'lucide-react'; // Install lucide-react icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <span className="text-xl font-semibold transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
            Moon
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <a
              href="#animation"
              className="hover:-translate-y-1 hover:rotate-2 transition-transform duration-300 inline-block hover:text-green-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#extra"
              className="hover:-translate-y-1 hover:rotate-2 transition-transform duration-300 inline-block hover:text-green-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:-translate-y-1 hover:rotate-2 transition-transform duration-300 inline-block hover:text-green-400"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="hover:-translate-y-1 hover:rotate-2 transition-transform duration-300 inline-block hover:text-green-400"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white/10 text-white space-y-4 backdrop-blur-lg border-t border-white/30">
          <a href="#animation" className="block hover:text-green-400">Home</a>
          <a href="#extra" className="block hover:text-green-400">Projects</a>
          <a href="#about" className="block hover:text-green-400">About us</a>
          <a href="#contacts" className="block hover:text-green-400">Contact us</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
