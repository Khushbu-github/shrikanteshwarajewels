// src/components/Gallery.jsx
import React from "react";

// Import all images from src/assets/ (G1.jpg → G29.jpg)
import G01 from "../assets/G1.jpg";
import G02 from "../assets/G2.jpg";
import G03 from "../assets/G3.jpg";
import G04 from "../assets/G4.jpg";
import G05 from "../assets/G5.jpg";
import G06 from "../assets/G6.jpg";
import G07 from "../assets/G7.jpg";
import G08 from "../assets/G8.jpg";

import G10 from "../assets/G10.jpg";
import G11 from "../assets/G11.jpg";
import G12 from "../assets/G12.jpg";
import G13 from "../assets/G13.jpg";
import G14 from "../assets/G14.jpg";
import G15 from "../assets/G15.jpg";
import G16 from "../assets/G16.jpg";
import G17 from "../assets/G17.jpg";
import G18 from "../assets/G18.jpg";
import G19 from "../assets/G19.jpg";
import G20 from "../assets/G20.jpg";
import G21 from "../assets/G21.jpg";
import G22 from "../assets/G22.jpg";
import G23 from "../assets/G23.jpg";
import G24 from "../assets/G24.jpg";
import G25 from "../assets/G25.jpg";
import G26 from "../assets/G26.jpg";
import G27 from "../assets/G27.jpg";
import G28 from "../assets/G28.jpg";


const galleryImages = [
  G01, G02, G03, G04, G05, G06, G07, G08, G10,
  G11, G12, G13, G14, G15, G16, G17, G18, G19, G20,
  G21, G22, G23, G24, G25, G26, G27, G28
];

const Gallery = () => {
  return (
    <section className="py-20 px-6 bg-black font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-widest mb-4">
            OUR GALLERY
          </h2>
          <p className="text-yellow-500 text-xl md:text-2xl font-medium tracking-wider">
            A Glimpse of Timeless Elegance & Craftsmanship
          </p>
        </div>

        {/* Creative Masonry Grid with Varied Heights */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => {
            // Create varied heights for visual interest
            const heightVariants = [
              'h-48 md:h-64',
              'h-64 md:h-80',
              'h-56 md:h-72',
              'h-60 md:h-96',
              'h-52 md:h-68'
            ];
            const randomHeight = heightVariants[index % heightVariants.length];
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg shadow-xl border border-yellow-600/30 
                           transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/40
                           break-inside-avoid mb-4 ${randomHeight}`}
              >
                <img
                  src={image}
                  alt={`Shri Kanteshwara Jewels Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-yellow-400 text-lg md:text-xl italic font-medium">
            Visit our showroom to experience these masterpieces in person
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;