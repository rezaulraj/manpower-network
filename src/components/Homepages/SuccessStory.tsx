import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function SuccessStory() {
  const metrics = [
    { value: 750, suffix: "+", description: "successful placement" },
    { value: 65, suffix: "%", description: "interview success rate " },
    { value: 7, suffix: "", description: "countries" },
    { value: 78, suffix: "%", description: "NPS (Customer Satisfaction)" },
    { value: 15, suffix: "", description: "industry awards" },
    {
      value: 2000,
      suffix: "",
      description:
        "trees planted through Ecology supporting our climate-positive workforce",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-16 px-4 bg-[#201D1F]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Let these numbers tell our success story.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp from={0} to={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-white">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

type CountUpProps = {
  from: number;
  to: number;
  suffix?: string;
};

function CountUp({ from, to, suffix }: CountUpProps) {
  const [value, setValue] = React.useState(from);
  const ref = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(progress * (to - from) + from);

            setValue(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setValue(to); // Ensure we end on the exact value
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [from, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
