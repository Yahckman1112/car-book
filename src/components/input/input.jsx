import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import styles from './input.module.scss'

function FormInput({label, placeholder, type }) {
  return (
    <div>
      <FormGroup>
        <Label className={styles.label}>{label}</Label>
        <Input name="email" placeholder={placeholder} type={type}/>
      </FormGroup>
    </div>
  );
}

export default FormInput;
