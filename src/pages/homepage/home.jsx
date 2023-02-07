import React from "react";
import Banner from "./banner/banner";
import Book from "./book/book";
import Feture from "./feature/feture";
import Aboutus from "./aboutus/aboutus";
import Services from "./services/services";
import Work from "./../../components/input/work/work";

function Home(props) {
  return (
    <div>
      <Banner />
      <Book />
      <Feture />
      <Aboutus />
      <Services />
      <Work />
    </div>
  );
}

export default Home;
