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
import About from './components/about/About';
import Login from './components/login/Login';
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
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      user: null
    }
  }

  componentWillMount() {
    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`user`);
    if(localStorageRef) {
      //update state
      this.setState({
        user: JSON.parse(localStorageRef)
      })
    }
  }

  authHandler(error, authData) {
    if(error) {
      console.error(error)
      return;
    }

    this.setState({ user: authData.user })
    localStorage.setItem(`user`, JSON.stringify(authData.user));
  }

  logout() {
    base.unauth();
    localStorage.removeItem(`user`);
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
        authHandler: this.authHandler,
        logout: this.logout
      })
    })

    return (
      <div>
        <NavBar />
        <main className="content">
          {childrenWithProps}
        </main>
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
        <Route path="login" component={Login}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
