import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './route/Login';
import Layout from './route/Layout';
import NotFound from './route/exception/Page404';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route component={NotFound} path="/404" />
        <Route component={Layout} path="/" />
      </Switch>
    );
  }
}

export default App;
