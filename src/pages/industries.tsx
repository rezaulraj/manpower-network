import IndustriesHero from "@/components/Industries/IndustriesHero";
import IndustriesWe from "@/components/Industries/IndustriesWe";
import Layout from "@/components/layout";

import React from "react";

export default function industries() {
  return (
    <Layout>
      <IndustriesHero />
      <IndustriesWe />
    </Layout>
  );
}
