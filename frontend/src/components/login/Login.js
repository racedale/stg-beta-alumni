import React from 'react';
import './Login.css';
import base from '../../base';

class Login extends React.Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  renderLogin() {
    return (
      <div>
        <button className="facebook" onClick={() => this.authenticate('facebook')}>Facebook Login</button>
        <button className="google" onClick={() => this.authenticate('google')}>Google Login</button>
        <button className="logout" onClick={this.props.logout}>Log out</button>
      </div>
    )
  }

  authenticate(provider) {
    base.authWithOAuthPopup(provider, this.props.authHandler);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.renderLogin()}
      </div>
    );
  }
}

Login.childContextTypes = {
  user: React.PropTypes.object
}

export default Login;
