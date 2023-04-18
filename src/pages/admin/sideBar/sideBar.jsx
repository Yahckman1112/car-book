import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
import { FaAccessibleIcon, FaBlog } from "react-icons/fa";
import { border } from "@chakra-ui/react";
import {RxDashboard} from 'react-icons/rx'
import { IoCarSportSharp } from 'react-icons/io5';
import {TbBrandBooking} from 'react-icons/tb'
import {AiOutlineTransaction} from 'react-icons/ai'
import {MdOutlinePayment} from 'react-icons/md'
import {BsFileEarmarkSpreadsheet} from 'react-icons/bs'

function SideBar(props) {
  const [active, setActive] = useState([0]);
  const sideBarDatas = [
    {
      title: "Dashbord",
      icon: <RxDashboard size={20} />,
      link: "/adminAuth/dashboard",
    },
    {
      title: "Driver",
      icon: <IoCarSportSharp size={20} />,
      link: "/adminAuth/dashboard",
    },
    {
      title: "Booking",
      icon: <TbBrandBooking size={20} />,
      link: "/adminAuth/dashboard",
    },
    {
      title: "Transaction",
      icon: <AiOutlineTransaction size={20} />,
      link: "/adminAuth/dashboard",
    },
    {
      title: "Payment Details",
      icon: <MdOutlinePayment size={20} />,
      link: "/adminAuth/dashboard",
    },
    {
      title: "Car Report",
      icon: <BsFileEarmarkSpreadsheet size={20} />,
      link: "/adminAuth/dashboard",
    },
    {
      title: "Blogs",
      icon: <FaBlog size={20} />,
      link: "/adminAuth/dashboard",
    },
  ];
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBar_data}>
        <ul className={styles.sideBar_list}>
          {sideBarDatas.map((item, index) => (
            <Link className={styles.link} to={item.link}>
              <li
                style={{
                  // color: active == index && "white",
                  // borderLeft: active == index && "1px solid #00B6FF",
                  backgroundColor: active == index && "#e6e9ed",
                }}
                onClick={()=>setActive(index)}
                key={index}
                className={styles.sideBar_row}
              >
                <div className={styles.icon}>{item.icon}</div>
                <div className={styles.title}>{item.title}</div>
              </li>
            </Link>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default SideBar;
