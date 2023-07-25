import React, { useState, useEffect } from "react";
import styles from "./pricing.module.scss";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { FaCog, FaCogs, FaSuitcase, FaUser } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { TbManualGearbox } from "react-icons/tb";
import Badge from "react-bootstrap/Badge";
import carImg from "./../../assets/car-1.jpg";
import pay1 from "./../../assets/card_1.webp";
import pay2 from "./../../assets/card_2.webp";
import pay3 from "./../../assets/card_3.webp";
import api from "../../confog.json";
import axios from "axios";
import { Link } from "react-router-dom";
import { Payment } from "../../util/flutterPayment";
import Swal from "sweetalert2";
import Loader from "../../components/Loader/loader";

function PriceCard(props) {
  const [like, setLike] = useState(true);
  const [cars, setCars] = useState([]);
  const [price, setPrice] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  try {
    useEffect(() => {
      async function getData() {
        setIsFetching(true);
        const { data } = await axios.get(`${api.apiUrl}/cars`);
        setCars(data);
        // const price = data.map((data) => data.weekPrice);
        // setPrice(price);

        setIsFetching(false);
      }
      getData();
    }, []);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error || "Something went wrong!",
    });
    setIsFetching(false);
  }

 const payment= Payment(60)

  // const handlePayment = (selectedPrice) => {
  //   // Handle the payment for the selectedPrice here.
  //   console.log("Selected price:", selectedPrice);
  //   // pay(selectedPrice)

  //   // Replace the above console.log with your payment logic.
  // };

  return (
    <div className="">

      {isFetching && <Loader />}
      {cars.map((item, index) => (
        <div key={item._id} className={styles.card}>
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
                  Seat: {}
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
                  <p className={styles.price2}>#{item.strike || 5000}</p>
                  <p className={styles.price3}>#{item.weekPrice || 10000}</p>

                  <Link
                    // to="#"
                    // onClick={()=>handlePayment(item.weekPrice)}
                    onClick={payment}
                    className={styles.btn_custom}
                  >
                    {" "}
                    Rent a Car
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <Link to="#"  className={styles.btn_custom}> Rent a Car</Link> */}
    </div>
  );
}

export default PriceCard;
