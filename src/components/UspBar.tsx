import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import styles from "./USPBar.module.scss";

interface USP {
  icon: IconDefinition;
  title: string;
  description: string;
}

interface USPBarProps {
  usps: USP[];
}

const USPBar: React.FC<USPBarProps> = ({ usps }) => {
  return (
    <div className={styles.uspBar}>
      {usps.map((usp, index) => (
        <div key={index} className={styles.usp}>
          <FontAwesomeIcon icon={usp.icon} />
          <div className={styles.text}>
            <h3>{usp.title}</h3>
            <p>{usp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default USPBar;
