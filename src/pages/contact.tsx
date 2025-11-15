import ContactCountry from "@/components/Contactpages/ContactConutry";
import ContactForm from "@/components/Contactpages/ContactForm";
import ContactHero from "@/components/Contactpages/ContactHero";
import Layout from "@/components/layout";
import React from "react";

export default function contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <ContactCountry />
    </Layout>
  );
}
