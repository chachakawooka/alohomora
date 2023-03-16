import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeroBanner.module.scss";

interface HeroBannerProps {
  title: string;
  description: string;
  imageUrl: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  imageUrl,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.heroBanner}>
      <Image
        src={imageUrl}
        alt={`${title} hero image`}
        layout="fill"
        className={styles.heroImage}
        style={{ transform: `translate3d(0, ${scrollPosition * 0.2}px, 0)` }}
      />
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
