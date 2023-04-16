import React from "react";
import Banner from "./banner/banner";
import Book from "./book/book";
import Feture from "./feature/feture";
import Aboutus from "./aboutus/aboutus";
import Services from "./services/services";
import Work from "./../../components/input/work/work";
import Footer from "./../../components/footer/footer";
import Header from "../../components/header/header";


function Home(props) {
  return (
    <div>
      < Header/>
      <Banner />
      <Book />
      <Feture />
      <Aboutus />
      <Services />
      <Work />
      <Footer />
    </div>
  );
}

export default Home;
