import React from "react";
import styles from "./header.module.scss";
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineMenuUnfold } from "react-icons/ai";
import {CgMenuGridR} from 'react-icons/cg'
import { useState } from "react";

import Offcanvas from 'react-bootstrap/Offcanvas';
import { FcServices} from 'react-icons/fc';
import {BsInfoCircle} from 'react-icons/bs'
import {MdContactMail, MdPriceChange} from 'react-icons/md'
import {IoCarSportSharp} from 'react-icons/io5'
import {GrBlog} from 'react-icons/gr'
function Header(props) {
    const [isActive, setisActive] = useState(false)
    const [show, setShow]=useState(false);

    const handleShow=()=>{setShow(true)}
    const handleclose=()=>{setShow(false)}
    const handleActive=()=>{
     
        setisActive(!isActive)
    }
  return (
    <div>
      <div className={`container ${styles.header}`}>
        <div className={styles.title}>
          <span className={styles.title_main}>Car</span>
          <span className= {styles.title_sub}>Book</span>
        </div>

        <nav className={`${styles.hideOnMobile} ${styles.navs}`}>
            <Link to='/'  className={` ${styles.nav_items}`}>Home</Link>
            <Link to='/about'  className={` ${styles.nav_items}`}>About</Link>
            <Link to='/services'  className={` ${styles.nav_items}`}>Service</Link>
            <Link to='/pricing'  className={` ${styles.nav_items}`}>Pricing</Link>
            <Link to='#'  className={` ${styles.nav_items}`}>Car</Link>
            <Link to='#'  className={` ${styles.nav_items}`}>Blog</Link>
            <Link to='contact'  className={` ${styles.nav_items}`}>Contact</Link>
        </nav>


        <div className={`${styles.hideOnDesktop} ${styles.icon}`}>
           <CgMenuGridR size={30} onClick={handleShow}/>
           
           <Offcanvas show={show} onHide={handleclose} placement={"end"} >

           <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <div className={styles.title}>
          <span className={styles.title_main}>Car</span>
          <span className= {styles.title_sub}>Book</span>
        </div>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div className={styles.resp_nav}>
            <Link to='/' onClick={handleclose} className={styles.resp_navs}> <span className={styles.resp_navs_logo}><AiFillHome size={20}/></span> Home</Link>
            <Link to='/about' onClick={handleclose} className={styles.resp_navs}> <span className={styles.resp_navs_logo}>< BsInfoCircle size={20}/></span> About</Link>
            <Link to='/services' onClick={handleclose} className={styles.resp_navs}> <span className={styles.resp_navs_logo}><FcServices size={20}/></span> Service</Link>
            <Link to='/pricing' onClick={handleclose} className={styles.resp_navs}> <span className={styles.resp_navs_logo}><MdPriceChange size={20}/></span> Pricing</Link>
            <Link to='#' onClick={handleclose} className={styles.resp_navs}> <span className={styles.resp_navs_logo}>< IoCarSportSharp size={20}/></span>  Car</Link>
            <Link to='#' onClick={handleclose} className={styles.resp_navs}> <span className={styles.resp_navs_logo}>< GrBlog size={20}/></span> Blog</Link>
            <Link to='/contact' onClick={handleclose} className={styles.resp_navs}> <span className={styles.resp_navs_logo}>< MdContactMail size={20}/></span>  Contact</Link>
            
          </div>
        </Offcanvas.Body>
           </Offcanvas>
       </div>

      
       
      </div>
    </div>
  );
}

export default Header;
