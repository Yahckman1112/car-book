import React, { useEffect } from "react";
import styles from "./blog.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import http from '../../services/httpService'
import config from "../../confog.json";
import { useState } from "react";
import Swal from "sweetalert2";

function Coment(props) {
  const [isLoading, setIsLoading]= useState(false)
  const validateComment = () => {
    return Yup.object({
      name: Yup.string().required("Enter ur name please"),
      email: Yup.string().required("Enter ur name please").email(),
      message: Yup.string().required("Tell us something"),
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validateComment(),

    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        await http.post(`${config.apiUrl}/messages`, values);
        Swal.fire({
          icon: "success",
          title: "Posted",
          text:  "Posted Succefully",
          showCancelButton: true,
          showConfirmButton: false,
        });
        window.location.reload(true);

        setIsLoading(false)

        formik.handleReset();
      } catch (error) {
        console.log(error);
        setIsLoading(false)
      }
    },
  });

  return (
    <div>
      <h1>Leave a comment</h1>
      <div className={`bg-light ${styles.container}`}>
        <form onSubmit={formik.handleSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              class="form-control"
              placeholder="John Doe"
            />
            {formik.touched.name && formik.errors.name && (
              <p className={styles.errorMsg}>{formik.errors.name}</p>
            )}
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              class="form-control"
              placeholder="name@example.com"
            />
            {formik.touched.email && formik.errors.email && (
              <p className={styles.errorMsg}>{formik.errors.email}</p>
            )}
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>

            {formik.touched.message && formik.errors.message && (
              <p className={styles.errorMsg}>{formik.errors.message}</p>
            )}
          </div>
          <button disabled={isLoading} type="submit" class="btn btn-primary">
            {isLoading?'Sending Comment': 'Send Comment'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Coment;
