import React from 'react';
import './Home.css';
import base from '../../base';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`/home`,
      {
        context: this,
        state: 'home'
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>This website is currently under construction</p>
        {this.state.home.content}
      </div>
    );
  }
}

export default Home;
