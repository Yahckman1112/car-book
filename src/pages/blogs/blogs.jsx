import React, { useEffect, useState } from "react";
import BannerUsed from "../../components/banner/banner";
import Header from "../../components/header/header";
import styles from "./blogs.module.scss";
import img from "../../assets/image_1.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import axios from "axios";
import http from '../../services/httpService'
import config from "../../confog.json";
import Loader from "../../components/Loader/loader";
import Swal from "sweetalert2";


function Blogs(props) {
  const [blogs, setBlogs] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetching(true);
        const { data } = await http.get(`${config.apiUrl}/blogs`);
        setBlogs(data);

        setIsFetching(false);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops....",
          text: error.response.data || "Fail to get",
        });
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div>
        {isFetching && <Loader />}
        <Header />

        <BannerUsed PageName={"Our Blog"} pageNameSub={"Blog"} />
      </div>
      <div className={styles.blogs}>
        {blogs.map((item, i) => (
          <div key={{ i }} className={styles.card}>
            <div>
              <img
                className={` img-fluid ${styles.image}`}
                src={item.image}
                alt="Blog Image"
              />
            </div>

            <div className={styles.para}>
              <p className={styles.para_1}>{item.title}</p>
              <p className={styles.para_2}>
                {/* {item.body.length>200? `${item.body.substring(0,200)}....`: item.body} */}
                {item.blog.substring(0, 120) + "...."}
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
