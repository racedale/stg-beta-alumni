import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// import axios from 'axios';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './index.css';
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar'
import NotFound from './components/NotFound';
import About from './components/About';
// import Loading from './components/loading/Loading';
// import data from './data/data';
import base from './base';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue800,
  },
  appBar: {
    height: 50,
  },
});

class Root extends React.Component {
  constructor() {
    super();
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`/user`,
      {
        context: this,
        state: 'user'
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  renderLogin() {
    return (
      <button onClick={() => this.authenticate('facebook')}>Login</button>
    )
  }

  authenticate(provider) {
    console.log(`trying to login with ${provider}`)
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(error, authData) {
    console.log(authData)
    if(error) {
      console.error(error)
      return;
    }

    this.setState({
      user: {
        displayName: authData.user.displayName,
        email: authData.user.email,
        avatar: authData.user.providerData[0].photoURL
      }
    })
  }

  logout() {
    base.unauth();
    this.setState({
      user: null
    })
    console.log("logged out")
  }

  getChildContext() {
    return {
      user: this.state.user
    };
  }

  render() {
    let childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        // user: this.state.user
      })
    })

    return (
      <div>
        <NavBar />
        <main className="content">
          {childrenWithProps}
          <button onClick={() => this.authenticate('facebook')}>Login</button>
          <button onClick={this.logout}>Log out</button>
        </main>
        {/* {this.renderLogin} */}
      </div>
    )
  }
}

Root.childContextTypes = {
  user: React.PropTypes.object
}

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="about" component={About}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
