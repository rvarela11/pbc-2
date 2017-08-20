import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AlumniHomePage from './components/AlumniHomePage';
import CompanyHomePage from './components/CompanyHomePage';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AlumniHomePage} />
        <Route exact path="/company" component={CompanyHomePage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
