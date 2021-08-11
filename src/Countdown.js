import { React, useState, useEffect } from "react";
import "./Countdown.css";

const starting_time = new Date(2021, 7, 30, 24, 59, 59);

function get_time_left() {
  let now = new Date();
  now = Math.floor((starting_time.getTime() - now.getTime()) / 1000);
  if (now <= 0) {
    return { s: 0, m: 0, h: 0, d: 0 };
  }
  return {
    s: now % 60,
    m: Math.floor((now / 60) % 60),
    h: Math.floor((now / 60 / 60) % 24),
    d: Math.floor(now / 60 / 60 / 24),
  };
}

export default function Countdown() {
  const [countdown, setcountdown] = useState(get_time_left());
  useEffect(() => {
    setTimeout(() => {
      setcountdown(get_time_left());
    }, 1000);
  });
  return (
    <div className="marg">
      <br />
      <div className="number">
        {countdown.d < 10 ? "0" : ""}
        {countdown.d}
        <br />
        <div class="name">days</div>
      </div>
      <div className="number">
        {countdown.h < 10 ? "0" : ""}
        {countdown.h}
        <br />
        <div class="name" id="countdown">
          hours
        </div>
      </div>
      <div className="number">
        {countdown.m < 10 ? "0" : ""}
        {countdown.m}
        <br />
        <div class="name">minutes</div>
      </div>
      <div className="number">
        {countdown.s < 10 ? "0" : ""}
        {countdown.s}
        <br />
        <div class="name">seconds</div>
      </div>
    </div>
  );
}
