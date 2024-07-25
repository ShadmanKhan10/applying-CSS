import React from "react";
import "./Features.css";
import Feature1 from "../assets/Feature1.png";
import Feature2 from "../assets/Feature2.png";
import Feature3 from "../assets/Feature3.png";
import Feature4 from "../assets/Feature4.png";

export default function Features() {
  return (
    <div className="features-containing-div">
      <div className="first-two-feature-div">
        <img src={Feature1} alt="feature1" className="feature1" />
        <img src={Feature2} alt="feature2" className="feature2" />
      </div>
      <div className="last-two-feature-div">
        <img src={Feature3} alt="feature3" className="feature3" />
        <img src={Feature4} alt="feature4" className="feature4" />
      </div>
    </div>
  );
}
