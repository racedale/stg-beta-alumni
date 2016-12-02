import React from 'react';
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
          <MenuItem onTouchTap={this.props.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.props.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
