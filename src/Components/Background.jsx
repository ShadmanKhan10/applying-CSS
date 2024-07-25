import React from "react";
import "./Background.css";
import background from "../assets/BG.png";

export default function Background() {
  return (
    <div className="background-image-container">
      <img src={background} alt="background" className="background-image" />
    </div>
  );
}
