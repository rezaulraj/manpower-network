import BrandMarquee from "@/common/AdsHeadline";
import Layout from "@/components/layout";
import { Industries } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

interface Props {
  industry: (typeof Industries)[number];
}

const logos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
];
export default function IndustryDetail({ industry }: Props) {
  return (
    <Layout>
      <section className="relative h-screen bg-[#201D1F] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={industry.bg}
            alt="Hero"
            fill
            className="object-cover opacity-70"
          />
        </div>

        {/* Content Overlay */}
        <div className="container max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-end w-full text-end px-4">
          {/* Main Heading */}
          <h1 className="text-5xl font-Inter md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            {industry.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg  font-Inter md:text-xl lg:text-2xl text-white max-w-2xl mb-10">
            {industry.shortdesc}
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-white font-Inter font-bold text-[#201D1F] px-8 py-4 rounded-md  text-lg hover:bg-primary transition-colors duration-300">
            Apply Here
          </Link>
        </div>
      </section>
      <div className="bg-[#201D1F] py-20">
        <BrandMarquee
          title="Our Customers"
          logos={logos}
          logoWidth={140}
          logoHeight={80}
          bgColor="bg-[#201D1F]"
          speed={20}
          gap={40}
          className="text-white"
        />
        <div className="max-w-6xl mx-auto px-4 py-16 space-y-16 ">
          {/* <h1 className="text-[40px] text-white font-Inter font-bold text-center">
            {industry.title}
          </h1> */}

          {industry.sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}>
              <Image
                src={section.image}
                alt={section.title}
                width={500}
                height={300}
                className="w-full md:w-1/2 h-auto rounded-xl shadow-lg"
              />
              <div className="w-full md:w-1/2">
                <h2 className="text-[32px] font-Inter text-[#F8F8F8] font-semibold mb-4">
                  {section.title}
                </h2>
                <p className="text-white text-[16px] font-normal">
                  {section.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
