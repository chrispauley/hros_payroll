import React, {Component} from 'react';


class PaymentInstruction extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  render() {
    var idRowJsx = null;

    return (
      <table className='table table-condensed table-bordered'>
        <caption>PaymentInstruction</caption>
        <thead>
          <tr>
            <th className='col-xs-1'>id</th>
            <th className='col-xs-1'>payment</th>
            <th className='col-xs-1'>paymentMethod</th>
            <th className='col-xs-3'>sequence</th>
          </tr>
        </thead>
        <tbody>
            <tr><td>{this.props.processingSequence}</td></tr>

        </tbody>
      </table>
    );
  }
}

export default PaymentInstruction;
