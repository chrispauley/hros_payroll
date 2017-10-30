import React, {Component} from 'react';
// import { Form, Button } from 'semantic-ui-react';

const Home = () => (
  <div className='row'>
    <div className='col-md-12 col-sm-6'>
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h2>Payroll Processing Instructions</h2>
        </div>
        <div className='panel-body'>
          <p>The work group has defined the following Instruction Types</p>
          <ul>
            <li>WorkRelationshipLifecyle</li>
            <li>Payment Intstruction</li>
            <li>Deduction Instruction Type</li>
            <li>Statuatory Instruction Type</li>
          </ul>

        </div>
      </div>
    </div>

  </div>
)

export default Home;
