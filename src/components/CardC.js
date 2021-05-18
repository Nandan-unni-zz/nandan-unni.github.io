import React, { Component } from "react";

import "./Card.css";
import Python from "../images/python.png";
import Django from "../images/django.png";

class CardC extends Component {
  render() {
    return (
      <div className="Card">
        {" "}
        {/* 3rd card start */}
        <h2>Instagram API Clone</h2>
        <h4>Python, Django, Django Rest Framework, Simple-jwt, SQLite3</h4>
        <p>The clone of Instagram API made with Django REST Framework</p>
        <div className="card-lang">
          <img src={Python} alt="Python" /> &nbsp;
          <img src={Django} alt="Django" />
        </div>
        <br />
        <div className="card-nav">
          <div className="card-nav-left">
            <a
              href="https://github.com/nandan-unni/instagram-api-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CardC;
