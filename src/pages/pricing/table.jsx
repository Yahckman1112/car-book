import React from "react";
import car from "./../../assets/car-4.jpg";
import ReactStars from "react-rating-stars-component";
import styles from "./pricing.module.scss";

function PriceTable(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const tableData=[
    {
        carImage: car,
        carName: 'Chevrolet SUV car',
        priceDay: '350',
        priceWeek: '150',
        priceLease: '650',
    },
    {
        carImage: car,
        carName: 'Chevrolet SUV car',
        priceDay: '350',
        priceWeek: '150',
        priceLease: '650',
    },
    {
        carImage: car,
        carName: 'Chevrolet SUV car',
        priceDay: '350',
        priceWeek: '150',
        priceLease: '650',
    },
    {
        carImage: car,
        carName: 'Chevrolet SUV car',
        priceDay: '350',
        priceWeek: '150',
        priceLease: '650',
    },
    {
        carImage: car,
        carName: 'Chevrolet SUV car',
        priceDay: '350',
        priceWeek: '150',
        priceLease: '650',
    },
    {
        carImage: car,
        carName: 'Chevrolet SUV car',
        priceDay: '350',
        priceWeek: '150',
        priceLease: '650',
    },
  ]
  return (
    <div className="container-fluid">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">#</th>
            <th className={`bg-primary ${styles.head} ${styles.head_hour}`}>
              Per Hour Rate{" "}
            </th>
            <th className={`bg-dark ${styles.head} ${styles.head_rate}`}>
              Per Day rate
            </th>
            <th className={`bg-black ${styles.head} ${styles.head_lease}`}>
              Leasing
            </th>
          </tr>
        </thead>
        <tbody>
            {tableData.map((item,i)=>(

          <tr>
            <td>
              <img src={item.carImage} alt="" width={"200px"} height="150px" />{" "}
            </td>

            <td className={styles.product_name}>
              <p>{item.carName}</p>
              <p>
                <ReactStars
                  count={6}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
              </p>
            </td>
            <td className={`${styles.price}`}>
              <p>
                <span className={styles.num}>
                  {" "}
                  <small className={styles.currency}>$</small> {item.priceDay}{" "}
                </span>
                <span className={styles.per}>/per hour</span>
              </p>
              <p className={styles.subHeading}>$3/hour fuel charges</p>
              <p>
                <a href="#" className={styles.btn_custom}>
                  Rent a Car
                </a>
              </p>
            </td>
            <td className={`${styles.price}`}>
              {" "}
              <p>
                <span className={styles.num}>
                  {" "}
                  <small className={styles.currency}>$</small> {item.priceWeek}{" "}
                </span>
                <span className={styles.per}>/per hour</span>
              </p>
              <p className={styles.subHeading}>$3/hour fuel charges</p>
              <p>
                <a href="#" className={styles.btn_custom}>
                  Rent a Car
                </a>
              </p>
            </td>
            <td className={`${styles.price}`}>
              {" "}
              <p>
                <span className={styles.num}>
                  {" "}
                  <small className={styles.currency}>$</small> {item.priceLease} {" "}
                </span>
                <span className={styles.per}>/per hour</span>
              </p>
              <p className={styles.subHeading}>$3/hour fuel charges</p>
              <p>
                <a href="#" className={styles.btn_custom}>
                  Rent a Car
                </a>
              </p>
            </td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default PriceTable;
