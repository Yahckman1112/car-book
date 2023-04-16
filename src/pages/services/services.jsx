import React from "react";
import Services from "./../homepage/services/services";
import Footer from "./../../components/footer/footer";
import BannerUsed from "../../components/banner/banner";
import Header from "../../components/header/header";

function ServicesPage(props) {
  const style = {
    marginBottom: "-130px",
  };
  return (
    <div>
      <Header />
      <div style={style}>
        <BannerUsed pageNameSub="Services" PageName="Our Services" />
      </div>
      <Services />
      <Footer />
    </div>
  );
}

export default ServicesPage;
