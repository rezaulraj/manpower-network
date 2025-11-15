// import CareersForm from "@/components/Careers/CareersForm";
import CareersHero from "@/components/Careers/CareersHero";
import OpenJobPosition from "@/components/Careers/OpenJobPosition";
import WhyOurCustomers from "@/components/Homepages/WhyOurCustomers";
import Layout from "@/components/layout";
import React from "react";

export default function careers() {
  return (
    <Layout>
      <CareersHero />
      <OpenJobPosition />
      {/* <CareersForm /> */}
      <WhyOurCustomers />
    </Layout>
  );
}
