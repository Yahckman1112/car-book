import React from "react";
import styles from "./feature.module.scss";
import FetureCard from "./fetureCard";
import img from "./../../../assets/car-4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Fade } from 'react-reveal';
function Feture(props) {
  const carInfo = [
    {
      image: img,
      carName: "Givencci",
      days: "500",
    },
    {
      image: img,
      carName: "Givencci",
      days: "500",
    },
    {
      image: img,
      carName: "Givencci",
      days: "500",
    },
    {
      image: img,
      carName: "Givencci",
      days: "500",
    },
    {
      image: img,
      carName: "Givencci",
      days: "500",
    },
    {
      image: img,
      carName: "Givencci",
      days: "500",
    },
    {
      image: img,
      carName: "Givencci",
      days: "500",
    },
  ];
  return (
    <div className={styles.feture}>
      < Fade bottom>
      <p className={styles.para1}>what we offer</p>

      <p className={styles.para2}>Feeatured Vehicles</p>
      
      </Fade>
      <div className="container-fluid">
      <Fade bottom>
        <Swiper
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1.05,
              spaceBetween: 10,
            },
            640: {
              width: 640,
              slidesPerView: 1.05,
              spaceBetween: 10,
            },

            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
      

          {carInfo.map((item, i) => (
            <SwiperSlide>
              <FetureCard
                image={item.image}
                carName={item.carName}
                days={item.days}
              />
            </SwiperSlide>
          ))}
        </Swiper>
          </Fade>
      </div>
    </div>
  );
}

export default Feture;
