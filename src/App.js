import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './route/Login';
import Home from './route/Home';
import NotFound from './route/exception/Page404';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route component={Login} path="/login" />
            <Route component={Home} path="/" />
            <Route component={NotFound} />
        </Switch>
    )
  }
}

export default App;
