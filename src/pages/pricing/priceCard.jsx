import React from "react";
import styles from "./pricing.module.scss";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useState } from "react";
function PriceCard(props) {
  const [like, setLike] = useState(true);

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <div className="container">
      <div className={styles.card}>
        <div className={styles.card_top}>
          <div style={{cursor:'pointer'}} onClick={handleLike}>
            {like ? <FcLikePlaceholder size={20} /> : <FcLike size={20} />}
          </div>
          

        </div>




      </div>
    </div>
  );
}

export default PriceCard;
