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
   <div className="row">

   

    {/* <div className={` row ${styles.work}`}>
        <div className="col-12 col-lg-3 col-md-6">
        {data.map((item,i)=>(
                
            <p className={styles.works}>
        <span className={styles.works_main}>< CountUp  duration={5} end={item.num}/></span>
        <span className={styles.works_sub}> {item.text} </span>
      </p>
        ))}
        </div>
 
        </div> */}
    <div className={`row ${styles.work}`}>
        {data.map((item,i)=>(
        <div className="col-12 col-lg-3 col-md-6">
            
                
                <p className={styles.works}>
            <span className={styles.works_main}>< CountUp  duration={5} end={item.num}/></span>
            <span className={styles.works_sub}> {item.text} </span>
          </p>
        </div>
            ))}
        
    </div>
   </div>
  );
}

export default Work;
