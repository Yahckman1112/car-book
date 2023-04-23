import React, { useState } from "react";
import styles from "./carDetails.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
// firebase
import { fireDB, storage } from "../../../../firebas";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const CarDetailsValidator = () => {
  return Yup.object({
    carName: Yup.string().required("car name is required"),
    price: Yup.number().required("price is required").positive().integer(),
    details: Yup.string().required("details is required"),
    carImage: Yup.mixed().required('An Image is required')
  });
};

function CarDetails(props) {
  const [details, setDetails] = useState([]);
  const userCollectionRef = collection(fireDB, "carDetails");
  const formik = useFormik({
    initialValues: {
      carName: "",
      price: "",
      details: "",
    },
    validationSchema: CarDetailsValidator(),
    onSubmit: async (values) => {
        const imageRef= ref(storage, 'carImages')
        uploadBytes(imageRef, values.carImage)
      try {
        console.log(values);
        await addDoc(userCollectionRef, {
          carName: values.carName,
          details: values.details,
          price: Number(values.price),
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
    <div className={styles.card_body}>
      <p className={styles.Car_Details}> Car Details </p>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Car Image</Form.Label>
          <Form.Control
            value={formik.values.name}
            onChange={formik.handleChange}
            name="carImage"
            type="file"
            placeholder=""
          />
          {formik.touched.carImage && formik.errors.carImage && (
            <p className={styles.errorMsg}>{formik.errors.carImage}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Car name</Form.Label>
          <Form.Control
            value={formik.values.name}
            onChange={formik.handleChange}
            name="carName"
            type="text"
            placeholder="Enter car brand"
          />
          {formik.touched.carName && formik.errors.carName && (
            <p className={styles.errorMsg}>{formik.errors.carName}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Car Price per Day</Form.Label>
          <Form.Control
            value={formik.values.name}
            onChange={formik.handleChange}
            name="price"
            type="number"
            placeholder=""
          />
          {formik.touched.price && formik.errors.price && (
            <p className={styles.errorMsg}>{formik.errors.price}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Car Details</Form.Label>
          <Form.Control
            value={formik.values.name}
            onChange={formik.handleChange}
            name="details"
            as="textarea"
            rows={3}
          />
          {formik.touched.details && formik.errors.details && (
            <p className={styles.errorMsg}>{formik.errors.details}</p>
          )}
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="file" placeholder="Enter email" />
          
        </Form.Group> */}

        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CarDetails;
