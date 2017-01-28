import React from 'react';
import base from '../../base';

import Sidebar from '../Sidebar'

import './about.css';

class About extends React.Component {
  constructor(props, context) {
    super(props, context);
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

  render() {
    return (
      <div className="about">
        <div className="app-header">
          <h2>{this.state.about.title}</h2>
          <p>
            The Beta Alumni Association of Sigma Tau Gamma at Truman State University has a rich history.
            The links below will give you some insight into the organization's past.
            These may take a minute to download after you click on the link.
          </p>
        </div>
        <tbody><tr>
          <td width="50%">
            <div>
              <div>
                <b><a href="http://pq.b5z.net/i/u/10103480/f/Diamond_Anneversary_Celebration.pdf">
                75th Anniversary Celebration</a></b><br />
                <p>
                  Documents and articles from the 75th Anniversary Celebration in July 1996.
                </p>
              </div>
              <div>
                <b><a href="http://pq.b5z.net/i/u/10103480/f/Membership_Directory.pdf">
                Previous Membership Directory </a></b><br />
                <p>
                  This Membership Directory is by no means up to date. It is a blast from the past and also includes a history of the chapter through the early '80's. A new membership directory is in the works!
                </p>
              </div>
            </div>
          </td>
          <td width="50%">
            <div>
              <div>
                <b><a href="http://pq.b5z.net/i/u/10103480/f/The_Golden_Years-_Year_Book.pdf">
                The Golden Years </a></b><br />
                <p>
                  The Golden Years includes a written history of Beta Chapter of Sigma Tau Gamma from 1921 to 1971.
                </p>
              </div>
              <div>
                <b><a href="http://pq.b5z.net/i/u/10103480/f/Beta_Chapter_Diamond_Anniversary_Program.pdf">
                Diamond Anniversary Program</a></b><br />
                <p>
                  This file is the Diamond Anniversary Program.
                </p>
              </div>
              <div>
                <b><a href="http://pq.b5z.net/i/u/10103480/f/Dedication_Ceremony_Atterberry_Brotherhood_Center.pdf">
                Dedication Program - Atterberry Brotherhood Center</a></b><br />
                <p>
                  This file contains the Dedication Program for the Atterberry Brotherhood Center.
                </p>
              </div>
            </div>
          </td></tr>
        </tbody>
        <aside>
          <Sidebar />
        </aside>
      </div>
    )
  }
}

export default About;
