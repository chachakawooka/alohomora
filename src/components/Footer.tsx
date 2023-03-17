import React from "react";
import footerStyles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={footerStyles.container}>
      <p>&copy; 2023 Wizarding Law Firm. All rights reserved.</p>
      <p>123 Diagon Alley, London, UK</p>
    </footer>
  );
};

export default Footer;
