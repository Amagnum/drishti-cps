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
            An ecosystem that converts <br /> ideas into products.
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
            <h3>
              About <br />
              IITI Drishti CPS
            </h3>
          </div>
          <div className="col-12 col-md-10 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laudantium inventore, quidem quibusdam accusantium dolorum
            praesentium rerum omnis fugiat, nostrum voluptatem voluptatum
            reprehenderit, corrupti earum nobis voluptates voluptas recusandae
            aperiam repudiandae eligendi iure eius. Voluptate nesciunt minima
            amet. Sint culpa assumenda placeat. Reiciendis ea rerum, veritatis
            error voluptatum quis doloribus nostrum minima aliquam vitae, ab
            maiores, sequi reprehenderit. Error, ipsa repellat possimus sapiente
            aliquam non harum perspiciatis enim temporibus, sed laboriosam esse
            reiciendis fugit veniam.
          </div>
        </div>
        <div className="row row-content tabs">
          <div className="col-12 col-md-10 m-auto">
            <Tabs />
          </div>
        </div>
        <div className="row row-content">
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
      </div>
    </>
  );
}

export default Home;
