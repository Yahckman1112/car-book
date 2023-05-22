import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormInput from "../../components/input/input";
import styles from './carDetails.module.scss'
import * as Yup from "yup";
import { useFormik } from "formik";
function RentalModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const driverData = () => {
    return Yup.object({
      firstName: Yup.string().required("name is requires"),
      lastName: Yup.string().required("name is requires"),
      email: Yup.string().required("email is required").email(),
      phoneNumber: Yup.string().required("message is required"),
      request: Yup.string().required("message is required"),
    });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      request: "",
    },
    validationSchema: driverData(),
    onSubmit: (values) => {
      console.log(values);

      formik.handleReset();
    },
  });

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Driver Details</Modal.Title>
      </Modal.Header>
      <form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <div>
            <FormInput
              name="firstName"
              placeholder={"First Name"}
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className={styles.errorMsg}>{formik.errors.firstName}</p>
            )}
          </div>
          <div>
            <FormInput
              name="lastName"
              placeholder={"Last Name"}
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className={styles.errorMsg}>{formik.errors.lastName}</p>
            )}
          </div>
          <div>
            <FormInput
              name="email"
              placeholder={"Email"}
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.errorMsg}>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <FormInput
              name="phoneNumber"
              placeholder={"Phone Number"}
              type="number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className={styles.errorMsg}>{formik.errors.phoneNumber}</p>
            )}
          </div>
          <div>
            <FormInput
              name="request"
              placeholder={"Special Request"}
              type="text-area"
              value={formik.values.request}
              onChange={formik.handleChange}
            />
            {formik.touched.request && formik.errors.request && (
              <p className={styles.errorMsg}>{formik.errors.request}</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="secondary" onClick={handleClose}>
            Go to Payment
          </Button>
        </Modal.Footer>
      </form>
    </div>
  );
}

export default RentalModal;
