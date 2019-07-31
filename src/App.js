import React, { useState, useEffect } from "react";
import axios from "axios";
import Picture from "./components/Picture";
import "./App.css";
import ImageText from "./components/ImageText";

function App() {
  const [picState, setPicState] = useState();
  const [copyrightState, setCopyRightState] = useState();
  const [photoDateState, setPhotoDateState] = useState();
  const [titleState, setTitleState] = useState();
  const [expState, setExpState] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ndSqWHxm1joz14pwLd9KM7dki3Qd5GoFPBCV0KuP"
      )
      .then(res => {
        console.log(res);

        setPicState(res.data.url);
        setCopyRightState(res.data.copyright);
        setPhotoDateState(res.data.date);
        setTitleState(res.data.title);
        setExpState(res.data.explanation);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="main-container">
        <Picture
          url={picState}
          copyright={copyrightState}
          date={photoDateState}
        />
        <ImageText title={titleState} exp={expState} />
      </div>
    </div>
  );
}

export default App;
