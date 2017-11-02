import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './pages/Nav'
import Home from './pages/Home'
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
ReactDOM.render (<Home />, document.querySelector('main'));