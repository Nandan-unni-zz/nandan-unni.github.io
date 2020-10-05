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
import PythonLogo from '../images/python.png';
import DjangoLogo from '../images/django.png';
import JavaScriptLogo from '../images/javascript.png';
import ReactLogo from '../images/react.png';
import GolangLogo from '../images/go.png';
import CPPLogo from '../images/cpp.png';
import CLogo from '../images/c.png';
import HTMLLogo from '../images/html.png';
import CSSLogo from '../images/css.png';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header></Header>


                {/* _____ ABOUT Section _____ */}
                <FadeIn delay={1500} transitionDuration={1000}>
                    <div className="section-header" id="about">
                        <i class="fa fa-2x fa-diamond"><b>&nbsp;About</b></i><br/>
                        <div className="section-line"></div>
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
                    <div className="section-header" id="projects">
                        <i class="fa fa-2x fa-diamond"><b>&nbsp;Projects</b></i><br/>
                        <div className="section-line"></div>
                    </div>
                </FadeIn><br/>
                <FadeIn delay={3000} transitionDuration={2000}>
                    <div className="projects-tab">
                        <div className="tab-block">
                            <CardA></CardA> &nbsp;
                            <CardB></CardB> &nbsp;
                        </div><br/>
                        <div className="tab-block">
                            <CardC></CardC> &nbsp;
                            <CardD></CardD> &nbsp;
                        </div><br />
                    </div><br />
                </FadeIn><br /><br />
                {/* _____ PROJECTS Section end _____ */}


                {/* _____ SKILLS Section _____ */}
                <FadeIn delay={3000} transitionDuration={1000}>
                    <div className="section-header" id="projects">
                        <i class="fa fa-2x fa-diamond"><b>&nbsp;Skills</b></i><br/>
                        <div className="section-line"></div><br/>
                        <div className="skills-lang">
                            <img src={PythonLogo} alt="Python" /> &nbsp; 
                            <img src={DjangoLogo} alt="Django" /> &nbsp; 
                            <img src={JavaScriptLogo} alt="JavaScript" /> &nbsp; 
                            <img src={ReactLogo} alt="React" /> &nbsp; 
                            <img src={GolangLogo} alt="Go" /> &nbsp; 
                            <img src={CPPLogo} alt="C++" /> &nbsp; 
                            <img src={CLogo} alt="C" /> &nbsp; 
                            <img src={HTMLLogo} alt="HTM5" /> &nbsp; 
                            <img src={CSSLogo} alt="CSS3" />
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
