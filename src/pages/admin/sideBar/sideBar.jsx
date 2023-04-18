import React from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
function SideBar(props) {
  return (
    <div className={styles.sideBar}>
      <Link to="/adminAuth/dashboard">dah</Link> <br />
      <Link to="/adminAuth/drivers">Driver</Link>
      <br />
      <Link to="/adminAuth/booking">Bookings</Link>
    </div>
  );
}

export default SideBar;
