import React, { useEffect, useState } from "react";
import BannerUsed from "../../components/banner/banner";
import styles from "./cars.module.scss";
import carImage from "./../../assets/car-2.jpg";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import Footer from "./../../components/footer/footer";
import Header from "../../components/header/header";
import { fireDB } from "../../firebas";
import { collection, getDocs } from "firebase/firestore";
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
  const [cars, setCars] = useState([]);
  const carCollectionRef = collection(fireDB, "carDetails");

  useEffect(() => {
    async function getData() {
      const data = await getDocs(carCollectionRef);
      console.log(data);
      setCars(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <BannerUsed pageNameSub={"Cars"} PageName="Choose Your Car" />
      </div>
      <div className={`row ${styles.cars}`}>
        {cars.map((item) => (
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
                src={carImage}
                max-width="100%"
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
                      ${item.price}
                      <span className={styles.day}> /day</span>
                    </p>
                  </p>
                  <div className={styles.btn}>
                    <Link className={` ${styles.btn_book} `} to="#">
                      Book Now
                    </Link>
                    <Link className={` ${styles.btn_det}`} to="/carDetails">
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
