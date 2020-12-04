import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './Home.js'
import Prices from './Prices.js'

class Content extends Component {

  render() {
    return (
      <Switch>
        <Route exact path = '/' component = {Home}></Route>
        <Route exact path = '/Prices' component = {Prices}></Route>
      </Switch>  

    );
  }
}

export default Content;