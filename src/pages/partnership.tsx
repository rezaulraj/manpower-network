import Layout from "@/components/layout";
import PartnerMap from "@/components/Partners/PartnerMap";
import PartnersHero from "@/components/Partners/PartnersHero";
import React from "react";

export default function pathner() {
  return (
    <Layout>
      <PartnersHero />
      <PartnerMap />
    </Layout>
  );
}
