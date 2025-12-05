// src/components/About.jsx
import React from 'react';
import women from '../assets/women.png';
import logo from '../assets/logo.png';
import backgroundImg from '../assets/c6.png';

const About = () => {
  return (
    <section id="about" className="relative bg-black text-yellow-500 overflow-hidden font-sans">
 

      {/* Main Content */}
      <div className="py-16 px-6 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center font-sans">
          <div className="order-2 md:order-1">
            <img src={women} alt="Bridal Elegance" className="w-full rounded-xl shadow-2xl object-cover border-2 border-yellow-600/40" />
          </div>

          <div className="order-1 md:order-2 text-yellow-500 leading-relaxed space-y-6 text-base md:text-lg font-sans">
            <p>Shri Kanteshwara Jewels is a unique concept in jewellery where your Dream is converted to Design and Delivered with Best Finish, Best Quality at Best rate.</p>
            <p>You will work with our in-house designers to bring out your dream design and we will deliver it within the committed timeline. As the Shri Kanteshwara team starts everything from scratch, you will have the option to choose Diamond quality, Stone colors, 18K or 22K Gold which can impact the value of Jewellery.</p>
            <p>In most cases, wedding jewellery is used once and kept in lockers afterwards. We make sure that your one jewellery can be used as multiple items afterwards. We believe that Wedding Jewellery should be able to convert into daily-use jewellery as well.</p>
            <p>One Diamond necklace can become a pendant or bracelet. One Gold belt can become a small choker and Haara. This way you will be able to make your daily-wear jewellery from your wedding jewellery.</p>
            <p className="font-medium text-yellow-400 text-lg">If you want to experience exclusive, customized services from trained designers and specialized karigars, you must visit Shri Kanteshwara before finalizing your wedding jewellery.</p>

            <div className="mt-12 pt-8 border-t-2 border-yellow-600/30">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-widest text-yellow-400 font-sans">
                We deliver Unique Jewellery for Unique You.
              </p>
            </div>
          </div>
        </div>
      </div>
            {/* Hero Banner */}
     <div 
  className="relative w-full py-16 md:py-20 bg-cover bg-center font-sans"
  style={{ backgroundImage: `url(${backgroundImg})` }}
>
  {/* Dark overlay for depth */}
  <div className="absolute inset-0 bg-black/80"></div>

  <div className="relative flex justify-center items-center px-6">
    <div className="w-full max-w-4xl lg:max-w-5xl 
                    bg-black/95 border-4 border-yellow-600 
                    rounded-xl shadow-2xl 
                    p-10 md:p-12 
                    text-center backdrop-blur-sm">
      
      {/* Logo */}
      <img 
        src={logo} 
        alt="Shri Kanteshwara Jewels Logo" 
        className="w-32 md:w-40 lg:w-48 mx-auto mb-8 drop-shadow-2xl"
      />
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                     font-bold text-white tracking-widest uppercase 
                     drop-shadow-lg">
        SHRI KANTESHWARA JEWELS
      </h1>
      
      {/* Tagline */}
      <p className="text-yellow-400 text-lg md:text-xl lg:text-2xl xl:text-3xl 
                    font-semibold tracking-widest mt-6 uppercase 
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