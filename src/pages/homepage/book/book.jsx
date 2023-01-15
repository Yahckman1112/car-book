import React from "react";
import FormInput from "../../../components/input/input";
import styles from "./book.module.scss";
import { Link } from "react-router-dom";
import {FaAccessibleIcon, FaTable} from 'react-icons/fa'
function Book(props) {
  return (
    <div>
      <div className={`container ${styles.book}`}>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4">
            <form className={styles.form}>
              <p className={styles.para1}>Make your Trip</p>
              <FormInput
                label="PICK-UP LOCATION"
                placeholder="city, airpott etc..."
                type="input"
              />
              <FormInput
                label="DROP-OFF LOCATION"
                placeholder="city, airpott etc..."
                type="input"
              />
              <FormInput label="PICK-UP DATE" placeholder="Date" type="date" />
              <FormInput label="DROP-OFF DATE" placeholder="Date" type="date" />
              <FormInput label="PICK-UP TIME" placeholder="time" type="time" />
              <Link to="#" className={styles.btn}>
                Submit
              </Link>
            </form>
          </div>

          <div className="col-12 col-lg-8 col-md-8">
            <div className={styles.car}>
              <p className={styles.car_para1}>
                Better Way to Rent a Perfect Car
              </p>

              <div className={styles.car_logo}>
              <span className={`${styles.logos} ${styles.car_Logo1}`}> < FaAccessibleIcon/>  </span>
              {/* <p>Choose ur pick-up location</p> */}
              <span className={`${styles.logos} ${styles.car_Logo2}`}> < FaAccessibleIcon/>  </span>
              <span className={`${styles.logos} ${styles.car_Logo3}`}> < FaAccessibleIcon/>  </span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
