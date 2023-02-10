import React from "react";
import styles from "./footer.module.scss";
import { carText } from "./text";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaLocationArrow, FaSearchLocation, FaTwitter } from "react-icons/fa";
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
            <a href="#"  className={styles.social_logo}>

            <FaFacebook size={25}/> 
            </a>

            <a href="#" className={styles.social_logo}> <FaTwitter size={25}/> </a>
            <a href="#" className={styles.social_logo}><FaInstagramSquare size={25}/> </a>
          </div>
        </div>
        <div className="col-12 col-lg-3 col-md-3">
          <p className={styles.para2}>Information</p>

          <Link className={styles.link} to="#">
            {" "}
            About{" "}
          </Link>
          <Link className={styles.link} to="#">
            {" "}
            Service{" "}
          </Link>
          <Link className={styles.link} to="#">
            {" "}
            Terms And Conditions{" "}
          </Link>
          <Link className={styles.link} to="#">
            {" "}
            Best Price Guarantee{" "}
          </Link>
          <Link className={styles.link} to="#">
            {" "}
            Privacy and Cookies Policy{" "}
          </Link>
        </div>
        <div className="col-12 col-lg-3 col-md-3">
          <p className={styles.para2}> Customer Support </p>

          <Link className={styles.link} to="#">
            {" "}
            FAQ?{" "}
          </Link>
          <Link className={styles.link} to="#">
            {" "}
            Payment Option{" "}
          </Link>
          <Link className={styles.link} to="#">
            {" "}
            Booking Tips{" "}
          </Link>
          <Link className={styles.link} to="#">
            {" "}
            How it works{" "}
          </Link>
          <Link className={styles.link} to="#">
            {" "}
            Contact Us{" "}
          </Link>
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
      <p style={{textAlign:'center', paddingTop:'30px'}} >Copyright ©2023 All rights reserved</p>
    </div>
  );
}

export default Footer;
