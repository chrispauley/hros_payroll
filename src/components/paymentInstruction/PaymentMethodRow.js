import React, {Component} from 'react';

class PaymentMethodRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { code, payrollDepositAccount } = this.props;
    var { accountId, bankRoutingId, description, nameOnAccount, type } = payrollDepositAccount;

    return (
      <table className='table-bordered'>
        <thead>
          <tr>
            { code ?  (<th className='col-xs-1'>code</th>) : null }
            { type ?  (<th className='col-xs-1'>type</th>) : null }
            { accountId ?  (<th className='col-xs-1'>accountId</th>) : null }
            { bankRoutingId ? (<th className='col-xs-1'>bankRoutingId</th>) : null }
            { nameOnAccount ?  (<th className='col-xs-2'>nameOnAccount</th>) : null }
            { description ?  (<th className='col-xs-4'>description</th>) : null }
          </tr>
        </thead>
        <tbody>
          <tr>
            { code ? ( <td>{code}</td> ) : null }
            { type ? ( <td>{type}</td> ) : null }
            { accountId ?  (<td>{accountId}</td>) : null }
            { bankRoutingId ? (<td>{bankRoutingId}</td>) : null }
            { nameOnAccount ? ( <td>{nameOnAccount}</td> ) : null }
            { description ? ( <td>{description}</td> ) : null }
          </tr>
        </tbody>
      </table>
    );
  }
}


export default PaymentMethodRow;
