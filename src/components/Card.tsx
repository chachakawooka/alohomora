// src/components/Card.tsx
import React from "react";
import { RichText, RichTextBlock } from "prismic-reactjs";
import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  description: RichTextBlock[];
  image: {
    alt: string;
    src: string;
  };
  url: string;
}
const Card: React.FC<CardProps> = ({ title, description, image, url }) => {
  return (
    <Link href={url} className={styles.card}>
      <Image
        className={styles.cardImage}
        src={image.src}
        alt={image.alt}
        width={400}
        height={400}
        objectFit="cover"
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardDescription}>
          {RichText.render(description)}
        </div>
      </div>
    </Link>
  );
};

export default Card;
