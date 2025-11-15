import React from "react";
import Image from "next/image";
export default function ContactHero() {
  return (
    <section className="relative h-screen bg-[#201D1F] overflow-hidden">
      {/* Background Image */}
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
          <span className="block">Contact</span>
          <span className="block">Us.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg  md:text-xl lg:text-2xl text-white max-w-2xl mb-10">
          We&apos;re always up for a conversation to see how we can help. Choose
          a city below to get in touch with your local team of experts.
        </p>
      </div>
    </section>
  );
}
