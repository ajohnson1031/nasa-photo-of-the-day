import React from "react";
import "./hdbutton.css";

const HDButton = ({ hdVisState }) => {
  return (
    <button className="hd-button" onClick={() => hdVisState[1](!hdVisState[0])}>
      VIEW IN HD
    </button>
  );
};

export default HDButton;
