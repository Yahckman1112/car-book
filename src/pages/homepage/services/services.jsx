import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import styles from "./services.module.scss";
import { RiCarWashingLine, RiPoliceCarLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import {
  MdOutlineDirectionsCar,
  MdOutlineDirectionsCarFilled,
} from "react-icons/md";
import ServiceFooter from "./serviceFooter";
function Services(props) {
  return (
    <div className={styles.service}>
      <p className={styles.para1}>SERVICES</p>
      <p className={styles.para2}>Our Latest Services</p>
      <div className="container">
        <div className="row">
          <div className={`${styles.col} col-12 col-lg-3 col-md-3 `}>
            <p>
              {" "}
              <RiCarWashingLine size={40} className={styles.logo} />{" "}
            </p>
            <p className={styles.logo_head}>Wedding Ceremony</p>
            <p className={styles.logo_text}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-3 ">
            <p>
              <MdOutlineDirectionsCar size={40} className={styles.logo} />
            </p>
            <p className={styles.logo_head}>City Transfer</p>
            <p className={styles.logo_text}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-3 ">
            <p>
              <RiPoliceCarLine size={40} className={styles.logo} />
            </p>
            <p className={styles.logo_head}>Airport Tranfer</p>
            <p className={styles.logo_text}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-3 ">
            <p>
              <MdOutlineDirectionsCarFilled size={40} className={styles.logo} />
            </p>
            <p className={styles.logo_head}>Whole city Tour</p>
            <p className={styles.logo_text}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>

      <ServiceFooter />
    </div>
  );
}

export default Services;
