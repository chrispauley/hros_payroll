import React, {Component} from 'react';
import PersonNameTypeForm from '../components/personNameType/PersonNameTypeForm';

class Payroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      data: {},
      isLoading: false,
      errors: {}
    }
  }

  render () {
    let {personName} = this.state.data;

    if (personName!==null) {
      personName = <PersonNameTypeForm {...this.state.data}/>
    }

    return (
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
        <hr/>
        {personName}
      </div>

    </div>
    );
  }
}

export default Payroll;
