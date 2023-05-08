import React from "react";
import styles from "./services.module.scss";
import { servicesData } from "./serviceData";
import ServiceFooter from "./serviceFooter";
function Services(props) {
  return (
    <div className={styles.service}>
      <p className={styles.para1}>SERVICES</p>
      <p className={styles.para2}>Our Latest Services</p>

      <div className="container">
        <div className="row">
          {servicesData.map((item) => (
            <div className={`${styles.col} col-12 col-lg-3 col-md-3 `}>
              <p> {item.logo}</p>
              <p className={styles.logo_head}>{item.title}</p>
              <p className={styles.logo_text}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <ServiceFooter />
    </div>
  );
}

export default Services;
