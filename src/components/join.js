import React, { Component } from 'react';

class Join extends Component {
  render(){
    return (
      <div className="pure-g">
        <div className="join-title">
          <h1>Join Us Now</h1>
        </div>
        <div className="join-text">
          <p>Join us along the way of becoming great! We will send you emails containing information of how you can help us. We don’t spam.</p>
        </div>
        <div className="join-sign">
          <input className="join-email" placeholder="Your Email Address"></input>
          <button className="join-btn">Join us</button>
        </div>
      </div>
    )
  }
}

export default Join
