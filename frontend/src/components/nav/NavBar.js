import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import DrawerSimple from './Drawer';

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
        flexWrap: 'wrap'
      },
      tabs: {
        width: '75%'
      }
    }
    return (
      <div>
        <DrawerSimple open={this.state.open} handleClose={this.handleClose}/>
        <AppBar
          title="Title of Site"
          style={styles.appBar}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle} >
          <Tabs style={styles.tabs}>
            <Tab label="Item 1" />
            <Tab label="Item 2" />
            <Tab label="Item 3" />
            <Tab label="Item 4" />
          </Tabs>
        </AppBar>
      </div>
    )
  }
}

export default NavBar;
