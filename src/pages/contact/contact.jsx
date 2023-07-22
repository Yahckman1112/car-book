import React, { useRef, useState } from "react";
import BannerUsed from "./../../components/banner/banner";
import styles from "./contact.module.scss";
import FormInput from "./../../components/input/input";
import { Button } from "reactstrap";
import { GiSmartphone } from "react-icons/gi";
import { FiMail, FiMap } from "react-icons/fi";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import Footer from "../../components/footer/footer";

import Swal from "sweetalert2";
import Header from "../../components/header/header";

function Contact(props) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const location = [
    {
      logo: <FiMap size={30} />,
      text: "Address",
      sub: "No 34 Arulogun junction idimu street iworoad nigeria",
    },
    {
      logo: <GiSmartphone size={30} />,
      text: "phone",
      sub: "08146283237",
    },
    {
      logo: <FiMail size={30} />,
      text: "Email",
      sub: "infinitytech1212@gmail.com",
    },
  ];
  const MessageSubmit = () => {
    return Yup.object({
      name: Yup.string().required("Please let us know youer name"),
      email: Yup.string().required("email is required").email(),
      subject: Yup.string().required("subjec is required"),
      message: Yup.string().required("message is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: MessageSubmit(),
    onSubmit: (values) => {
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_j7wz2wa",
          "template_b5kvcic",
          form.current,
          "-vdSzHTq-8uRJgfl7"
        )
        .then(
          (result) => {
            Swal.fire({
              icon: "success",
              title: "Email",
              text: "Email sent seccessfully",
            });
            setIsLoading(false);
            console.log(result);
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "error",
              text: "Something went wrong",
            });
            // setIsLoading(false);
          }
        );

      formik.handleReset();
    },
  });
  // value={formik.values.firstName}

  // console.log(formik.values);
  return (
    <div>
      <Header />

      <div>
        <BannerUsed pageNameSub="contact" PageName={"Contact Us"} />
      </div>

      <div className={styles.contact_body}>
        <div className="row">
          <div
            className={` ${styles.contact_address} col-12 col-lg-4 col md-4`}
          >
            {location.map((item, i) => (
              <div className={styles.location}>
                <p className={styles.location_logo}>{item.logo}</p>

                <p className={styles.location_address}>
                  <span className={styles.location_address_main}>
                    {item.text}:
                  </span>
                  <span className={styles.location_address_sub}>
                    {item.sub}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className={` ${styles.contact_form} col-12 col-lg-8 col md-8`}>
            <form ref={form} onSubmit={formik.handleSubmit}>
              <div>
                <FormInput
                  placeholder="Your name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className={styles.errorMsg}>{formik.errors.name}</p>
                )}
              </div>
              <div>
                <FormInput
                  placeholder={"Your Email"}
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className={styles.errorMsg}>{formik.errors.email}</p>
                )}
              </div>
              <div>
                <FormInput
                  placeholder="Subject"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className={styles.errorMsg}>{formik.errors.subject}</p>
                )}
              </div>
              <div>
                <FormInput
                  placeholder="Message"
                  type="textarea"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className={styles.errorMsg}>{formik.errors.message}</p>
                )}
              </div>
              <Button disabled={isLoading} color="primary" type="submit">
                {isLoading ? "Please wait...." : "Send Mail"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2508744244287!2d3.8917257142699344!3d7.547598212505562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f1cdb2ed5e7b%3A0x133fbb82df2b6282!2sOdo%20Oba%20Rd%2C%20200136%2C%20Mawniya%2C%20Oyo!5e0!3m2!1sen!2sng!4v1680284579983!5m2!1sen!2sng"
          width="100%"
          height="420"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="footer_map__N73KB"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}
export default Contact;
