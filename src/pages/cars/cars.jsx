import React from "react";
import BannerUsed from "../../components/banner/banner";
import styles from "./cars.module.scss";
import carImage from "./../../assets/car-2.jpg";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import Footer from "./../../components/footer/footer";
function Cars(props) {
  const cardData = [
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
    {
      carImage,
      carName: "Grando",
    },
  ];
  return (
    <div>
      <div>
        <BannerUsed pageNameSub={"Cars"} PageName="Choose Your Car" />
      </div>
      <div className={`row ${styles.cars}`}>
        {cardData.map((item) => (
          <div className="col-12 col-lg-4 col-md-4">
            <Card
              className={styles.car_card}
              style={{
                width: "100%",
                //   borderRadius:'px'
              }}
            >
              <img
                alt="Card cap"
                src={item.carImage}
                width="100%"
                style={{ borderRadius: "8px" }}
              />
              <CardBody>
                <div className={styles.cardBody}>
                  <p>
                    <a href="#" className={styles.card_para}>
                      {item.carName}
                    </a>
                  </p>
                  <p className={styles.card_para2}>
                    <p className={styles.card_para2_main}>Cheverolette</p>
                    <p className={styles.card_para2_sub}>
                      $500
                      <span className={styles.day}> /day</span>
                    </p>
                  </p>
                  <div className={styles.btn}>
                    <Link className={` ${styles.btn_book} `} to="#">
                      Book Now
                    </Link>
                    <Link className={` ${styles.btn_det}`} to="#">
                      Details{" "}
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}

        <div className="col-12 col-lg-4 col-md-4"></div>
        <div className="col-12 col-lg-4 col-md-4"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Cars;
