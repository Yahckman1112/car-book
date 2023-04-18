import React from "react";
import styles from "./banner.module.scss";

function Banner(props) {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.textContainer}>
    

        <p className={styles.para1}>Fast & Easy Way To Rent A Car</p>

        <p className={styles.para2}>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts
        </p>
    
        </div>
      </div>
    </div>
  );
}

export default Banner;
