import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import axios from 'axios';

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
    // this.serverRequest = this.serverRequest.bind(this);
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount(){
    // this.serverRequest;
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  getChildContext() {
    return {
      loading: this.state.loading,
      data: this.state.data,
      serverRequest: this.serverRequest
    };
  }

  // serverRequest(url) {
  //   return axios.get("http://192.168.99.100:8080/wp-json/wp/v2/" + url)
  //     .then((response) => {
  //       // this.setState({
  //       //   // data: response.data,
  //       //   loading: false
  //       // })
  //       return response.data;
  //     })
  // }

  render() {
    let childrenWithProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        data: this.state.data,
        loading: this.state.loading
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
  loading: React.PropTypes.bool,
  data: React.PropTypes.array,
  serverRequest: React.PropTypes.func
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
