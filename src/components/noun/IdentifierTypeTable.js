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
    var { caption } = this.props;

    return (
      <div className='identifierTypeTable'>
        <table className='table'>
          <caption>{caption && caption}</caption>
          <thead>
            <tr>
              <th>SchemeId</th>
              <th>Value</th>
              <th>SchemeLink</th>
              <th>SchemeAgencyId</th>
              <th>agencyUri</th>
              <th>schemeVersionId</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{schemeId && schemeId}</td>
              <td>{value && value}</td>
              <td>{schemeLink && schemeLink}</td>
              <td>{schemeAgencyId && schemeAgencyId}</td>
              <td>{agencyUri && agencyUri}</td>
              <td>{schemeVersionId && schemeVersionId}</td>
            </tr>
            <tr><th>Description:</th><td colSpan='5'>{description && description}</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default IdentifierTypeTable;
