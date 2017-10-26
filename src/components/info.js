import React, { Component } from 'react';
import GooglePlayImg from '../images/coming-soon-google-play.png';
import AppleStoreImg from '../images/coming-soon-apple-store.png';
import AppShow from '../images/app-show.png';

class Info extends Component {
  render(){
    return (
      <div className="pure-g">
        <div className="pure-u-1-2">
          <div className="info-logo">
            <a href="."><h3>Zurasta</h3></a>
          </div>
          <div className="info-app-img">
            <img src={AppShow} />
          </div>
        </div>
        <div className="pure-u-1-2">
          <div className="info-description">
            <h1>Zurasta App</h1>
            <h3>Save time - Do other great things</h3>
            <p>Zurasta saves you from missing out on all the awesome dishes around you,
              simply open the app and pick a dish based on your likes</p>
          </div>
          <div className="info-app-logo">
            <a><img src={GooglePlayImg} /></a>
            <a><img src={AppleStoreImg} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Info
