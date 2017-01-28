import React from 'react';
// import base from '../../base';

import './sidebar.css';

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      sidebar: {},
      loading: true
    }
  }

  // componentWillMount() {
  //   this.ref = base.syncState(`/about`,
  //     {
  //       context: this,
  //       state: 'about'
  //     });
  // }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  render() {
    return (
      <aside>
        This is the sidebar content
      </aside>
    )
  }
}

export default Sidebar;
