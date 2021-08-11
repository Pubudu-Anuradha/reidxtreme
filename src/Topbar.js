import React from "react";
import "./Topbar.css";
import logo from "./logo.svg";

const Sections = [
  { id: "about", name: "About" },
  { id: "howto", name: "How to compete" },
  { id: "prizes", name: "Prizes" },
  { id: "contact", name: "Contact Us" },
];

export default function Topbar() {
  return (
    <div className="bar">
      <a className="baritem" href="#countdown">
        <img height="40px" src={logo} alt="logo" />
        Reid Extreme 2021
      </a>
      {Sections.map((Section) => {
        return (
          <a className="baritem" href={Section.id}>
            {Section.name}
          </a>
        );
      })}
    </div>
  );
}
