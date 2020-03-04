import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';

function RouterConfig({ history }) {
  
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/main" exact component={MainPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
