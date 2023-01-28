import React from "react";
import styles from "./feature.module.scss";
import img from "./../../../assets/car-4.jpg";
import { Link } from "react-router-dom";
import { CardBody, CardTitle, CardSubtitle, CardText, Card } from "reactstrap";
function FetureCard({image, carName, days}) {
  return (
    <div>
      <Card
        style={{
          width: "100%",
        }}
      >
        <img alt="Card cap" src={image} width="100%" />
        <CardBody>
          <p className={styles.card_para1}>
            {" "}
            <Link to="#">{carName}</Link>{" "}
          </p>
          <p>
            <span className={styles.card_para2}>Chevrolet</span>
            <span className={styles.card_para3}>
              {" "}
              {days}<span className={styles.card_para3_sub}>/day</span>
            </span>
          </p>
          <div className={styles.card_btn}>
          <Link to="#" className={styles.card_btn_book}>Book</Link>
          <Link to="#" className={styles.card_btn_det}>Details</Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default FetureCard;
