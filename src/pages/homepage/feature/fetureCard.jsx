import React from "react";
import styles from "./feature.module.scss";
import img from "./../../../assets/car-4.jpg";
import { Link } from "react-router-dom";
import { CardBody, CardTitle, CardSubtitle, CardText, Card } from "reactstrap";
function FetureCard(props) {
  return (
    <div>
      <Card
        style={{
          width: "25rem",
        }}
      >
        <img alt="Card cap" src={img} width="100%" />
        <CardBody>
          <p className={styles.card_para1}>
            {" "}
            <Link to="#">Mercedes Grand Sedan</Link>{" "}
          </p>
          <p>
            <span className={styles.card_para2}>Chevrolet</span>
            <span className={styles.card_para3}>
              {" "}
              500<span className={styles.card_para3_sub}>/day</span>
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
