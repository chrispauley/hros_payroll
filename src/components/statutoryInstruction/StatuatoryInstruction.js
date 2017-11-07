import React, {Component} from 'react';

import shortid from 'shortid';
import IdentifierTypeRow from '../common/IdentifierTypeRow';
// import DeductionAmountRow from './DeductionAmountRow';
// import DeductionGoalRow from './DeductionGoalRow';

class StatuatoryInstruction extends Component {
  constructor(props) {
    super(props);
    console.log('StatuatoryInstruction props', props);
  }

  render() {
    var idRowJsx, alternateIdsJsx = null;
    var { deductionId, code, name, deductionCycleCode, deduction, deductionGoal,
      validFrom, validTo, processingSequence } = this.props;
    idRowJsx = deductionId ? ( <IdentifierTypeRow {...deductionId} /> ): null;


    // paymentJsx = payment ? ( <PaymentAmountRow {...payment} /> ) : null;
    // paymentMethodJsx = paymentMethod ? ( <PaymentMethodRow {...paymentMethod} /> ) : null;

    return (
      <table className='table table-condensed table-bordered'>
        <caption>Statuatory Instruction</caption>
        <tbody>
            <tr>
              <th className='col-xs-1'>Id: </th>
              <td>{idRowJsx}</td>
            </tr>

        </tbody>
      </table>
    );
  }
}

export default StatuatoryInstruction;
