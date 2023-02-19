import React from "react";
import BannerUsed from "./../../components/banner/banner";
import styles from "./contact.module.scss";
// import { Input } from 'reactstrap';
import FormInput from "./../../components/input/input";
import { Button } from "reactstrap";
import { GiSmartphone } from "react-icons/gi";
import { FiMail, FiMap } from "react-icons/fi";
import { useFormik } from "formik";
// import * as Yup from 'yup'
import * as Yup from "yup";
import Footer from "../../components/footer/footer";

function Contact(props) {
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
      console.log(values);

      formik.handleReset();
    },
  });
  // value={formik.values.firstName}

  // console.log(formik.values);
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
            <form onSubmit={formik.handleSubmit}>
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
              <Button color="primary" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
