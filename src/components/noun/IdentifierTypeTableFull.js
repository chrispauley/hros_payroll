import React, {Component} from 'react';

class IdentifierTypeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props
    }
  }
  render() {
    var {schemeId, value, schemeVersionId, schemeAgencyId, description, schemeLink, agencyUri } = this.props;

    return (
      <div className='identifierTypeTable'>
        <table className='table'>
          <thead>
            <tr>
              <th>SchemeId</th>
              <th>Value</th>
              <th>SchemeLink</th>
              <th>SchemeAgencyId</th>
              <th>agencyUri</th>
              <th>schemeVersionId</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{schemeId}</td>
              <td>{value}</td>
              <td>{schemeLink}</td>
              <td>{schemeAgencyId}</td>
              <td>{agencyUri}</td>
              <td>{schemeVersionId}</td>
              <td>{description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default IdentifierTypeTable;
