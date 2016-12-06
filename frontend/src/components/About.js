import React from 'react';
import Loading from './loading/Loading';

const About = (props, context) => {

  function renderContent() {
    if(context.loading) {
      return (
        <Loading />
      )
    } else {
      return props.data.map((post, index) => {
        return (
          <div key={index} className="post">
            <h3>{post.title.rendered}</h3>
            {post.excerpt.rendered}
          </div>
        )
      })
    }
  }

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
        {renderContent()}
      </div>
    )
}

About.contextTypes = {
  loading: React.PropTypes.bool,
  data: React.PropTypes.array
};

export default About;
