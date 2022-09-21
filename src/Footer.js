import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <div
      className="footer d__flex align__items__center pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >
      {/* <img src={footerImg} alt="" className="footer__img pointer" /> */}
      <div className="contact__socialIcons">
        <a href="https://github.com/Gokulcasper"><FaGithub /></a>
      </div>
      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75", marginLeft: "5px" }}
      >
        Copyright © 2021 Mr.Dev_Focus. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
