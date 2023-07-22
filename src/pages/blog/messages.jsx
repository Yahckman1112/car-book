import React, { useEffect, useState } from "react";
import styles from "./blog.module.scss";
import axios from "axios";
import config from "../../confog.json";

function Messages(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${config.apiUrl}/messages`);
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <div className={styles.msg}>
      <h2 style={{ marginBottom: "2rem" }}> 6 Messages</h2>
      {data.map((item) => (
        <div>
          <div className={styles.msg_para}>
            <div className={styles.msg_para_1}>
              <p className={styles.logo}>{item.name.charAt(0)}</p>
            </div>
            <div className={styles.msg_para_2}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.date}> {item.Date}</div> <br />
              {item.message}
            </div>
          </div>
        </div>
      ))}
   
    </div>
  );
}
export default Messages;
