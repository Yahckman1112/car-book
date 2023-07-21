import React, { useEffect, useState } from "react";
import BannerUsed from "../../components/banner/banner";
import styles from "./cars.module.scss";
import carImage from "./../../assets/car-2.jpg";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import Footer from "./../../components/footer/footer";
import Header from "../../components/header/header";
import Loader from "./../../components/Loader/loader";
import api from "../../confog.json";
import { Payment } from "../../util/flutterPayment";
import axios from "axios";
import config from '../../confog.json'

function Cars(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cars, setCars] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsFetching(true);
        const result = await axios.get(`${config.apiUrl}/cars`);
        setCars(result.data);
        setIsFetching(false);
      } catch (ex) {
        console.log("error", ex);
        setIsFetching(false);
      }
    }
    getData();
  }, []);

  const handlePayment = Payment(20);

  return (
    <div>
      {isFetching && <Loader />}
      <Header />
      <div>
        <BannerUsed pageNameSub={"Cars"} PageName="Choose Your Car" />
      </div>
      <div className={`row ${styles.cars}`}>
        {cars.map((item, i) => (
          <div key={i} className="col-12 col-lg-4 col-md-4">
            <Card
              className={styles.car_card}
              style={{
                width: "100%",
              }}
            >
              <img
                alt="Card cap"
                src={carImage}
                max-width="100%"
                style={{ borderRadius: "8px" }}
              />
              <CardBody>
                <div className={styles.cardBody}>
                  <p>
                    <a href="#" className={styles.card_para}>
                      {item.name}
                    </a>
                  </p>
                  <p className={styles.card_para2}>
                    <p className={styles.card_para2_main}>Cheverolette</p>
                    <p className={styles.card_para2_sub}>
                      ${item.dayPrice || 10}
                      <span className={styles.day}> /day</span>
                    </p>
                  </p>
                  <div className={styles.btn}>
                    <Link
                      variant="primary"
                      onClick={handlePayment}
                      className={` ${styles.btn_book} `}
                      to="#"
                    >
                      Book Now
                    </Link>

                    <Link
                      className={` ${styles.btn_det}`}
                      to={`/cars/${item._id}`}
                    >
                      Details{" "}
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Cars;
