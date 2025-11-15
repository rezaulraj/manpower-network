"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/nurse.jpg",
  "/images/hotel-staff.jpg",
  "/images/supershop.jpg",
  "/images/construction.jpg",
  "/images/rajmistry.jpg",
  "/images/workeriron.jpg",
];

export default function OurService() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#201D1F]">
      <div className="container max-w-7xl mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-Inter md:text-5xl font-bold text-white mb-4 inline-block border-b-4 border-primary pb-2">
            Our Services
          </h2>
          <p className="text-[32px] font-Inter font-bold md:text-xl text-white/80 max-w-2xl mx-auto">
            We connect businesses with dependable, skilled professionals who
            keep operations running smoothly.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h4 className="text-[32px] font-Inter font-bold text-white mb-4">
              Talent That Drives Success
            </h4>
            <p className="text-white font-Inter font-normal mb-6">
              From customer service to operations, we specialize in sourcing and
              placing the people who make an impact. Whether you need managers,
              support staff, or specialized workers, we help you build a strong
              and dedicated workforce where it matters most.
            </p>
          </div>

          {/* Right Image Slider with Framer Motion */}
          <div className="relative overflow-hidden rounded-xl shadow-xl h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={images[currentImage]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full">
                <Image
                  src={images[currentImage]}
                  alt="Frontline workers"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute bottom-0 bg-black/40 text-white p-4 w-full text-center text-lg font-semibold">
                  Frontline Workforce — {currentImage + 1} / {images.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
