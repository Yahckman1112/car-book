import React from "react";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";

function BannerUsed({pageNameSub,PageName}) {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.links}>
          <Link className={styles.links_main} to='/'>
            Home
          </Link>{" "}
          <span> &gt; </span> <span>{pageNameSub}</span>
          <p className={styles.about_text}>{PageName}</p>
        </div>
      </div>
    </div>
  );
}

export default BannerUsed;
