import React from 'react';
import {Link} from "react-router-dom";
import './App.css';

import catering_image from "../images/salmon_beans.jpg"
import dessert_image from "../images/strawberry_cake_2.JPG"
import about_image from "../images/meat_and_three.jpg"


class FrontPage extends React.Component {
  render() {
    return (
      <div className="imageHolder">
      <Link to="/Catering" className="textLink">
      <div>
      <img className="frontPageImage"
          src={catering_image}/>
      <p className="frontPageText">Catering</p>
      </div>
      </Link>
      <Link to="/Desserts" className="textLink">
      <div >
      <img className="frontPageImage" src={dessert_image}/>
      <p className="frontPageText">Desserts</p>
      </div>
      </Link>
      <Link to="/About" className="textLink">
      <div>
      <img className="frontPageImage" src={about_image}/>
      <p className="frontPageText">About</p>
      </div>
      </Link>
      </div>
    );
    }
}

export default FrontPage;
