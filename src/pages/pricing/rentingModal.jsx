import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import {Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { fireDB } from "../../firebas";

export function RentingModal(props) {
    // fireDB
//   const params = useParams();
//   const id = params.id;
//   const [car, setCar] = useState([]);
//   const carRef = doc(fireDB, "carDetails", id);

//   useEffect(() => {
//     async function getData() {
//       const data = await getDoc(carRef);
//       setCar(data.data());
//     }
//     getData();
//   }, []);


  const car={
    carName:'Camry Lexus',
    priceDay: 12
  }

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Daily Rental</Modal.Title>
      </Modal.Header>
        <Modal.Body>
         <p>{car.carName}</p>
         <p>{car.priceDay}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Link to={'#'}>
          
          <Button type="submit" variant="primary" >
            Save Changes
          </Button>
          </Link>
        </Modal.Footer>
   
    </div>
  );
}
