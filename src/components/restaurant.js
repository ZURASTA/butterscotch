import React, { Component } from 'react';
import Step1 from '../images/step1.svg';
import Step2 from '../images/step2.svg';
import Step3 from '../images/step3.svg';

class Restaurant extends Component {
  render(){
    return (
      <div className="pure-g">
        <div className="pure-u-1-1">
          <div className="restaurant-title">
            <h1>FOR RESTAURANTS</h1>
          </div>
        </div>

        <div className="pure-u-1-3">
          <div className="support-step">
            <h1>In-store</h1>
            <p>Simply walk into a store, order what you like and leave</p>
            <div className="support-img">
              <img src={Step1}/>
            </div>
          </div>
        </div>
        <div className="pure-u-1-3">
          <div className="support-step">
            <h1>Pickup</h1>
            <p>Choose from thousands of dishes from actual and virtual restaurants</p>
            <div className="support-img">
              <img src={Step2}/>
            </div>
          </div>
        </div>
        <div className="pure-u-1-3">
          <div className="support-step">
            <h1>Delivery</h1>
            <p>Get food delivered at a much cheaper price than other food ordering apps</p>
            <div className="support-img">
              <img src={Step3}/>
            </div>
          </div>
        </div>

        <div className="pure-u-1-3">
          <div className="support-step">
            <h1>In-store</h1>
            <p>Simply walk into a store, order what you like and leave</p>
            <div className="support-img">
              <img src={Step1}/>
            </div>
          </div>
        </div>
        <div className="pure-u-1-3">
          <div className="support-step">
            <h1>Pickup</h1>
            <p>Choose from thousands of dishes from actual and virtual restaurants</p>
            <div className="support-img">
              <img src={Step2}/>
            </div>
          </div>
        </div>
        <div className="pure-u-1-3">
          <div className="support-step">
            <h1>Delivery</h1>
            <p>Get food delivered at a much cheaper price than other food ordering apps</p>
            <div className="support-img">
              <img src={Step3}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Restaurant
