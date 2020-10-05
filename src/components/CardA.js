import React, { Component } from 'react';

import './Card.css';
import Python from '../images/python.png';
import Django from '../images/django.png';

class CardA extends Component {
    render() {
        return (
            <div className="Card">
                <h2>KeyBlogs API</h2>
                <h4>Python, Django, Django Rest Framework, PostgreSQL, SQLite3</h4>
                <p>KeyBlogs API is a blogging web app's API made with Django REST Framework</p>
                <div className="card-lang">
                    <img src={Python} alt="Python" /> &nbsp; 
                    <img src={Django} alt="Django" />
                </div><br />
                <div className="card-nav">
                    <div className="card-nav-left">
                        <a href="https://github.com/nandan-unni/KeyBlogs-Django-Backend" target="_blank" rel="noopener noreferrer">View Source Code</a>
                    </div>
                    <div className="card-nav-right">
                        <a href="https://keyblogs.web.app" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardA
