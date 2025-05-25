import React, { useState } from 'react';
import gallaxy from '../assets/gallaxy.webp';
import gallaxy2 from '../assets/gallaxy2.webp';
import gallaxy3 from '../assets/gallaxy3.jpg';

const Contacts = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [hoveredField, setHoveredField] = useState(null); // track hover

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message };
    try {
      const response = await fetch('http://localhost:8000/contact/send/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  // Dynamically change section background based on hovered field
 const getBackgroundColor = () => {
  switch (hoveredField) {
    case 'name':
      return {
        backgroundImage: `url(${gallaxy})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    case 'email':
      return {
        backgroundImage: `url(${gallaxy2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    case 'message':
      return {
        backgroundImage: `url(${gallaxy3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    default:
      return {
        backgroundColor: '#1a202c', // equivalent to Tailwind's bg-gray-900
      };
  }
};


  return (
    <section  style={getBackgroundColor()} className={`text-gray-400  transition-colors duration-300 body-font relative`}>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Left side - Map */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=hyderabad&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">15-144, chirala, Bapatla</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a className="text-green-400 leading-relaxed">leemasrikarna@email.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">9700591592</p>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5">Let me know your thoughts or questions.</p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onMouseEnter={() => setHoveredField('name')}
                onMouseLeave={() => setHoveredField(null)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onMouseEnter={() => setHoveredField('email')}
                onMouseLeave={() => setHoveredField(null)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onMouseEnter={() => setHoveredField('message')}
                onMouseLeave={() => setHoveredField(null)}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Send
            </button>
          </form>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">
            We’ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
