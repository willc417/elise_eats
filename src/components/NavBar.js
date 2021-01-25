import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import ph_logo from '../images/pink_house_logo.png'

class NavBar extends React.Component {

  render() {
     return(
       <header className="navbar">
      <Link className="textLink" to="/Landing">
        <img src={ph_logo} className="logoImage"/>
      </Link>
       </header>
  );
  }
}

export default NavBar;
