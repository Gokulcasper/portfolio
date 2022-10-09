import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <div
      className="footer d__flex align__items__center pz-10"
      style={{ padding: "10px 20px", zIndex: "100" }}
    >

      <span
        className="copyright"
        style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75", marginLeft: "5px" }}
      >
        Copyright © 2022 Mr.Dev_Focus. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
