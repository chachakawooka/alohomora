import React from "react";
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
  return (
    <div className={styles.textBlock}>
      <div className={styles.content}>
        <RichText render={slice.primary.content} />
      </div>
    </div>
  );
};

export default TextBlock;
