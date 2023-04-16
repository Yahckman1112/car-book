import React from "react";
import Aboutus from "../homepage/aboutus/aboutus";
import ServiceFooter from "../homepage/services/serviceFooter";
import Work from "./../../components/input/work/work";
import styles from "./about.module.scss";
import { Link } from "react-router-dom";
import Footer from "./../../components/footer/footer";
import Header from "../../components/header/header";
function About(props) {
  return (
    <div>
      < Header/>
      <div className={styles.banner}>
        <div className={styles.links}>
          <Link className={styles.links_main} to="/">
            Home
          </Link>{" "}
          <span> &gt; </span> <span>About</span>
          <p className={styles.about_text}>About Us</p>
        </div>
      </div>

      <Aboutus style={{ paddingTop: "0px" }} />
      <ServiceFooter style={{ paddingTop: "0px" }} />
      <Work />
      <Footer />
    </div>
  );
}

export default About;
