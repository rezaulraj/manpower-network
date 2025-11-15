// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// interface SubscribeSectionProps {
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   placeholder?: string;
//   image: string;
//   onSubmit?: (email: string) => void;
//   bgColorClass?: string;
// }

// const SubscribeSection: React.FC<SubscribeSectionProps> = ({
//   title = "",
//   description = "",
//   buttonText = "SUBSCRIBE",
//   placeholder = "Your Email Address",
//   image,
//   onSubmit,
//   bgColorClass = "bg-primary",
// }) => {
//   const [email, setEmail] = React.useState("");

//   const handleSubmit = () => {
//     if (onSubmit) {
//       onSubmit(email);
//     } else {
//       alert(`Submitted email: ${email}`);
//     }
//   };

//   return (
//     <section className={`${bgColorClass} py-5 rounded-2xl px-5`}>
//       <div className="container mx-auto max-w-6xl">
//         <div className="grid grid-cols-2 md:flex-col lg:flex-row items-center justify-between gap-10">
//           <div>
//             <Image
//               src={image}
//               alt="Subscribe"
//               width={500}
//               height={500}
//               className="lg:w-[400px] w-full md:w-[400px] rounded-2xl h-auto "
//             />
//           </div>
//           <div className="flex flex-col gap-6">
//             {/* Left Content */}
//             <div className="text-white">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-3xl font-Inter md:text-4xl font-bold  mb-4 leading-tight text-heading whitespace-pre-line">
//                 {title}
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.1 }}
//                 className="text-[16px] font-Inter font-normal text-text mb-8">
//                 {description}
//               </motion.p>
//             </div>

//             {/* Right Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="w-full lg:w-1/2">
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder={placeholder}
//                   className="flex-grow px-5 py-3  text-text border rounded-lg focus:outline-none focus:ring-2 focus:ring-heading"
//                 />
//                 <button
//                   onClick={handleSubmit}
//                   className="bg-heading font-Inter text-white hover:bg-secondary font-bold px-8 py-3 rounded-lg transition-colors duration-300 whitespace-nowrap">
//                   {buttonText}
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubscribeSection;
