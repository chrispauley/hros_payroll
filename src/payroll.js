import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PayrollPage from './pages/Payroll';
import Nav from './pages/Nav'
import Footer from './pages/Footer'

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
ReactDOM.render (<PayrollPage />, document.querySelector('main'));
