import React from "react";
import "./CountDown.css";

export default function CountDown() {
  return (
    <div className="countdown-container">
      <div className="event-date">
        <h1 className="event-text">Jan 12, 2024 04:00pm Onwards</h1>
      </div>
      <div className="countdown-container-boxes">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
      </div>
      <button className="join-event-button" type="submit">
        JOIN THE EVENT
      </button>
    </div>
  );
}
