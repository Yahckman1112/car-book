import React from "react";
import styles from "./header.module.scss";
import { Link } from 'react-router-dom';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
function Header(props) {
    const [isActive, setisActive] = useState(false)

    const handleActive=()=>{
     
        setisActive(!isActive)
    }
  return (
    <div>
      <div className={`container ${styles.header}`}>
        <div className={styles.title}>
          <span className={styles.title_main}>Car</span>
          <span className= {styles.title_sub}>Book</span>
        </div>

        <nav className={`${styles.hideOnMobile} ${styles.navs}`}>
            <Link to='#' onClick={handleActive} className={`${isActive? `${styles.active}`: `${styles.not_active}`} ${styles.nav_items}`}>Home</Link>
            <Link to='#' onClick={handleActive} className={`${isActive? `${styles.active}`: `${styles.not_active}`} ${styles.nav_items}`}>About</Link>
            <Link to='#' onClick={handleActive} className={`${isActive? `${styles.active}`: `${styles.not_active}`} ${styles.nav_items}`}>Service</Link>
            <Link to='#' onClick={handleActive} className={`${isActive? `${styles.active}`: `${styles.not_active}`} ${styles.nav_items}`}>Pricing</Link>
            <Link to='#' onClick={handleActive} className={`${isActive? `${styles.active}`: `${styles.not_active}`} ${styles.nav_items}`}>Car</Link>
            <Link to='#' onClick={handleActive} className={`${isActive? `${styles.active}`: `${styles.not_active}`} ${styles.nav_items}`}>Blog</Link>
            <Link to='#' onClick={handleActive} className={`${isActive? `${styles.active}`: `${styles.not_active}`} ${styles.nav_items}`}>Contact</Link>
        </nav>


        <div className={`${styles.hideOnDesktop} ${styles.icon}`}>
           <AiOutlineMenuUnfold size={30}/>
        </div>

        
      </div>
    </div>
  );
}

export default Header;
