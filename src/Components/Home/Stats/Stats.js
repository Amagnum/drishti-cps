import React from "react";

import "./Stats.css";

function Stats(props) {
  return (
    <>
      <div className="stats">
        <img src={props.src} alt="image" height="100" width="70%" />
        <h3>
          {props.caption1}
          <br />
          {props.caption2}
        </h3>
      </div>
    </>
  );
}

export default Stats;
