import React, { useEffect } from "react";
import styles from "./blog.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import  axios  from 'axios';
import config from '../../confog.json'

function Coment(props) {

  const validateComment = () => {
    return Yup.object({
      name: Yup.string().required("Enter ur name please"),
      email: Yup.string().required("Enter ur name please").email(),
      name: Yup.string().required("Tell us something"),
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validateComment(),

    onSubmit:async (values) => {
      try {
    await axios.post(`${config.apiUrl}/messages`, values)
    alert('Sub,itter succeully')
   window.location.reload(true)
    

    formik.handleReset();
        
      } catch (error) {
        console.log(error);
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
          </div>
          <button type="submit" class="btn btn-primary">
            Send Cooment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Coment;
