import React from "react";
import FormInput from "../../../components/input/input";
import styles from "./book.module.scss";
import { Link } from "react-router-dom";
import { FaRegHandshake, FaTable } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import Fade from 'react-reveal/Fade'
function Book(props) {
  return (
    <div>
      < Fade bottom>
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
                <div className="row">
                  <div className={`col-12 col-lg-4 col-md-4 ${styles.logo}`}>
                    <RiUserLocationFill className={`${styles.logos}`} />
                    <p className={styles.logo_text}>
                      Choose Your Pickup Location
                    </p>
                  </div>
                  <div className={`col-12 col-lg-4 col-md-4 ${styles.logo}`}>
                    <FaRegHandshake className={`${styles.logos}`} />
                    <p className={styles.logo_text}>Select the Best Deal</p>
                  </div>
                  <div className={`col-12 col-lg-4 col-md-4 ${styles.logo}`}>
                    <AiOutlineCar className={`${styles.logos}`} />
                    <p className={styles.logo_text}>Reserve Your Rental Car</p>
                  </div>
                  <Link to="#" className={styles.logo_btn}>
                   
                    Reserve Your car
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Book;
