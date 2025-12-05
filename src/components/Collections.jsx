// src/components/Collections.jsx
import React from 'react';
import J1 from '../assets/J1.jpg';
import J2 from '../assets/J2.jpg';
import J3 from '../assets/J3.jpg';
import J4 from '../assets/J4.jpg';
import J5 from '../assets/J5.jpg';
import J6 from '../assets/J6.jpg';
import J7 from '../assets/J7.jpg';
import J8 from '../assets/J8.jpg';

const collections = [
  { id: 1, img: J1 },
  { id: 2, img: J2 },
  { id: 3, img: J3},
  { id: 4, img: J4},
  { id: 5, img: J5},
  { id: 6, img: J6},
  { id: 7, img: J7},
  { id: 8, img: J8},
];

const Collections = () => {
  return (
    <section className="py-20 px-6 bg-black text-yellow-500 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-widest font-sans">
          OUR COLLECTIONS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-2xl border border-yellow-600/30 
                         transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/30"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6 text-center w-full">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wider text-yellow-400 font-sans">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-yellow-400 text-lg md:text-xl font-medium italic font-sans">
            Every piece tells a story. Yours starts here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Collections;