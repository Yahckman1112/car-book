import React from "react";
import BannerUsed from "./../../components/banner/banner";
import PriceTable from "./table";
import Header from "../../components/header/header";

function Pricing(props) {
  return (
    <div>
      < Header/>
      <div>
        <BannerUsed pageNameSub="Pricing" PageName="Pricing" />
      </div>
    <div className="table-responsive" style={{marginTop:'20px'}}>

    <PriceTable/>
    </div>
      
    </div>
  );
}

export default Pricing;
