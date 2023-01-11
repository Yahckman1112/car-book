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
            <div className={`container ${styles.book}`}>
                <div className="row">
                    <div className="col-12 col-lg-4 col-md-4">
                        <form className={styles.form}>
                            asdfg
                        </form>
                    </div>
                    <div className="col-12 col-lg-8 col-md-8">2</div>
                </div>
            </div>
        </div>
    );
}

export default Banner;