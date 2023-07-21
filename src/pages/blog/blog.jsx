import React from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import styles from "./blog.module.scss";
import img from '../../assets/image_1.jpg'
import Coment from "./coment";

function Blog(props) {
  return (
    <div>
      <Header />
      <div>
        <Banner pageNameSub={"Blog > sdsds"} PageName={" Read Our Blog"} />
      </div>

      <div className={styles.blog}>
        <img src={img} className={`img-fluid ${styles.img}`} alt="" />
        <div className="row">
          <div className="col-12 col-lg-8 col-md-8">
            <div className={styles.side_1}>
              <p className={styles.para_1}>
                It is a long established fact a reader be distracted
              </p>
              <p className={styles.para_2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>

              < Coment/>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <p style={{color:'#999999', fontSize:'2rem'}}> Advertize Here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
