"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function CareersHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative h-screen bg-[#201D1F] overflow-hidden pt-10">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/aboutbanner.jpg"
          alt="Career Hero"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 bg-gradient-to-l from-[#201D1F] via-[#201D1F]/80 to-transparent"
      />

      <div className="container max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-end w-full text-end px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 max-w-3xl"
        >
          <motion.div variants={textVariants} className="space-y-4">
            <h1 className="text-5xl font-Inter md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <motion.span variants={itemVariants} className="block">
                Build a Career
              </motion.span>
              <motion.span variants={itemVariants} className="block">
                That
                <motion.span
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-gradient-to-r from-white via-[#44B6DA] to-white bg-[length:200%_auto] bg-clip-text text-transparent"
                >
                  Matters
                </motion.span>
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={textVariants}
            className="text-lg font-Inter md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed"
          >
            Join a team that values ambition, innovation, and personal growth.
            At our core, we are not just offering jobs — we are shaping
            meaningful careers that make a difference.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-end items-center"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/careers#positions"
                className="bg-white font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-xl flex items-center gap-3 group"
              >
                Explore Vacancies
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/careers/future-positions"
                className="bg-transparent font-Inter font-bold text-white border-2 border-white px-8 py-4 rounded-md text-lg hover:bg-white hover:text-[#201D1F] transition-all duration-300 backdrop-blur-sm flex items-center gap-3 group"
              >
                Apply for Future Position
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-lg"
                >
                  ✨
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#201D1F] to-transparent z-5" />
    </section>
  );
}
