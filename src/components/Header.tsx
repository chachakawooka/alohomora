import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "./logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" passHref>
          <span className={styles.logo}>
            <Image
              src={logo}
              alt="Alohomora & Associates Logo"
              width={150}
              height={150}
              layout="fixed"
            />
          </span>
        </Link>
        <h1 className={styles.companyName}>
          Alohomora & Associates: Wizarding Legal Services
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/#services" passHref>
                <span
                  className={`${styles.navLink} ${
                    router.pathname === "/services" ? styles.active : ""
                  }`}
                >
                  Services
                </span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" passHref>
                <span
                  className={`${styles.navLink} ${
                    router.pathname === "/about" ? styles.active : ""
                  }`}
                >
                  About
                </span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" passHref>
                <span
                  className={`${styles.navLink} ${
                    router.pathname === "/contact" ? styles.active : ""
                  }`}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
