import React from "react";
import BannerUsed from "./../../components/banner/banner";
import PriceTable from "./table";

function Pricing(props) {
  return (
    <div>
      <div>
        <BannerUsed pageNameSub="Pricing" PageName="Pricing" />
      </div>
    
    <PriceTable/>
      
    </div>
  );
}

export default Pricing;
