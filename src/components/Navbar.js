import React, { Component } from 'react';
import logo from './pictures/logo.png'
import {NavLink} from 'react-router-dom';
import './css/Navbar.css'


class Navbar extends Component {

  render() {
    return (
     <nav className="navbar bg-dark  ">
          <div className="format">
              <NavLink href = '#Home' className = "navLink" to = '/'>
                <img src={logo} width="'45" height="45" className="d-inline-block align-top mt-2" alt="" />
                <a className="navbar-brand title ml-2 navLink">
                  CoinView
                </a>
              </NavLink>

            <div className ="format ml-2 nav">
              <li className="menuLabel "><NavLink href = '#Home' className = "navLink" to = '/'>Home</NavLink></li>
              <li className="ml-3 menuLabel"><NavLink className = "navLink" to = '/Prices'>Prices</NavLink></li>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;