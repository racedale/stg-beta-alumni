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
    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount(){
    this.serverRequest = axios.get("http://racedale.com/blog/wp-json/wp/v2/posts")
      .then((response) => {
        this.setState({
          data: response.data,
          loading: false
        })
      })
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  getChildContext() {
    return {
      loading: this.state.loading,
      data: this.state.data
    };
  }

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
  data: React.PropTypes.array
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
