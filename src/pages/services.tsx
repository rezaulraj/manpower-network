import Layout from "@/components/layout";
import OurService from "@/components/Servicespages/OurService";
import ServiceHero from "@/components/Servicespages/ServiceHero";
import WeProvide from "@/components/Servicespages/Weprovide";
import React from "react";

export default function services() {
  return (
    <Layout>
      <ServiceHero />
      <WeProvide />
      <OurService />
    </Layout>
  );
}
