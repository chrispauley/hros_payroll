import React, {Component} from 'react';
// import shortid from 'shortid';

class WorkLocationTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
    console.log('WorkLocationTable', props);
  }

  render() {
    const { id, code, name,
      fieldRemoteWorkerIndicator, virtualWorkerIndicator,
      typeCode, description, address } = this.props;
    return (
      <div>
        <table className='table table-condensed table-bordered'>
          <thead>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>code</th>
            <th>typeCode</th>
            <th>Field Remote Worker</th>
            <th>Virtual Worker</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{name}</td>
              <td>{code}</td>
              <td>{typeCode}</td>
              <td className='text-center'>{fieldRemoteWorkerIndicator ? 'Y' : 'N'}</td>
              <td className='text-center'>{virtualWorkerIndicator ? 'Y' : 'N'}</td>
            </tr>
            <tr>
              <th>Description: </th>
              <td>{description.value} </td>
            </tr>
            <tr></tr>
            <tr>
              <td className='col-sm-12'>
                <AddressTable {...address} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}

export default WorkLocationTable;

function AddressTable(props) {
  const {line, extendedLines, city, countrySubdivisions, postalCode } = props;

  return (
    <table>
      <caption>Address</caption>

      <tbody>
        <tr><th className='col-md-6'>line</th><td>{line}</td></tr>
        <tr><th>extendedLines</th><td>[extendedLines goes here]</td></tr>
        <tr><th>City</th><td>{city}</td></tr>
        {/* <tr><th></th><td>{countrySubdivisions[0].value}</td></tr> */}
        <tr><th>PostalCode</th><td>{postalCode}</td></tr>
      </tbody>
    </table>
  )
}
