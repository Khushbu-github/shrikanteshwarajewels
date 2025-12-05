// src/components/Testimonials.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "RAJA ARUGADASS",
    location: "Bangalore",
    text: "I visited on 17/09/2017 to purchase the gold. Having new wide range collection we able to shortlist the gold chain within 15mins. Good customer service and very helpful from staff of Shri Kanteshwara Jewels. I recommend each and every one to visit.",
  },
  {
    name: "PRIYANKA SHETTY",
    location: "Mysore",
    text: "Best place for customized wedding jewellery! We designed our entire set from scratch — the team was patient, creative and delivered exactly on time with perfect finish. Highly recommended for brides who want something unique.",
  },
  {
    name: "DR. ANITHA RAJENDRAN",
    location: "Coimbatore",
    text: "Excellent craftsmanship and transparency in pricing. They converted my old gold into a stunning modern necklace that I wear daily now. The multi-use design concept is brilliant!",
  },
  {
    name: "VIKRAM SINGH THAKUR",
    location: "Hubli",
    text: "Visited for my daughter’s wedding jewellery. From design discussion to final delivery — everything was smooth and professional. The quality of diamonds and 22K gold is outstanding. Worth every rupee.",
  },
  {
    name: "SMT. LAXMI PATIL",
    location: "Belgaum",
    text: "I never thought I could get such heavy traditional jewellery converted into lightweight daily wear. One necklace became pendant, earrings and bracelet! Truly innovative and customer-focused approach.",
  },
  {
    name: "MOHAMMED ASIF KHAN",
    location: "Davangere",
    text: "Best rates in town with no compromise on quality. The team guided us at every step — diamond selection, design approval, making charges — everything transparent. Will come back again!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = React.useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden font-sans">
      {/* Background subtle overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-16 tracking-widest">
          OUR HAPPY CLIENTS
        </h2>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-10 md:p-14 shadow-2xl">
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 italic mb-8">
                "{testimonials[current].text}"
              </p>

              {/* Client Name & Location */}
              <div className="mt-10">
               
                <h3 className="text-2xl font-bold text-yellow-500 tracking-wider">
                  {testimonials[current].name}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-yellow-600/50 text-yellow-500 hover:bg-yellow-500/10 transition-all backdrop-blur-sm"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-yellow-600/50 text-yellow-500 hover:bg-yellow-500/10 transition-all backdrop-blur-sm"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots Indicator */}
       
      </div>
    </section>
  );
};

export default Testimonials;