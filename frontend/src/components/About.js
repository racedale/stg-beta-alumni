import React from 'react';
import Loading from './loading/Loading';
import axios from 'axios';

class About extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.renderContent = this.renderContent.bind(this);
    this.serverRequest = this.serverRequest.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      loading: true
    }
    this.fetchData().then(() => {
      this.setState({
        // data: response.data,
        loading: false
        })
      }
    );
  }

  fetchData() {
    this.imgUrl = this.serverRequest("media").then((response) => {
      this.imgUrl = response;
      return response;
    })
    this.postData = this.serverRequest("posts").then((response) => {
      this.postData = response;
      return response;
    })
    return Promise.all([this.imgUrl, this.postData])
  }

  serverRequest(url) {
    return axios.get("http://192.168.99.100:8080/wp-json/wp/v2/" + url)
      .then((response) => {
        return response.data;
      })
  }

  renderContent() {
    if(this.state.loading) {
      return (
        <Loading />
      )
    } else {
      return this.postData.map((post, index) => {
        return (
          <div key={index} className="post">
            <h3>{post.title.rendered}</h3>
            <p>{post.excerpt.rendered}</p>
            <img src={this.imgUrl[0].source_url} alt="test image" width="200"/>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to React</h2>
          <p>
            The Beta Alumni Association of Sigma Tau Gamma at Truman State University has a rich history.
            The links below will give you some insight into the organization's past.
            These may take a minute to download after you click on the link.
          </p>
        </div>
        {/* {console.log(imgUrl)} */}
        {this.renderContent()}
      </div>
    )
  }
}

About.contextTypes = {
  loading: React.PropTypes.bool,
  data: React.PropTypes.array,
  serverRequest: React.PropTypes.func
};

export default About;
