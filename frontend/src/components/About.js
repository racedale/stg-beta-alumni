import React from 'react';
import base from '../base';


class About extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.renderContent = this.renderContent.bind(this);
    this.state = {
      about: {},
      loading: true
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`/about`,
      {
        context: this,
        state: 'about'
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  renderContent() {
    return (
      <div  className="post">
        <h3>{this.state.about.title}</h3>
        <p>{this.state.about.content}</p>
      </div>
    )
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
        <tbody><tr class="esmR">
          <td valign="top" class="esmD" width="50%">
            <div class="esmCol">
              <div align="left" class="esbSec">
                <b><a href="http://pq.b5z.net/i/u/10103480/f/Diamond_Anneversary_Celebration.pdf">
                75th Anniversary Celebration</a></b><br />
              </div>
              <div align="left" class="esbSec">
                <b><a href="http://pq.b5z.net/i/u/10103480/f/Membership_Directory.pdf">
                Previous Membership Directory </a></b><br />
              </div>
            </div>
          </td>
          <td valign="top" class="esmD" width="50%">
            <div class="esmCol">
              <div align="left" class="esbSec">
                <b><a href="http://pq.b5z.net/i/u/10103480/f/The_Golden_Years-_Year_Book.pdf">
                The Golden Years </a></b><br />
              </div>
              <div align="left" class="esbSec">
                <b><a href="http://pq.b5z.net/i/u/10103480/f/Beta_Chapter_Diamond_Anniversary_Program.pdf">
                Diamond Anniversary Program</a></b><br />
              </div>
              <div align="left" class="esbSec">
                <b><a href="http://pq.b5z.net/i/u/10103480/f/Dedication_Ceremony_Atterberry_Brotherhood_Center.pdf">
                Dedication Program - Atterberry Brotherhood Center</a></b><br />
              </div>
            </div>
          </td></tr>
        </tbody>
      </div>
    )
  }
}

export default About;
