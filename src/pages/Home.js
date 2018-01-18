import React, {Component} from 'react';
import shortid from 'shortid';

import homePage from '../config/homePage.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: homePage
    }
  }

  render() {
    let sections = null;
    sections = this.state.sections.map( (section) => {
      return (displaySection(section))
    });

    return  (
      <div className='row' style={{marginTop: '50px'}}>
        <div className='col-md-12'>
            <h2>HROS Payroll Instance Viewer - home page </h2>
        </div>

        { sections && ( <div> {sections} </div>) }
        
      </div>
    )
  }
}

function displaySection (data) {
  return (
    <div id={data.id} key={data.id} className='row'>
      <div className='col-md-12'>
        <h3>{data.heading}</h3>
        <div className='panel'>{data.content}</div>
      </div>
    </div>
  );
}

export default Home
