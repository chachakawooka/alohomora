import React from "react";
import { RichText, RichTextBlock } from "prismic-reactjs";
import styles from "./Testimonials.module.scss";

interface Testimonial {
  quote: RichTextBlock[];
  name: string;
  position: string;
  rating: number;
}

interface TestimonialsSlice {
  slice: {
    primary: {
      title: RichTextBlock[];
    };
    items: Testimonial[];
  };
}

const Testimonials: React.FC<TestimonialsSlice> = ({ slice }) => {
  const { primary, items } = slice;
  const title = primary.title as RichTextBlock[];

  return (
    <section className={styles.testimonials}>
      <h2>{RichText.asText(title)}</h2>
      <div className={styles["testimonials-list"]}>
        {items.map((item, index) => (
          <div key={index} className={styles.testimonial}>
            <blockquote>{RichText.asText(item.quote)}</blockquote>
            <div className={styles.rating}>
              {[...Array(item.rating)].map((_, index) => (
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 0 L61.803 38.196 H100 L69.098 61.804 L78.305 100 L50 78.398 L21.695 100 L30.902 61.804 L0 38.196 H38.196Z" />
                </svg>
              ))}
            </div>
            <div className={styles.details}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.position}>{item.position}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
