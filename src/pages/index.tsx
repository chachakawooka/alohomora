import React from "react";
import { GetStaticProps } from "next";
import { Client } from "@prismicio/client";
import { RichText, RichTextBlock } from "prismic-reactjs";
import Card from "../components/Card";
import homePageStyles from "../styles/HomePage.module.scss";
import { linkResolver } from "../../prismic";
import { ServiceDocument } from "../../types";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

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
  homepage: {
    data: {
      slices: any[];
    };
  };
}

const Home: React.FC<HomeProps> = ({ services, homepage }) => {
  const sliceZone = homepage?.data?.slices;

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

      <SliceZone slices={sliceZone} components={components} />

      <div className={homePageStyles.servicesContainer} id="services">
        <h2>Our Wizarding Legal Services</h2>
        <p>
          At Alohomora & Associates, we specialize in a wide range of legal
          services for the magical community. Whether you're dealing with a case
          of magical malpractice or need assistance with a magical contract, our
          experienced lawyers have the knowledge and expertise to help you
          navigate the complex world of wizarding law. Browse our services below
          to learn more about how we can assist you.
        </p>
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
  const homepageResponse = await client.getByUID("page", "home");
  const homepage = homepageResponse || null;

  const servicesResponse = await client.query('[at(document.type, "service")]');
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
      homepage,
    },
  };
};

export default Home;
