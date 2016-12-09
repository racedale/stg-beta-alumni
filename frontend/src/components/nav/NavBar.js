import React from 'react';
import { withRouter, Link } from 'react-router'

import AppBar from 'material-ui/AppBar';
// import {Tabs, Tab} from 'material-ui/Tabs';
import SidebarDrawer from './Drawer';

class NavBar extends React.Component {
  constructor() {
    super();
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose() { this.setState({open: false}); }

  render() {
    const styles = {
      appBar: {
        justifyContent: 'space-between'
      },
      tabs: {
        flex: '0 1 70%'
      }
    }
    return (
      <nav className="navbar">
        <SidebarDrawer open={this.state.open} handleClose={this.handleClose}/>
        <AppBar
          title="Organization"
          style={styles.appBar}
          onLeftIconButtonTouchTap={this.handleToggle} >
          {/* <Tabs style={styles.tabs}>
            <Tab label="About" containerElement={<Link to="/about" />}></Tab>
            <Tab label="Recent Years" containerElement={<Link to="/recent-years" />} ></Tab>
            <Tab label="Alumni" containerElement={<Link to="/alumni" />}></Tab>
            <Tab label="Contact" containerElement={<Link to="/contact" />} ></Tab>
          </Tabs> */}
        </AppBar>
      </nav>
    )
  }
}

export default withRouter(NavBar);
