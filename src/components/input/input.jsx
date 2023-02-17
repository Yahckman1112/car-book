import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import styles from "./input.module.scss";
import { useFormik } from "formik";
function FormInput({
  name,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  const formik = useFormik;
  return (
    <div>
      <FormGroup>
        <Label className={styles.label}>{label}</Label>
        <Input
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          onBlur={formik.handleBlur}
          value={value}
        />
      </FormGroup>
    </div>
  );
}

export default FormInput;
