import React from "react";
import BannerUsed from "./../../components/banner/banner";
import PriceTable from "./table";
import Header from "../../components/header/header";
import PriceCard from "./priceCard";

function Pricing(props) {
  return (
    <div>
      <Header />
      <div>
        <BannerUsed pageNameSub="Pricing" PageName="Pricing" />
      </div>
      

      <PriceCard />
      
    </div>
  );
}

export default Pricing;
