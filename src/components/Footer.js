import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div className="Footer">
            <center>
                <br /><br />
                <a href="mailto:asnqln@gmail.com">
                    <i class="fa fa-2x fa-envelope"></i>
                </a> &nbsp;
                <a href="https://github.com/nandan-unni">
                    <i class="fa fa-2x fa-github"></i>
                </a> &nbsp;
                <a href="https://twitter.com/asnandanunni">
                    <i class="fa fa-2x fa-twitter"></i>
                </a> &nbsp;
                <a href="http://www.linkedin.com/in/nandanunni">
                    <i class="fa fa-2x fa-linkedin"></i>
                </a> &nbsp;
                <a href="https://t.me/asnandanunni/">
                    <i class="fa fa-2x fa-telegram"></i>
                </a> &nbsp;
                <a href="https://www.instagram.com/u.n.n.i._/">
                    <i class="fa fa-2x fa-instagram"></i>
                </a> &nbsp;
            </center>
        </div>
    );
  }
}

export default Footer;
