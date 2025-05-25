import React, { useEffect, useState } from 'react';
import monn_img from '../assets/monn_img.png';
import star_img from '../assets/star3.webp';

const Animation = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [stars, setStars] = useState([]);
  const [message, setMessage] = useState('');
  const [animateMoon, setAnimateMoon] = useState(false);

  useEffect(() => {
    setAnimateMoon(true);

    const orbitronLink = document.createElement('link');
    orbitronLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
    orbitronLink.rel = 'stylesheet';

    const bungeeLink = document.createElement('link');
    bungeeLink.href = 'https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap';
    bungeeLink.rel = 'stylesheet';

    document.head.appendChild(orbitronLink);
    document.head.appendChild(bungeeLink);

    return () => {
      document.head.removeChild(orbitronLink);
      document.head.removeChild(bungeeLink);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isFollowing) return;

    const x = e.clientX;
    const y = e.clientY;
    setPosition({ x, y });

    const width = window.innerWidth;
    const height = window.innerHeight;

    if (x < width / 2 && y < height / 2) {
      setMessage("You're in the 🌌 top-left!");
    } else if (x >= width / 2 && y < height / 2) {
      setMessage('Welcome to the ✨ top-right!');
    } else if (x < width / 2 && y >= height / 2) {
      setMessage('Hello from 🌙 bottom-left!');
    } else {
      setMessage('You reached the 🌠 bottom-right!');
    }
  };

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'moon') return;

    const newStar = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };
    setStars((prevStars) => [...prevStars, newStar]);
  };

  return (
    <div
      className="h-screen w-screen bg-gray-950 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onClick={handleBackgroundClick}
    >
      {/* Centered Text */}
     
      {/* Show message only when moon is following */}
      {isFollowing && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-2xl font-medium z-30 transition-all duration-200 mt-15">
          {message}
        </div>
      )}

      {/* Text above the moon with custom fonts and 3D/hollow effects */}
     <div
  className="absolute pointer-events-none select-none z-30 flex gap-2 items-center"
  style={{
    top: position.y - 80,
    left: position.x,
    transform: 'translateX(-50%)',
    whiteSpace: 'nowrap',
  }}
>
  {/* Dark Vibrant Bluish Text with Glow */}
  <span
    className="text-[35px] font-bold"
    style={{
      fontFamily: "'Orbitron', sans-serif",
      color: '#2b6cb0', // Deep vibrant blue
      textShadow: '2px 2px 8px rgba(43, 108, 176, 0.8)', // Soft bluish glow
    }}
  >
    ✨Magical
  </span>

  {/* Hollow Yellow Moon Text */}
  <span
    className="text-yellow-400 text-[40px] drop-shadow-[1px_1px_0px_#333] font-bold"
    style={{
      fontFamily: "'Bungee Inline', cursive",
    }}
  >
    Moon✨
  </span>
</div>

      {/* Moon Image */}
      <img
        id="moon"
        src={monn_img}
        alt="moon"
        className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 absolute transition-all duration-200 z-20 ${
          !isFollowing ? 'animate-moonPop' : ''
        }`}
        style={{
          top: `${position.y - 40}px`,
          left: `${position.x - 40}px`,
          cursor: 'pointer',
        }}
        onClick={toggleFollow}
      />
      {/* Click Hint beside the moon */}
{!isFollowing && (
  <div
    className="absolute text-white text-sm sm:text-base font-medium animate-bounce z-30"
    style={{
      top: `${position.y - 10}px`,
      left: `${position.x + 60}px`, // Beside the moon (right side)
      whiteSpace: 'nowrap',
      textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    }}
  >
    Click me!
  </div>
)}


      {/* Instructions */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-sm z-30">
        <p>Click wherever you want to have stars</p>
      </div>

      {/* Stars */}
      {stars.map((star) => (
        <img
          key={star.id}
          src={star_img}
          alt="star"
          className="w-10 h-20 absolute pointer-events-none z-0"
          style={{
            top: `${star.y}px`,
            left: `${star.x}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Animation;
