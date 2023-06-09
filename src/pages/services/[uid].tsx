// src/_pages/services/[uid].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Client } from "../../../prismic";
import { RichText, RichTextBlock } from "prismic-reactjs";
import HeroBanner from "../../components/HeroBanner";
import { ServiceDocument } from "../../../types";
import { SliceZone } from "@prismicio/react";
import { components } from "../../../slices";

interface ServicePageProps {
  service: ServiceDocument;
}

const ServicePage = ({ service }: ServicePageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeroBanner
        title={RichText.asText(service.data.title as RichTextBlock[]) || ""}
        imageUrl={service.data.hero_image?.url || service.data.image?.url || ""}
        description={
          RichText.asText(service.data.description as RichTextBlock[]) || ""
        }
      />

      <SliceZone slices={service.data.slices} components={components} />
    </div>
  );
};

export default ServicePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const services = await Client().query('[at(document.type, "service")]');
  const paths = services.results.map((service: ServiceDocument) => ({
    params: { uid: service.uid },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const uid = (context.params as { uid: string }).uid;
  const service = await Client().getByUID("service", uid as string, {});

  return {
    props: {
      service,
    },
    revalidate: 1,
  };
};
