import React from 'react';
// import IdentifierTable from '../../noun/IdentifierTypeTable';

class ContractTable extends React.Component {
  constructor(props) {
    super(props);
    // console.log('ContractTable', props);
  }

  render() {
    var {contractNumber, contractStartDate, contractEndDate, workRelationShipType, addendum} = this.props;
    var contractJsx, addendumJsx = null;
    if (addendum) {
      addendumJsx = addendum.map( (item, i) => {
        return (<li key={i}>{item}</li>)
      });
    }

    return (
      <table className='table'>
        <caption>Contract</caption>
          <thead>
              <tr>
                <th>contractNumber</th>
                <th>contractStartDate</th>
                <th>contractEndDate</th>
                <th>workRelationShipType</th>
                <th>addendum</th>
              </tr>
          </thead>
        <tbody>
          <tr>
            <td>{ contractNumber ? ( <b>{contractNumber.value}</b>) : null }</td>
            <td>{contractStartDate}</td>
            <td>{contractEndDate}</td>
            <td>{workRelationShipType}</td>
            <td>{addendum ? (<ul>{addendumJsx}</ul>) : ' '}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default ContractTable;
