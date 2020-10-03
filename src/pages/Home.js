import React, { Component } from 'react';

import './Home.css';
import Footer from '../components/Footer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <div className="header">
                <div className="terminal">
                    <div className="name">
                        <i class="fa fa-2x fa-terminal">
                            <b> Nandanunni</b>
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
