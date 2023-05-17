import React, { useState,useEffect } from "react";
import styles from "./pricing.module.scss";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaCog, FaCogs, FaSuitcase, FaUser } from "react-icons/fa";
import { GiCarDoor, GiGearStick } from "react-icons/gi";
import { TbManualGearbox } from "react-icons/tb";
import Badge from "react-bootstrap/Badge";

import carImg from "./../../assets/car-1.jpg";
import pay1 from "./../../assets/card_1.webp";
import pay2 from "./../../assets/card_2.webp";
import pay3 from "./../../assets/card_3.webp";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../../firebas";
function PriceCard(props) {
  const [like, setLike] = useState(true);
  const [cars, setCars] = useState([]);
  const [carInfo, setCarIfo] = useState({})
const carCollectionRef = collection(fireDB, 'carDetails')

useEffect(()=>{
    async function getData(){
        const data = await getDocs(carCollectionRef);
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setCars(data .docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        // console.log(data .docs.map((doc) => ({ ...doc.data().carInfo })));
        setCarIfo(data .docs.map((doc) => ({ ...doc.data().carInfo })));
        
    }
    getData()
}, [])
  return (
    <div className="">
        {cars.map((item=>(
            <div className={styles.card}>
         
         
        <div className={styles.card_top}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setLike(!like);
            }}
          >
            {like ? <FcLikePlaceholder size={20} /> : <FcLike size={20} />}
          </div>
          <div>
            <p className={styles.card_para1}>{item.carName}</p>
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
              className="img-fluid"
              src={carImg}
              height={170}
              style={{ borderRadius: ".5rem" }}
              alt="car picture"
            />
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className={styles.card_car_info}>
              <div className={styles.card_car_info_option_1}>
                <FaUser size={23} />
                Seat: {'1'}
              </div>

              <div className={styles.card_car_info_option_2}>
                <FaSuitcase size={23} /> Baggage: 1
              </div>
              <div className={styles.card_car_info_option_3}>
                <GiCarDoor size={23} /> Doors: 2
              </div>
              <div className={styles.card_car_info_option_4}>
                <TbManualGearbox size={23} /> Manual
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className={styles.pay}>
              <div className={styles.pay_img}>
                <img src={pay1} alt="card_img" />
                <img src={pay2} alt="card_img" />
                <img src={pay3} alt="card_img" />
              </div>

              <div className={styles.pay_price}>
                <p className={styles.price1}>Price for 4days</p>
                <p className={styles.price2}>#{item.priceS}</p>
                <p className={styles.price3}>#{item.price}</p>

                <a href="#" className={styles.btn_custom}>
                  Rent a Car
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
        )))}
    </div>
  );
}

export default PriceCard;
