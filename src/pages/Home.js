import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import CardA from '../components/CardA';
import CardB from '../components/CardB';
import CardC from '../components/CardC';
import CardD from '../components/CardD';

import ProfilePicture from '../images/nandanunni.jpg';
import Python from '../images/python.png';
import Django from '../images/django.png';
import JavaScript from '../images/javascript.png';
import ReactLogo from '../images/react.png';
import Golang from '../images/go.png';
import Cpp from '../images/cpp.png';
import C from '../images/c.png';
import HTML from '../images/html.png';
import CSS from '../images/css.png';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header></Header>

                {/* _____ ABOUT Section _____ */}
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
                {/* _____ ABOUT Section end _____ */}

                {/* _____ PROJECTS Section _____ */}
                <FadeIn delay={3000} transitionDuration={1000}>
                    <div className="projects-header" id="projects">
                        <i class="fa fa-2x fa-diamond"><b>&nbsp;Projects</b></i><br/>
                        <div className="projects-line"></div>
                    </div>
                </FadeIn><br/>
                <FadeIn delay={3000} transitionDuration={2000}>
                    <div className="projects-tab">
                        <div className="tab-section">
                            <CardA></CardA> &nbsp;
                            <CardB></CardB> &nbsp;
                        </div><br/>
                        <div className="tab-section">
                            <CardC></CardC> &nbsp;
                            <CardD></CardD> &nbsp;
                        </div><br />
                    </div><br />
                </FadeIn><br /><br />
                {/* _____ PROJECTS Section end _____ */}

                {/* _____ SKILLS Section _____ */}
                <FadeIn delay={3000} transitionDuration={1000}>
                    <div className="projects-header" id="projects">
                        <i class="fa fa-2x fa-diamond"><b>&nbsp;Skills</b></i><br/>
                        <div className="projects-line"></div><br/>
                        <div className="skills-lang">
                            <img src={Python} alt="Python" /> &nbsp; 
                            <img src={Django} alt="Django" /> &nbsp; 
                            <img src={JavaScript} alt="JavaScript" /> &nbsp; 
                            <img src={ReactLogo} alt="React" /> &nbsp; 
                            <img src={Golang} alt="Go" /> &nbsp; 
                            <img src={Cpp} alt="C++" /> &nbsp; 
                            <img src={C} alt="C" /> &nbsp; 
                            <img src={HTML} alt="HTM5" /> &nbsp; 
                            <img src={CSS} alt="CSS3" />
                        </div><br />
                    </div>
                </FadeIn><br/><br /><br />
                {/* _____ SKILLS Section end _____ */}

                {/* _____ CONTACT Section _____ */}
                <FadeIn delay={3000} transitionDuration={1000}>
                    <div id="contact"><Footer></Footer></div>
                </FadeIn>
                {/* _____ CONTACT Section end _____ */}

            </div>
        );
    }
}

export default Home;
