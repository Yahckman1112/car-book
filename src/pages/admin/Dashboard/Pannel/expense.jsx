import React from "react";
import styles from "./style.module.scss";
function Expense(props) {
  return (
    <div className={styles.body}>
      <div className={styles.exp}>
        <div className="row" style={{ display: "" }}>
          <div className="col-12 col-lg-6 col-md-6">
            <div className={styles.card}>

              <div className={styles.inc} >
                <p>Income</p>
                <p  className={styles.inc_sub}>current</p>
              </div>
              <div className={styles.inc} >
                <p className={styles.amnt}>#95,500</p>
                <p  className={styles.perc}>15%</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6">2</div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
