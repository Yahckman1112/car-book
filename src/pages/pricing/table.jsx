import React from "react";
import car from "./../../assets/car-4.jpg";
import ReactStars from "react-rating-stars-component";
import styles from "./pricing.module.scss";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { fireDB } from "../../firebas";
import Modal from "react-bootstrap/Modal";
// import  {RentingModal}  from "./rentingModal";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import {} from "firebase/firestore";
import Loader from "../../components/Loader/loader";
// import { fireDB } from "../../firebas";

function PriceTable(props) {
  const [cars, setCars] = useState([]);
  const carsRef = collection(fireDB, "carDetails");
  const [isFetching, setIsfetching] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsfetching(true);
      try {
        const data = await getDocs(carsRef);
        setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setIsfetching(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className=" container">
      {isFetching && <Loader />}
      <table class="table table-responsive-md ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">#</th>
            <th className={`bg-primary ${styles.head} ${styles.head_hour}`}>
              Per Hour Rate{" "}
            </th>
            <th className={`bg-dark ${styles.head} ${styles.head_rate}`}>
              Per Day rate
            </th>
            <th className={`bg-black ${styles.head} ${styles.head_lease}`}>
              Leasing
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item, i) => (
            <tr>
              <td>
                <img src={car} alt="" max-width={"200px"} height="150px" />{" "}
              </td>

              <td className={styles.product_name}>
                <div className={styles.product_name_para}>
                  <p>{item.carName}</p>
                  <p>
                    <ReactStars
                      count={6}
                      onChange={ratingChanged}
                      size={20}
                      activeColor="#ffd700"
                    />
                  </p>
                </div>
              </td>
              <td className={`${styles.price}`}>
                <p>
                  <span className={styles.num}>
                    {" "}
                    <small className={styles.currency}>$</small> {item.priceDay}{" "}
                  </span>
                  <span className={styles.per}>/per hour</span>
                </p>
                <p className={styles.subHeading}>$3/hour fuel charges</p>
                <p>
                  <Link to={`/cars/${item.id}`} className={styles.btn_custom}>
                    Rent a Car
                  </Link>
                </p>
              </td>
              <td className={`${styles.price}`}>
                {" "}
                <p>
                  <span className={styles.num}>
                    {" "}
                    <small className={styles.currency}>$</small>{" "}
                    {item.priceWeek}{" "}
                  </span>
                  <span className={styles.per}>/per hour</span>
                </p>
                <p className={styles.subHeading}>$3/hour fuel charges</p>
                <p>
                  <a href={`/cars/${item.id}`} className={styles.btn_custom}>
                    Rent a Car
                  </a>
                </p>
              </td>
              <td className={`${styles.price}`}>
                {" "}
                <p>
                  <span className={styles.num}>
                    {" "}
                    <small className={styles.currency}>$</small>{" "}
                    {item.priceMonth}{" "}
                  </span>
                  <span className={styles.per}>/per hour</span>
                </p>
                <p className={styles.subHeading}>$3/hour fuel charges</p>
                <p>
                  <a href={`/cars/${item.id}`} className={styles.btn_custom}>
                    Rent a Car
                  </a>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PriceTable;
