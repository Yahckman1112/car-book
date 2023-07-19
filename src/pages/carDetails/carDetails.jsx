import React, { useState, useEffect } from "react";
import BannerUsed from "./../../components/banner/banner";
import styles from "./carDetails.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Footer from "./../../components/footer/footer";
import Header from "../../components/header/header";
import { useParams } from "react-router-dom";
import { carInfos, tabInfo } from "./carData";
import Loader from "../../components/Loader/loader";
import { Link } from "react-router-dom";
import api from '../../confog.json'
import axios from "axios";
import { Payment } from "../../util/flutterPayment";

function CarDetails(props) {
  const [isFetching, setIsFetching] = useState(false);
  const params = useParams();
  const id = params.id;
  const [car, setCar] = useState([]);
  const [price,setPrice] = useState('')

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      try {
        const { data } = await axios.get(
          `${api.apiUrl}/cars/${id}`
        );
        setCar(data);
        const price = data.dayPrice
        setPrice(price);
        console.log(price);

      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);
  const handlePayment = Payment(price);

  return (
    <div className={styles.detailPage}>
      {isFetching && <Loader />}
      <Header />
      <div>
        <BannerUsed pageNameSub="Car Details" PageName="Car Details" />
      </div>

      {/* <div className={styles.upper_backgroung}></div> */}

      <div className={styles.features}>
        <p className={styles.para1}>Chevrolette</p>
        <p className={styles.para2}>{car.name}</p>
        <div className="container">
          <div className="row">
            {carInfos.map((item, i) => (
              <div className="col-12 col-lg-3 col-md-3">
                <div className={styles.carInfo}>
                  <p className={styles.info_logo}>{item.logo}</p>
                  <p className={styles.info_detail}>
                    <span className={styles.info_detail_main}>{item.text}</span>
                    <span className={styles.info_detail_sub}>{item.sub}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* tab beging */}

      <div className={styles.tab}>
        <Tabs
          defaultActiveKey="features"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="features" title="Features">
            {/* <Sonnet /> */}
            <div className="container">
              <div className="row">
                {tabInfo.map((item) => (
                  <div className="col-12 col-lg-4 col-md-4">
                    <span
                      className={
                        item.sign === "mark" ? styles.mark : styles.wrong
                      }
                    >
                      {item.logo}{" "}
                    </span>{" "}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </Tab>
          <Tab eventKey="description" title="Description">
            <div
              className={styles.decription_tab}
              style={{ whiteSpace: "pre-line" }}
            >
              {car.description}
            </div>
          </Tab>
          <Tab eventKey="review" title="Review">
            <div className={styles.decription_tab}> Coming Soon </div>
          </Tab>
        </Tabs>
      </div>
      <div className={styles.btn_cont}>
        <Link onClick={handlePayment} className={styles.book_btn} to="#">
          {" "}
          Continue to Book
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default CarDetails;
