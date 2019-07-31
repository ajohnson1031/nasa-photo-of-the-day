import React, { useState, useEffect } from "react";
import axios from "axios";
import "./picture.css";

const Picture = () => {
  const [picState, setPicState] = useState();
  const [copyrightState, setCopyRightState] = useState();
  const [photoDateState, setPhotoDateState] = useState();

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
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="img-container">
      <div className="img-footer">
        <p className="copyright">Copyright © {copyrightState}</p>
        <p className="photo-date">{photoDateState}</p>
      </div>
      <img src={picState} alt="From NASA" />;
    </div>
  );
};

export default Picture;
