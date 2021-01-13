import React from "react";
import Carousel from "./Carousel/Carousel";
import Updates from "./NewsAndUpdates/Updates";
import Stats from "./Stats/Stats";

import Tabs from "./Tabs/Tabs";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="main">
        <div className="main-contents">
          <h3>
            <span> An ecosystem that</span>
            <br />
            <span> converts ideas into </span>
            <br />
            <span> products.</span>
          </h3>
          <h5>IITI DRISHTI CPS FOUNDATION</h5>
        </div>
      </div>
      <div className="container home">
        <div className="row" style={{ marginBottom: "40px" }}>
          <div className="mb-5 col-12 col-md-8">
            <Carousel />
          </div>
          <div className="mb-5 col-12 col-md-4">
            <Updates />
          </div>
        </div>
        <div className="row row-content">
          <div className="row-caption">
            <center>
              <h3 style={{ marginBottom: "10px" }}>
                About <br />
                IITI Drishti CPS
              </h3>
              <h5 style={{ marginBottom: "2rem" }}> FOUNDATION </h5>
            </center>
          </div>
          <div className="col-12 col-md-10 m-auto">
            <center style={{ fontSize: "1.3rem" }}>
              The overarching goal of IITI DRISHTI-CPS Foundation is to develop
              an ecosystem that will enable knowledge generation through basic
              and applied research and foster an interactive environment where
              innovative products can be developed through joint efforts of
              industry and academia.
            </center>
          </div>
        </div>
        <div className="row row-content tabs">
          <div className="col-12 col-md-10 m-auto">
            <Tabs />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f3f3f3ff",
          paddingBottom: "1rem",
          marginTop: "-4rem"
        }}
      >
        <center>
          <div className="container row row-content">
            <div className="row-caption">
              <h3>Impact</h3>
            </div>
            <div className="col-12 col-md-4">
              <Stats
                src="assets/startups.svg"
                caption1="Supporting"
                caption2="Startups"
              />
            </div>
            <div className="col-12 col-md-4">
              <Stats
                src="assets/employement.svg"
                caption1="Creating"
                caption2="Employment"
              />
            </div>
            <div className="col-12 col-md-4">
              <Stats
                src="assets/entrepreneurs.svg"
                caption1="Building"
                caption2="Entrepreneurs"
              />
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Home;
