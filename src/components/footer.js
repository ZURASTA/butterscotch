import React, { Component } from 'react';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Twitter from '../images/twitter.svg';

class Footer extends Component {
  render(){
    return (
      <div>
        <div>

        </div>
        <div className="footer-social-links">
          <a href="https://www.facebook.com/zurastaapp"><span><img src={Facebook}/></span></a>
          <a href="https://www.instagram.com/zurasta/"><span><img src={Instagram}/></span></a>
          <a href="https://twitter.com/zurasta?lang=en"><span><img src={Twitter}/></span></a>
        </div>
        <hr />
        <div className="footer-copyright">
          <span>Copyright 2017 ZURASTA. All Rights Reserved.</span>
        </div>
      </div>
    )
  }
}

export default Footer
