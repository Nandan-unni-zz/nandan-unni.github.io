import React, { Component } from 'react';
import Typist from 'react-typist';

import './Home.css';
import Footer from '../components/Footer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <div className="header">
                <div className="terminal">
                    <div className="name">
                        <i class="fa fa-2x fa-terminal" style={{display: "flex"}}>
                            <Typist 
                                  avgTypingDelay={100} 
                                  startDelay={200}
                                  cursor={{ element: "_", blink: true, hideWhenDone: true, hideWhenDoneDelay: false}}>
                                  <b> Nandanunni</b>
                            </Typist>
                        </i>
                    </div>
                </div>
          </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
