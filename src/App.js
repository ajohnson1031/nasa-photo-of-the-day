import React, { useState, useEffect } from "react";
import axios from "axios";
import Picture from "./components/Picture";
import ImageText from "./components/ImageText";

import "./App.css";

function App() {
  const [picState, setPicState] = useState();
  const [copyrightState, setCopyRightState] = useState();
  const [photoDateState, setPhotoDateState] = useState();
  const [titleState, setTitleState] = useState();
  const [expState, setExpState] = useState();
  const [hdState, setHDState] = useState();
  const hdVisState = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ndSqWHxm1joz14pwLd9KM7dki3Qd5GoFPBCV0KuP"
      )
      .then(res => {
        setPicState(res.data.url);
        setCopyRightState(res.data.copyright);
        setPhotoDateState(res.data.date);
        setTitleState(res.data.title);
        setExpState(res.data.explanation);
        setHDState(res.data.hdurl);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <div
        className="hd-modal"
        style={{ visibility: hdVisState[0] ? "visible" : "hidden" }}
      >
        <img src={hdState} alt="HD From NASA" />
        <button
          className="close-button"
          onClick={() => hdVisState[1](!hdVisState[0])}
        >
          X
        </button>
      </div>
      <h1>NASA Photo of the Day</h1>
      <div className="main-container">
        <Picture
          url={picState}
          copyright={copyrightState}
          date={photoDateState}
        />
        <ImageText title={titleState} exp={expState} hdVisState={hdVisState} />
      </div>
    </div>
  );
}

export default App;
