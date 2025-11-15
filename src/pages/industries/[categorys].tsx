import { GetStaticPaths, GetStaticProps } from "next";
import IndustryDetail from "@/components/Industries/IndustryDetail";
import { Industries } from "@/lib/data";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Industries.map((industry) => ({
    params: {
      categorys: industry.href.replace("/industries/", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categorySlug = params?.categorys as string;

  const industry = Industries.find(
    (item) => item.href === `/industries/${categorySlug}`
  );

  if (!industry) {
    return { notFound: true };
  }

  return {
    props: { industry },
  };
};

export default IndustryDetail;
