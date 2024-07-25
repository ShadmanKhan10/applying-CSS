import React, { useState, useEffect } from "react";
import "./CountDown.css";

export default function CountDown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-01T04:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countdown-container">
      <div className="event-date">
        <h1 className="event-text">AUG 1, 2024 04:00pm Onwards</h1>
      </div>
      <div className="countdown-container-boxes">
        <div className="box1">
          <h1 className="time-text">
            {timeLeft.days}
            <p className="p-text">DAYS</p>
          </h1>
        </div>
        <div className="box2">
          <h1 className="time-text">
            {timeLeft.hours}
            <p className="p-text">HOURS</p>
          </h1>
        </div>
        <div className="box3">
          <h1 className="time-text">
            {timeLeft.minutes}
            <p className="p-text">MINUTES</p>
          </h1>
        </div>
        <div className="box4">
          <h1 className="time-text">
            {timeLeft.seconds}
            <p className="p-text">SECONDS</p>
          </h1>
        </div>
      </div>
      <button className="join-event-button" type="submit">
        JOIN THE EVENT
      </button>
    </div>
  );
}
