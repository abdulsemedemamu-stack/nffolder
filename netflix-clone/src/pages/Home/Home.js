import React from "react";
import Header from "../../compont/Header/Header";
import Footer from "../../compont/Footer/Footer";
import Banner from "../../compont/banner/Banner";
import RowList from "../../compont/rows/RowList/RowList";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />

      <Footer />
    </>
  );
}

export default Home;
