import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import styles from "./blog.module.scss";
import img from "../../assets/image_1.jpg";
import Coment from "./coment";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../../confog.json";
import Messages from "./messages";

function Blog(props) {
  const [blog, setBlog] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${config.apiUrl}/blogs/${id}`);
      setBlog(res.data);
    };
    getData();
  }, []);
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
              <p className={styles.para_1}>{blog.title}</p>
              <p className={styles.para_2}>{blog.blog}</p>
              <div>
                <Messages />
              </div>

              <Coment />
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <p style={{ color: "#999999", fontSize: "2rem" }}>
              {" "}
              Advertize Here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
