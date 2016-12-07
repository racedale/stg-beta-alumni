import React from 'react';
import Loading from './loading/Loading';

class About extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.renderContent = this.renderContent.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.state = {
      loading: true
    }
    this.fetchData().then(() => {
      this.setState({
        loading: false
        })
      }
    );
  }

  fetchData() {
    this.imgUrl = this.context.serverRequest("wp", "media").then((response) => {
      this.imgUrl = response;
      return response;
    })
    this.postData = this.context.serverRequest("wp", "posts").then((response) => {
      this.postData = response;
      return response;
    })
    return Promise.all([this.imgUrl, this.postData])
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
            <img src={this.imgUrl[index].source_url} alt={this.imgUrl[index].alt_text} width="200"/>
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
        {this.renderContent()}
      </div>
    )
  }
}

About.contextTypes = {
  serverRequest: React.PropTypes.func
};

export default About;
