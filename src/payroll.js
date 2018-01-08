import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from "./config/configureStore";

import PayrollPage from './pages/PayrollPage';
import Nav from './pages/Nav'
import Footer from './pages/Footer'
// loadStore is in configureStore.js
import {loadState, saveState} from './actions/sessionActions';

const jwtPayload = {"name": "Chris Pauley"};
const store = configureStore();

const footerProps = {
  columnOne: {
    heading: "Footer ColumnOne"
  },
  columnTwo: {
    heading: "Footer ColumnTwo"
  },
  columnThree: {
    heading: "Footer ColumnThree"
  }
}

store.subscribe(() =>{
  saveState({
    sessionReducer: store.getState().sessionReducer
  })
});

ReactDOM.render (<Nav name={jwtPayload.name}/>, document.querySelector('#top-nav'));
ReactDOM.render (<Footer {...footerProps}/>, document.querySelector('#footer'));
ReactDOM.render (
  <Provider store={store}>
    <PayrollPage />
  </Provider>, document.querySelector('main'));
