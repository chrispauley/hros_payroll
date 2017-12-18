import React, {Component} from 'react';

class PaymentAmountRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { paymentType, amount, paymentMethod, remainingBalanceIndicator } = this.props;
    var { value, currency } = amount;

    return (
      <table>
        <thead>
          <tr>
             { paymentType &&  (<th className='col-xs-1'>paymentType</th>) }
             { value &&  (<th className='col-xs-1'>Amount</th>) }
            { remainingBalanceIndicator && (<th className='col-xs-1'>Remaining Balance</th>) }
          </tr>
        </thead>
        <tbody>
          <tr>
            {paymentType && ( <td>{paymentType}</td> ) }
            { value &&  (<td>{value} {currency}</td>) }
            { remainingBalanceIndicator && (<td>{remainingBalanceIndicator}</td>) }
          </tr>
        </tbody>
      </table>
    );
  }
}


export default PaymentAmountRow;
