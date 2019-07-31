import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import "./imageText.css";
import HDButton from "./HDButton";

const ImageText = ({ title, exp, hdVisState }) => {
  return (
    <div className="main-text-div">
      <h3>{title}</h3>
      <div className="inner-text-div">
        <Scrollbar
          style={{ width: "100%", height: "100%" }}
          maximalThumbYSize={100}
        >
          <p>{exp}</p>
        </Scrollbar>
      </div>
      <HDButton hdVisState={hdVisState} />
    </div>
  );
};

export default ImageText;
