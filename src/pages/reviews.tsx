"use client";
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import { motion } from "framer-motion";

// Generate 30 dummy reviews
const reviews = [
  {
    id: 1,
    text: "Excellent recruitment process. Fast, clear, and professional communication.",
    author: "Employer – Amazon",
  },
  {
    id: 2,
    text: "They helped me land a warehouse role quickly. Super supportive!",
    author: "Non-Desk Worker – Warehouse Staff",
  },
  {
    id: 3,
    text: "Very transparent throughout. Got quality candidates on time.",
    author: "Employer – DHL",
  },
  {
    id: 4,
    text: "I was hired as a forklift operator within a week. Great experience!",
    author: "Non-Desk Worker – Forklift Operator",
  },
  {
    id: 5,
    text: "Highly recommend for seasonal hiring. They understand the industry well.",
    author: "Employer – Logistics Manager",
  },
  {
    id: 6,
    text: "Friendly team. Helped me update my CV and ace the interview.",
    author: "Non-Desk Worker – Warehouse Assistant",
  },
  {
    id: 7,
    text: "Our warehouse staffing needs were met perfectly. Thank you!",
    author: "Employer – Retail Chain",
  },
  {
    id: 8,
    text: "This was my first time working in logistics. They guided me well.",
    author: "Non-Desk Worker – Loader",
  },
  {
    id: 9,
    text: "Quick placements, solid understanding of warehouse roles.",
    author: "Employer – Fulfillment Center",
  },
  {
    id: 10,
    text: "Very professional agency. Helped me with paperwork and training.",
    author: "Non-Desk Worker – Picker/Packer",
  },
  {
    id: 11,
    text: "They truly care about matching the right people to the right jobs.",
    author: "Employer – Manufacturing Lead",
  },
  {
    id: 12,
    text: "Got placed in a night shift role with good pay. Thankful!",
    author: "Non-Desk Worker – Shift Worker",
  },
  {
    id: 13,
    text: "Extremely efficient and easy to work with. Highly recommend.",
    author: "Employer – Construction Company",
  },
  {
    id: 14,
    text: "I was new to the country, they supported my job hunt from day one.",
    author: "Non-Desk Worker – Cleaner",
  },
  {
    id: 15,
    text: "Good communication and understanding of project timelines.",
    author: "Employer – Site Manager",
  },
  {
    id: 16,
    text: "Found a great job in just 3 days. Can’t thank them enough!",
    author: "Non-Desk Worker – Maintenance Staff",
  },
  {
    id: 17,
    text: "Provided us with multilingual staff quickly. Great network.",
    author: "Employer – Hotel Group",
  },
  {
    id: 18,
    text: "They helped me find work that matched my schedule. Very flexible.",
    author: "Non-Desk Worker – Housekeeper",
  },
  {
    id: 19,
    text: "Fast response, quality recruitment. Will hire again.",
    author: "Employer – Logistics Supervisor",
  },
  {
    id: 20,
    text: "Supportive during onboarding. Answered all my questions clearly.",
    author: "Non-Desk Worker – Security Staff",
  },
  {
    id: 21,
    text: "They really listened to our staffing needs and delivered well.",
    author: "Employer – Facility Manager",
  },
  {
    id: 22,
    text: "Great communication and follow-up throughout the process.",
    author: "Non-Desk Worker – Delivery Helper",
  },
  {
    id: 23,
    text: "Delivered experienced workers on time. Will use again.",
    author: "Employer – Event Organizer",
  },
  {
    id: 24,
    text: "Loved working with their team. Found a perfect shift job.",
    author: "Non-Desk Worker – Porter",
  },
  {
    id: 25,
    text: "They provide high-quality candidates, even on short notice.",
    author: "Employer – Distribution Center",
  },
  {
    id: 26,
    text: "Clear guidance and quick placement. Very professional.",
    author: "Non-Desk Worker – Production Line Worker",
  },
  {
    id: 27,
    text: "Very responsive and easy to coordinate with. Smooth process.",
    author: "Employer – Food Service Company",
  },
  {
    id: 28,
    text: "I got my first job through them. Very grateful for the opportunity.",
    author: "Non-Desk Worker – Cleaner",
  },
  {
    id: 29,
    text: "Reliable and quick hiring process. Very pleased.",
    author: "Employer – Health & Safety Officer",
  },
  {
    id: 30,
    text: "Excellent onboarding support. Friendly team.",
    author: "Non-Desk Worker – Janitor",
  },
];

export default function ReviewPage() {
  return (
    <Layout>
      <section className="relative bg-[#201D1F] py-20 px-4 min-h-screen">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/review.png"
            alt="Background"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-gray-300">
              See what our clients and non-desk workers are saying
            </p>
            <div className="w-20 h-1 bg-[#C4AC7B] mx-auto mt-4 rounded"></div>
          </div>

          {/* Grid layout for reviews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} // 👈 alternate left/right
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="bg-white/10 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <p className="text-base mb-4 leading-relaxed text-gray-100">
                  {review.text}
                </p>
                <p className="text-sm font-medium text-[#C4AC7B]">
                  {review.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
