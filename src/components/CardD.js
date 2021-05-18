import React, { Component } from "react";

import "./Card.css";
import JavaScript from "../images/javascript.png";
import ReactLogo from "../images/react.png";

class CardD extends Component {
  render() {
    return (
      <div className="Card">
        {" "}
        {/* 4th card start */}
        <h2>React Calculator</h2>
        <h4>JavaScript, React</h4>
        <p>A simple Calculator made with Reactjs framwork</p>
        <div className="card-lang">
          <img src={JavaScript} alt="JavaScript" /> &nbsp;
          <img src={ReactLogo} alt="React" />
        </div>
        <br />
        <div className="card-nav">
          <div className="card-nav-left">
            <a
              href="https://github.com/nandan-unni/React-Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
          <div className="card-nav-right">
            <a
              href="/React-Calculator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CardD;
