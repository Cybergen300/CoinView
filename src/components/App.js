import React, { Component } from 'react';
import Navbar from './Navbar.js'
import Content from './Content.js'
import './css/App.css'


class App extends Component {

  render() {
    return (
      <div className = 'content'>
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;























