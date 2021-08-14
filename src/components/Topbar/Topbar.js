import React from "react";
import "./Topbar.css";

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
        Reid<d>x</d>treme 2.0
      </a>
      {Sections.map((Section) => {
        return (
          <a className="baritem" href={"#" + Section.id}>
            {Section.name}
          </a>
        );
      })}
    </div>
  );
}
