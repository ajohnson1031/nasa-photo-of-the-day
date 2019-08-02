import React from "react";
import { Button } from "semantic-ui-react";
import "./hdbutton.css";

const HDButton = ({ hdVisState }) => {
  return (
    <Button className="hd-button" onClick={() => hdVisState[1](!hdVisState[0])}>
      VIEW IN HD
    </Button>
  );
};

export default HDButton;
