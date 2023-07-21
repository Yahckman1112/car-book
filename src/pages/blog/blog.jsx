import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import styles from './blog.module.scss'

function Blog(props) {
  return (
    <div>
      <Header />
   <div>
    < Banner pageNameSub={'Blog > sdsds'} PageName={' Read Our Blog'}/>
   </div>

   <div className={styles.blog}>
    <div className="row">
        <div className="col-12 col-lg-9 col-md-8"></div>
        <div className="col-12 col-lg-3 col-md-4"></div>
    </div>
   </div>
    </div>
  );
}

export default Blog;
