import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './route/Login';
import Home from './route/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Home} path="/" />
      </Switch>
    );
  }
}

export default App;
