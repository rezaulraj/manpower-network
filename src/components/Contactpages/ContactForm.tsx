import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Industries } from "@/lib/data";
import Link from "next/link";

export default function ContactForm() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 uppercase">Contact Form</h2>
            <form
              action="https://formsubmit.co/9352e79a91ce748f9489d0c72dbcc46b"
              method="POST"
              className="space-y-6">
              {/* Industry Dropdown */}
              <select
                title="Select Industry"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                name="industry"
                defaultValue="">
                <option value="" disabled>
                  Select Industry
                </option>
                {Industries.map((industry) => (
                  <option key={industry.id} value={industry.title}>
                    {industry.title}
                  </option>
                ))}
              </select>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-[18px] font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 outline-none py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-[18px] font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-[18px] font-medium mb-2">
                  Mobile Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[18px] font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full outline-none px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[18px] font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border outline-none border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
              </div>

              {/* Hidden inputs for FormSubmit config */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New Job Application Submission"
              />
              <input
                type="hidden"
                name="_next"
                value="https://manpowernet.work"
              />

              <button
                type="submit"
                className="flex items-center cursor-pointer justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/80 transition-colors">
                Apply Job <FaPaperPlane className="inline" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl text-black font-bold mb-6">Contact us</h3>
            <ul className="space-y-2 text-white font-medium">
              <li className="text-black font-bold space-y-5 transition-colors">
                Email:
              </li>
              <li>
                <Link
                  href="mailto:Chairman@manpowernet.work"
                  className="text-black   hover:text-primary transition-colors">
                  Chairman@manpowernet.work
                </Link>
              </li>
              {/* <li>
                <Link
                  href="tel:+1234567890"
                  className="text-black  hover:text-primary transition-colors">
                  +1 (234) 567-890
                </Link>
              </li> */}
              <li className="text-black font-bold space-y-5 transition-colors">
                Office Location:
              </li>
              <li>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black  hover:text-primary transition-colors">
                  17 Somerville Road, Romford, England, RM6 5BD
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black  hover:text-primary transition-colors">
                  Al Nahyan - E20 04 - Abu Dhabi - United Arab Emirates
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black  hover:text-primary transition-colors">
                  26/2/1 E L Senanayake Veediya, Kandy 20000, Sri Lanka
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black  hover:text-primary transition-colors">
                  H2/1, Road: 2, Block: C, Section: 2, Mirpur DOHS, Dhaka-1216.
                </Link>
              </li>
            </ul>

            {/* <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaPhone className="text-[#d6b36b]" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#d6b36b]" />
                123 Business Ave, Suite 100
                <br />
                New York, NY 10001
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
