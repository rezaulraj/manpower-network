import React from "react";
import Image from "next/image";

export default function IndustriesHero() {
  return (
    <section className="py-20 relative h-screen bg-[#201D1F] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contactbanner.jpg"
          alt="Hero"
          fill
          className="object-cover opacity-70"
        />
      </div>

      {/* Content Overlay */}
      <div className="container max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-end w-full text-end px-4">
        {/* Main Heading */}
        <h1 className="text-5xl font-sans md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          <span className="block">Industries</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg font-normal font-Inter md:text-xl lg:text-2xl text-white max-w-2xl mb-10">
          We provide innovative, tailored solutions across a wide range of
          industries. From healthcare and finance to technology and retail, our
          expertise helps businesses grow, adapt, and stay ahead in an
          ever-evolving market.
        </p>
      </div>
    </section>
  );
}
