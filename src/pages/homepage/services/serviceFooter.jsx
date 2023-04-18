import React from "react";
import styles from "./services.module.scss";
import {Link} from 'react-router-dom'
function ServiceFooter(props) {
  return (
    <div>
      <div className={styles.service_footer}>
        <div className={styles.footer_body}>
          <div className={styles.footer_body_main}></div>
          <div className={styles.footer_body_sub}>
          
              <div className={styles.footer_content}>
                <p className={styles.footer_content_para}>
                  Do You Want To Earn With Us? So Don't Be Late.
                </p>

                <Link to="#" className="btn btn-primary btn-lg">
                  Become a driver
                </Link>
              </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceFooter;
