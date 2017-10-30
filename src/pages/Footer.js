import React from 'react';
//eslint-disable-next-line
import styles from './footer.css';


const Footer = (props) => (
  <footer className='container footer'>
    <div className="row">
      <div className="col-md-4">
        <h3 className='text-muted'>{props.columnOne.heading}</h3>
      </div>
      <div className="col-md-4">
        <h3 className='text-muted'>{props.columnTwo.heading}</h3>
      </div>
      <div className="col-md-4">
        <h3 className='text-muted'>{props.columnTwo.heading}</h3>
      </div>
    </div>
  </footer>
);


export default Footer;
