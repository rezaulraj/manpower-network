import React from "react";
import Image from "next/image";
import Link from "next/link";
import { countryData } from "@/lib/data";

export default function PartnerMap() {
  return (
    <section className="relative min-h-screen bg-[#201D1F] overflow-hidden py-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/map2.svg"
          alt="Map Background"
          fill
          className="object-cover opacity-70"
        />
      </div>

      <div className="container max-w-7xl mx-auto flex flex-col justify-center relative z-10 px-4 min-h-[calc(100vh-5rem)]">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white my-6 leading-tight font-Inter">
          <span className="block">Ready to join? Apply </span>
          <span className="block">for a job today!</span>
        </h1>

        {/* Country Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8">
          {countryData.map((country) => (
            <Link
              key={country.id}
              href={country.href}
              className="group relative max-w-[400px] max-h-[300px] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-80">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={country.bgImage}
                  alt={`${country.city} background`}
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Overlay Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-8">
                <h3 className="text-2xl font-bold mb-2">{country.city}</h3>
                <p className="text-lg">{country.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
