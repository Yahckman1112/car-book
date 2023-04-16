import React from "react";
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <FormInput
            placeholder="Your name"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className={""}>{formik.errors.email}</p>
          )}
        </div>
        <div>
          <FormInput
            placeholder="Your name"
            name="pwd"
            value={formik.values.pwd}
            onChange={formik.handleChange}
            type="password"
          />
          {formik.touched.pwd && formik.errors.pwd && (
            <p className={""}>{formik.errors.pwd}</p>
          )}
        </div>
        <Button disabled={isLoading} color="primary" type="submit">
          {isLoading ? 'Authenticating...': 'Login'}
        </Button>
      </form>
    </div>
  );
}

export default AdminAuth;
