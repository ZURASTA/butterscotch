import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Banner extends Component {
  scrollDown(e) {
    e.preventDefault();
    console.log();
    window.scrollTo(0, document.getElementById('site-info').offsetTop, { duration: 500, easing: 'linear'});
  }
  render() {
    return (
      <div className='banner-text'>
        <h1>ZURASTA</h1>
        <div className="banner-scroll">
          <a href="#site-info" onClick={this.scrollDown}><span></span>Scroll</a>
        </div>
      </div>
    )
  }
}

export default Banner
