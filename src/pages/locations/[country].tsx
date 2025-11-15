import { useRouter } from "next/router";
import Head from "next/head";
import { countryData } from "@/lib/data";
import Layout from "@/components/layout";
import Image from "next/image";
export default function CountryPage() {
  const router = useRouter();
  const { country } = router.query;

  // Find the country data matching the dynamic route parameter
  const countryInfo = countryData.find(
    (c) => c.href === `/locations/${country}`
  );

  if (!countryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Country not found</p>
      </div>
    );
  }

  return (
    <Layout>
      <div className="relative h-screen bg-[#201D1F] overflow-hidden">
        <Head>
          <title>{countryInfo.city} | We Provide</title>
        </Head>
        <div className="absolute inset-0 z-0">
          <Image
            src={countryInfo.bgImage}
            alt="Hero"
            fill
            className="object-cover opacity-70"
          />
        </div>
        <div className="container max-w-7xl mx-auto relative z-10 h-full flex flex-col justify-center items-start w-full text-end px-4">
          <div className="bg-primary/70 mx-auto rounded-lg shadow-2xs overflow-hidden">
            {/* Country Header */}
            <div className="w-full text-center p-8">
              <h2 className="text-[56px] font-sans text-heading font-bold mb-2">
                {countryInfo.city}
              </h2>
              <p className="text-[32px] font-mono text-heading">
                {countryInfo.name}
              </p>
            </div>

            {/* Country Details */}
            <div className="p-8   text-center">
              <p className="text-[18px] font-semibold text-heading  mb-6">
                {countryInfo.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-start ">
                  <svg
                    className="h-10 w-10 text-heading mr-3 mt-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-heading text-[20px] font-bold font-sans">
                    {countryInfo.address}
                  </p>
                </div>

                {/* <div className="flex items-center ">
                  <svg
                    className="h-10 w-10 text-heading mr-3 mt-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-heading text-[20px] font-bold font-sans">
                    {countryInfo.phone}
                  </p>
                </div> */}

                <div className="flex items-center">
                  <svg
                    className="h-10 w-10 text-heading mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-heading text-[20px] font-bold font-sans">
                    Chairman@manpowernet.work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
