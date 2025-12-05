// src/components/Contact.jsx
import React from "react";
import logo from "../assets/logo.png";
import { Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const phoneNumber = "9845662011";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=Hello%20Shri%20Kanteshwara%20Jewels%2C%20I%20would%20like%20to%20know%20more%20about%20your%20custom%20jewellery%20services.`;

  return (
    <section className="relative py-24 bg-black text-yellow-500 overflow-hidden font-sans">
      {/* Subtle golden gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-widest text-white mb-4">
            VISIT US
          </h2>
          <p className="text-yellow-400 text-xl md:text-2xl font-medium">
            Your Dream Jewellery Awaits
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Logo + Address */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <img
                src={logo}
                alt="Shri Kanteshwara Jewels Logo"
                className="w-48 md:w-64 drop-shadow-2xl"
              />
            </div>

            <div className="space-y-6 text-lg md:text-xl">
              <div className="flex items-start justify-center lg:justify-start gap-4">
                <MapPin size={28} className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-200 leading-relaxed max-w-md">
                  <span className="font-bold text-white">Address:</span><br />
                  No. 353/2, 14th Cross, 5th Main,<br />
                  Near Star Market, ISRO Layout,<br />
                  Bangalore – 560078
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Clock size={28} className="text-yellow-500" />
                <p className="text-gray-200">
                  <span className="font-bold text-white">Open:</span> Mon–Sun, 10:30 AM – 8:30 PM
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="pt-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-5 px-10 rounded-full shadow-2xl transition-all transform hover:scale-105 text-lg"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl font-bold">WA</span>
                </div>
                Chat on WhatsApp: +91 {phoneNumber}
              </a>
            </div>
          </div>

          {/* Right: Google Maps Embed (Optional but beautiful) */}
          <div className="w-full h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-600/30">
            <iframe
              title="Shri Kanteshwara Jewels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.653299967889!2d77.5625!3d12.945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzQyLjAiTiA3N8KwMzMnNDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <p className="text-3xl md:text-5xl font-bold text-yellow-400 tracking-widest">
            We Deliver Unique Jewellery for Unique You
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;