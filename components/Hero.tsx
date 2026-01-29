"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/Navtelecom/hero_1.png',
    '/Navtelecom/hero_2.png',
    '/Navtelecom/hero_3.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative pt-20 overflow-hidden bg-white">
      <div className="w-full relative z-10">
        <div className="relative w-full h-[500px] overflow-hidden shadow-2xl">
          {images.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={src}
                alt={`Navtelecom Hero ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
          
          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentImage ? 'bg-brand-primary w-16' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

