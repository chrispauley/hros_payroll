import React from 'react';
// import IdentifierTable from '../../noun/IdentifierTypeTable';

class TerminationTable extends React.Component {
  constructor(props) {
    super(props);
    console.log('TerminationTable', props);
  }

  render() {
    var {reasonCode, terminationDate, lastWorkedDate, lastPaidDate,
      terminationPaymentInformation } = this.props;
    // var reasonCodeJsx= null;

    return (
      <table className='table'>
        <caption>Termination</caption>
          <thead>
              <tr>
                <th>reasonCode</th>
                <th>terminationDate</th>
                <th>lastWorkedDate</th>
                <th>terminationPaymentInformation</th>
              </tr>
          </thead>
        <tbody>
          <tr>
            <td>{ reasonCode ? ( <b>{reasonCode.value}</b>) : null }</td>
            <td>{terminationDate ? (<span>{terminationDate}</span>) : ' '}</td>
            <td>{lastWorkedDate ? (<span>{lastWorkedDate}</span>) : ' '}</td>
            <td>{lastPaidDate ? (<span>{lastPaidDate}</span>) : ' '}</td>
            <td>{terminationPaymentInformation ? (<span>{terminationPaymentInformation}</span>) : ' '}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TerminationTable;
