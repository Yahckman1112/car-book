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
    priceDay: Yup.number().required("price is required").positive().integer(),
    priceWeek: Yup.number().required("price is required").positive().integer(),
    priceMonth: Yup.number().required("price is required").positive().integer(),
    details: Yup.string().required("details is required"),
    // carImage: Yup.mixed().required('An Image is required')
  });
};

function CarDetails(props) {
  const [isLoading, setIsLoading] = useState(false);

  const userCollectionRef = collection(fireDB, "carDetails");
  const formik = useFormik({
    initialValues: {
      carName: "",
      priceDay: "",
      priceWeek: "",
      priceMonth: "",
      details: "",
    },
    validationSchema: CarDetailsValidator(),
    onSubmit: async (values) => {
      setIsLoading(true);
      // const imageRef= ref(storage, 'carImages')
      // uploadBytes(imageRef, values.carImage)
      try {
        console.log(values);
        await addDoc(userCollectionRef, {
          carName: values.carName,
          details: values.details,
          priceDay: values.priceDay,
          priceWeek: values.priceWeek,
          priceMonth: values.priceMonth,
        });
        setIsLoading(false);

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
      setIsLoading(false);
      formik.handleReset();
    },
  });

  return (
    <div className={styles.card_body}>
      <p className={styles.Car_Details}> Car Details </p>
      <Form onSubmit={formik.handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
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
        </Form.Group> */}
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
            name="priceDay"
            type="number"
            placeholder=""
          />
          {formik.touched.priceDay && formik.errors.priceDay && (
            <p className={styles.errorMsg}>{formik.errors.priceDay}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Car Price per Week</Form.Label>
          <Form.Control
            value={formik.values.name}
            onChange={formik.handleChange}
            name="priceWeek"
            type="number"
            placeholder=""
          />
          {formik.touched.priceWeek && formik.errors.priceWeek && (
            <p className={styles.errorMsg}>{formik.errors.priceWeek}</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Car Price per Month</Form.Label>
          <Form.Control
            value={formik.values.name}
            onChange={formik.handleChange}
            name="priceMonth"
            type="number"
            placeholder=""
          />
          {formik.touched.priceMonth && formik.errors.priceMonth && (
            <p className={styles.errorMsg}>{formik.errors.priceMonth}</p>
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

        <Button disabled={isLoading} variant="info" type="submit">
          {isLoading ? "saving..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export default CarDetails;
