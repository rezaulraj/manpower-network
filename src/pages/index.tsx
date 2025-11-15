import Banner from "@/components/Homepages/Banner";
import Hero from "@/components/Homepages/Hero";
import BrandCarousel from "@/components/Homepages/OurBrand";
import Specialisms from "@/components/Homepages/Specialisms";
import SuccessStory from "@/components/Homepages/SuccessStory";
import WhyOurCustomers from "@/components/Homepages/WhyOurCustomers";
import Work from "@/components/Homepages/Work";

import Layout from "@/components/layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <Banner />
        <Specialisms />
        <Work />
        <WhyOurCustomers />
        <BrandCarousel />
        <SuccessStory />
        {/* <AwardsAccreditations /> */}
      </Layout>
    </div>
  );
}
