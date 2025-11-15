import React from "react";
import Image from "next/image";
import { LuUserSearch } from "react-icons/lu";
import { BiSolidUserDetail } from "react-icons/bi";
import { GrIntegration } from "react-icons/gr";
import { TbArrowLeftRight } from "react-icons/tb";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Link from "next/link";
import AdsHeadline from "@/common/AdsHeadline";
const selection = [
  {
    icons: <LuUserSearch className="text-2xl text-white" />,
    title: "Search and Selection of Workers",
    desc: " We identify, attract, and assess top talent to match the needs of each organization.",
  },
  {
    icons: <BiSolidUserDetail className="text-2xl text-white" />,
    title: "Residence and Work Permits",
    desc: " We handle all necessary documentation to ensure legal residence and employment.",
  },
  {
    icons: <GrIntegration className="text-2xl text-white" />,
    title: "Integration Support",
    desc: "We assist workers in adapting to their new community and workplace for a smooth transition.",
  },
];
const Business = [
  {
    icons: <TbArrowLeftRight className="text-2xl text-white" />,
    title: "Business Flexibility",
    desc: "Adjust your workforce to meet evolving business needs with ease.",
  },
  {
    icons: <AiTwotoneSafetyCertificate className="text-2xl text-white" />,
    title: "Legal Assurance",
    desc: " Minimize risks with our strict adherence to all legal and regulatory requirements.",
  },
  {
    icons: <HiOutlineDocumentReport className="text-2xl text-white" />,
    title: "Payroll Management",
    desc: " Rely on our expertise for accurate payroll processing, even amidst frequent regulatory changes.",
  },
];

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
export default function Recruitment() {
  return (
    <section className="py-20 bg-[#2D2D2D]">
      <div className="container max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-10">
            <h2 className="text-[48px] text-white font-Inter font-bold">
              Recruitment & Administration
            </h2>
            <p className="text-[16px] text-white font-Inter font-normal">
              From global job advertising to securing work permits and visas, we
              manage every step of the hiring process. We also provide support
              for smooth worker integration into the local community and labor
              market.
            </p>
            <div className="max-w-2xl">
              <Link
                href="/contact"
                className="bg-white font-Inter max-w-2xl font-bold text-[#201D1F] px-8 py-3 rounded-md  text-[16px] hover:bg-primary transition-colors duration-300">
                Lets Start Your Story
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/Recruitment.png"
              alt="Recruitment"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:mt-10 md:mt-5 mt-4 md:grid-cols-3 gap-8">
          {selection.map((item, index) => (
            <div
              key={index}
              className="border border-primary rounded-3xl p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary rounded-full">{item.icons}</div>
                <h3 className="text-[24px] text-white font-Inter font-bold">
                  {item.title}
                </h3>
              </div>
              <p className="text-[16px] text-white font-Inter font-normal">
                {item.desc}
              </p>
              {/* <Link
                href="/contact"
                className="bg-white font-Inter font-bold text-[#201D1F] px-5 py-2 rounded-md  text-lg hover:bg-primary transition-colors duration-300">
                Apply Here
              </Link> */}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:mt-16 md:mt-5 mt-4 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/images/Recruitment1.png"
              alt="Recruitment"
              width={500}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-center space-y-10">
            <h2 className="text-[48px] text-white font-Inter font-bold">
              Temporary Staffing
            </h2>
            <p className="text-[16px] text-white font-Inter font-normal">
              Stay agile in a changing market with our flexible staffing
              solutions. Hire skilled employees for fixed-term needs while we
              handle payroll, legal compliance, and all administrative
              responsibilities.
            </p>
            <div className="max-w-2xl">
              <Link
                href="/contact"
                className="bg-white font-Inter max-w-2xl font-bold text-[#201D1F] px-8 py-3 rounded-md  text-[16px] hover:bg-primary transition-colors duration-300">
                Lets Start Your Story
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:mt-10 md:mt-5 mt-4 md:grid-cols-3 gap-8">
          {Business.map((item, index) => (
            <div
              key={index}
              className="border border-primary rounded-3xl p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary rounded-full">{item.icons}</div>
                <h3 className="text-[24px] text-white font-Inter font-bold">
                  {item.title}
                </h3>
              </div>
              <p className="text-[16px] text-white font-Inter font-normal">
                {item.desc}
              </p>
              {/* <Link
                href="/contact"
                className="bg-white font-Inter font-bold text-[#201D1F] px-5 py-2 rounded-md  text-lg hover:bg-primary transition-colors duration-300">
                Apply Here
              </Link> */}
            </div>
          ))}
        </div>
      </div>
      <AdsHeadline
        title="Our Customers"
        titleClassName="text-white"
        logos={logos}
        logoWidth={300}
        logoHeight={300}
        speed={20}
        className="mt-10"
      />
    </section>
  );
}
