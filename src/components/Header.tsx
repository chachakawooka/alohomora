import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "./logo.png";
import styles from "./Header.module.scss";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import type {
  InteractivityDetect,
  MoveDirection,
  OutMode,
  IColor,
  IOutModes,
} from "tsparticles-engine";

const particleOptions = {
  fpsLimit: 60,
  particles: {
    color: {
      value: ["#ae0001", "#f0c75e", "#0e1a40", "#0d6259"],
    },
    links: {
      color: ["#ae0001", "#f0c75e", "#0e1a40", "#0d6259"],
      distance: 150,
      enable: false,
      opacity: 0.1,
      width: 0,
    },
    collisions: {
      enable: false,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "split",
      } as IOutModes,
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 300,
    },
    opacity: {
      value: {
        min: 0.2,
        max: 0.6,
        anim: {
          enable: true,
          speed: 10,
          opacity_min: 0.1,
          sync: false,
        },
      },
    },
    shape: {
      type: ["star"],
    },
    size: {
      value: {
        min: 1,
        max: 5,
        anim: {
          enable: true,
          speed: 2,
          size_min: 2,
          sync: false,
        },
      },
    },
    // add the following section for animating the colors
    // change the color from its initial hue to white and back again
    // by animating the lightness value of the HSL color model
    stroke: {
      color: {
        value: "#ffffff",
        animation: {
          enable: true,
          speed: 2,
          sync: true,
        },
      },
    },
    fill: {
      color: {
        value: "#ffffff",
        animation: {
          enable: true,
          speed: 2,
          sync: true,
        },
      },
    },
  },
  fullScreen: {
    enable: false,
  },
  detectRetina: false,
};

const Header = () => {
  const router = useRouter();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <header className={styles.header}>
      <Particles
        className={styles.tsparticles}
        options={particleOptions}
        init={particlesInit}
      />
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
        <h1 className={`${styles.companyName}`}>
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
