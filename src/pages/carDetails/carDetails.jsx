import React from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { GiCarSeat, GiLightningSpanner } from "react-icons/gi";
import { RiGasStationFill, RiLuggageCartLine } from "react-icons/ri";
import BannerUsed from "./../../components/banner/banner";
import styles from "./carDetails.module.scss";
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
      logo: < GiCarSeat size={40} />,
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
  return (
    <div>
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

            {/* <div className="col-12 col-lg-2 col-md-3">2</div>
          <div className="col-12 col-lg-2 col-md-3">3</div>
          <div className="col-12 col-lg-2 col-md-3">4</div>
        <div className="col-12 col-lg-2 col-md-3">5</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
