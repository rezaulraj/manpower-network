import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section className="py-20 bg-[#201D1F]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 inline-block border-b-4 border-yellow-400 pb-2">
            Work with Us.
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            We provide the talent you need to excel. Let’s explore how we can
            work together to make it happen.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Staffing Card */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/work1.png"
              alt="Staffing"
              width={800}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            <Link
              href="/industries"
              className="absolute bottom-6 right-6 bg-sky-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-sky-500 transition">
              Staffing <FiArrowRight />
            </Link>
          </div>

          {/* Outsourcing Card */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/work2.png"
              alt="Outsourcing"
              width={800}
              height={500}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            <Link
              href="/industries"
              className="absolute bottom-6 right-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-500 transition">
              Outsourcing <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
