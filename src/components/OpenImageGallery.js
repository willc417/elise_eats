import React from 'react';
import {Link} from 'react-router-dom'
import ReactBnbGallery from 'react-bnb-gallery'
import Button from '@material-ui/core/Button';


class OpenImageGallery extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isOpen: false,
          images: []
      };
  }

  componentDidMount() {
      fetch("https://xf1hw27lqf.execute-api.us-east-2.amazonaws.com/prod/images", {crossDomain: true})
        .then(res => res.text())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    images: result.split(",")
                });
                console.log(this.state.images)
            }
        )
    }

//<ImageGallery items={images} showThumbnails={false} showFullscreenButton={false}/>

  closeGallery = () => {
      this.setState({isOpen: false})
  }

  openGallery = () => {
      this.setState({isOpen: true})
  }

  render() {
    return (
      <div className="galleryButtonHolder">
      <Button onClick={this.openGallery} variant="contained" style={{justifyContent: 'center'}}>
          Check out Photos!
     </Button>
      <ReactBnbGallery photos={this.state.images} show={this.state.isOpen} onClose={this.closeGallery}/>
      </div>
    )
  }
}

export default OpenImageGallery
