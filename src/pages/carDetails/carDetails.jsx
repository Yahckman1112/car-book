import React from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiCarSeat, GiLightningSpanner } from "react-icons/gi";
import { RiGasStationFill, RiLuggageCartLine } from "react-icons/ri";
import BannerUsed from "./../../components/banner/banner";
import styles from "./carDetails.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
function CarDetails(props) {
  const carInfos = [
    {
      logo: <BsSpeedometer2 size={40} />,
      text: "Millage",
      sub: "40,000",
    },
    {
      logo: <GiLightningSpanner size={40} />,
      text: "Transmission",
      sub: "Manual",
    },
    {
      logo: <GiCarSeat size={40} />,
      text: "Seats",
      sub: "5  Adults",
    },
    {
      logo: <RiLuggageCartLine size={40} />,
      text: "Luggage",
      sub: "4 Bags",
    },

    {
      logo: <RiGasStationFill size={40} />,
      text: "Fuel",
      sub: "Petrol",
    },
  ];

  const tabInfo = [
    {
      text: "Airconditions",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
    {
      text: "  Child Seat",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
    {
      text: "GPS",
      sign: "wrong",
      logo: <span>&#x2715;</span>,
    },
    {
      text: "Luggage",
      sign: "mark",
      logo:<span>&#10003;</span>,
    },
    {
      text: "Music",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
    {
      text: "  Seat Belt",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
    {
      text: "  Sleeping bed",
      sign: "wrong",
      logo: <span>&#x2715;</span>,
    },
    {
      text: "  Water ",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
    {
      text: "  Bluetooth ",
      sign: "mark",
      logo:<span>&#10003;</span>,
    },
    {
      text: "  Onboard computer ",
      sign: "wrong",
      logo: <span>&#x2715;</span>,
    },
    {
      text: "  Audio input ",
      sign: "mark",
      logo:<span>&#10003;</span>,
    },
    {
      text: "  Long Term Trips ",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
    {
      text: "  Car Kit ",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
    {
      text: "  Climate control ",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
    {
      text: "  Sleeping ",
      sign: "mark",
      logo: <span>&#10003;</span>,
    },
  ];
  return (
    <div className={styles.detailPage}>
      <div>
        <BannerUsed pageNameSub="Car Details" pageName="Car Details" />
      </div>

      <div className={styles.upper_backgroung}></div>

      <div className={styles.features}>
        <p className={styles.para1}>Chevrolette</p>
        <p className={styles.para2}>Mercedes Grand Sedan</p>
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
          <Tab eventKey="profile" title="Profile">
            {/* <Sonnet /> */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel minima
            quisquam id itaque necessitatibus? Et molestias dignissimos facilis
            in commodi quidem dolorum id nobis voluptatum rem? Ea nam sint
            necessitatibus!
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default CarDetails;
