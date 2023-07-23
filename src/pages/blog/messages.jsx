import React, { useEffect, useState } from "react";
import styles from "./blog.module.scss";
import axios from "axios";
import config from "../../confog.json";
import Swal from "sweetalert2";

function Messages(props) {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const { data } = await axios.get(`${config.apiUrl}/messages`);
        console.log(data);
        const num = data.length
        setNum(num);
        setData(data);
        setIsLoading(false)
        

      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops....",
          text: error.response.data || "Fail to upload",
          showCancelButton: true,
          showConfirmButton: false,
        });
      }
    };


    getData();
  }, []);



  return (
    <div className={styles.msg}>
      {isLoading && 'Loading.....'}
      <h2 style={{ marginBottom: "2rem" }}> {num} Messages</h2>
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
