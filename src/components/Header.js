import React, { Component } from 'react';
import Typist from 'react-typist';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="name">
                    <i class="fa fa-2x fa-terminal">
                        <Typist 
                            avgTypingDelay={100} 
                            startDelay={200}
                            cursor={{ element: "_"}}>
                            <b>Nandanunni</b>
                        </Typist>
                    </i>
                </div>
            </div>
        );
    }
}

export default Header
