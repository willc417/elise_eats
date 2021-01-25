import React from 'react';
import {Link} from 'react-router-dom'

import facebook_logo from '../images/facebook.png'
import email from '../images/email.png'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">

            <img src={facebook_logo} className="contactImage"/>
            <Link to="/Contact">
                <img src={email} className="contactImage"/>
            </Link>
      </footer>
    )
  }
}

export default Footer
