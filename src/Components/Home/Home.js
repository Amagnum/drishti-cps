import React from "react";
import Carousel from "./Carousel/Carousel";
import Updates from "./NewsAndUpdates/Updates";
import Stats from "./Stats/Stats";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="backdrop"></div>
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
          <div className="col-12 col-md-3">
            <Stats src="assets/startups.svg" caption2="Supporting Startups" />
          </div>
          <div className="col-12 col-md-3">
            <Stats
              src="assets/employement.svg"
              caption2="Creating Employment"
            />
          </div>
          <div className="col-12 col-md-3">
            <Stats
              src="assets/entrepreneurs.svg"
              caption2="Building Entrepreneurs"
            />
          </div>
          {/*< div className="col-12 col-md-3">
                    < Stats src="assets/funds.svg"  caption2="Funds Raised" />
                </div>*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
