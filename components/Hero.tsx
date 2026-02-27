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
  const activeIndicatorColors = ['bg-[#0F3A62]', 'bg-[#1E4E89]', 'bg-[#2A6FA8]'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative w-full h-[320px] sm:h-[540px] overflow-hidden">
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
                className="object-contain object-top 2xl:object-cover 2xl:object-top"
                sizes="100vw"
                priority={idx === 0}
              />
            </div>
          ))}
          
          {/* Slider Indicators */}
          <div className="absolute bottom-[24%] sm:bottom-[16%] lg:bottom-[14%] left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImage(idx)}
                aria-label={`Show slide ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentImage
                    ? `${activeIndicatorColors[idx]} w-3.5 h-3.5 shadow-md shadow-black/20`
                    : 'w-2.5 h-2.5 bg-white/75 border border-[#0F3A62]/25 hover:bg-white'
                }`}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Hero;

