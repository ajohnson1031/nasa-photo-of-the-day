import React, { useState } from "react";

const HDButton = ({ setHD }) => {
  return (
    <button className="hd-button" onClick={() => setHD("visible")}>
      VIEW IN HD
    </button>
  );
};

export default HDButton;
