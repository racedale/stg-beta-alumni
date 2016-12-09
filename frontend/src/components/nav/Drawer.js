import React from 'react';
import { Link } from 'react-router'

import './Drawer.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


class SidebarDrawer extends React.Component {
  constructor() {
    super();
    this.renderUser = this.renderUser.bind(this);
  }

  renderUser() {
    if(this.context.user && Object.keys(this.context.user).length > 0) {
      return (
        <ListItem
          disabled={true}
          leftAvatar={ <Avatar src={this.context.user.providerData[0].photoURL} /> } >
          {this.context.user.displayName}
        </ListItem>
      )
    }
  }

  render() {
    return (
      <div>
        <Drawer docked={false}
          open={this.props.open}
          width={200}
          onRequestChange={this.props.handleClose}
          className="nav-drawer"
          >
          <List>
            {this.renderUser()}
          <Link to="/"><MenuItem onTouchTap={this.props.handleClose}>Home</MenuItem></Link>
          <Link to="/login"><MenuItem onTouchTap={this.props.handleClose}>Login</MenuItem></Link>
          <Link to="/about"><MenuItem onTouchTap={this.props.handleClose}>About</MenuItem></Link>
        </List>
        </Drawer>
      </div>
    );
  }
}

SidebarDrawer.contextTypes = {
  user: React.PropTypes.object
};

export default SidebarDrawer;
