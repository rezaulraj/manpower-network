import React from "react";
import Link from "next/link";
import Image from "next/image";
import { countryData } from "@/lib/data";

export default function ContactCountry() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {countryData.map((country) => (
            <Link
              key={country.id}
              href={country.href}
              className="group relative overflow-hidden  rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-96">
              {/* Background Image */}
              <div className="absolute inset-0 ">
                <Image
                  src={country.bgImage}
                  alt={`${country.city} background`}
                  fill
                  className="object-cover "
                  quality={100}
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30 bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-8">
                <h3 className="text-3xl font-bold mb-2">{country.city}</h3>
                <p className="text-xl mb-6">{country.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
