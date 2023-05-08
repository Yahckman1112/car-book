import React from "react";
import styles from "./aboutus.module.scss";
import { aboutText } from "./about";
function Aboutus(props) {
  return (
    <div className={styles.about}>
      <div className="row no-gutters">
        <div className={styles.about_container}></div>
        <div className={`col-12 col-lg-6 col-md-6 ${styles.about_image}`}></div>

        <div className={`col-12 col-lg-6 col-md-6 ${styles.about_text}`}>
          <p className={styles.sub_head}>About us</p>
          <p className={styles.head}>Welcome to Carbook </p>
          <div className={styles.paras}>
            <p className={styles.para_1}>{aboutText.para1}</p>
            <p> {aboutText.para2} </p>
          </div>

          <a href="#" className={styles.search_btn}>
            Search Vehicle
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
