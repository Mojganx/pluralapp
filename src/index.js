import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); //created an instance of our store

render (
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />,
  </Provider>,
  document.getElementById('app')
);
//provider is a higher order component that attaches our store to our react container components
// provider wraps our router components (ur enitre application) so it can be connected to our redux store
