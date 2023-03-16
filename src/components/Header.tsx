// src/components/Header.tsx
import React from "react";
import Image from "next/image";
import headerStyles from "../styles/Header.module.scss";
import logo from "./logo.png";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoContainer}>
        <Image
          src={logo}
          alt="Alohomora & Associates Logo"
          width={150}
          height={150}
          layout="fixed"
        />
        <h1 className={headerStyles.companyName}>
          Alohomora & Associates: Wizarding Legal Services
        </h1>
      </div>
      <nav className={headerStyles.nav}>
        {/* Add your navigation links here */}
      </nav>
    </header>
  );
};

export default Header;
