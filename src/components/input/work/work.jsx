import React from "react";
import CountUp from "react-countup";
import styles from "./work.module.scss";
function Work(props) {
    const data=[
        {
            num:60,
            text:'Year Experienced'
        },
        {
            num:1090,
            text:'Total Cars'
        },
        {
            num:2590,
            text:'Happy Customer'
        },
        {
            num:67,
            text:'Total Branches'
        },
    ]
  return (
   <div>

   

    <div className={styles.work}>
        {data.map((item,i)=>(

      <p className={styles.works}>
        <span className={styles.works_main}>< CountUp  duration={5} end={item.num}/></span>
        <span className={styles.works_sub}> {item.text} </span>
      </p>
        ))}
      {/* <p className={styles.works}>
        <span className={styles.works_main}>1,090</span>
        <span className={styles.works_sub}> Total cars </span>
      </p>
      <p className={styles.works}>
        <span className={styles.works_main}>2,590</span>
        <span className={styles.works_sub}> Happy customer</span>
      </p>
      <p className={styles.works}>
        <span className={styles.works_main}>67</span>
        <span className={styles.works_sub}> Total Branches</span>
      </p> */}
    </div>
 
   </div>
  );
}

export default Work;
