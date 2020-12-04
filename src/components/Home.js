import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './css/Home.css'

class Home extends Component {

  render() {
    return (
      <div className = 'home'>
        <div className = 'Box1'>
          <p className = "title1 font-weight-bold" >Welcome to CoinView ! </p>
          <p className = "title2 font-weight-bold" > A Decentralized vision built for powering a new financial reality </p> 
          <button className= "pButton"><NavLink className = 'getPrice' to= '/Prices'> Get prices </NavLink></button>
        </div>
        <div className = 'Box2'>
          <p className = "title3 font-weight-bold"> Want to learn more about the DeFi ecosystem ? </p>
          <button className= 'learning' onClick={ () => window.open("https://cybergen.jimdofree.com/blockchain/theory/", '_blank')} > 
            Start Learning 
          </button>
        </div>
      </div>
    );
  }
}

export default Home;























