import React from "react";
import Spinner from "./spinner.svg";

require("./style.scss");

const Loader = (props) => {
  return (
    <div className="loading">
      <div className="loading-spinner">
        <img src={Spinner} alt="loading..." />
      </div>
    </div>
  );
};

export default Loader;
