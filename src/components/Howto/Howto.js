import React from "react";
import "./Howto.css";

const steps = [
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
];

function Howto() {
  return (
    <div id="howto" class="marg">
      <h2>How to compete</h2>
      <br />
      <div class="content">
        <ul type="circle">
          {steps.map((step) => {
            return <li>{step}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Howto;
