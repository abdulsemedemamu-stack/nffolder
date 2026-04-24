import React from "react";
import Row from "../Row/Row.js";
import requests from "../../../utils/request";
const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Row" fetchUrl={requests.fetchTrending} />
      <Row title=" fetch-ActionMovies" fetchUrl={requests.fetchActionMovies} />
    </>
  );
};
export default RowList;
