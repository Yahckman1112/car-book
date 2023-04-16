import React from "react";
import styles from './auth.module.scss'
import FormInput from "../../../components/input/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "reactstrap";
import { auth } from "../../../firebas";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import  Swal  from 'sweetalert2';

function AdminAuth(props) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const MessageSubmit = () => {
    return Yup.object({
      email: Yup.string().required("email is required").email(),
      pwd: Yup.string().required("Suplly ur Password"),
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      pwd: "",
    },
    validationSchema: MessageSubmit(),
    onSubmit: async(values) => {
      setIsLoading(true);

     await signInWithEmailAndPassword(auth, values.email, values.pwd)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/");
          console.log(user);
        })
        .catch((error) => {
        setIsLoading(false)
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:error.code || 'Authentication fail',
            showCancelButton:true,
            showConfirmButton:false
          })
        });
        setIsLoading(false)
     

      formik.handleReset();
    },
  });
  return (
    <div className={styles.body}>
        <div className={styles.form_container}>
            <p className={styles.para1}>Welcome</p>

      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.form_wrap}>
          <input
            placeholder="Your name"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            className={styles.form_input}
          />
          {formik.touched.email && formik.errors.email && (
            <p className={styles.error}>{formik.errors.email}</p>
          )}
        </div>
        <div className={styles.form_wrap}>
            
          <input
            placeholder="Your name"
            name="pwd"
            value={formik.values.pwd}
            onChange={formik.handleChange}
            type="password"
            className={styles.form_input}
          />
          {formik.touched.pwd && formik.errors.pwd && (
            <p className={styles.error}>{formik.errors.pwd}</p>
          )}
        </div>
        <button disabled={isLoading} className={styles.btn} type="submit">
          {isLoading ? 'Authenticating...': 'Login'}
        </button>
      </form>
        </div>
    </div>
  );
}

export default AdminAuth;
