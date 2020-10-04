import React, { Component } from 'react';
import Typist from 'react-typist';

import './Home.css';
import Footer from '../components/Footer';
import Python from '../assets/python.png';
import Django from '../assets/django.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="header">
          <div className="name">
            <i class="fa fa-2x fa-terminal">
              <Typist 
                  avgTypingDelay={100} 
                  startDelay={200}
                  cursor={{ element: ""}}>
                  <b> Nandanunni</b>
              </Typist>
            </i>
          </div>
        </div><br />
        <div className="projects-tab">

          <div className="tab-section">
            <div className="Card">
                <h2>KeyBlogs API</h2>
                <h4>Python, Django, Django Rest Framework, PostgreSQL, SQLite3</h4>
                <p>KeyBlogs API is a blogging web app's API made with Django REST Framework
                   API endpoints for CRUD operations on Users, Blogs with authentication, 
                   email verification and searching users.
                </p>
                <div className="card-lang">
                    <img src={Python} alt="Python" /> &nbsp; 
                    <img src={Django} alt="Django" />
                </div><br />
                <div className="card-nav">
                    <div className="card-nav-left">
                        <a href="https://github.com/nandan-unni/KeyBlogs-Django-Backend">View Source Code</a>
                    </div>
                    <div className="card-nav-right">
                        <a href="https://keyblogs.web.app">View Project</a>
                    </div>
                </div>
            </div> &nbsp; 

            <div className="Card">
                <h2>KeyBlogs UI</h2>
                <h4>JavaScript, Reactjs, Axios, Loading Skeletons</h4>
                <p>KeyBlogs UI is a blogging web app's User Interface made with Reactjs Framework.
                  API connections are made using Axios and Loading Skeletons are also used.
                </p>
                <div className="card-lang">
                    <img src={JavaScript} alt="JavaScript" /> &nbsp;
                    <img src={ReactLogo} alt="React" />
                </div><br />
                <div className="card-nav">
                    <div className="card-nav-left">
                        <a href="https://github.com/nandan-unni/KeyBlogs-React-Frontend">View Source Code</a>
                    </div>
                    <div className="card-nav-right">
                        <a href="https://keyblogs.web.app">View Project</a>
                    </div>
                </div>
            </div>
          </div><br/>


          <div className="tab-section">

            <div className="Card">
                <h2>Instagram API Clone</h2>
                <h4>Python, Django, Django Rest Framework, Simple-jwt, SQLite3</h4>
                <p>The clone of Instagram Application Program Interface (API) made with Django REST Framework</p>
                <div className="card-lang">
                    <img src={Python} alt="Python" /> &nbsp; 
                    <img src={Django} alt="Django" />
                </div><br />
                <div className="card-nav">
                    <div className="card-nav-left">
                        <a href="https://github.com/nandan-unni/instagram-api-clone">View Source Code</a>
                    </div>
                    <div className="card-nav-right">
                        <a href="https://github.com/nandan-unni/nandan-unni">View Project</a>
                    </div>
                </div>
            </div> &nbsp; 

            <div className="Card">
                <h2>React Calculator</h2>
                <h4>JavaScript, React</h4>
                <p>A simple Calculator made with Reactjs framwork</p>
                <div className="card-lang">
                    <img src={JavaScript} alt="JavaScript" /> &nbsp;
                    <img src={ReactLogo} alt="React" />
                </div><br />
                <div className="card-nav">
                    <div className="card-nav-left">
                        <a href="https://github.com/nandan-unni/React-Calculator">View Source Code</a>
                    </div>
                    <div className="card-nav-right">
                        <a href="https://nqcalculator.web.app">View Project</a>
                    </div>
                </div>
            </div>

          </div>


        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
