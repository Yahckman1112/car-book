import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormInput from "../../components/input/input";
import styles from "./carDetails.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { addDoc, collection } from "firebase/firestore";
import { fireDB } from "../../firebas";
import Swal from "sweetalert2";

function RentalModal(props) {
  const driverCollectionRef = collection(fireDB, "driver-details");

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
  //  ad6bd2fd-4377-4a0c-882b-0702f20d231c
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      request: "",
    },
    validationSchema: driverData(),
    onSubmit: async (values) => {
      try {
        
      await addDoc(driverCollectionRef, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        request: values.request,
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Car detail save successfully",
        showConfirmButton: false,
        timer: 1500,
      });
        
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "error",
          text: "Something went wrong",
        });
      }


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
