import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faCopyright } from "@fontawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_logo">
          <div className="footer_logo__icon"></div>
          <div className="footer_logo__text">makeshift</div>
        </div>
        <div className="copyright">
          <FontAwesomeIcon
            icon={faCopyright}
            style={{ color: "white" }}
            className="copyright__icon"
          />
          <p className="copyright__text">2020</p>
        </div>
      </div>
    );
  }
}

export default Footer;
