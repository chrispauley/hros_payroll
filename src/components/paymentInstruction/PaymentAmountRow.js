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
             { paymentType ?  (<th className='col-xs-1'>paymentType</th>) : null }
             { value ?  (<th className='col-xs-1'>Amount</th>) : null }
            { remainingBalanceIndicator ? (<th className='col-xs-1'>Remaining Balance</th>) : null }
          </tr>
        </thead>
        <tbody>
          <tr>
            {paymentType ? ( <td>{paymentType}</td> ) : null }
            { value ?  (<td>{value} {currency}</td>) : null }
            { remainingBalanceIndicator ? (<td>{remainingBalanceIndicator}</td>) : null }
          </tr>
        </tbody>
      </table>
    );
  }
}


export default PaymentAmountRow;
