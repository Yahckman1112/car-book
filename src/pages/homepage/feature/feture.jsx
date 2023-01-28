import React from "react";
import styles from "./feature.module.scss";
import FetureCard from './fetureCard';
import img from './../../../assets/car-4.jpg'
function Feture(props) {
  const carInfo = [
    {
      image:img,
      carName:'Givencci',
      days:'500'
    },
    {
      image:img,
      carName:'Givencci',
      days:'500'
    },
    {
      image:img,
      carName:'Givencci',
      days:'500'
    },
  ]
  return (
    <div className={styles.feture}>
      <p  className={styles.para1}>what we offer</p>

      <p className={styles.para2}>Feeatured Vehicles</p>
    <div className="container">

    <div className="row">
      {carInfo.map((info,i)=>(
      <div className="col-12 col-lg-4 col-md-4">
      < FetureCard image={info.image} carName={info.carName} days={info.days}/>
      </div>
        
      ))}
    </div>
    </div>
    </div>
  );
}

export default Feture;
