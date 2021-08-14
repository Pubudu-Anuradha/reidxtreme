import React from "react";
import "./Contactus.css";
import facebook from "./Assets/facebook.png";
import linkedin from "./Assets/linkedin.png";
import instagram from "./Assets/instagram.png";

function Contactus() {
  return (
    <div id="contact">
      Follow our socials for updates,
      <br />
      <div class="socials">
        <div>
          <a href="https://facebook.com">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div>
          <a href="https://instagram.com">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div class="info">
        or send us an email at :{" "}
        <a href="mailto: reidxtreme2@gmail.com">reidxtreme2@gmail.com</a>
      </div>
    </div>
  );
}

export default Contactus;
