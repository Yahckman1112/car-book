import React from 'react';
import styles from './banner.module.scss'
function Banner(props) {
    return (
        <div>
            
            <div className={styles.banner}>
                <p className={styles.para1}>Fast & Easy Way To Rent A Car</p>
                <p className={styles.para2}>
                    <span className={styles.para2_main}>A small river named Duden flows by their place and supplies it with the</span>
                    <span className={styles.para2_sub}>necessary regelialia. It is a paradisematic country, in which roasted parts</span>
                </p>
            </div>

        </div>
    );
}

export default Banner;