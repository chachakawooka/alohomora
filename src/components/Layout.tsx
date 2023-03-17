import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  faHatWizard,
  faBook,
  faWandMagic,
  faMagic,
} from "@fortawesome/free-solid-svg-icons";
import USPBar from "./UspBar";

const Layout: React.FC = ({ children }) => {
  const usps = [
    {
      icon: faHatWizard,
      title: "Wizarding expertise",
      description:
        "Our team of expert wizards provide top-notch magical legal advice and support.",
    },
    {
      icon: faBook,
      title: "Ancient magical knowledge",
      description:
        "We draw on our vast knowledge of ancient magical law to provide fair and honest pricing.",
    },
    {
      icon: faWandMagic,
      title: "Powerful representation",
      description:
        "Our team of skilled wizards is dedicated to providing powerful representation in the courtroom.",
    },
    {
      icon: faMagic,
      title: "Personalized magic",
      description:
        "We provide personalized attention to each and every one of our magical clients.",
    },
  ];

  return (
    <>
      <Header />
      <USPBar usps={usps} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
