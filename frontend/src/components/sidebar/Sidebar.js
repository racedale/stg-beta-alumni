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
        <ul className="newsletters">
          <li>
            <a href="http://q.b5z.net/i/u/10103480/f/Newsletter_Final.pdf">Fall 2016 Newsletter</a>
          </li>
          <li>
            <a href="http://q.b5z.net/i/u/10103480/f/Fall__15_Newsletter_1.pdf">Fall '15 Newsletter</a>
          </li>
          <li>
            <a href="http://q.b5z.net/i/u/10103480/f/Beta_NEWSLETTER_2014.pdf">Spring 2014 Newsletter</a>
          </li>
          <li>
            <a href="http://q.b5z.net/i/u/10103480/f/AlumniNewsletterJan14.pdf">January 2014 Newsletter</a>
          </li>
          <li>
            <a href="http://q.b5z.net/i/u/10103480/f/Alumni_Winter_Newsletter_Dec2012.pdf">Winter 2012 Newsletter</a>
          </li>
          <li>
            <a href="http://q.b5z.net/i/u/10103480/f/ALUMNI_NEWS_LETTER.pdf">Fall 2012 Newsletter</a>
          </li>
        </ul>
      </aside>
    )
  }
}

export default Sidebar;
