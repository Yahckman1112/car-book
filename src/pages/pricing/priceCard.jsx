import React from "react";
import styles from "./pricing.module.scss";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import {FaCog, FaCogs, FaSuitcase, FaUser} from 'react-icons/fa'
import { GiCarDoor , GiGearStick } from 'react-icons/gi';
import {TbManualGearbox} from 'react-icons/tb'
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import carImg from "./../../assets/car-1.jpg";
function PriceCard(props) {
  const [like, setLike] = useState(true);

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div className="container">
      <div className={styles.card}>
        <div className={styles.card_top}>
          <div style={{ cursor: "pointer" }} onClick={handleLike}>
            {like ? <FcLikePlaceholder size={20} /> : <FcLike size={20} />}
          </div>
          <div>
            <p className={styles.card_para1}>Toyota Island</p>
          </div>
          <p className={styles.card_para2}>
            {" "}
            Top Seller{" "}
            <span>
              {" "}
              <Badge bg="danger">save 35%</Badge>{" "}
            </span>{" "}
          </p>
        </div>

        {/* body */}
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4">
            <img
              className={styles.img}
              src={carImg}
              height={170}
              style={{ borderRadius: ".5rem" }}
              alt="car picture"
            />
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className={styles.card_car_info}>
              <div className={styles.card_car_info_option_1}>
                <FaUser size={23} />{" "}
                Seat: 4
              </div>

              <div className={styles.card_car_info_option_2}>
                <FaSuitcase size={23} />{" "}
                Baggae: 1
              </div>
              <div className={styles.card_car_info_option_3}>
                <GiCarDoor size={23} />{" "}
                Doors: 2
              </div>
              <div className={styles.card_car_info_option_4}>
                <  TbManualGearbox  size={23} />{" "}
                Manual: 1
              </div>
           
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">3</div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;
