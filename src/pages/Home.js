import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ProfilePicture from '../assets/nandanunni.jpg';
import Python from '../assets/python.png';
import Django from '../assets/django.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header></Header>
                <FadeIn delay={1500} transitionDuration={1000}>
                    <div className="projects-header" id="about">
                        <i class="fa fa-2x fa-diamond"><b>&nbsp;About</b></i><br/>
                        <div className="projects-line"></div>
                    </div>
                </FadeIn><br/>
                <div className="about">
                    <FadeIn delay={1500} transitionDuration={2000}>
                        <div className="about-dp"><img src={ProfilePicture} alt="nandanunni"/></div>
                    </FadeIn>
                    <FadeIn delay={2250} transitionDuration={2000}>
                        <div className="about-dtl">
                                <p>Web Developer, Machine Learning enthusiast.</p>
                                <p><span>Student</span> by day, <span>Developer</span> by night</p>
                                <p><span>India</span> is my nation and <span>coding</span> is my passion.</p>
                        </div>
                    </FadeIn>
                </div><br /><br /><br />

                <FadeIn delay={3000} transitionDuration={1000}>
                    <div className="projects-header" id="projects">
                        <i class="fa fa-2x fa-diamond"><b>&nbsp;Projects</b></i><br/>
                        <div className="projects-line"></div>
                    </div>
                </FadeIn><br/>
                <FadeIn delay={3000} transitionDuration={2000}>
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
                </FadeIn><br />
                <div id="contact"><Footer></Footer></div>
            </div>
        );
    }
}

export default Home;
