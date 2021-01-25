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

  // componentDidMount() {
  //     fetch("https://xf1hw27lqf.execute-api.us-east-2.amazonaws.com/alpha/images?foldername=catering_images",
  //           {crossDomain: true})
  //       .then(res => res.json())
  //       .then(
  //           (result) => {
  //           console.log(result)
  //           this.setState({
  //               images: result.images
  //           });
  //           }
  //       )
  //   }

//<ImageGallery items={images} showThumbnails={false} showFullscreenButton={false}/>

  render() {
    return (
      <div>
      <p>{this.state.images}</p>
      </div>
    )
  }
}

export default Catering
