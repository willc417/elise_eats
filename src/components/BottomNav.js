import React from 'react';
import {withRouter} from 'react-router'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {Fastfood, Info, Cake, Home} from '@material-ui/icons';

import elise_photo from "../images/elise_photo.jpeg"

class BottomNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }


    handleChange = (event, newValue) => {
        this.props.history.push(newValue);
        this.setState({value: newValue});
    };

        render() {
            return (
            <div className="bottomNav">
              <BottomNavigation
                value={this.value}
                onChange={this.handleChange}
                showLabels
              >
                <BottomNavigationAction label="Home" value="" icon={<Home />} />
                <BottomNavigationAction label="Catering" value="Catering" icon={<Fastfood />} />
                <BottomNavigationAction label="Deserts" value="Deserts" icon={<Cake />} />
                <BottomNavigationAction label="About" value="About" icon={<Info/>} />
              </BottomNavigation>
              </div>
            );
        }
      }

export default withRouter(BottomNav)
