import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import styles from "./input.module.scss";

function FormInput({name, label, placeholder, type = "text" }) {
  return (
    <div>
      <FormGroup>
        <Label className={styles.label}>{label}</Label>
        <Input name={name} placeholder={placeholder} type={type} />
      </FormGroup>
    </div>
  );
}

export default FormInput;
