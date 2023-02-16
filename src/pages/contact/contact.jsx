import React from "react";
import BannerUsed from "./../../components/banner/banner";
import styles from "./contact.module.scss";
// import { Input } from 'reactstrap';
import FormInput from "./../../components/input/input";
import { Button } from "reactstrap";
import { FaAccessibleIcon } from "react-icons/fa";
function Contact(props) {
  return (
    <div>
      <div>
        <BannerUsed pageNameSub="contact" PageName={"Contact Us"} />
      </div>
      <div className={styles.contact_body}>
        <div className="row">
          <div
            className={` ${styles.contact_address} col-12 col-lg-4 col md-4`}
          >
            <div className={styles.contact_address_log}>
              <FaAccessibleIcon size={20} />{" "}
            </div>
            <div className={styles.contact_address_text}>text</div>
          </div>
          <div className={` ${styles.contact_form} col-12 col-lg-8 col md-8`}>
            <FormInput placeholder="Your name" />
            <FormInput placeholder={"Your Email"} type="email" />
            <FormInput placeholder="Subject" />
            <FormInput placeholder="Message" type="textarea" />
            <Button color="primary">Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
