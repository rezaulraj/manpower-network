import React from "react";

const OurValue = () => {
  const values = [
    {
      title: "Simplicity",
      items: [
        "Communicating with respect",
        "Keeping processes clear and uncomplicated",
        "Being straightforward and honest",
      ],
    },
    {
      title: "Progress",
      items: [
        "Striving for continuous improvement",
        "Embracing challenges with confidence",
        "Finding solutions that work",
      ],
    },
    {
      title: "Excellence (A+ Distinction)",
      items: [
        "Holding ourselves to the highest standards",
        "Going the extra mile for clients and candidates",
        "Taking pride in every placement we make",
      ],
    },
  ];

  return (
    <section className="bg-[#4D4D4E] py-20">
      <div className="container mx-auto px-5 max-w-7xl">
        <h2 className="lg:text-[40px] font-Inter  md:text-5xl font-bold text-white mb-4 inline-block border-b-4 border-primary pb-2">
          Our Values
        </h2>
        <p className="text-lg text-white font-normal mb-12 leading-relaxed">
          Our core values guide everything we do. Simplicity, Progress, and
          Excellence are principles we live by every day, shaping how we connect
          talent with opportunity and deliver exceptional recruitment solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-[#3A3A3A] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">
                {value.title}
              </h3>
              <ul className="space-y-3">
                {value.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValue;
