import React from "react";
import { GetStaticProps } from "next";
import { Client } from "@prismicio/client";
import { RichText, RichTextBlock } from "prismic-reactjs";
import Card from "../components/Card";
import homePageStyles from "../styles/HomePage.module.scss";
import { linkResolver } from "../../prismic";
import { ServiceDocument } from "../../types";

// Replace this with your Prismic API endpoint
const apiEndpoint = process.env.PRISMIC_API_ENDPOINT || "";

const client = new Client(apiEndpoint);

interface Service {
  id: string;
  title: string;
  description: string;
  image: {
    alt: string;
    src: string;
  };
}

interface HomeProps {
  services: ServiceDocument[];
}

const Home: React.FC<HomeProps> = ({ services }) => {
  return (
    <div>
      <div className={homePageStyles.introduction}>
        <p>
          At <strong>Alohomora & Associates</strong>, we pride ourselves on
          providing top-notch wizarding legal services that cater to your
          specific needs. Our experienced team of magical law practitioners
          specializes in a wide range of personal and business law areas. We're
          committed to delivering exceptional results, personalized attention,
          and clear communication, ensuring that your legal matters are handled
          with the utmost care and expertise.
        </p>
      </div>

      <div className={homePageStyles.servicesContainer}>
        {services.map((service) => (
          <Card
            key={service.id}
            title={RichText.asText(service.data.title as RichTextBlock[])}
            description={service.data.description as RichTextBlock[]}
            image={{
              src: service.data.image.url ?? "",
              alt: service.data.image.alt ?? "",
            }}
            url={linkResolver(service)}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const servicesResponse = await client.query('[at(document.type, "service")]');
  console.log(JSON.stringify(servicesResponse.results, null, 2));
  const services = servicesResponse.results.map((service) => ({
    id: service.id,
    data: {
      title: service.data.title,
      description: service.data.description,
      image: {
        alt: service.data.image.alt,
        url: service.data.image.url,
      },
    },
    uid: service.uid,
    type: service.type,
  }));

  return {
    props: {
      services,
    },
  };
};

export default Home;
