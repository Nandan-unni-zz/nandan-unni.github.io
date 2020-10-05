import React, { Component } from 'react';

import './Card.css';
import JavaScript from '../images/javascript.png';
import ReactLogo from '../images/react.png';

class CardB extends Component {
    render() {
        return (
            <div className="Card">
                <h2>KeyBlogs UI</h2>
                <h4>JavaScript, Reactjs, Axios, Loading Skeletons</h4>
                <p>KeyBlogs UI is a blogging web app's UI made with Reactjs Framework.</p>
                <div className="card-lang">
                    <img src={JavaScript} alt="JavaScript" /> &nbsp;
                    <img src={ReactLogo} alt="React" />
                </div><br />
                <div className="card-nav">
                    <div className="card-nav-left">
                        <a href="https://github.com/nandan-unni/KeyBlogs-React-Frontend" target="_blank" rel="noopener noreferrer">View Source Code</a>
                    </div>
                    <div className="card-nav-right">
                        <a href="https://keyblogs.web.app" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardB
