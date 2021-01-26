import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import ph_logo from '../images/pink_house_logo.png'

class NavBar extends React.Component {

  render() {
     return(
       <header className="navbar">
      <Link className="textLink" to="/">
        <img src={ph_logo} className="logoImage"/>
      </Link>
      <ul className="navList">
      <li>
      <Link className="navTextLink" to="/Catering">
        Catering
       </Link>
      </li>
      <li>
        <Link className="navTextLink" to="/Deserts">
          Deserts
         </Link>
      </li>
      <li>
      <Link className="navTextLink" to="/About">
          About Us
      </Link>
      </li>
      <li>
      <Link className="navTextLink" to="/Contact">
          Contact
      </Link>
      </li>
      </ul>
       </header>
  );
  }
}

export default NavBar;
