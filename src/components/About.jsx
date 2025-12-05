// src/components/About.jsx
import React from 'react';
import women from '../assets/women.png';
import logo from '../assets/logo.png';
import backgroundImg from '../assets/c6.png';

const About = () => {
  return (
    <section id="about" className="relative bg-black text-yellow-500 overflow-hidden font-sans">
      {/* Main Content */}
      <div className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center font-sans">
          
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <img 
              src={women} 
              alt="Bridal Elegance" 
              className="w-full rounded-lg md:rounded-xl shadow-2xl object-cover border-2 border-yellow-600/40 
                         max-h-[400px] md:max-h-[500px] lg:max-h-[600px]" 
            />
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 text-yellow-500 leading-relaxed space-y-4 md:space-y-6 
                          text-sm sm:text-base md:text-lg font-sans px-2 sm:px-0">
            <p>
              Shri Kanteshwara Jewels is a unique concept in jewellery where your Dream is converted to Design and Delivered with Best Finish, Best Quality at Best rate.
            </p>
            <p>
              You will work with our in-house designers to bring out your dream design and we will deliver it within the committed timeline. As the Shri Kanteshwara team starts everything from scratch, you will have the option to choose Diamond quality, Stone colors, 18K or 22K Gold which can impact the value of Jewellery.
            </p>
            <p>
              In most cases, wedding jewellery is used once and kept in lockers afterwards. We make sure that your one jewellery can be used as multiple items afterwards. We believe that Wedding Jewellery should be able to convert into daily-use jewellery as well.
            </p>
            <p>
              One Diamond necklace can become a pendant or bracelet. One Gold belt can become a small choker and Haara. This way you will be able to make your daily-wear jewellery from your wedding jewellery.
            </p>
            <p className="font-medium text-yellow-400 text-base sm:text-lg md:text-xl">
              If you want to experience exclusive, customized services from trained designers and specialized karigars, you must visit Shri Kanteshwara before finalizing your wedding jewellery.
            </p>

            {/* Bottom Banner */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t-2 border-yellow-600/30">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center 
                           tracking-wide md:tracking-widest text-yellow-400 font-sans leading-tight">
                We deliver Unique Jewellery for Unique You.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <div 
        className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center font-sans"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 
                          bg-black/95 border-2 sm:border-3 md:border-4 border-yellow-600 
                          rounded-lg md:rounded-xl shadow-2xl 
                          p-6 sm:p-8 md:p-10 lg:p-12 
                          text-center backdrop-blur-sm">
            
            {/* Logo */}
            <img 
              src={logo} 
              alt="Shri Kanteshwara Jewels Logo" 
              className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-48 mx-auto mb-6 sm:mb-8 drop-shadow-2xl"
            />
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
                           font-bold text-white tracking-wider md:tracking-widest uppercase 
                           drop-shadow-lg leading-tight mb-4 sm:mb-6">
              SHRI KANTESHWARA JEWELS
            </h1>
            
            {/* Tagline */}
            <p className="text-yellow-400 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 
                          font-semibold tracking-wider md:tracking-widest uppercase 
                          drop-shadow-md">
              Bold Look • Better Design • Best Rates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;