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
    // let sections = null;
    // sections = this.state.sections.map( (section) => {
    //   return (displaySection(section))
    // });

    return  (
      <div className='row' style={{marginTop: '50px'}}>
        <div className='col-md-6'>
            <h2>HROS Payroll Instance Viewer</h2>
            <p>This is a small web application to help HR Open Standards Payroll 
              Workgroup members to view the schema and to test sample instances 
              against the schema.
            </p>

        </div>

        
        
        
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
