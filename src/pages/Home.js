import React, { Component } from 'react';
import Typist from 'react-typist';
import FadeIn from 'react-fade-in';

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
                                cursor={{ element: "_"}}>
                                <b> Nandanunni</b>
                            </Typist>
                        </i>
                    </div>
                </div><br />
                <FadeIn delay={1200} transitionDuration={1000}>
                    <div className="projects-header">
                        <i class="fa fa-2x fa-diamond"><b>&nbsp;Projects</b></i><br/>
                        <div className="projects-line"></div>
                    </div>
                </FadeIn><br/>
                <FadeIn delay={1500} transitionDuration={2000}>
                    <div className="projects-tab">

                        <div className="tab-section">
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
                                        <a href="https://github.com/nandan-unni/KeyBlogs-Django-Backend">View Source Code</a>
                                    </div>
                                    <div className="card-nav-right">
                                        <a href="https://keyblogs.web.app">View Project</a>
                                    </div>
                                </div>
                            </div> &nbsp;  {/* 1st card end */}

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
                                        <a href="https://github.com/nandan-unni/KeyBlogs-React-Frontend">View Source Code</a>
                                    </div>
                                    <div className="card-nav-right">
                                        <a href="https://keyblogs.web.app">View Project</a>
                                    </div>
                                </div>
                            </div> {/* 2nd card end */}
                        </div><br/> {/* 1st tab-section end */}

                        <div className="tab-section"> {/* 2nd tab-section start */}

                            <div className="Card"> {/* 3rd card start */}
                                <h2>Instagram API Clone</h2>
                                <h4>Python, Django, Django Rest Framework, Simple-jwt, SQLite3</h4>
                                <p>The clone of Instagram API made with Django REST Framework</p>
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
                            </div> &nbsp;  {/* 3rd card end */}

                            <div className="Card"> {/* 4th card start */}
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
                            </div> {/* 4th card end */}

                        </div> {/* 2nd tab-section end */}
                    </div> {/* Projects Tab end */}
                </FadeIn>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;
