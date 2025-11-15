"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// import AdsHeadline from "@/common/AdsHeadline";
// import SubscribeSection from "@/common/SubscribeSection";

export default function AchieveMore() {
  // const logos = [
  //   "/logos/luminor.png",
  //   "/logos/pixelforce.png",
  //   "/logos/vontobel.png",
  //   "/logos/raiffeisen.png",
  //   "/logos/mach.png",
  //   "/logos/atos.png",
  //   "/logos/deloitte.png",
  //   "/logos/accenture.png",
  // ];
  const [activeTab, setActiveTab] = useState("Our Mission");

  const content: Record<
    string,
    { image: string; items: { title: string; description: string }[] }
  > = {
    "Our Mission": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Empowering Success Through Connections",
          description:
            " We bridge the gap between talent and opportunity, helping businesses grow and professionals achieve their career goals.",
        },
        {
          title: "Connecting Talent, Creating Opportunities",
          description:
            "Our focus is simply to  match the right people with the right roles through tailored recruitment solutions.",
        },
        {
          title: "Committed to Excellence",
          description:
            " Passionate about building meaningful connections, we deliver innovative and effective staffing services that drive results.",
        },
        {
          title: "Building Stronger Teams, Shaping Bright Careers",
          description:
            " We help organizations thrive and individuals succeed by providing high-quality staffing solutions that promote growth.",
        },
      ],
    },
    "Our Vision": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Vision Statement 1",
          description:
            " We envision a future where businesses and professionals flourish through strong partnerships, innovative solutions, and shared success.",
        },
        {
          title: "Vision Statement 2",
          description:
            " Our vision is to be a global leader in recruitment, recognized for delivering value-driven results and connecting exceptional talent with opportunity.",
        },
      ],
    },
    "Our Solution": {
      image: "/images/moretab.png",
      items: [
        {
          title: "Customized Talent Solutions",
          description:
            " We take the time to understand your business needs and deliver tailored staffing strategies that create long-term success.",
        },
        {
          title: "Efficient, Results-Driven Recruitment",
          description:
            "Through proven methods and a personalized approach, we streamline the hiring process to quickly connect you with the right talent.",
        },
      ],
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden ">
                <Image
                  width={500}
                  height={500}
                  src={content[activeTab].image}
                  alt={activeTab}
                  className="w-full h-full py-4  object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side - Tabs & Content */}
          <div className="w-full lg:w-1/2">
            {/* Tabs */}
            <div className=" space-x-4 space-y-4">
              {Object.keys(content).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative font-Inter font-semibold px-4 py-2 text-[20px] transition-colors ${
                    activeTab === tab
                      ? "text-primary   font-semibold"
                      : "text-secendary cursor-pointer hover:text-primary"
                  }`}>
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="underline"
                      className="absolute flex justify-center items-center bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6">
                {content[activeTab].items.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-[22px] font-Inter font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-text font-normal font-Inter text-[16px] mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-10">
          {/* <SubscribeSection
            title="Transform Your Workforce  Transform Your Future"
            description="Ready to take the next step? Whether you're looking to build your dream team or find the perfect career."
            buttonText="SUBSCRIBE"
            placeholder="Enter your email"
            bgColorClass="bg-primary"
            image="/images/patner.png"
            onSubmit={(email) => {
              console.log("Subscribed:", email);
              // Call API or handle logic
            }}
          /> */}
        </div>
      </div>
      {/* <div className="mt-5">
        <AdsHeadline
          title="Trusted by Businesses & Professionals Companies"
          logos={doubledLogos}
          speed={25}
          direction="left"
          logoHeight={200}
          logoWidth={200}
          pauseOnHover
        />
      </div> */}
    </section>
  );
}
