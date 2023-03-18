import React, { useState, useEffect, useRef } from "react";
import { RichText, RichTextBlock } from "prismic-reactjs";
import styles from "./TextBlock.module.scss";

interface TextBlockProps {
  slice: {
    primary: {
      content: RichTextBlock[];
    };
  };
}

const TextBlock: React.FC<TextBlockProps> = ({ slice }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const textBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textBlockRef.current) {
        const rect = textBlockRef.current.getBoundingClientRect();
        setScrollPos(rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.textBlock} ref={textBlockRef}>
      <div className={styles.background}>
        <div
          className={styles["pentagon-wrapper"]}
          style={{
            transform: `translate(-50%, -50%) rotate(${
              (scrollPos / 20) % 360
            }deg)`,
          }}
        >
          <svg className={styles.shape} viewBox="0 0 100 100">
            <path d="M50 0 L63.6 30.8 L97.6 35.4 L75.6 60.8 L82 94.6 L50 80.2 L18 94.6 L24.4 60.8 L2.4 35.4 L36.4 30.8 Z" />
          </svg>
        </div>
        <div
          className={styles["pentagon-wrapper"]}
          style={{
            transform: `translate(-50%, -50%) rotate(${
              ((scrollPos / 20 + 80) * -1) % 360
            }deg)`,
          }}
        >
          <svg className={styles.shape} viewBox="0 0 100 100">
            <path d="M50 0 L63.6 30.8 L97.6 35.4 L75.6 60.8 L82 94.6 L50 80.2 L18 94.6 L24.4 60.8 L2.4 35.4 L36.4 30.8 Z" />
          </svg>
        </div>
      </div>
      <div className={styles.content}>
        <RichText render={slice.primary.content} />
      </div>
    </div>
  );
};

export default TextBlock;
