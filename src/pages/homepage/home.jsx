import React from "react";
import Banner from "./banner/banner";
import Book from "./book/book";
import Feture from "./feature/feture";

function Home(props) {
  return (
    <div>
      <Banner />
      <Book />
      <Feture />
    </div>
  );
}

export default Home;
