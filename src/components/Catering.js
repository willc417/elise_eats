import React from 'react';
import {Link} from 'react-router-dom'
import ImageGallery from 'react-image-gallery'


class Catering extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          images:  []
      };
  }
  render() {
    return (
      <div className="aboutTextHolder">
      <h1> Weekly Specials are Available on Facebook!</h1>
      </div>
    )
  }
}

export default Catering
