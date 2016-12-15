import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const createStoreWithMiddleware = applyMiddleware()(createStore);
const loggerMiddlware = createLogger()
let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware, loggerMiddlware)
))
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="resources" component={requireAuth(Resources)}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('.container'));
