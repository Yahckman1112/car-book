import React, { useState, useEffect } from "react";
import BannerUsed from "./../../components/banner/banner";
import styles from "./carDetails.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Footer from "./../../components/footer/footer";
import Header from "../../components/header/header";
import { fireDB } from "../../firebas";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { carInfos, tabInfo } from "./carData";
import Loader from "../../components/Loader/loader";

function CarDetails(props) {
  const [isFetching, setIsFetching] = useState(false);
  const params = useParams();
  const id = params.id;
  const [car, setCar] = useState([]);
  const carRef = doc(fireDB, "carDetails", id);

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      try {
        const data = await getDoc(carRef);
        console.log(data.data().carName);
        setCar(data.data());
        setIsFetching(false);
      } catch (error) {}
    }
    getData();
  }, []);

  return (
    <div className={styles.detailPage}>
      {isFetching && <Loader />}
      <Header />
      <div>
        <BannerUsed pageNameSub="Car Details" PageName="Car Details" />
      </div>

      <div className={styles.upper_backgroung}></div>

      <div className={styles.features}>
        <p className={styles.para1}>Chevrolette</p>
        <p className={styles.para2}>{car.carName}</p>
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
              {car.details}
            </div>
          </Tab>
          <Tab eventKey="review" title="Review">
            <div className={styles.decription_tab}> Coming Soon </div>
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default CarDetails;
