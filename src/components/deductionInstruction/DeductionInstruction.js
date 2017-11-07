import React, {Component} from 'react';

import shortid from 'shortid';
import IdentifierTypeRow from '../common/IdentifierTypeRow';
import DeductionAmountRow from './DeductionAmountRow';
import DeductionGoalRow from './DeductionGoalRow';

class DeductionInstruction extends Component {
  constructor(props) {
    super(props);
    // console.log('DeductionInstruction props', props);
  }

  render() {
    var idRowJsx, alternateIdsJsx = null;
    var { deductionId, code, name, deductionCycleCode, deduction, deductionGoal,
      validFrom, validTo, processingSequence } = this.props;
    idRowJsx = deductionId ? ( <IdentifierTypeRow {...deductionId} /> ): null;



    return (
      <table className='table table-condensed table-bordered'>
        <caption>Deduction Instruction</caption>
        <tbody>
            <tr>
              <th className='col-xs-1'>Id: </th>
              <td>{idRowJsx}</td>
            </tr>
            <tr>
              <th className='col-xs-1'>Code: </th><td>{code}</td>
            </tr>
            <tr>
              <th className='col-xs-1'>name: </th><td>{name}</td>
            </tr>
            <tr>
              <th className='col-xs-1'>deductionCycleCode: </th><td>{deductionCycleCode}</td>
            </tr>
            <tr>
              <th className='col-xs-1'>Effective Dates: </th>
              <td><b>ValidFrom: </b>{validFrom} <b>ValidTo: </b>{validTo} </td>
            </tr>
            <tr>
              <th className='col-xs-1'>Deduction Amount: </th>
              <td><DeductionAmountRow {...deduction} /></td>
            </tr>
            <tr>
              <th className='col-xs-1'>Deduction Goal: </th>
              <td><DeductionGoalRow {...deductionGoal} /></td>
            </tr>
        </tbody>
      </table>
    );
  }
}

export default DeductionInstruction;
