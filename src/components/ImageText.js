import React from "react";
import "./imageText.css";
//import HDButton from "./HDButton"

const ImageText = ({ title, exp }) => {
  return (
    <div className="main-text-div">
      <h3>{title}</h3>
      <div className="inner-text-div">
        <p>{exp}</p>
      </div>
    </div>
  );
};

export default ImageText;
