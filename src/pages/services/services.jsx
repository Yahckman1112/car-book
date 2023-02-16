import React from "react";
import Services from "./../homepage/services/services";
import Footer from "./../../components/footer/footer";
import BannerUsed from "../../components/banner/banner";

function ServicesPage(props) {
   const style={
        marginBottom:'-130px'
    }
  return (
    <div>
        <div style={style}>

        <BannerUsed pageNameSub='Services' PageName='Our Services' />
        </div>
      <Services />
      <Footer />
    </div>
  );
}

export default ServicesPage;
