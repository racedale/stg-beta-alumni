import React from 'react';
import base from '../../base';
import './Home.css';
import ImageGrid from './ImageGrid';

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
    const styles = {
      home: {
        textAlign: "center"
      }
    }
    return (
      <div style={styles.home}>
        <p>This website is currently under construction</p>
        <h1>{this.state.home.title}</h1>
        {this.state.home.content}
        <h3>View old images from Homecoming 2015 below: </h3>
        <ImageGrid />
      </div>
    );
  }
}

export default Home;
