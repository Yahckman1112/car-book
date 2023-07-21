import React from "react";
import BannerUsed from "../../components/banner/banner";
import Header from "../../components/header/header";
import styles from "./blogs.module.scss";
import img from "../../assets/image_1.jpg";
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'

function Blogs(props) {
  const blogData=[
    {
      img:img,
      title: 'Why Lead Generation is Key for Growth',
      body:`    A small river named Duden flows by their place and supplies it with
      the necessary regelialia. It is a paradisematic country, in which
      roasted parts of sentences fly into your mouth.
    `,
    },
    {
      img:img,
      title: 'Why Lead Generation is Key for Growth',
      body:`    A small river named Duden flows by their place and supplies it with
      the necessary regelialia. It is a paradisematic country, in which
      roasted parts of sentences fly into your mouth.
    `,
    },
    {
      img:img,
      title: 'Why Lead Generation is Key for Growth',
      body:`    A small river named Duden flows by their place and supplies it with
      the necessary regelialia. It is a paradisematic country, in which
      roasted parts of sentences fly into your mouth
    `,
    },
  ]
  return (
    <div>
      <div>
        <Header />
        <BannerUsed PageName={"Our Blog"} pageNameSub={"Blog"} />
      </div>
      <div className={styles.blogs}>
        {blogData.map(item=>(
          
        <div className={styles.card}>
        <div>
          <img className={styles.image} src={img} alt="Blog Image" />
        </div>

        <div className={styles.para}>
          <p className={styles.para_1}>
           {item.title}
          </p>
          <p className={styles.para_2}>
          {/* {item.body.length>200? `${item.body.substring(0,200)}....`: item.body} */}
        {item.body.substring(0,150)+'....'}
          </p>

          <Link to={'#'} className={styles.para_btn}> Read More < BsArrowRight/></Link>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
