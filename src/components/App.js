import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import NavBar from "./NavBar.js"
import FrontPage from "./FrontPage.js"
import Footer from "./Footer.js"
import Catering from "./Catering.js"
import Desserts from "./Desserts.js"
import About from "./About.js"
import Contact from "./Contact.js"
import OpenImageGallery from "./OpenImageGallery.js"
import BottomNav from "./BottomNav.js"



class App extends React.Component {
  render() {
    return (
    <div className="globalStyle">
      <Router>
      <NavBar />
        <Switch>
          <Route path="/Catering" exact component={Catering}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Desserts" exact component={Desserts}/>
          <Route path="/Contact" exact component={Contact}/>
          <Route path="/" exact component={FrontPage}/>
        </Switch>
      <OpenImageGallery/>
      <Footer/>
      <BottomNav className="bottomNav" value="" history={this.props.history}/>
      </Router>
      </div>
    );
    }
}

export default App;
