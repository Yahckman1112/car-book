import React, { useEffect, useState } from "react";
import BannerUsed from "../../components/banner/banner";
import Header from "../../components/header/header";
import styles from "./blogs.module.scss";
import img from "../../assets/image_1.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import axios from "axios";
import config from "../../confog.json";

function Blogs(props) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${config.apiUrl}/blogs`);
      setBlogs(data);
    };
    getData();
  }, []);

  return (
    <div>
      <div>
        <Header />
        <BannerUsed PageName={"Our Blog"} pageNameSub={"Blog"} />
      </div>
      <div className={styles.blogs}>
        {blogs.map((item) => (
          <div className={styles.card}>
            <div>
              <img className={styles.image} src={img} alt="Blog Image" />
            </div>

            <div className={styles.para}>
              <p className={styles.para_1}>{item.title}</p>
              <p className={styles.para_2}>
                {/* {item.body.length>200? `${item.body.substring(0,200)}....`: item.body} */}
                {item.blog.substring(0, 150) + "...."}
              </p>

              <Link to={`/blogs/${item._id}`} className={styles.para_btn}>
                {" "}
                Read More <BsArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
