import React from "react";
import {
  FaSearch,
  FaChartLine,
  FaBriefcase,
  FaUsers,
  FaMoneyBillWave,
  FaCogs,
} from "react-icons/fa";

export default function WeProvide() {
  const services = [
    {
      title: "Recruitment",
      icon: <FaSearch className="text-3xl mb-4" />,
      description:
        "From entry-level to executive positions, we connect the right talent with the right opportunities for long-term success.",
    },
    {
      title: "Career Growth",
      icon: <FaChartLine className="text-3xl mb-4" />,
      description:
        "We support candidates in building career paths that align with their goals and help them reach their full potential.",
    },
    {
      title: "Gigs & Short-Term Roles",
      icon: <FaBriefcase className="text-3xl mb-4" />,
      description:
        "Whether it’s a project-based role or temporary assignment, we help you find flexible opportunities that fit your lifestyle.",
    },
    {
      title: "HR Solutions",
      icon: <FaUsers className="text-3xl mb-4" />,
      description:
        "We offer customized human resource services that simplify hiring, onboarding, and workforce management.",
    },
    {
      title: "Payroll Services",
      icon: <FaMoneyBillWave className="text-3xl mb-4" />,
      description:
        "Our efficient payroll solutions ensure accurate, timely payments and compliance with all regulations.",
    },
    {
      title: "Workforce Systems",
      icon: <FaCogs className="text-3xl mb-4" />,
      description:
        "We provide innovative workforce management strategies to keep your team productive, engaged, and growing.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-4">
          Professional Coaching
        </h1>
        <p className="text-gray-600 text-[16px] text-center mb-12">
          We guide professionals in developing their skills, boosting
          confidence, and preparing for career advancement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 min-h-[300px] p-8 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white group">
              <div className="text-primary group-hover:text-white">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>

              <p className="text-gray-600 group-hover:text-white flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
