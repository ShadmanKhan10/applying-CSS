import React from "react";
import AbbotLogo from "../assets/AbbotLogo.png";
import "./AbbotLogo.css";

export default function Logo() {
  return (
    <div className="logo-container">
      <img src={AbbotLogo} alt="logo" className="logo-img" />
    </div>
  );
}
