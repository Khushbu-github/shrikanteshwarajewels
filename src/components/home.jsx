import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Images from src/assets/
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: c1, text: "UNIQUE JEWELRY FOR UNIQUE YOU", textPosition: "right" },
    { image: c2, text: "DREAM DESTINATION FOR WEDDING JEWELLERY SHOPPING", textPosition: "left" },
    { image: c3, text: "WHY SETTLE FOR LIMITED OPTIONS? CREATE YOUR OWN DESIGNS", textPosition: "left" },
    { image: c4, text: "CUSTOMIZED DESIGNS AT BEST QUALITY, BEST FINISH AND BEST RATE", textPosition: "left" },
    { image: c5, text: "EXPERIENCE LUXURY AND ELEGANCE", textPosition: "left" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/1920x1080/111111/FFD700?text=IMAGE+MISSING";
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* TEXT — Slightly Smaller, More Elegant */}
          <div className="absolute inset-0 flex items-center z-10">
            <div
              className={`w-full px-10 md:px-16 lg:px-24 ${
                slide.textPosition === "right" ? "text-right" : "text-left"
              }`}
            >
              <h2
                className={`inline-block max-w-5xl 
                  text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl   /* Reduced */
                  font-light text-yellow-500 leading-tight tracking-widest
                  ${slide.textPosition === "right" ? "ml-auto" : "mr-auto"}`}
                style={{
                  textShadow: "3px 3px 10px rgba(0,0,0,0.8)",
                }}
              >
                {slide.text}
              </h2>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all"
      >
        <ChevronRight size={40} />
      </button>

   
    </div>
  );
};

export default Home;