import React from "react";
import styles from "./feature.module.scss";
import FetureCard from './fetureCard';
function Feture(props) {
  return (
    <div className={styles.feture}>
      <p  className={styles.para1}>what we offer</p>

      <p className={styles.para2}>Feeatured Vehicles</p>
    <div className="container">

      < FetureCard/>
    </div>
    </div>
  );
}

export default Feture;
