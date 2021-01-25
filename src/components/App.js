import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import NavBar from "./NavBar.js"
import FrontPage from "./FrontPage.js"
import Footer from "./Footer.js"
import Catering from "./Catering.js"
import Deserts from "./Deserts.js"
import Contact from "./Contact.js"
import OpenImageGallery from "./OpenImageGallery.js"
//import About from "./.js"





class App extends React.Component {
  render() {
    return (
    <div className="globalStyle">
      <Router>
      <NavBar />
        <Switch>
          <Route path="/Landing" exact component={FrontPage}/>
          <Route path="/Catering" exact component={Catering}/>
          <Route path="/Deserts" exact component={Deserts}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route path="/" exact component={FrontPage}/>
        </Switch>
      <OpenImageGallery/>
      <Footer/>
      </Router>
      </div>
    );
    }
}

export default App;
