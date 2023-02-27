import React from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiCarSeat, GiLightningSpanner } from "react-icons/gi";
import { RiGasStationFill, RiLuggageCartLine } from "react-icons/ri";
import BannerUsed from "./../../components/banner/banner";
import styles from "./carDetails.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Footer from "./../../components/footer/footer";
function CarDetails(props) {
  const descriptionInfo = {
    text: `      Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
    When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the  subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. `,
  };
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
      logo: <span>&#10003;</span>,
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
      logo: <span>&#10003;</span>,
    },
    {
      text: "  Onboard computer ",
      sign: "wrong",
      logo: <span>&#x2715;</span>,
    },
    {
      text: "  Audio input ",
      sign: "mark",
      logo: <span>&#10003;</span>,
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
        <BannerUsed pageNameSub="Car Details" PageName='Car Details' />
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
          <Tab eventKey="description" title="Description">
            <div
              className={styles.decription_tab}
              style={{ whiteSpace: "pre-line" }}
            >
              {descriptionInfo.text}
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
