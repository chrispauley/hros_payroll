import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from "./config/configureStore";

import Nav from './pages/Nav'
import Footer from './pages/Footer'
import ValidateDataPage from './pages/ValidateDataPage'

const store = configureStore();

const jwtPayload = {"name": "Chris Pauley"};
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

ReactDOM.render (<Nav name={jwtPayload.name}/>, document.querySelector('#top-nav'));
ReactDOM.render (<Footer {...footerProps}/>, document.querySelector('#footer'));
ReactDOM.render (
  <Provider store={store}>
    <ValidateDataPage />
  </Provider>, document.querySelector('main'));
