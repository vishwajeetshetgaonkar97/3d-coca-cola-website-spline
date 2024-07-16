import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import founder from '../../Assets/founder.png'

const HistorySection = (props) => {
  return (
    <div className={styles.historySectionContainer}>
      <div>
        <Image src={founder}/>
      </div>
 
    </div>
   
  );
};

export default HistorySection;
