import React, {Component} from 'react';
import IdentifierTypeRow from '../common/IdentifierTypeRow';
import PaymentAmountRow from './PaymentAmountRow';
import PaymentMethodRow from './PaymentMethodRow';

class PaymentInstruction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var idRowJsx, paymentJsx, paymentMethodJsx = null;
    var { id, payment, paymentMethod, processingSequence } = this.props;
    idRowJsx = id ? ( <IdentifierTypeRow {...id} /> ): null;
    paymentJsx = payment ? ( <PaymentAmountRow {...payment} /> ) : null;

    paymentMethodJsx = paymentMethod ? ( <PaymentMethodRow {...paymentMethod} /> ) : null;
    return (
      <table className='table table-condensed table-bordered'>
        <caption>PaymentInstruction</caption>
        <tbody>
            <tr>
              <th className='col-xs-1'>Id: </th><td>{idRowJsx}</td>
            </tr>
            <tr>
              <th className='col-xs-1'>Amount: </th><td>{paymentJsx}</td>
            </tr>
            <tr>
              <th className='col-xs-1'>Method: </th><td>{paymentMethodJsx}</td>
            </tr>
        </tbody>
      </table>
    );
  }
}

export default PaymentInstruction;
