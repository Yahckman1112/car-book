import React from "react";
import styles from "./footer.module.scss";
import { carText, logo, links, customers } from "./text";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { Zoom } from "react-reveal";
function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className="row">
        <div className="col-12 col-lg-3 col-md-3">
          <p className={styles.para1}>
            <span>Car</span>
            <span className={styles.para1_sub}>Book</span>
          </p>
          <p>{carText.text}</p>

          <div className={styles.social}>
            {logo.map((logo, i) => (
              <Zoom>
                <a href={logo.link} className={styles.social_logo}>
                  {logo.logo}
                </a>
              </Zoom>
            ))}
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-3">
          <p className={styles.para2}>Information</p>
          {links.map((link) => (
            <Link className={styles.link} to="#">
              {link.linkName}
            </Link>
          ))}
        </div>

        <div className="col-12 col-lg-3 col-md-3">
          <p className={styles.para2}> Customer Support </p>
          {customers.map((item) => (
            <Link className={styles.link} to="#">
              {item.linkName}
            </Link>
          ))}
        </div>
        <div className="col-12 col-lg-3 col-md-3">
          <p className={styles.para2}> Have a Question </p>
          <p className={styles.quest}>
            <span className={styles.quest_logo}>
              {" "}
              <FaLocationArrow />{" "}
            </span>
            <span className={styles.logo_text}>
              {" "}
              203 Fake St. Mountain View, San Francisco, California, USA
            </span>
          </p>
          <p className={styles.quest}>
            <span className={styles.quest_logo}>
              {" "}
              <FaLocationArrow />{" "}
            </span>
            <span className={styles.logo_text}> +2348146283237</span>
          </p>
          <p className={styles.quest}>
            <span className={styles.quest_logo}>
              {" "}
              <FaLocationArrow />{" "}
            </span>
            <span className={styles.quset_text}>infinity1212@gmail.com</span>
          </p>
        </div>
      </div>
      <p style={{ textAlign: "center", paddingTop: "30px" }}>
        Copyright ©2023 All rights reserved
      </p>
    </div>
  );
}

export default Footer;
