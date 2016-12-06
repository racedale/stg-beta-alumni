import React from 'react';
import { Link } from 'react-router'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


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
          <List>
            <ListItem
              disabled={true}
              leftAvatar={ <Avatar src="/images/default_avatar.jpg" /> } >
              Default User
            </ListItem>
          <Link to="/"><MenuItem onTouchTap={this.props.handleClose}>Home</MenuItem></Link>
          <Link to="/about"><MenuItem onTouchTap={this.props.handleClose}>About</MenuItem></Link>
        </List>
        </Drawer>
      </div>
    );
  }
}
