// src/_pages/services/[uid].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Client } from "../../../prismic";
import { RichText } from "prismic-reactjs";
import { ServiceDocument } from "../../../types";

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
      <h1>{service.data.title}</h1>
      <div>{service.data.description}</div>
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
