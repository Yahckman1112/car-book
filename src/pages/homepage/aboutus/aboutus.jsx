import React from "react";
import styles from "./aboutus.module.scss";
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
              <p className={styles.para_1}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. A small river named
                Duden flows by their place and supplies it with the necessary
                regelialia. It is a paradisematic country, in which roasted
                parts of sentences fly into your mouth.
              </p>
            </div>

              <p className={styles.search_btn}>
            <a href="#" >
            Search Vehicle
            </a>
              </p>
          </div>
        </div>
    </div>
  );
}

export default Aboutus;
