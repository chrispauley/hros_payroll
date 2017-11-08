import React from 'react';
// import IdentifierTable from '../../noun/IdentifierTypeTable';

class HireTable extends React.Component {
  constructor(props) {
    super(props);
    // console.log('HireTable', props);
  }

  render() {
    var {typeHire, hireDate, acquisitionDate, adjustedHireDate, dutyEntryDate, originalHireDate, serviceStartDates} = this.props;
    var serviceStartDatesJsx = null;
    if (serviceStartDates) {
      serviceStartDatesJsx = serviceStartDates.map( (item, i) => {
        return (<li key={i}>{item}</li>)
      });
    }

    return (
      <table className='table'>
        <caption>Hire</caption>
          <thead>
              <tr>
                <th>typeHire</th>
                <th>hireDate</th>
                <th>acquisitionDate</th>
                <th>adjustedHireDate</th>
                <th>dutyEntryDate</th>
                <th>originalHireDate</th>
                <th>serviceStartDates</th>
              </tr>
          </thead>
        <tbody>
          <tr>
            <td>{ typeHire ? ( <span>{typeHire}</span>) : null }</td>
            <td>{hireDate ? ( <span>{hireDate}</span>) : null}</td>
            <td>{acquisitionDate ? ( <span>{acquisitionDate}</span>) : null}</td>
            <td>{adjustedHireDate ? ( <span>{adjustedHireDate}</span>) : null}</td>
            <td>{dutyEntryDate ? ( <span>{dutyEntryDate}</span>) : null}</td>
            <td>{originalHireDate ? ( <span>{originalHireDate}</span>) : null}</td>
            <td>{serviceStartDates ? (<ul>{serviceStartDatesJsx}</ul>) : ' '}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default HireTable;
