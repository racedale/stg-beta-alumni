import React from 'react';
import { Link } from 'react-router'

import './footer.css';

const Footer = (props) => {
  return(
    <footer>
      <ul className="footer-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/recent-years">Recent Years</Link></li>
        <li><Link to="/alumni">Alumni</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div>
        <strong>Sigma Tau Gamma - Beta Alumni</strong><br />
        P.O. Box 686<br />
        Kirksville, MO 63501<br />
        Phone: 913-909-7917<br />
        Email: <a href="mailto:race.dale@gmail.com">race.dale@gmail.com</a>
      </div>
    </footer>
  )
}

export default Footer
