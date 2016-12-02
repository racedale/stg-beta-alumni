import React from 'react';
import { Link } from 'react-router'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class DrawerSimple extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <Drawer docked={false}
          open={this.props.open}
          width={200}
          onRequestChange={this.props.handleClose} >
          <Link to="/"><MenuItem onTouchTap={this.props.handleClose}>Home</MenuItem></Link>
          <Link to="/about"><MenuItem onTouchTap={this.props.handleClose}>About</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}
