import React from 'react';
import {Link} from 'react-router-dom'
import Form from "./Form.js"

class Contact extends React.Component {
  render() {
    return (
      <div className="aboutTextHolder">
      <h1 className="dessertTitle"> Contact Pink House Catering</h1>
      <p> Add Facebook Messenger Plugin </p>
      <Form/>
      </div>
    )
  }
}

export default Contact
