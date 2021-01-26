import React from 'react';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

import elise_photo from "../images/elise_photo.jpeg"

class About extends React.Component {

  render() {
    return (
      <div className="aboutTextHolder">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
            <Grid item>
                <img className="frontPageImage" src={elise_photo}/>
             </Grid>
            <Grid item md>
              <h1 className="aboutText"><b style={{color: '#ff69b4'}}>Elise Clinton </b> owned and ran Mindfield Grill in Brownsville, TN
               for over 10 years. Now she is focusing on bringing her beloved dishes to hungry customers as
              <b style={{color: '#ff69b4'}}> Pink House Catering</b>. Elise has teamed up with her mother Emily, who provides delicious homemade deserts,
              to provide weekly catered meals.
              </h1>
             </Grid>
         </Grid>
      </div>
    )
  }
}

export default About
